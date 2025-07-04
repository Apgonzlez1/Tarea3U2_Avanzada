# Tarea 3 – Formulario de Registro con Validaciones (Node.js + PostgreSQL)

## 📋 Descripción

Este proyecto consiste en una aplicación web para registrar usuarios mediante un formulario que incluye validaciones tanto en el **frontend** como en el **backend**. Los datos validados se almacenan en una base de datos **PostgreSQL**.

La aplicación está dividida en dos partes:

- **Frontend**: formulario HTML con validaciones en JavaScript y estilos CSS.
- **Backend**: servidor Node.js con Express que recibe las solicitudes, valida la información y persiste los datos en PostgreSQL.

---

## 🛠 Tecnologías utilizadas

- Node.js  
- Express  
- PostgreSQL  
- pg (driver de PostgreSQL para Node.js)  
- express-validator  
- HTML, CSS, JavaScript  

---

## 📁 Estructura del proyecto

Tarea3U2_Avanzada/
│
├── backend/
│ ├── controllers/
│ ├── db/
│ ├── models/
│ ├── routes/
│ ├── validators/
│ ├── index.js
│ ├── package.json
│ └── .env (no incluido en el repositorio)
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── script.js
│
└── README.md

---

## 📦 Requisitos previos

- Tener instalado **Node.js** (v14 o superior recomendado)
- Tener instalado y en ejecución **PostgreSQL**
- Cliente para PostgreSQL (como **pgAdmin** o la consola `psql`)

---

## ⚙️ Configuración del proyecto

### 1. Clonar el repositorio


git clone https://github.com/Apgonzlez1/Tarea3U2_Avanzada.git
cd Tarea3U2_Avanzada/backend
2. Instalar dependencias del backend

npm install
3. Configurar variables de entorno
Crear un archivo .env en la carpeta backend con el siguiente contenido (reemplazar con tus datos):


PORT=3000
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=formulario_db
4. Crear base de datos y tabla en PostgreSQL
Ingresar a PostgreSQL y ejecutar:


CREATE DATABASE formulario_db;

\c formulario_db

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  edad INT,
  biografia TEXT,
  rol VARCHAR(50)
);
🚀 Ejecutar la aplicación
Backend
Desde la carpeta backend:


node index.js
El servidor se ejecutará en http://localhost:3000

Frontend
Abrir el archivo frontend/index.html directamente en el navegador (doble clic) o usando una extensión como Live Server de VSCode.

🧪 Uso
Completar el formulario con los datos solicitados.

Las validaciones se aplican antes de enviar y también en el servidor.

En caso de errores, se mostrarán mensajes descriptivos.

Al registrar correctamente, se mostrará una confirmación.

⚠️ Notas
🔐 La contraseña se almacena en texto plano. Se recomienda aplicar hashing (como bcrypt) para uso en producción.

📁 La carpeta node_modules está ignorada por .gitignore.

🛡️ El archivo .env no debe subirse al repositorio para proteger las credenciales.

👩‍💻 Autor
Adriana Pamela González Orellana
Estudiante de Programación Avanzada – 202550


