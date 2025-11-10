P1. Desarrollo de una web (enunciado completo)

En este módulo has aprendido qué es y cómo funciona un entorno de desarrollo moderno y dispones de herramientas que te ayudan a desarrollar sitios web. ¡Esta PEC es el momento de demostrar y poner en práctica todos los conocimientos adquiridos!

Os proponemos el reto de desarrollar un sitio web. Las Actividades que os proponemos realizar en el Módulo 2 os resultarán muy útiles. La práctica tiene unos requisitos mínimos que se especifican en el apartado de Descripción. Todo el proceso que sigas deberá estar documentado, y es necesario que entregues exactamente lo que se pide en el apartado de Formato y fecha de entrega para que la práctica pueda ser evaluada.

Atención: El peso de esta PEC es de un 45% de la nota de la evaluación continua.

Objetivos
Diseñar y ejecutar un pequeño sitio web responsive.
Utilizar el inspector DOM, el editor de estilos y las herramientas para diseño responsive del navegador como ayuda para el desarrollo.
Utilizar un workflow de desarrollo frontend moderno, que diferencie entornos de desarrollo y producción, con las diferencias que correspondan a cada uno.
Crear una web utilizando un boilerplate que permita escribir código moderno y que sea transformado para hacerlo ejecutable en navegadores antiguos.
Publicar la web.
Descripción
La PEC consta de dos partes: desarrollo del sitio web y documentación. Es necesario realizar y entregar las dos partes de la PEC para que sea evaluada.

 

Parte 1: Desarrollo
En la parte de desarrollo, será necesario que elabores un sitio web, de diseño libre, siguiendo las directrices marcadas en esta PEC.

TEMÁTICA

La temática del portal es: viajes por el mundo. Podéis hacer, por ejemplo, la página de un pueblo turístico con información de alojamientos y excursiones, un blog de un viaje en caravana, o un portal con información para viajar con niños. Podéis ser tan creativos como queráis!

REQUISITOS

