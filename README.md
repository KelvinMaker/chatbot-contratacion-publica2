# 🤖 Chatbot IA - Contratación Pública Colombiana

**Versión**: 3.0  
**Estado**: Listo para Deploy  
**Autor**: Kelvin Maker  
**Fecha**: Septiembre 2026  

---

## 📋 Descripción

Chatbot inteligente basado en **Claude AI** que responde preguntas sobre **contratación pública colombiana**. El sistema utiliza una arquitectura **serverless** (sin servidor) desplegada en Netlify con funciones Lambda, integrado directamente con la API de Anthropic.

### ✨ Características

- ✅ **Inteligencia Artificial Avanzada**: Usa Claude 3.5 Sonnet
- ✅ **Sin Servidor**: Hosting gratis en Netlify
- ✅ **Deployment Automático**: Desde GitHub
- ✅ **Interfaz Moderna**: Diseño responsivo y animado
- ✅ **Documentación Oficial**: Basado en fuentes de Colombia Compra Eficiente
- ✅ **Bajo Costo**: Free tier + $5 crédito inicial Claude

---

## 🎯 Público Objetivo

- 📚 Estudiantes de administración y derecho
- 💼 Emprendedores interesados en licitaciones
- 👥 Personas aprendiendo sobre contratación pública
- 🏛️ Profesionales del sector público y privado

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────┐
│        NAVEGADOR DEL USUARIO            │
│    (chatbot-ia.html + CSS + JS)        │
└────────────────┬────────────────────────┘
                 │ Fetch API (POST)
                 ↓
┌─────────────────────────────────────────┐
│    NETLIFY FUNCTIONS (Lambda)           │
│   (netlify/functions/chat.js)          │
│   - Lee CLAUDE_API_KEY (env)            │
│   - Procesa pregunta del usuario        │
│   - Envía a Claude API                  │
│   - Retorna respuesta                   │
└────────────────┬────────────────────────┘
                 │ HTTPS Request + API Key
                 ↓
┌─────────────────────────────────────────┐
│      ANTHROPIC CLAUDE API               │
│  (api.anthropic.com)                   │
│  - Modelo: claude-3-5-sonnet-20241022  │
│  - Procesa solicitud                   │
│  - Genera respuesta IA                 │
└────────────────┬────────────────────────┘
                 │ Respuesta JSON
                 ↓
┌─────────────────────────────────────────┐
│      NETLIFY FUNCTIONS (Lambda)         │
│   - Recibe respuesta de Claude          │
│   - Formatea como JSON                 │
│   - Retorna al navegador               │
└────────────────┬────────────────────────┘
                 │ JSON Response
                 ↓
