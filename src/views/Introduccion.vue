<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La piscicultura constituye una actividad productiva orientada a la cría y manejo de peces bajo condiciones controladas, con el propósito de garantizar el aprovechamiento sostenible de los recursos acuáticos y contribuir a la seguridad alimentaria. Su desarrollo requiere la aplicación de prácticas técnicas relacionadas con el manejo del agua, la alimentación, la sanidad y el bienestar animal, permitiendo mejorar la productividad y las condiciones de cultivo. 
      .row.justify-content-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 El adecuado manejo piscícola involucra procesos de preparación del estanque, control ambiental, programación de actividades productivas y seguimiento permanente de las condiciones del sistema. Estas acciones permiten reducir riesgos sanitarios, disminuir pérdidas económicas y favorecer el crecimiento saludable de los peces durante las diferentes etapas del cultivo.
          p.mb-0 Asimismo, la alimentación y la nutrición representan componentes fundamentales dentro de la producción acuícola, debido a su influencia directa sobre el crecimiento, la supervivencia y el rendimiento productivo. La implementación de buenas prácticas de manejo, bienestar animal y control sanitario contribuye al fortalecimiento de sistemas piscícolas más sostenibles, organizados y técnicamente eficientes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      
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
