<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas numéricos
    .row.justify-content-center.mb-5.g-0
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #F5E5FE ").h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-lg.mb-lg-0.mb-3.order-2: p.mb-0 Existen algunas formas de representar números, es decir, un mismo número se puede representar de varias formas. Por eso se habla de sistemas numéricos. El más común es el sistema decimal, que se utiliza en la vida cotidiana y que se representa con 10 números del #[b 0 al 9 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).]
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.svg', alt='' style='width: 85px')
          p.mb-0 A continuación, se realiza un comparativo de los diferentes sistemas numéricos y en el estudio del material se explicará cómo conocer la equivalencia de un número en los diferentes sistemas.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Sistemas numéricos 
        .tabla-a.color-acento-contenido.mb-5
          table
            thead(style="background-color: #F3F8FF ")
              tr
                th Binario
                th Octal
                th Decimal
                th Hexadecimal
                th Romano
            tbody
              tr
                td 0001
                td 01
                td 1
                td 1
                td I
              tr
                td 0101
                td 05
                td 5
                td 5
                td V
              tr
                td 1010
                td 12
                td 10
                td A
                td X
              tr
                td 1111
                td 17
                td 15
                td F
                td XV
    .titulo-tres: h3 Sistema decimal
    p.mb-4 Se llama decimal porque utiliza diez dígitos (0, 1, 2...9) para representar cualquier número. El peso está dado en potencias de 10. La importancia de los dígitos está acorde a su ubicación: el dígito que esté más hacia la izquierda tiene mayor importancia.
      br
      br
      |A continuación se presenta un ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .tarjeta(style="background-color: #D4F0E0")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-3.border-3
              .p-5(style="border-right: 2px solid #67987C")
                p #[b Ejemplo:]
                  br
                  |2158 = 2000 + 100 + 50 + 8
                  br
                  |2158 = 21000 + 1100 + 510 + 8
                  br
                  |2158 = 210³ + 110² + 510¹ + 8*10⁰
            .col-lg-6
              .p-5
                p Los cuatro dígitos se multiplican por una potencia de 10 y cuanto más a la izquierda se sitúe el dígito, mayor será la potencia de diez por la que se multiplica.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/6.svg', alt='')
    .titulo-tres: h3 Sistema octal
    p.mb-4 Utiliza solo ocho dígitos (0, 1, 2...7) para representar cualquier número. El peso está dado en potencias de 8.
      br
      br
      |A continuación se representa el número 4156 que está octal en decimal:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #D4F0E0 ")
          .row.justify-content-center.mb-3
            .col-lg-7.mb-lg-0.mb-3.order-2
              p #[b Ejemplo:]
                br
                | 4156 = 48³ + 18² + 58¹ + 68⁰
                br
                |= 2048 + 64 + 40 + 6
                br
                |#[b = 2158 (decimal)]
                br
                br
                |Para convertir de decimal a octal:
                br
                |• 2158/8 = 269 y sobran 6
                br
                |• 269/8 = 33 y sobran 5
                br
                |• 33/8 = 4 y sobra 1
                br
                |• 4/8 = No está, entonces el residuo es 4

                br
                |#[b 2158 (decimal) = 4156 (octal).]
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='' style='width: 100px') 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/8.svg', alt='')
    .titulo-tres: h3 Sistema hexadecimal
    p.mb-3 Se llama hexadecimal porque utiliza dieciséis dígitos (0, 1, 2...9, A, B, C, D, E, F).
    p.mb-4 El peso está dado en potencias de 16.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #D4F0E0 ")
          .row.justify-content-center.mb-3
            .col-lg-7.mb-lg-0.mb-3.order-2
              p.mb-0 #[b Ejemplo:]
                br
                |2158/16 = 134 y sobran 14 = E
                br
                |134/16 = 8 y sobran 6
                br
                |8/16 = No está, entonces el residuo es 8
                br
                |2158 en decimal es #[b igual a 86E en hexadecimal ]
                br
                |86C = 8*162 + 6*161 + E*160 
                br
                |= 8*(256) + 6*(16) + 14*(1) 
                br
                |= 2048 + 96 + 14 = #[b 2158 decimal]
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='' style='width: 100px') 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/9.svg', alt='')
    .titulo-tres: h3 Sistema numérico romano
    p.mb-4 Este sistema ya tiene establecida una tabla de conversión o equivalencias.
    .row.justify-content-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Sistema de numeración romano 
        .tabla-a.color-acento-contenido.mb-5
          table.text-center
            thead(style="background-color: #F3F8FF ")
              tr
                th(style="width: 100px ") Decimal
                th(style="width: 100px ") Romano
            tbody
              tr
                td 1
                td I
              tr
                td 10
                td X
              tr
                td 50
                td L
              tr
                td 100
                td C
              tr
                td 500
                td D
              tr
                td 1000
                td M
      .col-lg-6.col-lg-7: img(src='@/assets/curso/temas/10.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #D4F0E0 ")
          .row.justify-content-center.mb-3
            .col-lg-10.mb-lg-0.mb-3.order-2
              p.mb-0 #[b Ejemplo:]
                br
                |2158 = 2000 + 100 + 50 + 8
                br
                |=   MM       C      L    VII
                br
                |= MMCLVIII (romano).
                br
                |2158 en decimal es igual a MMCLVII en Romano
            .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='' style='width: 100px') 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
