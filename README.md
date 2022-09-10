![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# __Grupal Project - Henry Coffee's Orders__
<img height="200" src="./logo_coffee.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Prisma entre otras.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Practicar métodos de SCRUM.
- Usar y practicar testing.

## Horarios y Fechas

El proyecto será presentado para el día 7/10/2022.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `coffee`.

El contenido de `client` fue creado usando: Create React App.

## __Enunciado__

Proyecto Full Stack de un e-commerce para comidas rápidas. 
Queremos desarrollar una página que permita dar fluidez y eficiencia en la toma de pedidos y su administración. Siendo ayuda tanto para el cliente como para el administrador del local.
El cliente podrá ver la carta y de acuerdo a ella ir eligiendo de forma dinámica los productos a consumir, su medio de pago y la demora estimada. 
El administrador del local podrá gestionar movimiento de caja y stock.
Coffee`s Orders está orientado a satisfacer las necesidades de las cafeterías suscritas a nuestra aplicación y a sus clientes. 
Utilizaremos herramientas como Prisma, React Native y Redux entre otras.


#### Endpoints/Flags serán asignados más adelante

  Por el momento, la info sera traida de nuestra db. 

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres - Prisma

# Frontend

Una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

## __Pagina inicial__: Landing page con:

- [ ] Imagen de fondo representativa
- [ ] Botón para ingresar al home (`Ruta principal`)
- [ ] Grilla de comentarios (imagen y comentario)

## __Ruta principal__: Home

- [ ] Input de búsqueda para encontrar porductos por nombre
- [ ] Área donde se verá el listado de productos. Deberá mostrar su:
  - Imagen.
  - Nombre.
  - Descripción simple.
  - Favoritos.
  - Link para compartir.
  - Precio.
- [ ] Botones/Opciones para filtrar por:
  - Catálogo.
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente:
  - Precio.
  - Catálogo / Precio.
- [ ] Paginado con scroll continuo mostrando inicialmente 9 productos.

## __Ruta de detalle producto__: Detaill

- [ ] Los campos mostrados en la ruta principal para cada producto con un detalle más amplio (lugar de procedencia del producto, si es regional, jugo de caja o exprimido).
- [ ] Calorias para luego hacer un seguimiento dietético.
- [ ] Cantidad de compra.
- [ ] Campo de Pago (SubTotal, Cubiertos, Total).

## __Ruta de creación del producto__: Form Admin/Book/Cliente

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
### __Formulario para el Administrador__
#### cargar ó modificar el producto
- [ ] Posibilidad de seleccionar/agregar proveedor.
- [ ] Posibilidad de seleccionar producto. Ej: Medialunas y no 🧦 🌛.
- Fecha de caducidad.
- Fecha de compra.
- Costo del producto.
- Margen.
- Precio final (automático con posibilidad de ingresar manualmente).
- Cantidad de la compra al proveedor.
- Calorias.
- [ ] Botón/Opción para guardar el producto.
- [ ] Botón/Opción para borrar el producto.
#### Carga ó modificar proveedor
- [ ] Nombre del proveedor
- [ ] Contacto/tel
- [ ] Domicilio
- [ ] Ranking

> El formulario estará validado con JavaScript y con validaciones HTML. 
 Pueden agregar las validaciones que consideren. Por ejemplo: Que el margen esté por arriba de 1, si llegara a ser menor dar aviso que va a perdida. Si es 1 que está vendiendo al costo

### __Formulario para el Cliente__
#### Libro de quejas y//ó felicitaciones
- Fecha.
- ranking de satisfacción (0 a 10) de triste a muy contento
- Comentario. Texto de 500 caracteres.
- Opción anónimo
- Si el cliente está muy satisfecho y dejó comentario, colocar en la grilla del Landing page.
#### Form Cliente registro
- Nombre
- Fecha nacimiento
- CUIT para tipo de facturación
#### Form Cliente Producto
 Al ver el detalle del producto. Por ej: café que el cliente pueda indicar si necesita edulcorante diet ó azúcar...ó si a la medialuna la quiere con queso y jamón tostada etc.
 - Comentario
 - Boton de opciones según Categoría (tostado, rellenas, frío - tibio - caliente)

# Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Producto con las siguientes propiedades:
  - ID *
  - Nombre *
  - Fecha de Caducidad *
  - Fecha de Compra *
  - Costo *
  - Margen
  - Precio Final *
  - Cantidad *
  - Calorías
  - Imágen
  - Ranking
- [ ] Proveedores con las siguientes propiedades:
  - ID
  - Nombre
  - Teléfono
  - Mail
  - Domicilio
  - Ranking
- [ ] Categoría
  - Id
  - Nombre
  - Cargo adicional (booleano)

  _ejemplo_: Si el sandwich es tostado sale un poco más caro
- [ ] Cliente
  - Id
  - Nombre
  - Mail
  - Fecha Nacimiento
  - CUIT
- [ ] Libro Q/S
  - Id
  - Fecha
  - Texto
  - Anónimo

# Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /productos__:
  - Obtener un listado de los productos.
  - Debe devolver solo los datos necesarios para la ruta principal.
- [ ] __GET /producto?name="..."__:
  - Obtener un listado de los productos que contengan la palabra ingresada como query parameter
  - Si no existe ninguna producto mostrar un mensaje adecuado
- [ ] __GET /producto/{id}__:
  - Obtener el detalle de un producto en particular
  - Debe traer solo los datos pedidos en la ruta de detalle del producto
- [ ] __POST /producto__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de producto por body
  - Crea un producto en la base de datos relacionada con su porveedor
- [ ] __PUT /producto__:
  - Modifica los datos recolectados desde el formulario.
- [ ] __PUT /proveedor__:
  - Modifica los datos recolectados desde el formulario.
- [ ] __POST /proveedor__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de porveedor por body
  - Crea un proveedor en la base de datos
- [ ] __GET /porveedor__:
  - Obtener todos los proveedores posibles
- [ ] __PUT /Cliente__:
  - Modifica los datos recolectados desde el formulario.
  - Imágen
  - Nombre
  - Fecha de nacimiento
  
# Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
