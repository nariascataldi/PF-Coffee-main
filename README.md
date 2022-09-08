![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Dogs

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

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

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

## Enunciado

Proyecto Full Stack de un e-commerce para comidas rápidas. 
Queremos desarrollar una página que permita dar fluidez y eficiencia en la toma de pedidos y su administración. Siendo ayuda tanto para el cliente como para el administrador del local.
El cliente podrá ver la carta y de acuerdo a ella ir eligiendo de forma dinámica los productos a consumir, su medio de pago y la demora estimada. 
El administrador del local podrá gestionar movimiento de caja y stock.
Coffee`s Orders está orientado a satisfacer las necesidades de las cafeterías suscritas a nuestra aplicación y a sus clientes. 
Utilizaremos herramientas como Prisma, React Native y Redux entre otras.


### Únicos Endpoints/Flags que pueden utilizar

- GET <https://api.thedogapi.com/v1/breeds>
- GET <https://api.thedogapi.com/v1/breeds/search?q={raza_perro}>

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres - Prisma

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar porductos por nombre
- [ ] Área donde se verá el listado de productos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Descripción simple
  - Favoritos
  - Link para compartir
  - Precio
- [ ] Botones/Opciones para filtrar por:
  - Catálogo
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente:
  - Precio
  - Catálogo / Precio
- [ ] Paginado con scroll continuo mostrando inicialmente 9 productos

__Ruta de detalle producto__: debe contener

- [ ] Los campos mostrados en la ruta principal para cada producto con un detalle más amplio (lugar de procedencia del producto, si es regional, jugo de caja o exprimido).
- [ ] Calorias para luego hacer un seguimiento dietético.
- [ ] Cantidad de compra
- [ ] Campo de Pago (SubTotal, Total, cubiertos)

__Ruta de creación del producto__: debe contener

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Proveedor
  - Nombre del producto
  - Costo del producto
  - Margen 
  - Precio final
  - Cantidad de la compra al proveedor
  - Calorias
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la raza no pueda contener números o símbolos, que el peso/altura mínimo no pueda ser mayor al máximo y viceversa, etc.

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Raza con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

__IMPORTANTE__: Pensar como modelar los IDs de las razas de perros en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguna, esta puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API la raza `Pug` tiene id = 1 y en nuestra base de datos creamos una nueva raza `Henry Pug` con id = 1, ver la forma de diferenciarlas cuando querramos acceder al detalle de la misma.

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] __GET /dogs__:
  - Obtener un listado de las razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluir los temperamentos asociados
- [ ] __POST /dogs__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos relacionada con sus temperamentos
- [ ] __GET /temperaments__:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

## Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
