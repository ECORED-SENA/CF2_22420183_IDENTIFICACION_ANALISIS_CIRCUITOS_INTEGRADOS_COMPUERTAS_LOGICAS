<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Los sistemas numéricos son métodos que permiten representar valores numéricos de diversas formas, siendo el sistema decimal el más utilizado en la vida cotidiana debido a su base de 10 dígitos (0-9). Otros sistemas, como el binario, octal, hexadecimal y romano, son ampliamente empleados en diferentes contextos, desde sistemas electrónicos hasta representaciones históricas. Comprender estos sistemas facilita la conversión de números entre bases y su aplicación en diversos campos.
        .p-4.mb-4(style="background-color: #F5E5FE ")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.svg', alt='' style='width: 110px')
            .col-lg: p.mb-0 El álgebra de Boole es fundamental en el ámbito digital, ya que utiliza números binarios (0 y 1) para modelar operaciones lógicas. Este sistema algebraico permite trabajar con circuitos integrados, predecir el comportamiento de sistemas electrónicos y simplificar expresiones lógicas. A través de operaciones básicas como suma lógica (+), multiplicación lógica (·) y negación (¬), el álgebra de Boole optimiza el diseño de sistemas digitales y electrónicos.
        .row.justify-content-center.align-items-center
          .col-lg.mb-lg-0.mb-3: p.mb-0 Las propiedades del álgebra de Boole, como la identidad, inversa, conmutativa y el teorema de Morgan, proporcionan herramientas esenciales para simplificar y resolver expresiones lógicas complejas. Estas propiedades no solo facilitan el análisis y diseño de circuitos, sino que también son clave para optimizar procesos en la programación y el funcionamiento de sistemas electrónicos, consolidando su relevancia en la ingeniería y la informática.
          .col-lg-auto: img(src='@/assets/curso/temas/2.svg', alt='' style='width: 85px')
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