┌─────────────────────────────────────────┐
│        NAVEGADOR DEL USUARIO            │
│   - Muestra respuesta en chat           │
│   - Usuario ve respuesta                │
└─────────────────────────────────────────┘
```

---

## 📁 Estructura de Archivos

```
chatbot-contratacion-publica/
│
├── 📄 chatbot-ia.html              # Frontend - Interfaz web
│                                    # HTML5 + CSS3 + JavaScript
│
├── 📦 package.json                 # Dependencias npm
│                                    # Define: @anthropic-ai/sdk
│
├── ⚙️ netlify.toml                 # Configuración Netlify
│                                    # Build, functions, redirects
│
├── 📝 README.md                    # Este archivo
│
├── netlify/
│   └── functions/
│       └── 🔌 chat.js              # Backend serverless
│                                    # Conecta con Claude API
│
├── .git/                           # Control de versiones
│
└── .gitignore                      # Archivos a ignorar
```

---

## ⚡ Guía Rápida de Deploy (5 pasos)

### PASO 1: Requisitos Previos

Verifica que tengas:
- [ ] Cuenta en **GitHub** (https://github.com)
- [ ] Cuenta en **Netlify** (https://netlify.com)
- [ ] Cuenta en **Anthropic Console** (https://console.anthropic.com)
- [ ] Git instalado en tu computadora
- [ ] Editor de código (VS Code recomendado)

### PASO 2: Obtener API Key de Claude

1. Ve a https://console.anthropic.com
2. Inicia sesión o crea una cuenta
3. Ve a **"API Keys"** en el menú izquierdo
4. Haz clic en **"Create Key"** (Crear Clave)
5. **Copia la clave completa**: `sk-ant-v1-xxxxxxx...`
6. **Guárdala en un lugar seguro** (la necesitarás después)

⚠️ **IMPORTANTE**: No compartas esta clave públicamente ni la subas a GitHub

### PASO 3: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Completa:
   - **Repository name**: `chatbot-contratacion-publica`
   - **Description**: "Chatbot inteligente sobre contratación pública colombiana"
   - Selecciona: **Public** (público)
   - Marca: **Add a README file**
3. Haz clic en **"Create repository"**

### PASO 4: Subir Archivos del Proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/chatbot-contratacion-publica.git
cd chatbot-contratacion-publica

# 2. Copiar estos archivos a la carpeta:
# - chatbot-ia.html
# - package.json
# - netlify.toml
# - README.md
# Y crear carpeta: netlify/functions/
# Con el archivo: chat.js dentro

# 3. Crear .gitignore
echo "node_modules/" > .gitignore

# 4. Agregar archivos a Git
git add .

# 5. Hacer commit
git commit -m "Initial commit: Chatbot v3.0 con Claude AI"

# 6. Subir a GitHub
git push origin main
```

### PASO 5: Deploy en Netlify

1. Ve a https://netlify.com y inicia sesión
2. Haz clic en **"Add new site"** → **"Connect to Git"**
3. Selecciona **GitHub**
4. Busca y selecciona: `chatbot-contratacion-publica`
5. Haz clic en **"Deploy site"**
6. Espera a que termine el deploy (~2 minutos)

### PASO 6: Configurar API Key en Netlify

1. En dashboard de Netlify, ve a tu sitio
2. Haz clic en **"Site settings"**
3. Ve a **"Build & deploy"** → **"Environment"**
4. Haz clic en **"Add new variable"**
5. Nombre: `CLAUDE_API_KEY`
6. Valor: Pega tu clave de Anthropic (completa)
7. Haz clic en **"Save"**

### PASO 7: Hacer Redeploy

1. En Netlify, ve a **"Deploys"**
2. Haz clic en el último deploy
3. En la esquina superior derecha, busca **"Trigger deploy"**
4. Selecciona **"Deploy site"**
5. Espera a que llegue al 100% ✅

### PASO 8: ¡Listo! 🎉

Tu chatbot está en línea. La URL estará en el dashboard de Netlify (algo como: `https://chatbot-contratacion-publica.netlify.app`)

---

## 🧪 Probar el Chatbot

Una vez desplegado:

1. Abre la URL en tu navegador
2. Escribe una pregunta de prueba:
   ```
   ¿Qué es SECOP II?
   ```
3. Presiona Enter o haz clic en "Enviar"
4. Deberías recibir una respuesta en 1-3 segundos

### Preguntas de Prueba

- ¿Cuál es la diferencia entre mínima cuantía y licitación?
- ¿Cómo me registro como proveedor?
- ¿Qué es TVEC?
- ¿Cuáles son los requisitos hablilitantes?
- ¿Cuál es el proceso de contratación pública en 8 etapas?

---

## 🔧 Solucionar Problemas

### Error 401 (Unauthorized)
**Problema**: "API key no configurada"
**Solución**:
- Verifica que copiaste la API Key correctamente
- Asegúrate de que está en Netlify (variables de entorno)
- Intenta generar una nueva key en console.anthropic.com
- Haz redeploy en Netlify

