# 🚀 INSTRUCCIONES DE SETUP LOCAL - CHATBOT

**Guía paso a paso para preparar tu proyecto localmente antes de subir a GitHub y Netlify**

---

## 📁 PASO 1: Crear Estructura de Carpetas

Crea esta estructura en tu computadora:

```
chatbot-contratacion-publica/
│
├── chatbot-ia.html
├── package.json
├── netlify.toml
├── README.md
├── .gitignore
│
└── netlify/
    └── functions/
        └── chat.js
```

### Crear carpetas en Windows:
```
Clic derecho → Nueva carpeta → "chatbot-contratacion-publica"
Dentro de esa: Nueva carpeta → "netlify"
Dentro de netlify: Nueva carpeta → "functions"
```

### Crear carpetas en Mac/Linux:
```bash
mkdir -p chatbot-contratacion-publica/netlify/functions
cd chatbot-contratacion-publica
```

---

## 📄 PASO 2: Agregar los Archivos

### Archivos a copiar a la raíz:
1. **chatbot-ia.html** ← Interfaz del chatbot
2. **package.json** ← Dependencias npm
3. **netlify.toml** ← Configuración Netlify
4. **.gitignore** ← Archivos a ignorar en Git
5. **README.md** ← Documentación

### Archivo especial:
- **netlify-functions-chat.js** ← Cópialo como **chat.js** dentro de `netlify/functions/`

Después de copiar, tu estructura debe verse así:

```
chatbot-contratacion-publica/
├── chatbot-ia.html
├── package.json
├── netlify.toml
├── .gitignore
├── README.md
└── netlify/
    └── functions/
        └── chat.js  ← Aquí va (NO en la raíz)
```

---

## 🔧 PASO 3: Verificar los Archivos

Abre cada archivo con tu editor de código y verifica:

### ✅ chatbot-ia.html
- Debe tener `<!DOCTYPE html>`
- Debe tener estilos CSS
- Debe tener JavaScript funcional
- Línea importante: `fetch('/.netlify/functions/chat', ...)`

### ✅ package.json
- Debe tener: `"@anthropic-ai/sdk": "^0.9.0"`
- Debe tener scripts

### ✅ netlify.toml
- Debe indicar: `functions = "netlify/functions"`
- Debe tener los redirects

### ✅ netlify/functions/chat.js
- Debe tener: `const Anthropic = require("@anthropic-ai/sdk");`
- Debe usar: `process.env.CLAUDE_API_KEY`
- Debe tener el prompt del sistema

### ✅ .gitignore
- Debe contener: `node_modules/`
- Debe contener: `.env`

---

## 📦 PASO 4: Instalar Dependencias Localmente (Opcional)

Si quieres probar localmente con Netlify Dev:

```bash
# 1. Ve a la carpeta del proyecto
cd chatbot-contratacion-publica

# 2. Instala npm (si no lo tienes)
# Windows: Descargar de https://nodejs.org
# Mac: brew install node
# Linux: sudo apt-get install nodejs npm

# 3. Instala las dependencias
npm install

# 4. Instala Netlify CLI (necesario para probar)
npm install -g netlify-cli

# 5. Para probar localmente
netlify dev
```

Después podrás acceder a: `http://localhost:8888`

---

## 🔑 PASO 5: Obtener API Key de Claude

### ⚠️ ANTES de subir a GitHub:

1. Ve a: https://console.anthropic.com
2. Inicia sesión
3. Ve a **"API Keys"**
4. Haz clic en **"Create Key"**
5. **Copia la clave**: `sk-ant-v1-xxxxxxx...`
6. **NO la guardes en ningún archivo** (la agregarás en Netlify después)

---

## 🐙 PASO 6: Crear Repositorio en GitHub

### En GitHub.com:

1. Haz clic en **"+"** (esquina superior derecha)
2. Selecciona **"New repository"**
3. Completa:
   - **Repository name**: `chatbot-contratacion-publica`
   - **Description**: "Chatbot inteligente sobre contratación pública colombiana"
   - Selecciona: **Public**
   - Marca: **Add .gitignore** → **Node** (opcional, ya tienes uno)
   - Marca: **Add a README file** (opcional, ya tienes uno)
4. Haz clic en **"Create repository"**

