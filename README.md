# GENERIC-LOGS

Generic-logs es un paquete para NodeJS que mejora ligeramente la funcion `console.log` haciendola algo mas visual y intiutiva ofreciendo varias funciones

![](https://i.imgur.com/cfGdBDr.png)

## Instalación

Puedes instalar el paquete utilizando uno de los siguientes comandos:

```bash
# Con NPM
npm install generic-logs

# Con Yarn
yarn add generic-logs

# Con PNPM
pnpm i generic-logs
```

## Uso

Ejemplos :

```js
const generic = require('generic-logs');

generic.info('Mensaje de información');
generic.success('Mensaje de éxito');
generic.warning('Mensaje de advertencia');
generic.error('Mensaje de error');

generic.separator(); // Separador por defecto: '----------'

console.log(generic.red('Este texto es rojo'));
console.log(generic.blue('Este texto es azul'));
console.log(generic.magenta('Este texto es magenta'));
console.log(generic.white('Este texto es blanco'));
console.log(generic.black('Este texto es negro'));

console.log(generic.bgred('El fondo de este texto es rojo'));
console.log(generic.bgblue('El fondo de este texto azul'));
console.log(generic.bgmagenta('El fondo de este texto magenta'));
console.log(generic.bgwhite('El fondo de este texto blanco'));
console.log(generic.bgblack('El fondo de este texto negro'));
// ... y más opciones de colores

custom({ title: 'Personalizado', message: 'Mensaje personalizado', color: 'green' });

// Funciones adicionales de formato
console.log(bold('Texto en negrita'));
console.log(italic('Texto en cursiva'));
console.log(underscore('Texto subrayado'));
// ... y más opciones de formato
```

### Lista de estilos

| Color de texto | Fondo del texto | Estilos           |
| -------------- | --------------- | ----------------- |
| `cyan()`       | `bgcyan()`      | `reset()`         |
| `blue()`       | `bgblue()`      | `bold()`          |
| `red()`        | `bgred()`       | `underscore()`    |
| `white()`      | `bgwhite()`     | `dim()`           |
| `black()`      | `bgblack()`     | `italic()`        |
| `magenta()`    | `bgmagenta()`   | `backoneline()`   |
| `yellow()`     | `bgyellow()`    | `strikethrough()` |
| `green()`      | `bggreen()`     | `reverse()`       |

## `custom({title,text,colors})`

Crea tu propio log

-   Title: El titulo `String`
-   Text: Texto despues del titulo `String`
-   Color: Color del texto `String`

```js
generic.custom({ title: 'Personalizado', message: 'Mensaje personalizado', color: 'verde' });
```

## `info(message)`

Muestra un mensaje de información.

```js
generic.info('Información importante');
```

## `warning(message)`

Muestra un mensaje de advertencia.

```js
generic.warning('Advertencia');
```

## `success(message)`

Muestra un mensaje de exito

```js
generic.success('¡¡Eureka!!');
```

## `error(message)`

Muestra un mensaje de error

```js
generic.error('Error encontrado');
```

## `separator(char, length)`

Separator es una funcion que crea un separador visual en la consola.

**Parámetros**

-   Char (opcional, cadena): El carácter utilizado para crear el separador. Por defecto es '-'.
-   Length (opcional, número): La longitud del separador. Por defecto es 10.
    Ejemplo

```js
generic.separator(); // Separador predeterminado
generic.separator('*', 20); // Separador personalizado con longitud 20 y carácter '*'
generic.separator('~', 15); // Separador personalizado con longitud 15 y carácter '~'
```

# Contribución

Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

-   Haz un fork del repositorio.
-   Crea una rama para tu nueva función o mejora:
    ```bash
    git checkout -b mi-nueva-funcion.
    ```
-   Realiza los cambios necesarios. Una vez hechos actualiza la definición de tipos:

```bash
# Instala TSC si no lo tienes
npm i -g typescript

# Genera la definición de tipos
npm run types
```

-   Realiza los commits:
    ```bash
    git commit -m 'Añadir mi nueva función'.
    ```
-   Envía tus cambios al repositorio remoto:
    ```bash
    git push origin mi-nueva-funcion.
    ```
    **Abre una pull request en GitHub.**

# Licencia

Este proyecto está licenciado bajo la [GNU General Public License v.3.0](https://www.gnu.org/licenses/gpl-3.0.html). Para más detalles, consulta el archivo LICENSE.