### Error 500 (Internal Server Error)
**Problema**: "Error procesando tu pregunta"
**Solución**:
- Revisa los logs en Netlify (Functions)
- Verifica que la variable CLAUDE_API_KEY esté configurada
- Intenta hacer un nuevo redeploy
- Reinicia el navegador (Ctrl+Shift+Del para limpiar cache)

### No carga la página
**Problema**: Página blanca o timeout
**Solución**:
- Espera a que termine el deploy (puede tomar 2-3 minutos)
- Abre la página en una ventana incógnita
- Verifica tu conexión a internet
- Intenta acceder a otro sitio para confirmar que tienes internet

### Respuesta lenta o vacía
**Problema**: Chatbot tarda mucho o no responde
**Solución**:
- Verifica tu conexión a internet
- La primera respuesta puede tardar más
- Si falla constantemente, revisa que el crédito de Claude no se haya agotado
- Ve a console.anthropic.com para verificar el uso

---

## 💰 Costos

### Netlify (Hosting)
| Plan | Límite | Costo |
|------|--------|-------|
| **Free** (Actual) | 125,000 invocaciones/mes | **$0** |
| Pro | Ilimitadas | $19/mes |

**Para este chatbot**: El plan Free es más que suficiente.

### Claude API (Procesamiento)
| Modelo | Costo |
|--------|-------|
| claude-3-5-sonnet | ~$0.003 por pregunta |

**Crédito Inicial**: $5 USD (gratis)  
**Alcance**: ~1,600 preguntas  
**Estimado Mensual** (100 preguntas/día): $9 USD

---

## 🔒 Seguridad

### ✅ Lo que está Protegido
- API Key en variables de entorno (cifrada en Netlify)
- No visible en el navegador
- No expuesta en el código
- Comunicación HTTPS

### ⚠️ Lo que NO debes hacer
- ❌ Poner API Key en HTML o JavaScript público
- ❌ Compartir la API Key en GitHub público
- ❌ Mostrar la API Key en URLs
- ❌ Hacer logs de la API Key

---

## 📊 Monitoreo

### Ver Uso en Netlify
1. Dashboard → Tu sitio
2. **"Analytics"** o **"Usage"**
3. Ver invocaciones y errores

### Ver Uso de API Claude
1. https://console.anthropic.com
2. **"Usage"** (Uso)
3. Ver tokens consumidos y costo

---

## 🚀 Próximos Pasos

### Mejoras Recomendadas

**Corto Plazo** (1-2 semanas):
- [ ] Testing exhaustivo
- [ ] Compartir URL con grupo piloto
- [ ] Recopilar feedback

**Mediano Plazo** (1-2 meses):
- [ ] Agregar rate limiting
- [ ] Analytics básico
- [ ] Optimizar system prompt
- [ ] Agregar FAQ section

**Largo Plazo** (3-6 meses):
- [ ] Autenticación de usuarios
- [ ] Base de datos (histórico de preguntas)
- [ ] Dashboard de administrador
- [ ] Versión en inglés
- [ ] API pública

---

## 📞 Contacto y Soporte

### Recursos Oficiales
- **Anthropic Docs**: https://docs.anthropic.com
- **Netlify Docs**: https://docs.netlify.com
- **Claude Console**: https://console.anthropic.com
- **Colombia Compra**: https://colombiacompra.gov.co

### Comunidades
- Stack Overflow (tag: `claude-ai`)
- GitHub Discussions
- Netlify Community

---

## 📝 Cambios y Actualizaciones

### Versión 3.0 (Septiembre 2026)
- ✅ Claude 3.5 Sonnet integrado
- ✅ Interfaz mejorada con animaciones
- ✅ Mejor manejo de errores
- ✅ Documentación completa
- ✅ Ready para producción

---

## 📜 Licencia

MIT License - Libre para usar, modificar y distribuir

---

**¡Gracias por usar el Chatbot de Contratación Pública!** 🎉

*Última actualización: Septiembre 2026*
