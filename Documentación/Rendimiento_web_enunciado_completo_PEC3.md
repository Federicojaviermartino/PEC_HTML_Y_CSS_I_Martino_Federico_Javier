En este último módulo utilizaremos el proyecto desarrollado en las PEC anteriores para poner en práctica los principales conceptos sobre rendimiento web.

Así pues, esta práctica propone el reto de trabajar sobre el resultado de las primeras PEC y el conocimiento adquirido en el Módulo 4. La práctica tiene unos requisitos mínimos que se especifican en el apartado de Descripción.

Recuerda que el peso de esta PEC es de un 20% de la nota de la evaluación continua.

Objetivos
Hacer un análisis de rendimiento de la página web que has desarrollado
Aplicar las mejoras de rendimiento sugeridas a tu código.
Publicar tu web en internet, de forma que sea visible desde el exterior.
Descripción
En la parte de desarrollo, deberás seguir trabajando en el proyecto web de la PAC anterior, siguiendo las directrices marcadas. No obstante, puedes hacer las modificaciones que consideres oportunas mientras mantengas la misma estructura y requisitos definidos en las PEC 1 y 2.

Utiliza el mismo repositorio de GitHub y publica la web con las modificaciones bajo el mismo dominio que en las PEC anteriores.

La PEC consta de dos partes: desarrollo y documentación. Es necesario realizar y entregar ambas partes de la PAC para que sea evaluada.

Parte 1: Desarrollo

Comenzaremos haciendo un análisis inicial de los tiempos de carga utilizando las herramientas de desarrollo del navegador.

1. Primer análisis del tiempo de carga:
Desde la pestaña de red, selecciona la opción de "Regular 3G" y marca que se desactive la caché.
Recarga la página para poder medir el tiempo de carga total de la página.

Crea una tabla con la siguiente información:

Título de la página
URL
Tiempo de carga (promedio)
Peso total
Peso transferido
Cantidad de recursos que contiene la página
Asegúrate de calcular un tiempo de carga promedio tal y como se explica en la documentación, para evitar al máximo el ruido en las mediciones.

Agrega esta tabla en el punto correspondiente de la documentación, junto con un análisis de los datos.

2. Primeros cambios
Aplica lazy loading a todos los elementos que consideres en tu página web, especialmente las imágenes.
Aplica un sistema de carga asíncrona a los scripts de tu página tal como vimos en el módulo 4.
Asegúrate de documentar los cambios aplicados.

3. Segundo análisis del tiempo de carga:
Vuelve a generar una tabla como la del punto 1 con el tiempo de carga antes y después de los primeros cambios.

Agrega esta tabla en el punto correspondiente de la documentación, junto con un análisis de los datos.

4. Informe de mejoras
Ejecuta el test de Google PageSpeed Insights para cada una de las páginas de tu web. En este punto nos centraremos en analizar los parámetros de rendimiento.

Recoge las puntuaciones de rendimiento obtenidas para cada una de las páginas en versión móvil y escritorio.
Recoge las mejoras propuestas por el test y aplícalas a tu página.
Asegúrate de documentar cada una de las mejoras en la documentación: cuál era la sugerencia inicial y cómo aplicaste la mejora. Se trata de una documentación técnica y es importante documentar el proceso de desarrollo que has seguido.
No solo nos interesa tener una buena puntuación, sino poder corregir al máximo los puntos críticos que puedan afectar el rendimiento de tu página.
Por eso, es importante asegurarse de que las métricas están lo más alto posible dentro del rango aceptable (color verde) y que no hay recomendaciones importantes pendientes de aplicar.

Para finalizar, vuelve a ejecutar el test y coloca las puntuaciones obtenidas antes y después de aplicar las recomendaciones en una tabla (columnas: URL, resultado móvil antes, resultado móvil después, resultado escritorio antes y resultado escritorio después).
Agrégalo a la documentación y acompáñalo de un análisis de los datos.

Si crees necesario hacer capturas de imagen, puedes añadirlas en un PDF aparte (Anexo) y publicarlo junto con la documentación.

5. Análisis final del tiempo de carga:
Vuelve a generar una tabla como la del punto 1 con el tiempo de carga actual junto con el del punto 1 y el del punto 3.
Asegúrate de ponerlo en una misma tabla y en columnas distintas, de modo que sea más fácil analizar los datos.

Agrega esta tabla en el punto correspondiente de la documentación, junto con un análisis de los datos.

Parte 2: Documentación
Tal y como se explica en la Parte 1, la estructura de la documentación es la siguiente:

Tabla y análisis del tiempo de carga
En este punto muestra la tabla de tiempos de carga con los resultados de los tres análisis (puntos 1, 3 y 5 del desarrollo).
Analiza los resultados de la tabla y ten en cuenta cómo han afectado los cambios aplicados.
Primeros cambios
Documenta cómo aplicaste el lazy loading y la carga asíncrona de scripts en la página.
Informe de mejoras
Como se explica en la parte de desarrollo, documenta las mejoras propuestas por el test y qué hiciste para aplicarlas.
Muestra la tabla de resultados del test antes y después de aplicar las mejoras y analiza el resultado.
Responde las siguientes preguntas:
¿Qué cambios detectas en las herramientas para desarrolladores al aplicar lazy loading a las imágenes de tu web? ¿Cómo crees que afecta al rendimiento de tu página?
¿Qué sucede al aplicar carga asíncrona a los scripts de tu página? ¿Qué problemas crees que podrían surgir si cargas el JavaScript de forma asíncrona? Ten en cuenta los diferentes métodos de carga asíncrona para responder esta pregunta.
No hemos hecho carga asíncrona de estilos. ¿Crees que se podría hacer? ¿Qué problemas podríamos tener? Razona tu respuesta.
Recuerda que la documentación debe ser concisa, pero completa y fácilmente comprensible.

 

Recomendaciones para la documentación:
Sé claro y conciso en las explicaciones.
No es necesario documentar impresiones personales ni subjetivas.
Justifica lo que expliques y hazlo con rigor.
Si utilizas capturas de pantalla, asegúrate de que se entienda qué quieres mostrar (no pongas una imagen de 80 líneas de código).
Si muestras código o comandos, utiliza estilos para destacarlo del resto del texto.
Procura que la documentación sea legible, con una tipografía clara y respetando los interlineados y márgenes.
Añade títulos para cada sección y jerarquiza el contenido utilizando los estilos adecuados (tamaño de fuente, negrita, subrayado, etc.).
Si crees necesario añadir muchas imágenes, valora la posibilidad de añadirlas en un anexo.
No superes las 12 páginas.
Criterios de evaluación
Tabla y análisis del tiempo de carga (30%)
Aplicación y documentación de lazy loading y carga asíncrona de scripts (15%)
Respuestas a las preguntas (20%)
Informe de mejoras (35%)
Formato y fecha de entrega
Se tiene que entregar la documentación en un documento de texto en formato estándar, preferiblemente PDF, con tu nombre e indicando que se trata de la PEC 3. Evita, a poder ser, formatos propietarios como .doc o .pages.

Asegúrate que la documentación incluya enlaces a la web pública y al repositorio Git a la primera página. Es imprescindible que esta información esté presente, porque es desde donde podremos revisar tanto el código como la versión de la web en producción. NO HACE FALTA PRESENTAR LOS FICHEROS DE LA WEB COMPRIMIDOS, con el acceso al repositorio tenemos suficiente.

En caso de que hayas realizado modificaciones concretas en el código, puedes explicarlas en el mismo documento.