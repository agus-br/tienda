# Tienda

## Ambiente de desarrollo

1. **Clonar el repositorio**: Se sugiere tener instalado Git para poder usar su terminal y clonar el repositorio, así como subir tus contribuciones.[Descargar Git](https://git-scm.com/downloads)
2. **Instalar Node.js**: Antes de comenzar a desarrollar, Node.js es una herramienta esencial que debes instalar.
    - Descarga o actualizar Node.js a la versión 23.1.0 desde el siguiente enlace: [Descargar Node.js](https://nodejs.org/en/download)
    - O puedes instalarlo utilizando Chocolatey ejecutando el siguiente comando en tu terminal: `choco install nodejs`.
    - Para instalar Chocolately: [Descargar Chocolately](https://chocolatey.org/install)
3. **Entorno y utilidades**: Se sugiere instalar un editor de código y algunas extensiones para facilitar el proceso de desarrollo:
    - Visual Studio Code: Visual Studio Code es un editor de códido versátil que permite hacer muy fácil el proceso de desarrollo con una herramienta ligera y fácil de utilizar. Puedes desargarlo en el siguiente enlace: [Descargar VSCode](https://code.visualstudio.com/download).
    - Una vez instalado Visual Studio Code se sugiere crear un perfil de configuración para evitar llenar tu entorno con extensiones que usarás muy puntualmente [Tutorial](https://www.youtube.com/watch?v=_2F2Zt-_tUA), después deberías instalar algunas extensiones útiles:
        * ES7 + React/Redux/React-Native snippets (Snippets para agilizar la sintaxis de React)
        * JavaScript (ES6) code snippets (Snippets de JavaScript moderno)
        * Prettier - Code Formater (Para que se vea bonito el código)
        * Thunder Client (Cliente de consumo de API's REST. Genera solicitudes HTTP y permite ver las respuestas)
        * ESLint
## Base de datos
1. **Instalar servidor de bases de datos**: En el proyecto se utiliza MySql como servidor de bases de datos, por lo que es importante instalar el servidor y al menos el cliente de MySQL para ejecutar el script de la base de datos. [Descargar MySQL](https://dev.mysql.com/downloads/).
2. **Script de base de datos**: El script de la base de datos se encuentra en `tienda\db\database.sql`, este script se debe ejecutar para que la conexión se complete pues contiene toda la información de prueba de la base de datos.
3. **Configuración de credenciales y variables de conexión**: Una vez se halla instalado MySQL, se deben cambiar las variables de conexión en `tienda\backend\src\db.js` por las que apliquen para cada miembro. Esto es hasta que se monte el servidor remoto.

## Dependencias
**Instalar dependencias**: Una vez que hayas clonado el repositorio, ejecuta `npm install` en tu terminal en la ruta raíz de cada proyecto (frontend/ y backend/) para instalar todas las dependencias necesarias.

## Uso Backend
Después de instalar las dependencias, puedes comenzar a desarrollar ejecutando el siguiente comando en tu terminal en la raíz del proyecto `tienda\backend\`:
-   -> `npm run dev`
    Esto iniciará la aplicación y podrás verla en tu navegador en la ruta por defecto: _localhost:4000_
    Puedes detener el servidor simplemente con: ctrl + c

## Uso Frontend
Después de instalar las dependencias, puedes comenzar a desarrollar ejecutando el siguiente comando en tu terminal en la raíz del proyecto `tienda\frontend\`:
-   -> `npm run dev`
    Esto iniciará la aplicación y podrás verla en tu navegador en la ruta por defecto: _localhost:5173_
    Puedes detener el servidor simplemente con: ctrl + c