### Copiar URL de tu repositorio:
- Busca el botón verde **"Code"**
- Copia la URL HTTPS (ej: `https://github.com/TU_USUARIO/chatbot-contratacion-publica.git`)

---

## 💻 PASO 7: Subir a GitHub (desde Terminal/CMD)

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# 1. Inicializar Git (si no está ya)
git init

# 2. Agregar remote origin
git remote add origin https://github.com/TU_USUARIO/chatbot-contratacion-publica.git

# 3. Agregar todos los archivos
git add .

# 4. Crear primer commit
git commit -m "Initial commit: Chatbot v3.0 con Claude AI"

# 5. Subir a GitHub (puede pedir credenciales)
git push -u origin main

# Si hay error "main" vs "master", usa:
git push -u origin main  (o git push -u origin master)
```

Después de esto, verifica en GitHub que tus archivos estén allá.

---

## 🚀 PASO 8: Deploy en Netlify

### En Netlify.com:

1. Crea cuenta si no tienes
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **"GitHub"**
4. Busca tu repositorio: `chatbot-contratacion-publica`
5. Netlify detectará automáticamente:
   - **Build command**: (vacío, Netlify sabe)
   - **Functions directory**: `netlify/functions` ✅
   - **Publish directory**: `.` (la raíz)
6. Haz clic en **"Deploy site"**

Espera a que termine (2-3 minutos).

---

## 🔐 PASO 9: Configurar API Key en Netlify

### En Netlify (después del deploy):

1. Ve a tu sitio en Netlify
2. Haz clic en **"Site settings"**
3. En el menú izquierdo: **"Build & deploy"** → **"Environment"**
4. Haz clic en **"Add new variable"**
   - **Name**: `CLAUDE_API_KEY`
   - **Value**: Pega tu clave de Anthropic (completa, sin espacios)
5. Haz clic en **"Save"**

### Hacer Redeploy:

1. Ve a la pestaña **"Deploys"**
2. Busca el último deploy
3. En la esquina superior, haz clic en **"Trigger deploy"**
4. Selecciona **"Deploy site"**

Espera a que llegue al 100% ✅

---

## ✅ VERIFICACIÓN FINAL

Después del deploy, verifica:

```
✅ ¿Puedo acceder a la URL del chatbot?
✅ ¿Aparece la interfaz correctamente?
✅ ¿Puedo escribir una pregunta?
✅ ¿Recibo respuesta de Claude?
✅ ¿Las animaciones funcionan?
```

Si algo falla, revisa:
- Logs en Netlify (Functions tab)
- Que la API Key esté bien configurada
- Que todos los archivos estén en su lugar

---

## 📝 Checklist Final

- [ ] Estructura de carpetas creada
- [ ] Todos los archivos copiados
- [ ] .gitignore configurado
- [ ] API Key de Claude obtenida
- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos a GitHub
- [ ] Deploy en Netlify realizado
- [ ] API Key agregada a Netlify
- [ ] Redeploy ejecutado
- [ ] Chatbot funcionando ✨

---

## 🆘 Problemas Comunes

### "404 Not Found" al subir archivos
- Verifica que los archivos realmente estén en la carpeta correcta
- En Windows, asegúrate de que el archivo se llamé `chat.js` (no `.txt`)

### "API key no configurada"
- Verifica que agregaste la variable en Netlify
- Asegúrate de que el nombre exacto es: `CLAUDE_API_KEY`
- Haz redeploy después de agregar la variable

### "Cannot find module @anthropic-ai/sdk"
- Ejecuta: `npm install`
- Si usas Netlify, debería hacer esto automáticamente

### Página blanca
- Limpia el cache: `Ctrl+Shift+Del`
- Intenta en una ventana privada/incógnita
- Espera a que termine el deploy

---

## 🎯 Próximos Pasos

Una vez que todo esté funcionando:

1. **Prueba exhaustiva**: Haz preguntas variadas
2. **Comparte el URL**: Con amigos para feedback
3. **Monitora el uso**: En Netlify y Anthropic Console
4. **Actualiza el prompt**: Si necesitas mejorar las respuestas

---

**¡Felicidades! Tu chatbot está listo para el mundo.** 🎉

---

**Fecha**: Septiembre 2026  
**Autor**: Kelvin Maker  
**Versión**: 3.0
