# Generic Logs


Generic-logs es un paquete para NodeJS que mejora ligeramente la funcion `console.log` haciendola algo mas visual y intiutiva ofreciendo varias funciones 
![](https://i.imgur.com/skpqoRy.png)
## Antes de empezar
### **Instalar el paquete** 

```
npm install generic-logs@latest --save
```
### **Importarlo** 

```js
const log = require('generic-logs');
```
### **Ejemplo**
```js
const log = require('generic-logs');

log.info("Esto es un mensaje informativo");
```
>![xd](https://i.imgur.com/RGQyfeP.png)

# Documentacion
El paquete consta actualmente de 7 funciones nuevas para mejorar visualmente tu logs.
- `warn()`
- `info()`
- `debug()`
- `error()`
- `success()`
- `startLoader()` y `stopLoader()`
- `separator()`

## Warn `.warn(texto)`
```js
// Uso basico

log.warn(mensaje)


// Loggear multiples objetos
log.warn(obj1, obj2, obj3, obj4...)
```
## Info `.info(texto)`
```js
// Uso basico

log.info(mensaje)


// Loggear multiples objetos
log.info(obj1, obj2, obj3, obj4...)
```
## Error `.error(texto)`
```js
// Uso basico

log.error(mensaje)


// Loggear multiples objetos
log.error(obj1, obj2, obj3, obj4...)
```
## Debug `.debug(texto)`
```js
// Uso basico

log.warn(mensaje)


// Loggear multiples objetos
log.warn(obj1, obj2, obj3, obj4...)
```

## Success `.success(texto)`
```js
// Uso basico

log.success(mensaje)


// Loggear multiples objetos
log.success(obj1, obj2, obj3, obj4...)
```
## Separador `.separator(color,estilo)`
*Es importante que este en formato de string*
### Colores (por defecto es azul)
- Rojo : `"red"`
- Azul : `"blue"`
- Cyan : `"cyan"`
- Magenta : `"magenta"`
- Amarillo : `"yellow"`
- Negro : `"black"`
- Verde : `"green"`
- Blanco : `"white"`
### Estilos (por defecto son quadrados)
- Linea : `"line"`
- Blanco&Negro : `"chess"`
- Guión : `"script"`
- Triangulos : `"triangles"`
- Cadenas : `"chain"`


```js
// Estilos

log.separator("","triangles")
// △▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△

log.separator("","script")
// ----------------------------------

log.separator("","line")
// ┣━━━━━━━━━━━━━━━━━━━━┫

log.separator("","chess")
// ▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚

log.separator("","chain")
//  ⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘ 

log.separator()
// ▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅
```

## Loading `.startLoader(texto)` y `.stopLoader()`
Con `.startLoader` inicias un "bucle" en el que sale un mensaje y con `.stopLoader()` frenas el bucle . 
```js
// inicias
log.startLoader('Hola')

// acabas
log.stopLoader()
```
![](https://i.imgur.com/kcAjRzF.gif)

