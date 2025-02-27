<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistema binario
    .row.justify-content-center.mb-5.g-0
      .col-lg-12.mb-lg-0.mb-3(data-aos="fade-down")
        .p-4(style="background-color: #F5E5FE ").h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-lg-0.mb-3.order-2: p.mb-0 El sistema binario utiliza solo dos dígitos (0 y 1) para representar cualquier número. Es el sistema que se utiliza como lenguaje para los sistemas electrónicos, gracias a los dos estados o niveles lógicos que se encuentran en los circuitos integrados: abierto o cerrado (1 o 0 lógico).
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.svg', alt='' style='width: 85px')
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span #[i Niveles de voltaje en lógica digital]
        img(src='@/assets/curso/temas/12.svg', alt='Texto alternativo: La imagen muestra los niveles de voltaje lógico en un sistema digital alimentado por VCC. Un nivel alto, representado como 1 - Lógico, se encuentra entre 3.5 V y 5.0 V. Entre 0.8 V y 3.5 V, el voltaje es No Definido, mientras que un nivel bajo, representado como 0 - Lógico, se encuentra entre 0.0 V y 0.8 V. ')(data-aos='fade-left')
    p.mb-4(data-aos='fade-right') En la electrónica tradicional se usan 5 voltios para el dígito '1' y 0 voltios para el dígito '0'.
    .tarjeta.p-5.mb-4(style="background-color: #D4F0E0 ")
      p.mb-4(data-aos='fade-right') Ejemplo. Representar 2158 (decimal) en binario
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span #[i Conversión de un número decimal a binario]
          img(src='@/assets/curso/temas/13.svg', alt='Texto alternativo: La figura presenta un diagrama donde se convierte el número decimal 2158 a binario. El proceso muestra una serie de divisiones entre 2')(data-aos='fade-up')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos='fade-down')
        .p-4(style="background-color: #E9F7EF")
          p.mb-4 El procedimiento para convertir un número decimal a binario utilizando divisiones sucesivas por 2 es el siguiente:
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style='color: #12263F; font-weight: bold') 1.
              | Se divide el número decimal entre 2, obteniendo el cociente y el resto. El resto será uno de los dígitos del número binario.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style='color: #12263F; font-weight: bold') 2.
              | Si el resto es 0, se registra un 0 como dígito binario; si el resto es 1, se registra un 1.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style='color: #12263F; font-weight: bold') 3.
              | El cociente de la división se toma como el nuevo número decimal.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style='color: #12263F; font-weight: bold') 4.
              | Se repite el proceso dividiendo nuevamente por 2, registrando los restos como los dígitos binarios.
            li.d-flex
              .lista-ol--cuadro__vineta
                span(style='color: #12263F; font-weight: bold') 5.
              | El procedimiento finaliza cuando el cociente alcanza el valor de 0. Los restos obtenidos se leen de abajo hacia arriba para formar el número binario.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos='fade-right')
        .tarjeta.p-5.hover.h-100
          .row.justify-content-center.align-items-center
              .col-lg.mb-lg-0.mb-3.order-2: p.mb-0.fw-bold Divida el número decimal por 2.
              .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/14.svg', alt='' style='width: 30px')
      .col-lg-4.mb-lg-0.mb-3(data-aos='fade-up')
        .tarjeta.p-5.hover.h-100
          .row.justify-content-center.align-items-center
              .col-lg.mb-lg-0.mb-3.order-2: p.mb-0.fw-bold Si hay resto, escriba 1; si no, 0.
              .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/15.svg', alt='' style='width: 30px')
      .col-lg-4.mb-lg-0.mb-3(data-aos='fade-down')
        .tarjeta.p-5.hover.h-100
          .row.justify-content-center.align-items-center
              .col-lg.mb-lg-0.mb-3.order-2: p.mb-0.fw-bold Continúe hasta que no quede número decimal.
              .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.svg', alt='' style='width: 30px')
    .titulo-tres: h3 Álgebra de Boole
    p.mb-4(data-aos='fade-right') El álgebra de Boole se utiliza para programar circuitos integrados a través de números binarios y realizar operaciones binarias. Esto permite predecir el comportamiento en la entrada y salida del circuito.
      br
      br
      |Incluye tres operaciones fundamentales:
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3. 
            span #[i Operaciones lógicas básicas]
          .tabla-a.color-acento-contenido.mb-5(data-aos='fade-left')
            table.text-center
              thead(style="background-color: #F3F8FF ")
                tr
                  th Operación +
                  th Operación  ⋅ o ∗
                  th Operación de negación
              tbody.bg-white
                tr
                  td (Es el mismo símbolo de la suma que usualmente usamos, pero no es la misma operación)
                  td (Es el mismo símbolo del producto o multiplicación que usualmente usamos, pero no es la misma operación)
                  td (Permite invertir o negar el estado lógico, #[em bit] o dígito así)
                tr
                  td Entradas | Salida
                  td Entradas | Salida
                  td Entradas | Salida
                tr
                  td A + B = C
                    br
                    br
                    |0 + 0 = 0
                    br
                    br
                    |0 + 1 = 1
                    br
                    br
                    |1 + 0 = 1
                    br
                    br
                    |1 + 1 = 1
                  td A · B = C
                    br
                    br
                    |0 · 0 = 0
                    br
                    br
                    |0 · 1 = 0
                    br
                    br
                    |1 · 0 = 0
                    br
                    br
                    |1 · 1 = 1
                  td A = A
                    br
                    br
                    |0 = 1
                    br
                    br
                    |1 = 0
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos='fade-down')
        .tarjeta.p-4(style="background-color: #496D58 ")
          .row.justify-content-center
            .col-lg-10.mb-lg-0.mb-3.order-2
              .text-white
                h4 Dato importante
                p.mb-0 La negación se expresa con una línea arriba del nombre asignado a la entrada o a la salida o con una comilla, así: A = A'
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.svg', alt='' style='width: 100px') 
    .titulo-tres: h3 Función lógica
    p.mb-4(data-aos='fade-right') Es la expresión algebraica formada por variables binarias que se relacionan mediante las operaciones básicas del álgebra de Boole.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos='fade-left')
        .tarjeta.p-4(style="background-color: #D4F0E0 ")
          .row.justify-content-center.mb-3
            .col-lg-10.mb-lg-0.mb-3.order-2
              p.mb-0 #[b Ejemplo:]
                br
                |F = a + b (la función sería “a + b” que equivale a la operación booleana “+” o de suma).
                br
                |Donde a y b son las variables binarias.
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='' style='width: 100px') 
    .titulo-tres: h3 Tabla de verdad
    p.mb-4(data-aos='fade-right') Es una representación gráfica de todos los valores que puede tomar la función lógica para cada una de las posibles combinaciones de las variables de entrada.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos='fade-down')
        .tarjeta.p-4(style="background-color: #D4F0E0 ")
          .row.justify-content-center.mb-3
            .col-lg-10.mb-lg-0.mb-3.order-2
              p.mb-0 El número de combinaciones posibles es 2^n, siendo n el número de variables.
                br
                br
                | #[b Ejemplo:] la tabla para la función lógica F = (A + B) · C sería:
                br
                |n = 3 (porque las variables son A, B y C).
                br
                |23 = 8 (número de posibles combinaciones y filas que debe tener la tabla).
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='' style='width: 100px') 
    p.mb-4(data-aos='fade-right') El álgebra de Boole se basa en un conjunto de propiedades y reglas fundamentales que permiten simplificar y analizar expresiones lógicas. Estas reglas son esenciales para optimizar circuitos y resolver problemas lógicos de manera estructurada. A continuación, se presentan las principales propiedades y ejemplos asociados:
    .row.justify-content-center.mb-4.mb-lg-0
      .col-lg-7.mb-lg-0
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span #[i Las 8 posibles combinaciones]
        .tabla-a.color-acento-contenido.mb-5(data-aos='fade-down')
          table.text-center
            thead(style="background-color: #F3F8FF ")
              tr
                th(style="width: 100px ") Variables o entrada
                th(style="width: 100px ") Función lógica o salida
            tbody.bg-white
              
              tr
                td A B C
                td F = (A + B) · C
              tr
                td 0 0 0
                td 0
              tr
                td 0 0 1
                td 0
              tr
                td 0 1 0
                td 0
              tr
                td 0 1 1
                td 1
              tr
                td 1 0 0
                td 0
              tr
                td 1 0 1
                td 1
              tr
                td 1 1 0
                td 0
              tr
                td 1 1 1
                td 1
      .col-lg-4.col-7: img(src='@/assets/curso/temas/18.png', alt='')
    p.mb-4(data-aos='fade-right') El álgebra de Boole se basa en un conjunto de propiedades y reglas fundamentales que permiten simplificar y analizar expresiones lógicas. Estas reglas son esenciales para optimizar circuitos y resolver problemas lógicos de manera estructurada. A continuación, se presentan las principales propiedades y ejemplos asociados.
    .row.justify-content-center
      .col-lg-7.mb-lg-0
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span #[i Propiedades o reglas del álgebra de Boole]
        .tabla-a.color-acento-contenido.mb-5(data-aos='fade-down')
          table.text-center
            thead(style="background-color: #F3F8FF ")
              tr
                th(style="width: 100px ") Propiedad o regla
                th(style="width: 100px ") Ejemplo
            tbody.bg-white
              
              tr
                td Simplificación de negación
                td A = A
              tr
                td Simplificación de igualdad
                td A + A = A
                  br
                  |A · A = A
              tr
                td Inversa
                td A + A = 1
                  br
                  |A · A = 0
              tr
                td Identidad
                td A + 0 = A
                  br
                  |A · 1 = A
                  br
                  |A + 1 = 1
                  br
                  |A · 0 = 0
              tr
                td Conmutativa
                td A + B = B + A
                  br
                  |A · B = B · A
              tr
                td Asociativa
                td A + (B + C) = (A + B) + C
                  br
                  |A · (B · C) = (A · B) · C
              tr
                td Distributiva
                td A · (B + C) = (A · B) + (A · C)
                  br
                  |(A + B) · C = (A · C) + (B · C)
              tr
                td Más reglas de simplificación o leyes de absorción
                td A + A · B = A
                  br
                  |A · (A + B) = A
              tr
                td Teorema de Morgan
                td A · B ) = A´ + B´
                  br
                  |A · B )= A´ · B´
      .col-lg-3.col-7: img(src='@/assets/curso/temas/19.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
