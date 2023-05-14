
# Generic Logs 
Generic-logs es un paquete para NodeJS que mejora ligeramente la funcion `console.log` haciendola algo mas visual y intiutiva ofreciendo varias funciones 
![](https://i.imgur.com/skpqoRy.png)



## Instalación

Puedes instalar el paquete a través de npm utilizando el siguiente comando:

```bash
npm install generic-logs
```
## Uso
### Lista de estilos 

#### **style**
- reset
- bold
- dim
- italic
- underscore
- reverse
- backoneline
- strikethrough
- cleanthisline

#### **bg** (background)
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

#### **color**
- black
- red
- yellow
- green
- white
- magenta
- cyan
- blue


Ejemplo :
```js
const log = require('generic-logs');

log({ text: 'Hola', styles: [color.blue , style.bold , style.underscore ] });
```
## Documentacion
### `log(options)`
La función log permite enviar un mensaje en la consola con estilos personalizados.

**Parámetros:** Options: Un objeto con las siguientes propiedades:
- Text (string): El texto del mensaje.
- Styles (array): Un array con los estilos.
```js
log({ text: 'Hola', styles: [color.yellow, style.underscore] });
```
## Logs Predefinidos
El paquete también proporciona algunas funciones para logs predefinidos que pueden ser útiles:

### **INFO** `info(message)`
Muestra un mensaje de información.
```js
log.info('Información importante');
```
### **WARNING** `warning(message)`
Muestra un mensaje de advertencia.
```js
log.warning('Advertencia');
```
### **SUCCESS** `success(message)`
Muestra un mensaje de exito
```js
log.success('¡¡Eureka!!');
```
### **ERROR** `error(message)`
Muestra un mensaje de error
```js
log.error('Error encontrado');
```

### **SEPARATOR** `separator(char, length)`

Separator es una funcion que crea un separador visual en la consola.

**Parámetros**
- Char (opcional, cadena): El carácter utilizado para crear el separador. Por defecto es '-'.
- Length (opcional, número): La longitud del separador. Por defecto es 10.
Ejemplo

```js
log.separator(); // Separador predeterminado
log.separator('*', 20); // Separador personalizado con longitud 20 y carácter '*'
log.separator('~', 15); // Separador personalizado con longitud 15 y carácter '~'
```

# Contribución
Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

- Haz un fork del repositorio.
- Crea una rama para tu nueva función o mejora:
  ``` bash
  git checkout -b mi-nueva-funcion.
  ```
- Realiza los cambios necesarios y realiza los commits:
  ```bash
  git commit -m 'Añadir mi nueva función'.
  ```
- Envía tus cambios al repositorio remoto:
  ```bash
  git push origin mi-nueva-funcion.
  ```
**Abre una pull request en GitHub.**
# Licencia
Este proyecto está licenciado bajo la  GENERAL PUBLIC LICENSE. Para más detalles, consulta el archivo LICENSE.
