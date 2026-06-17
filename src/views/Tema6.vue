<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Manejo del alimento
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-4(data-aos="fade-right")
            p.mb-0 El manejo del alimento en piscicultura comprende el conjunto de actividades relacionadas con el almacenamiento, conservación, control de calidad, suministro y administración adecuada del concentrado dentro de la empresa acuícola. Estas labores son fundamentales para garantizar una nutrición balanceada, mejorar el crecimiento de los peces y optimizar la rentabilidad del sistema productivo.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t6/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-1.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 90px")
          p.mb-0 En la producción piscícola, el alimento balanceado representa entre el 55 % y el 65 % de los costos de producción, por lo que un manejo eficiente permite disminuir desperdicios, reducir pérdidas económicas y mejorar la conversión alimenticia.
      p.mb-5 El suministro de alimento debe realizarse de forma técnica y controlada, teniendo en cuenta factores como la especie, peso de los peces, temperatura del agua, calidad del alimento y condiciones ambientales del cultivo.
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Almacenamiento del alimento
      p.mb-5 El almacenamiento adecuado del alimento permite conservar sus propiedades nutricionales y prevenir la contaminación por humedad, hongos, insectos o roedores. Un manejo inadecuado del concentrado puede afectar la calidad nutricional, deteriorar las condiciones sanitarias del cultivo y generar pérdidas económicas.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones de la bodega de almacenamiento
                  p La bodega destinada al almacenamiento del alimento debe cumplir condiciones adecuadas de infraestructura y manejo para garantizar la conservación del concentrado. 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Mantenerse seca y ventilada:] evita humedad y deterioro del alimento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Evitar exposición directa al sol:] previene aumento de temperatura y pérdida de calidad nutricional. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tener pisos y paredes impermeables:] reduce riesgos de filtraciones y contaminación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Permanecer limpia y organizada:] favorece condiciones sanitarias adecuadas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contar con control de plagas:] disminuye contaminación por insectos y roedores. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Evitar filtraciones y humedad:] conserva la estabilidad y frescura del alimento balanceado. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recomendaciones para almacenar el alimento
                  p El alimento balanceado debe organizarse adecuadamente dentro de la bodega para evitar contaminación y deterioro. 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Almacenar sobre estibas de madera o plástico:] evita contacto directo con el piso y facilita ventilación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Mantener separado del piso y paredes:] reduce humedad y contaminación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Conservar en sacos cerrados e identificados:] facilita control del inventario y protege el alimento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Mantener alejado de sustancias tóxicas o agroquímicos:] previene contaminación química del concentrado. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Problemas ocasionados por mal almacenamiento
                  p Un almacenamiento inadecuado puede deteriorar el alimento y afectar directamente la salud de los peces y la productividad del cultivo. 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pérdida de nutrientes:] disminuye la calidad nutricional del alimento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aparición de hongos y bacterias:] incrementa riesgos sanitarios y contaminación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Formación de micotoxinas:] puede generar intoxicaciones y daños fisiológicos en los peces. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Rechazo del alimento por los peces:] reduce el consumo y afecta el crecimiento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contaminación del agua y enfermedades:] favorece deterioro ambiental y aparición de problemas sanitarios. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Control de calidad del alimento
      p.mb-5 El control de calidad consiste en verificar que el alimento conserve sus características físicas y nutricionales antes de ser suministrado a los peces. Este proceso permite prevenir problemas sanitarios, garantizar un adecuado aprovechamiento nutricional y mantener condiciones óptimas dentro del sistema productivo. Durante la inspección del alimento se deben evaluar diferentes características físicas y organolépticas que permitan determinar su estado de conservación.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Color normal del concentrado
                  p.mb-0.text-center Indica condiciones adecuadas de conservación y procesamiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Olor fresco y agradable
                  p.mb-0.text-center Permite detectar deterioro o contaminación del alimento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ausencia de humedad y moho
                  p.mb-0.text-center Previene proliferación de hongos y producción de micotoxinas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Buena consistencia del pellet
                  p.mb-0.text-center Favorece el consumo y reduce pérdidas por desintegración.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fecha de vencimiento vigente
                  p.mb-0.text-center Garantiza la calidad nutricional del concentrado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ausencia de grumos o compactación
                  p.mb-0.text-center Indica condiciones adecuadas de almacenamiento.
          .caja-3.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t6/img13.png', alt='').m-auto
              .col-xl.fit___box_container
                p La calidad del alimento influye directamente sobre diferentes aspectos productivos y sanitarios del cultivo.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Crecimiento de los peces:] un alimento de buena calidad favorece el desarrollo corporal.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Conversión alimenticia:] mejora el aprovechamiento de nutrientes y reduce desperdicios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Estado sanitario del cultivo:] disminuye riesgos de enfermedades y alteraciones fisiológicas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Calidad del agua:] reduce acumulación de residuos y contaminación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Productividad del sistema:] favorece mayor eficiencia y rentabilidad del cultivo.
      p.mb-5 La calidad del alimento puede deteriorarse por diferentes condiciones de almacenamiento y manejo. La siguiente tabla resume los principales factores de riesgo y sus medidas preventivas:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 16.
            span Factores que afectan la calidad del alimento
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Factor
                  th.ajuste-border-tabla.texto-left Consecuencia
                  th.texto-left Medida preventiva
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Humedad
                  td.ajuste-border-tabla.texto-left Desarrollo de hongos
                  td.texto-left Mantener bodega seca
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Altas temperaturas
                  td.ajuste-border-tabla.texto-left Pérdida de nutrientes
                  td.texto-left Evitar exposición solar
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mala ventilación
                  td.ajuste-border-tabla.texto-left Deterioro del concentrado
                  td.texto-left Garantizar circulación de aire
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Presencia de plagas
                  td.ajuste-border-tabla.texto-left Contaminación del alimento
                  td.texto-left Realizar control sanitario
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Almacenamiento prolongado
                  td.ajuste-border-tabla.texto-left Disminución de calidad
                  td.texto-left Aplicar rotación PEPS
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Contacto con químicos
                  td.ajuste-border-tabla.texto-left Riesgo de intoxicación
                  td.texto-left Separar insumos tóxicos
      p.mb-0 La aplicación de medidas preventivas permite conservar la calidad nutricional del alimento y reducir riesgos sanitarios dentro de la empresa piscícola.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Manejo de inventarios
      p.mb-5 El manejo de inventarios permite controlar adecuadamente el ingreso, almacenamiento y salida del alimento balanceado dentro de la empresa piscícola. Un control eficiente facilita la planificación productiva y evita pérdidas por vencimiento o deterioro del concentrado. Las principales actividades relacionadas con el manejo de inventarios son:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Registrar entradas y salidas de alimento
              p.mb-0.text-center Mantener control sobre el movimiento del inventario.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Controlar fechas de vencimiento
              p.mb-0.text-center Evitar utilización de alimento deteriorado o vencido.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Verificar cantidades disponibles
              p.mb-0.text-center Garantizar disponibilidad de concentrado para el cultivo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Programar pedidos oportunamente
              p.mb-0.text-center Evitar desabastecimiento de alimento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aplicar rotación del producto almacenado
              p.mb-0.text-center Favorecer el uso adecuado del concentrado más antiguo.
          p.mb-5 Un adecuado control de inventarios permite obtener diferentes beneficios dentro del sistema de producción.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img19.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Evitar pérdidas económicas
              p.mb-0.text-center Reduce desperdicios y deterioro del alimento.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img20.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reducir desperdicios
              p.mb-0.text-center Mejora el aprovechamiento del concentrado almacenado.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img21.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Garantizar disponibilidad de alimento
              p.mb-0.text-center Mantiene continuidad en la alimentación de los peces.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img22.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mejorar la planificación productiva
              p.mb-0.text-center Facilita la organización de compras y manejo del cultivo.
      p.mb-0 La adecuada gestión del inventario contribuye al control productivo y favorece la eficiencia operativa de la empresa acuícola.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Prevención de contaminación
      p.mb-5 La prevención de contaminación busca evitar que el alimento sea afectado por microorganismos, humedad, sustancias tóxicas o residuos contaminantes. Un adecuado manejo sanitario permite conservar la calidad del concentrado y proteger la salud de los peces. Las principales medidas preventivas son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener limpia la bodega
                  p.mb-0 Reducir riesgos de contaminación microbiológica y evitar la acumulación de residuos, polvo y materia orgánica que puedan deteriorar el alimento balanceado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evitar contacto del alimento con agua
                  p.mb-0 Prevenir humedad, formación de hongos, fermentación y pérdida de calidad nutricional del concentrado almacenado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 No almacenar agroquímicos junto al concentrado
                  p.mb-0 Evitar contaminación química del alimento y disminuir riesgos de intoxicación o afectaciones en la salud de los peces.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manipular adecuadamente los sacos
                  p.mb-0 Disminuir daños físicos, rupturas y contaminación externa durante el transporte, movilización y almacenamiento del alimento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Realizar limpieza y desinfección periódica
                  p.mb-0 Mantener condiciones sanitarias adecuadas dentro de la bodega y reducir la presencia de microorganismos, insectos y roedores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controlar humedad y temperatura
                  p.mb-0 Conservar la estabilidad nutricional del alimento y evitar alteraciones que afecten su frescura, textura y aceptación por parte de los peces.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Utilizar estibas para el almacenamiento
                  p.mb-0 Evitar el contacto directo de los sacos con el piso, facilitar la ventilación y disminuir riesgos de humedad y contaminación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicar rotación del inventario
                  p.mb-0 Garantizar que el alimento más antiguo sea utilizado primero y evitar almacenamiento prolongado o vencimiento del producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener buena ventilación
                  p.mb-0 Favorecer la circulación del aire y disminuir acumulación de calor y humedad dentro de la bodega.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controlar plagas de manera permanente
                  p.mb-0 Reducir daños ocasionados por insectos, aves y roedores que puedan contaminar o deteriorar el alimento almacenado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img32.png', alt='' style="max-width: 500px").m-auto
      .caja-3.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img44.png', alt='').m-auto
          .col-xl.fit___box_container
            p La contaminación del alimento puede generar diferentes problemas sanitarios y productivos.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Enfermedades en los peces:] afectación sanitaria y disminución del rendimiento productivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Intoxicaciones:] alteraciones fisiológicas y posibles mortalidades.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Disminución del crecimiento:] menor aprovechamiento nutricional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mortalidad:] incremento de pérdidas económicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Deterioro de la calidad del agua:] alteración de las condiciones ambientales del cultivo.
            p.mb-0 La prevención adecuada de contaminación contribuye al bienestar animal y al mantenimiento de condiciones óptimas dentro del sistema acuícola.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Control de plagas
      p.mb-5 El control de plagas es fundamental para evitar daños físicos y contaminación del alimento almacenado. La presencia de plagas puede deteriorar el concentrado y aumentar los riesgos sanitarios dentro de la empresa piscícola. Las principales plagas que afectan el alimento almacenado son:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img33.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Roedores
              p.mb-0.text-center Consumo y contaminación del alimento por excretas y orina.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img34.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gorgojos
              p.mb-0.text-center Deterioro y pérdida de calidad del concentrado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img35.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Hormigas
              p.mb-0.text-center Contaminación y dispersión de residuos alimenticios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img36.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Moscas
              p.mb-0.text-center Transmisión de microorganismos y contaminación sanitaria.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img37.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cucarachas
              p.mb-0.text-center Contaminación biológica y deterioro del alimento.
          p.mb-5 Las medidas de control deben aplicarse de manera permanente para mantener condiciones sanitarias adecuadas.
      .row.justify-content-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Limpieza permanente de la bodega").ajuste-cajaAcordion
              p.mb-3 Reducir condiciones favorables para plagas.
            .row(titulo="Eliminación de residuos de alimento").ajuste-cajaAcordion
              p.mb-3 Evitar proliferación de insectos y roedores.
            .row(titulo="Uso de trampas y cebos autorizados").ajuste-cajaAcordion
              p.mb-3 Controlar poblaciones de plagas.
            .row(titulo="Sellado de grietas y accesos").ajuste-cajaAcordion
              p.mb-3 Impedir ingreso de organismos contaminantes.
            .row(titulo="Programas periódicos de fumigación bajo supervisión técnica").ajuste-cajaAcordion
              p.mb-3 Mantener control sanitario de la bodega.
      p.mb-0 Las plagas pueden ocasionar consumo del alimento, contaminación por excretas y orina, transmisión de enfermedades y deterioro del concentrado.
      Separador
      #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.6 Rotación del alimento
      p.mb-0 La rotación del alimento consiste en utilizar primero el concentrado más antiguo antes de emplear el de ingreso reciente. Este procedimiento permite conservar la calidad nutricional y evitar pérdidas por vencimiento.
      p.mb-5 El sistema más utilizado es:
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 PEPS (Primero en Entrar, Primero en Salir)
      p.mb-5 La adecuada rotación del alimento genera importantes beneficios dentro del sistema productivo.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mantener alimento fresco
              p.mb-0.text-center Favorece el adecuado consumo y aprovechamiento nutricional.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img39.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Evitar vencimientos
              p.mb-0.text-center Reduce pérdidas económicas por deterioro del concentrado.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img40.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Conservar la calidad nutricional
              p.mb-0.text-center Mantiene el valor alimenticio del producto almacenado.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img41.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Disminuir pérdidas económicas
              p.mb-0.text-center Mejora la eficiencia del manejo del inventario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para una correcta rotación
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img42.png', alt='').m-auto
          .col-xl.fit___box_container
            p La implementación adecuada del sistema PEPS requiere organización y seguimiento permanente del alimento almacenado.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Organizar los sacos por fecha de ingreso:] facilitar la utilización del alimento más antiguo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Identificar lotes y fechas de vencimiento:] mantener control adecuado del inventario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b No almacenar alimento por largos periodos:] evitar deterioro nutricional y sanitario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Revisar periódicamente el estado del concentrado:] detectar oportunamente problemas de conservación.
            p.mb-0 La aplicación de buenas prácticas permite conservar la calidad del concentrado y optimizar el desempeño productivo de la empresa piscícola.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 17.
            span Buenas prácticas en el manejo del alimento
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Área de manejo
                  th.ajuste-border-tabla.texto-left Buena práctica
                  th.texto-left Beneficio obtenido
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Almacenamiento
                  td.ajuste-border-tabla.texto-left Uso de estibas y ventilación.
                  td.texto-left Conserva la calidad del alimento.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Control de calidad
                  td.ajuste-border-tabla.texto-left Revisar olor, color y textura.
                  td.texto-left Previene enfermedades.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                  td.ajuste-border-tabla.texto-left Llevar registros permanentes.
                  td.texto-left Mejora el control productivo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Prevención de contaminación
                  td.ajuste-border-tabla.texto-left Separar químicos y alimento.
                  td.texto-left Reduce riesgos sanitarios.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Control de plagas
                  td.ajuste-border-tabla.texto-left Limpieza y fumigación periódica.
                  td.texto-left Evita contaminación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rotación
                  td.ajuste-border-tabla.texto-left Aplicar sistema PEPS.
                  td.texto-left Disminuye pérdidas económicas.
      p El adecuado manejo del alimento dentro de la empresa piscícola constituye un aspecto esencial para garantizar una producción eficiente, rentable y sanitaria. La correcta conservación del concentrado, el control de calidad, el manejo de inventarios y la prevención de contaminación permiten optimizar el aprovechamiento nutricional y mejorar el desempeño productivo de los peces.
      p.mb-5 La aplicación de buenas prácticas de almacenamiento, control sanitario y rotación del alimento contribuye a reducir pérdidas económicas, prevenir enfermedades y mantener condiciones óptimas en el sistema de producción acuícola.
      .estilo___caja_4.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t6/img43.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Control productivo
            p.mb-0 Se invita a leer el documento #[b Anexo_Control productivo], donde se aborda el control productivo en piscicultura y las actividades necesarias para el seguimiento, evaluación y mejoramiento de los sistemas de cultivo acuícola.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_Control productivo.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema6',
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
