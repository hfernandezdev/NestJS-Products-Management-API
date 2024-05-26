# NestJS Gestión de Usuarios y Productos API

![Screenshot](/images/Screenshot.png)

## Descripción general:
- Este proyecto es una API desarrollada con NestJS para gestionar usuarios y productos. Proporciona endpoints para realizar operaciones CRUD en usuarios y productos, así como autenticación mediante JWT (Json Web Token).

## Características principales:
- Implementación de una API RESTful con NestJS.
- Manejo de entidades de Usuarios y Productos con TypeORM.
- Endpoints para realizar operaciones CRUD en Usuarios y Productos.
- Autenticación y autorización mediante JWT.
- Validación de solicitudes mediante DTOs.
- Generación de migraciones para la base de datos con TypeORM.
- Campos created_at y updated_at para seguimiento de tiempo de creación y actualización de registros.
- Autodocumentación de la API con Swagger.

## Tecnologías utilizadas:
- [NestJS](https://nestjs.com/) - Framework de Node.js para construir aplicaciones eficientes, fáciles de mantener y escalables.
- [TypeORM](https://typeorm.io/) - ORM (Object-Relational Mapping) para TypeScript y JavaScript.
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gestión de bases de datos relacional de código abierto.
- [Swagger](https://swagger.io/) - Herramienta para documentar APIs RESTful.
- [JWT](https://jwt.io/) - Estándar abierto para autenticación mediante tokens.

## Requisitos:
- Node.js y npm instalados en el sistema.
- Base de datos relacional instalada (MySQL/PostgreSQL) y en ejecución en el sistema.

## Documentación:
- Puedes acceder a la documentación de la API en [http://localhost:3000/api-docs](http://localhost:3000/api-docs) una vez que la aplicación esté en ejecución.

## Importación en Postman:
- Abre Postman.
- Ve a la pestaña "Import" en la esquina superior izquierda.
- Selecciona la opción "Import File".
- Busca y selecciona el archivo de especificación de OpenAPI descargado.
- Postman importará automáticamente la especificación y generará una nueva colección con todas las solicitudes y rutas definidas.
- [Descargar la colección de Postman](openapi-postman-collection/openapi-postman-collection.json)

## Autor:
- [Humberto Fernández (Github)](https://github.com/hfernandezdev)

## Soporte:

Si tienes algún problema o pregunta, por favor [contacta conmigo](mailto:humbertof44@gmail.com).