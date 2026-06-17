<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p Aplicación de Buenas Prácticas Piscícolas (BPP) y manejo sanitario en cultivos de aguas cálidas
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt=" Síntesis  sobre aplicación de buenas prácticas piscícolas (BPP) y manejo sanitario en cultivos de aguas cálidas, dividido en manejo técnico, manejo del cultivo, bienestar animal, alimentación y nutrición, y manejo alimenticio, con temas como preparación del estanque, fertilización, oxigenación, alimentación natural, cálculo de raciones y control del agua.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
