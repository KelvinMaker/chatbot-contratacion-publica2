// Función Netlify para manejar requests del chatbot
// Archivo: netlify/functions/chat.js
// Este archivo se debe colocar en la carpeta: netlify/functions/

const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

exports.handler = async (event) => {
  // Solo aceptar POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Método no permitido. Use POST." }),
    };
  }

  try {
    const { mensaje } = JSON.parse(event.body);

    if (!mensaje || mensaje.trim() === "") {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Mensaje vacío. Por favor escribe una pregunta." }),
      };
    }

    // Llamar a Claude con contexto sobre contratación pública
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: `Eres un experto en contratación pública colombiana. Tu rol es responder preguntas sobre procesos de contratación en Colombia de manera clara, precisa y útil.

FUENTES DE INFORMACIÓN:
- Ley 80 de 1993 (Estatuto General de Contratación)
- Ley 1150 de 2007 (Modificaciones a Ley 80)
- SECOP II (Sistema Electrónico para la Contratación Pública)
- TVEC (Tienda Virtual del Estado Colombiano)
- Colombia Compra Eficiente (normativa y procedimientos 2024)

MODALIDADES DE SELECCIÓN que puedes explicar:
1. Licitación Pública - Proceso competitivo abierto
2. Selección Abreviada - Proceso simplificado para ciertos montos
3. Contratación Directa - Sin competencia (casos excepcionales)
4. Mínima Cuantía - Modalidad más simplificada para montos bajos
5. Subasta Inversa - Sistema de pujas a la baja

TEMAS que puedes cubrir:
- Conceptos básicos de contratación pública
- SECOP II: plataforma, registro, participación
- TVEC: compras en tienda virtual
- Requisitos para participar (habilidades contractuales)
- Documentación necesaria
- Procesos y etapas de contratación
- Las 8 etapas de contratación pública
- Modalidades de selección
- Regulación y normativa
- Ejemplos y mejores prácticas

Tu respuesta debe ser:
- Precisa y basada en normativa vigente (2024)
- Clara y fácil de entender para cualquier usuario
- Práctica con ejemplos cuando sea posible
- Honesta si la pregunta es ambigua o está fuera de tu alcance
- Estructurada con puntos cuando sea apropiado

IMPORTANTES:
- Si el usuario pregunta algo muy específico que requiere asesoría legal, sugiere que consulte un abogado
- Si no tienes certeza, sé honesto y sugiere consultar con Colombia Compra Eficiente
- Mantén un tono profesional pero amigable
- En español (Colombia)`,
      messages: [
        {
          role: "user",
          content: mensaje,
        },
      ],
    });

    const respuesta = response.content[0].text;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        respuesta: respuesta,
      }),
    };
  } catch (error) {
    console.error("Error en chat.js:", error);

    // Identificar tipo de error
    let mensaje = "Error procesando tu pregunta. Intenta de nuevo.";
    let statusCode = 500;

    if (error.message.includes("API key") || error.status === 401) {
      mensaje =
        "API key no configurada. Agrega CLAUDE_API_KEY a las variables de entorno de Netlify.";
      statusCode = 401;
    } else if (error.message.includes("ECONNREFUSED")) {
      mensaje = "No se puede conectar con la API de Claude. Intenta más tarde.";
      statusCode = 503;
    } else if (error.message.includes("timeout")) {
      mensaje = "La solicitud tardó demasiado. Intenta con una pregunta más corta.";
      statusCode = 504;
    }

    return {
      statusCode: statusCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: mensaje,
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
    };
  }
};
