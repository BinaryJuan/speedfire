![Speedfire Image](https://i.ibb.co/MsQtK0G/speedfire.png)
- **Nombre del e-commerce**: Speedfire
- **Autor**: Dante Terranova
- **Año**: 2022

## Índice
[TOC]

## Introducción :video_game:
Este proyecto buscó concretar un e-commerce convencional de videojuegos, que cuenta con un listado filtrado por categoría, dando la posibilidad de ver el detalle de cada producto. Además de esto, el e-commerce provee la posibilidad de interactuar con los productos, ya sea para agregarlos al carrito, modificar su cantidad al agregar y una vez agregados, eliminarlos del carrito, entre otras.

## Tecnologías usadas :computer:
**Principales**
	React, Node, ReactRouter, Firebase

## Implementación de las tecnologías :mag_right:
#### React
Tecnología tronco para desarrollar este proyecto. Desglosado en:
- **useEffect**: para ejecutar código cada vez que nuestro componente se renderiza o actualiza.
- **useState**: para poder crear estados y asignarles valores.
- **useContext**: para poder generar una relación entre un componente y otro, y así compartirse funciones y datos.

#### Node
Entorno de ejecución de JavaScript utilizado para desarrollar el proyecto, que ayuda a  instalar y desinstalar paquetes, gestionar versiones y gestionar dependencias necesarias para ejecutar el proyecto.

#### ReactRouter
Genera la posibilidad de navegar entre distintas rutas y poder actuar según las mismas. Por ejemplo, cuando se filtran las categorías.
- **useParams**: usado para obtener la ruta actual y a través de la ruta actual filtrar los resultados de la categoría.
- **Routes**: tag usada para contener todas las tags "Route".
- **Route**: definir qué componente mostrar cuando una URL está activa. En algunos casos, la URL puede variar, utilizando (:variable) para indicarlo. Esto, además del useParams, nos permite hacer un filtrado.
- **Link**: se crea una referencia hacia una URL indicada. Por ende, cuando se presiona sobre ésta, se irá a esa URL.
- **NavLink**: similar a Link, pero con la ventaja de que se le pueden asignar clases en los dos casos posibles (si está o no activa).

#### Firebase
Usada como base de datos. Permite importar los productos, las categorías, y almacenar las órdenes generadas desde el e-commerce.
- collection
- doc
- getDocs
- getDoc
- query
- where
- getFirestore

#### Librerías adicionales utilizadas
- Sweet alert
- Toastify

## Organización de las carpetas
Dentro de la carpeta root (speedfire) se encuentran dos carpetas en donde se desarrolló la mayor parte del código:

- { /public/media } en donde se encuentran los elementos multimedia del proyecto
- { src } dentro de esta se encuentra la carpeta { components }, que contiene todos los componentes utilizados en el proyecto, la carpeta { context } para controlar el context dentro de la aplicación y mejorar la implementación del carrito. Finalmente, está la carpeta { services }, que es donde se guardan los datos necesarios para el funcionamiento de Firebase.

## Instalación :electric_plug:
Para la instalación de este proyecto se deberán seguir los pasos a continuación:

** Requisitos:**
- Tener Node instalado
- Tener a disposición un CLI

**Instalación:**
1. Clonar repositorio
`git clone https://github.com/BinaryJuan/speedfire.git`

	A traves de la CLI, acceder a la carpeta de clonación deseada, luego copiar el link
	y finalmente pegarlo en la CLI y ejecutarlo.

2.  Inicializar NPM
`npm init -y`

	Parado en la misma carpeta que antes, ejecutar este comando para inicializar
	NPM y el proyecto. Esto permitirá instalar todas las dependencias del proyecto.

3. Instalar librerias y dependencias
`npm install`

	De esta manera se instalarán todas las dependencias para que el proyecto funcione 
	de manera óptima.

## Funcionamiento :fireworks:
**Descripción de las páginas principales:**
- **Home**: página de inicio en donde se puede acceder a las diferentes secciones del sitio web.
- **Us**: página en donde se dará una descripción breve de la historia del comercio.
- **Games (y sub-secciones)**: páginas en donde se podrán ver los productos (videojuegos), ser seleccionados en el carrito, y elegir su cantidad.
- **Help**: página de soporte estándar y ficticia.
- **Cart**: página en donde encontrar los productos agregados al carrito y la posibilidad de modificarlos.
- **Checkout**: página en donde, después de tener productos en el carrito, se procede a ingresar los datos para la entrega de los productos (los métodos de pago son de decoración).

**Descripción del agregado de un producto:**

Para empezar, se debe ir a la sección "Games"para ingresar el o los juegos deseados, especificando su cantidad a través del contador (componente Counter). Una vez finalizado el ingreso de los productos al carrito, se debe ir al mismo.

Para acceder al carrito existen dos maneras: una desde el navbar y la otra al agregar un producto desde el detalle del mismo.

Ya una vez en el carrito se podrá modificar tanto la cantidad de cada producto, como ejecutar su eliminación y limpiar todo el carrito si así se desea. Luego está la opción de finalizar la compra, en donde se le trasladará a la sección "Checkout"y podrá ingresar sus datos. Los campos obligatorios se moverán y quedarán en rojo hasta que se les ingrese un valor válido.

Una vez ingresados los datos se debe tocar el botón de finalizar compra y, en caso de haber stock, se generará una orden con los datos ingresados en el formulario.

**Ejemplo de orden generada luego de una compra**

![Orden](https://i.ibb.co/cXvtrGq/order.png)

**Video mostrando el proceso completo de compra:**

![Compra](https://i.ibb.co/tbgBW7X/compra.gif)


## Ejecución :rocket:
1. Ejecutar el proyecto de manera local
`npm start`

	A través de este comando generaremos un servidor virtual local para simular
	el e-commerce. Automáticamente se debería abrir una ventana con la siguiente URL
	http://localhost:3000/.