Crear de cero una plantilla de inicio como la que construimos en el módulo 2.
Incorporar y utilizar una o más dependencias externas de npm para añadir algún elemento adicional en la página.
Se tiene que utilizar como mínimo un pre o postprocesador de CSS, JavaScript o HTML.
Utiliza Git para registrar versiones y Github para publicar el código. Utilizaremos un único repositorio para toda la asignatura.
Asegúrate de publicar en el repositorio únicamente los ficheros que no se puedan generar con un comando (no cargar /node_modules, /parcel-cache, /dist, etc.). Utiliza el fichero gitignore.
Utilizaremos el mismo repositorio a lo largo de toda la asignatura.
La página tiene que ser responsive y se tiene que poder visualizar correctamente desde cualquier dispositivo moderno (teléfono, tablet, ordenador…).
No se admiten frameworks de CSS como Bootstrap o Tailwind por el hecho que parte del módulo requiere ver transformaciones de código que estos framework esconden al desarrollador. Por el mismo motivo tampoco se admiten frameworks de javascript.
No se aceptará tampoco el uso de una plantilla de inicio de otro repositorio o templates de HTML ya prediseñados. Tampoco la utilización de frameworks de javascript tipo React o Vue.
Alguna de las páginas tiene que incluir un mínimo de interactividad con JavaScript que en la versión de producción sea comprensible para navegadores antiguos. No es necesario que dediques mucho tiempo a la funcionalidad en concreto. Si aún no tienes una base de JavaScript puedes pedir ayuda al foro o probar con algún tutorial sencillo de interacción con el DOM (https://www.w3schools.com/js/js_htmldom.asp).
La web tiene que estar publicada con un despliegue continuo conectado al repositorio, tal y como se explica en el módulo 2. Tiene que ser accesible desde internet. Durante toda la asignatura utilizaremos la misma url.
Ten en cuenta el uso de material protegido por derechos de autor, como se especifica en el último apartado de este documento. Recuerda cuales son los límites y excepciones a la hora de utilizar materiales protegidos por derechos de autor.
Asegura que las imágenes de la web estén en formatos clásicos como jpeg, png o gif. Tener estos formatos nos ayudará a trabajar la optimización de la página más adelante.
Las imágenes utilizadas en el portal tienen que estar alojadas en el repositorio.
Las practicas entregadas tienen que cumplir con las pautas AA de WCAG 2.0 (http://www.sidar.org/traducciones/wcag20/es/#guidelineLinks to an external site.). En particular, dentro de los objetivos de esta actividad, esto incluye (pero no se limita a):
Ofrecer alternativas al contenido no textual
No utilizar solo el color para comunicar información
Asegurar el contraste mínimo de color
Proporcionar enlaces “saltar navegación” y equivalentes donde haya bloques de contenido repetidos entre páginas
Utilizar correctamente el título de página, encabezados, y dar textos adecuados a los enlaces siguiendo las buenas prácticas especificadas en los recursos de aprendizaje
Especificar correctamente el idioma del contenido de cada página, y los fragmentos de contenido en otros idiomas que pueda haber
Si hay formularios y/o tablas, se tienen que ajustar a las buenas prácticas especificadas en los recursos de aprendizaje.
Las páginas tienen que ser válidas
Tenéis que leer todas las pautas AA y asegurar que vuestra entrega las cumple.

 

ESTRUCTURA

 

La estructura del portal se detalla a continuación. Asegurad de poner el contenido que se pide y de generar las URL especificadas.

El proyecto tiene que estar directamente en la raíz del dominio. Asegurad también de no tener subcarpetas del estilo de mipec.com/dist o mipec.com/dist/pec/.

Esta estructura es el mínimo. Podéis extenderla tanto como queráis, aunque no es necesario para cumplir con los criterios de evaluación.

 

Portada: Presenta el contenido, con enlaces al resto de páginas.
La portada tiene que estar en la raíz del proyecto. Si el dominio es mipec.com, el contenido se tiene que visualizar cuando abrimos el dominio en el navegador.

 

Categoría: Ésta página tiene que ofrecer un listado de elementos relacionados con la temática general, Por ejemplo, una lista de recetas, de restaurantes, de eventos relacionados con la cocina, etc. Tienen que contener enlaces y como mínimo dos de los elementos tienen que estar vinculados a una página de detalle.
Para cada elemento de la lista tiene que haber una imagen destacada. Piensa, por ejemplo, en Amazon: al hacer una búsqueda ves la imagen (en pequeño) del producto, y al entrar en el producto, la ves en tamaño grande.

La página de categoría tiene que estar en /categoria. Si el dominio es mipec.com, éste contenido tiene que estar en mipec.com/categoria.

Si estáis creativos y vuestro proyecto tiene más páginas de categoria, poned la primera en /categoria, y las siguientes en /categoria2, /categoria3, etc. Asegurad de documentarlo adecuadamente.

 

Detalle: El contenido presentado en la página de categoría, pero explicado con más detalle. Como mínimo tenéis que generar dos páginas de detalle.
Cada página de detalle tiene que contener, como mínimo:

Una imagen destacada representativa del contenido que explica la página
Tres párrafos de texto
Tres imágenes
Un vídeo incrustado de youtube.
Las páginas de detalle tienen que estar a /det1 y /det2. De manera que con el dominio del ejemplo, deberíamos acceder desde mipec.com/det1 y mipec.com/det2.

Si generáis más páginas de detalle, las podéis poner en /det3, /det4, etc.

 

Enlaces: Una página con documentación y enlaces a las fuentes de las cuales se ha sacado el contenido y atribuciones a los derechos copyleft cuando sea necesario. En caso de haber utilizado herramientas de IA generativas para la obtención de contenido, haced-lo constar, también, en éste apartado (recordad que no se admite el uso de estas herramientas para el desarrollo de la práctica).
La URL de la página de enlaces tiene que ser /links. Así, siguiendo con el dominio del ejemplo, sería accesible desde mipac.com/links.

 

A parte de estos requisitos mínimos, puedes ampliar tu proyecto como creas oportuno. Explora!

 

Parte 2: Documentación
 

Documenta el proceso de desarrollo que has seguido para desarrollar tu proyecto. Justifica las decisiones que has tomado y analiza los resultados.

Genera la documentación siguiendo la estructura propuesta a continuación:

Proceso de desarrollo para generar la plantilla de inicio con Parcel.
Definición de entornos de producción y desarrollo.
Soporte a navegadores antiguos.
Utilización de pre/postprocesadores.
Dependencia externa.
Semántica y accesibilidad.
Creación y publicación a Git y Github.
Publicación a internet
 

La documentación es un documento que ayuda a dejar constancia de los desarrollos realizados (tanto para futuros colaboradores del proyecto como para nosotros mismos cuando tengamos que actualizarlo). Tened cura del formato y la legibilidad.

 

Requisitos para generar documentación:

Se claro y conciso en las explicaciones.
No hace falta documentar impresiones personales ni subjetivas.
Justifica lo que expliques y hazlo con rigor.
Si utilizas capturas de pantalla, procura que se entienda qué quieres mostrar (no pongas una imagen de 80 líneas de código).
Si muestras código o comandos, utiliza estilos para destacarlo del resto del texto.
Procura que la documentación sea leíble, con una tipografía que se entienda y respetando interlineados y márgenes.
Añade títulos para cada sección y jerarquiza el contenido utilizando los estilos adecuados (tamaño de fuente, negrita, subrayado, etc.).
Si crees necesario añadir muchas imágenes, valora la posibilidad de añadirlas en un anexo.
No paséis de las 12 páginas.
 

Podéis encontrar más información sobre como documentar en http://www.lcc.uma.es/~eat/pdf/sw-spanish.pdfLinks to an external site.

 

Criterios de evaluación
Desarrollo [70%]

[15%] Creación de una plantilla de inicio basada en Parcel con los requisitos indicados
[15%] Configuración de entornos y órdenes para el desarrollo y producción y soporte a navegadores antiguos
[15%] Gestión de dependencias: preprocesadores para CSS y JS, y dependencias adicionales.
[10%] Adecuación a la temática y estructura de la práctica
[5%] Diseño responsive, complejidad y estética
[5%] Semántica y accesibilidad
[5%] Publicación a internet
Documentación [30%]

[5%] Proceso de desarrollo para generar la plantilla de inicio con Parcel.
[5%] Definición de los entornos de producción y desarrollo.
[5%] Soporte a navegadores antiguos.
[3%] Utilización de pre/post procesadores.
[3%] Dependencia externa.
[3%] Semántica y accesibilidad.
[3%] Creación y publicación a Git y Github.
[3%] Publicación a internet.
Nota: la publicación en internet solamente supone el 5% de la nota del módulo, pero es condición indispensable para poder evaluar la práctica íntegramente.

Formato y fecha de entrega
Se tiene que entregar la documentación en un documento de texto en formato estándar, preferiblemente PDF, con tu nombre e indicando que se trata de la PEC 1. Evita, a poder ser, formatos propietarios como .doc o .pages.

Asegúrate que la documentación incluya enlaces a la web pública y al repositorio Git a la primera página. Es imprescindible que esta información esté presente, porque es desde donde podremos revisar tanto el código como la versión de la web en producción. NO HACE FALTA PRESENTAR LOS FICHEROS DE LA WEB COMPRIMIDOS, con el acceso al repositorio tenemos suficiente.

La fecha límite de entrega es el 15 de noviembre de 2025 a las 23.59h.

Propiedad intelectual y plagio
A menudo es inevitable, en producir una obra multimedia, hacer uso de recursos creados por terceras personas. Es, por tanto, comprensible hacerlo en el marco de una práctica de los estudios de este Máster, siempre que se documente claramente y no suponga plagio en la práctica.

Por lo tanto, en presentar una práctica que haga uso de recursos ajenos, se tiene que presentar juntamente con ella un documento en que se detallen todos ellos, especificando el nombre de cada recurso, su autor, el lugar donde se obtuvo, y si estatus legal: si la obra está protegida por copyright o si se acoge a alguna otra licencia de uso (Creative Commons, licencia GNU, GPL...). El estudiante tendrá que asegurarse que la licencia que sea no impide específicamente su uso en el marco de la práctica. En caso de no encontrar la información correspondiente, tendrá que asumir que la obra está protegida por copyright.

Se tendrán, además, que adjuntar los ficheros originales cuando las obras utilizadas sean digitales, y su código fuente, si corresponde.