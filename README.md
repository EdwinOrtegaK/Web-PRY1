# Blog Pokemon

Este proyecto es un sistema de blog donde se pueden crear, ver, editar y borrar posts relacionados con Pokémon. Utiliza una combinación de tecnologías como React, Express, y MariaDB para manejar la autenticación y el almacenamiento de datos. Este proyecto también implementa autenticación JWT para proteger las rutas de la API.

## Características

- Autenticación de usuarios con JWT.
- CRUD de posts sobre Pokémon.
- Almacenamiento de datos en MariaDB.
- Uso de React para la construcción de la interfaz de usuario.

## Tecnologías Utilizadas

- **React**: Para la interfaz de usuario.
- **Express**: Framework de servidor para Node.js.
- **JWT (JSON Web Tokens)**: Para manejar la autenticación.
- **MariaDB**: Como sistema de gestión de base de datos.
- **Node.js**: Entorno de ejecución para el backend.
- **React Router**: Para manejar el enrutamiento en el cliente.

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener Node.js y MariaDB instalados en tu sistema.

## Configuración y Instalación

Clona este repositorio y ejecuta los siguientes comandos:

```bash
git clone [url-del-repositorio]
cd /Web-PRY1/WebPry1
npm install

## Uso

Para ejecutar el servidor, utiliza el siguiente comando:

npm start

Este comando arrancará el servidor en http://localhost:22305/.

## Rutas del API

- GET /api/posts - Obtiene todos los posts.
- POST /api/login - Autentica a los usuarios y genera un token.
- POST /api/posts - Permite a un usuario autenticado añadir un nuevo post.

## Autor

Edwin Ortega Kou - Estudiante de la carrera de CCyTI - EdwinOrtegaK

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para detalles.

## Agradecimientos

Agradecimientos a todos los colaboradores y amigos que apoyaron en el desarrollo de este proyecto.
