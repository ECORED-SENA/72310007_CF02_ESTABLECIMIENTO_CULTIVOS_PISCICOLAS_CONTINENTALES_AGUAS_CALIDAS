<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Manejo de la alimentación
      p.mb-5 La alimentación en piscicultura corresponde al conjunto de prácticas relacionadas con el suministro adecuado de nutrientes a los peces, teniendo en cuenta su especie, edad, peso, etapa de crecimiento y condiciones ambientales. Una correcta alimentación garantiza un adecuado crecimiento, fortalece el sistema inmunológico, mejora la conversión alimenticia y optimiza la rentabilidad de la empresa piscícola.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Los alimentos concentrados representan uno de los mayores costos dentro de la producción acuícola, alcanzando entre el 55 % y el 65 % de los costos totales de producción. Por esta razón, el manejo eficiente de las raciones alimenticias es fundamental para evitar desperdicios, disminuir la contaminación del agua y mejorar el rendimiento productivo.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-1.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 90px")
          p.mb-0 El exceso de alimento ocasiona acumulación de materia orgánica en el fondo del estanque, deterioro de la calidad del agua y pérdidas económicas. Por el contrario, una alimentación insuficiente retrasa el crecimiento de los peces y afecta la calidad final del producto. Una nutrición balanceada y un adecuado plan alimenticio constituyen la base para una producción piscícola eficiente, sostenible y rentable.
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Forma de alimentar
      p.mb-5 La forma de alimentar depende del sistema de producción, la especie cultivada, el tamaño de los peces y el nivel de tecnificación de la empresa piscícola. La selección adecuada del método de alimentación permite mejorar el aprovechamiento del alimento y favorecer condiciones óptimas de crecimiento.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales formas de alimentación
      p.mb-5 Existen diferentes métodos de alimentación utilizados en piscicultura. Cada uno presenta características particulares, ventajas y limitaciones según las condiciones del cultivo y el tamaño de los peces.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación en un solo sitio
                  p.mb-0 Consiste en suministrar el alimento en un único punto del estanque. Se utiliza principalmente en peces pequeños y sistemas intensivos. Facilita el control del consumo y permite evaluar el comportamiento alimenticio; sin embargo, genera acumulación de materia orgánica, competencia entre peces y crecimiento desigual.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación en “L”
                  p.mb-0 El alimento se distribuye en dos orillas consecutivas del estanque. Se recomienda para peces entre 50 y 100 gramos. Favorece una mejor distribución del alimento y reduce la competencia entre individuos, aunque requiere mayor supervisión durante la distribución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación periférica
                  p.mb-0 Consiste en alimentar alrededor de todo el estanque y se recomienda para peces mayores de 100 gramos. Disminuye la territorialidad y favorece una alimentación homogénea, pero demanda mayor tiempo de manejo en estanques amplios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentadores automáticos
                  p.mb-0 Son equipos que suministran alimento de manera programada y controlada. Reducen desperdicios, mejoran la eficiencia alimenticia, disminuyen costos de mano de obra y permiten mayor control de las raciones; no obstante, requieren inversión en equipos y mantenimiento periódico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La elección de la técnica de alimentación debe ajustarse a las condiciones del sistema de cultivo y a las necesidades nutricionales de los peces, con el fin de garantizar un adecuado desempeño productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que afectan la eficiencia alimenticia
      p.mb-5 La eficiencia alimenticia depende de múltiples factores relacionados con las condiciones ambientales, el manejo y la calidad de los organismos cultivados. Los siguientes aspectos influyen directamente en el aprovechamiento del alimento:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Calidad genética de los alevinos
              p.mb-0.text-center Determina el potencial de crecimiento y aprovechamiento nutricional.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Temperatura y calidad del agua
              p.mb-0.text-center Afectan el metabolismo y el consumo de alimento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Presentación del alimento
              p.mb-0.text-center Influye en la aceptación y digestibilidad del alimento balanceado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Técnica de alimentación utilizada
              p.mb-0.text-center Condiciona la distribución y aprovechamiento de las raciones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Frecuencia alimenticia
              p.mb-0.text-center Permite mantener un suministro adecuado de nutrientes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Tamaño del pellet
              p.mb-0.text-center Debe ajustarse al tamaño y etapa de desarrollo de los peces.
          p.mb-0 El manejo adecuado de estos factores permite mejorar la conversión alimenticia, reducir pérdidas económicas y mantener condiciones adecuadas dentro del sistema de producción acuícola.
          Separador
          #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.2 Horas de alimentación
          p.mb-5 Los peces presentan mejores procesos digestivos cuando las condiciones ambientales son adecuadas, especialmente en relación con la temperatura del agua. Por esta razón, la programación de los horarios de alimentación influye directamente en el crecimiento, la eficiencia alimenticia y el bienestar de los organismos: 
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img13.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recomendaciones generales").ajuste-cajaAcordion.ajuste-vineta
              p El manejo adecuado de los horarios de alimentación permite optimizar el consumo del alimento y disminuir desperdicios dentro del sistema de cultivo. 
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alimentar en las horas de mayor actividad metabólica:] favorece un mejor aprovechamiento del alimento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evitar el suministro de alimento en horas de frío extremo:] contribuye a mantener un adecuado consumo alimenticio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Distribuir la ración en varias porciones diarias:] mejora el aprovechamiento de los nutrientes y disminuye desperdicios. 
              p La aplicación de estas prácticas favorece un mejor aprovechamiento de los nutrientes y contribuye al mantenimiento de la calidad del agua.
            .row(titulo="Horarios recomendados").ajuste-cajaAcordion.ajuste-vineta
              p Los horarios de alimentación deben ajustarse a las condiciones ambientales y al comportamiento de consumo de los peces. 
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Mañana:] 9:00 a. m. – 10:00 a. m. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tarde:] 3:00 p. m. – 4:00 p. m. 
              p En sistemas extensivos y semiintensivos, el alimento no debe permanecer flotando más de 15 minutos. En sistemas intensivos, el tiempo ideal de consumo se encuentra entre 1 y 1.5 minutos.  El monitoreo del tiempo de consumo permite ajustar las raciones y evitar la acumulación de materia orgánica en el estanque.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Tipo de concentrado según etapa del pez
      p.mb-5 Los requerimientos nutricionales cambian según el crecimiento y desarrollo del pez. A medida que aumenta el peso corporal, disminuye el requerimiento de proteína, debido a los cambios fisiológicos y metabólicos propios de cada etapa productiva. La selección adecuada del concentrado favorece el crecimiento, mejora la conversión alimenticia y fortalece el estado sanitario de los peces.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requerimientos de proteína para tilapia y cachama
      p.mb-5 Los niveles de proteína recomendados varían de acuerdo con el rango de peso de los peces. La siguiente tabla presenta los requerimientos nutricionales para tilapia y cachama durante las diferentes etapas de crecimiento:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 10.
            span Niveles de proteína recomendados según el peso de los peces
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Rango de peso (g)
                  th.texto-left Nivel de proteína recomendado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Larva – 0.5 g
                  td.texto-left 40 – 45 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 0.5 – 10 g
                  td.texto-left 35 – 40 %
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 10 – 250 g
                  td.texto-left 30 – 35 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 250 g – talla comercial
                  td.texto-left 25 – 30 %
      p.mb-5 El ajuste adecuado de los niveles de proteína permite optimizar el desarrollo de los peces y reducir costos asociados a la alimentación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que influyen en el crecimiento
      p.mb-5 El crecimiento de los peces depende de diferentes factores nutricionales y ambientales que afectan el metabolismo y el aprovechamiento del alimento. Entre los más importantes se encuentran:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contenido energético de la dieta
                  p.mb-0.text-center Aporta la energía necesaria para el desarrollo y mantenimiento fisiológico.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Edad y peso del pez
                  p.mb-0.text-center Determinan las necesidades nutricionales en cada etapa productiva.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Temperatura del agua
                  p.mb-0.text-center Influye en el metabolismo y el consumo de alimento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Oxígeno disuelto
                  p.mb-0.text-center Favorece los procesos fisiológicos y digestivos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Calidad de la proteína
                  p.mb-0.text-center Mejora el aprovechamiento nutricional y el crecimiento corporal.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tasa de alimentación
                  p.mb-0.text-center Permite ajustar adecuadamente las raciones suministradas.
          p.mb-0 El control adecuado de estos factores contribuye a mejorar la productividad, mantener la salud de los peces y optimizar el desempeño del sistema piscícola.
          Separador
          #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.4 Tablas de cálculo de raciones alimenticias
      p.mb-5 Las tablas alimenticias permiten calcular la cantidad adecuada de alimento según el peso promedio de los peces y la temperatura del agua. Su utilización facilita el ajuste técnico de las raciones alimenticias y contribuye al mantenimiento de condiciones adecuadas dentro del sistema de cultivo. 
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img21.png', alt='').m-auto
          .col-xl.fit___box_container
            p El uso correcto de estas tablas permite:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mejorar el crecimiento:] favorece un desarrollo corporal adecuado y uniforme.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Evitar desperdicios:] reduce pérdidas de concentrado no consumido.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Reducir contaminación:] disminuye la acumulación de residuos orgánicos en el estanque.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Optimizar costos de producción:] mejora la eficiencia alimenticia y el aprovechamiento del alimento.
      p.mb-5 La aplicación adecuada de las tablas alimenticias favorece una producción más eficiente, sostenible y rentable.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación para mojarra
      p.mb-5 Las necesidades alimenticias de la mojarra varían según el peso corporal y la temperatura del agua. Por esta razón, es necesario ajustar diariamente las raciones suministradas. Para garantizar un adecuado manejo alimenticio en mojarra, se recomienda:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img22.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Suspender la alimentación por debajo de 15 °C y por encima de 32 °C
            p.mb-0.text-center Evitar alteraciones metabólicas y disminución del consumo alimenticio.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img23.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ajustar diariamente según temperatura y biomasa
            p.mb-0.text-center Mantener un suministro adecuado de nutrientes según las condiciones del cultivo.
      .caja-7.mb-5(data-aos="zoom-in")
        h5 Ejemplo de alimentación para mojarra
        p La siguiente tabla presenta un ejemplo de consumo diario recomendado para mojarra en diferentes rangos de temperatura:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 11.
          span Consumo diario recomendado de alimento para mojarra según peso y temperatura del agua
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Peso promedio (g)
                th.ajuste-border-tabla.texto-left 25 – 26 °C
                th.ajuste-border-tabla.texto-left 27 – 28 °C
                th.texto-left 29 – 30 °C
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 20
                td.ajuste-border-tabla.texto-left 1.825 g/pez/día
                td.ajuste-border-tabla.texto-left 1.92 g/pez/día
                td.texto-left 2.30 g/pez/día
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 100
                td.ajuste-border-tabla.texto-left 3.022 g/pez/día
                td.ajuste-border-tabla.texto-left 3.18 g/pez/día
                td.texto-left 3.81 g/pez/día
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 200
                td.ajuste-border-tabla.texto-left 4.143 g/pez/día
                td.ajuste-border-tabla.texto-left 4.36 g/pez/día
                td.texto-left 5.22 g/pez/día
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 300
                td.ajuste-border-tabla.texto-left 4.561 g/pez/día
                td.ajuste-border-tabla.texto-left 4.80 g/pez/día
                td.texto-left 5.75 g/pez/día
        p.mb-0 El ajuste oportuno de las raciones permite mejorar la conversión alimenticia y disminuir pérdidas por desperdicio de alimento.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación para cachama
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img24.png', alt='').m-auto
          .col-xl.fit___box_container
            p El monitoreo permanente del consumo permite ajustar las raciones y mantener condiciones adecuadas de crecimiento. Para el manejo alimenticio de cachama se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Ajustar la alimentación según temperatura:] mantener un adecuado aprovechamiento nutricional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mantener monitoreo constante del consumo:] identificar oportunamente cambios en el comportamiento alimenticio.
      .caja-7.mb-0(data-aos="zoom-in")
        h5 Ejemplo de alimentación para cachama
        p La siguiente tabla presenta un ejemplo de consumo diario recomendado para cachama en diferentes condiciones de temperatura:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 12.
          span Consumo diario recomendado de alimento para cachama según peso y temperatura del agua
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Peso promedio (g)
                th.ajuste-border-tabla.texto-left 25 – 26 °C
                th.ajuste-border-tabla.texto-left 27 – 28 °C
                th.texto-left 29 – 30 °C
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 20
                td.ajuste-border-tabla.texto-left 1.293 g/pez/día
                td.ajuste-border-tabla.texto-left 1.36 g/pez/día
                td.texto-left 1.62 g/pez/día
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 100
                td.ajuste-border-tabla.texto-left 5.311 g/pez/día
                td.ajuste-border-tabla.texto-left 5.59 g/pez/día
                td.texto-left 6.70 g/pez/día
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 200
                td.ajuste-border-tabla.texto-left 8.427 g/pez/día
                td.ajuste-border-tabla.texto-left 8.87 g/pez/día
                td.texto-left 10.64 g/pez/día
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 400
                td.ajuste-border-tabla.texto-left 12.18 g/pez/día
                td.ajuste-border-tabla.texto-left 12.82 g/pez/día
                td.texto-left 15.38 g/pez/día
        p.mb-0 La utilización de tablas alimenticias facilita la toma de decisiones y mejora el control nutricional dentro del sistema de producción.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Cálculo de raciones alimenticias
      p.mb-5 El cálculo de raciones permite determinar la cantidad exacta de alimento requerida diariamente por los peces según la biomasa existente en el estanque. Este procedimiento contribuye a optimizar el uso del alimento y mantener condiciones adecuadas de producción.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img25.png', alt='').m-auto
          .col-xl.fit___box_container
            h5 Fórmula básica
            p La cantidad diaria de alimento puede calcularse mediante la siguiente expresión:
            p #[b Cantidad diaria de alimento = (Número de peces vivos) × (Consumo según tabla)]
            p.mb-0 La aplicación correcta de esta fórmula permite ajustar las raciones de acuerdo con el crecimiento y la supervivencia de los peces.
      .caja-7.mb-0(data-aos="zoom-in")
        h5 Ejemplo práctico
        p En un estanque se sembraron 150 tilapias y actualmente sobreviven 140 peces. El peso promedio es de 260 gramos y la temperatura del agua es de 30 °C. Según la tabla alimenticia:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 13.
          span Datos utilizados para el cálculo de raciones alimenticias en tilapia
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Dato
                th.texto-left Valor
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Número de peces vivos
                td.texto-left 140
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Peso promedio
                td.texto-left 260 g
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura del agua
                td.texto-left 30 °C
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Consumo
                td.texto-left 5.6336 g/pez/día
        .row.justify-content-center.align-items-center.mb-3
          .col-xl.mb-4.mb-lg-0
            p Cálculo
            ul.fa-ul.estilo___ul.mb-4
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Operación: 140 × 5.6336
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado: 788.704 g
            p Resultado
            p.mb-0  La cantidad diaria de alimento requerida es de aproximadamente #[b 789 gramos por día].
            p Esta ración debe dividirse en dos porciones:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mañana 50 %
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tarde 50 %
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t5/img26.png', alt='').m-auto
        p.mb-0 La adecuada distribución de las raciones alimenticias favorece un mejor aprovechamiento del alimento, reduce desperdicios y contribuye al bienestar de los peces dentro del sistema de cultivo.
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Ajuste de la alimentación según condiciones
      p.mb-5 La alimentación en piscicultura debe ajustarse constantemente de acuerdo con las condiciones ambientales, sanitarias y productivas del cultivo. El monitoreo permanente de los peces y de la calidad del agua permite realizar modificaciones oportunas en las raciones alimenticias y mantener condiciones adecuadas de crecimiento y bienestar. El ajuste adecuado de la alimentación contribuye a mejorar la eficiencia productiva, disminuir pérdidas económicas y reducir riesgos sanitarios dentro del sistema piscícola.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que obligan a ajustar la alimentación
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img27.png', alt='').m-auto
          .col-xl.fit___box_container
            p Existen diferentes condiciones que pueden modificar el consumo de alimento y el comportamiento fisiológico de los peces. La siguiente tabla presenta los principales factores que obligan a realizar ajustes en la alimentación:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cambios de temperatura:] alteran el metabolismo y el consumo alimenticio de los peces.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Variaciones de oxígeno disuelto:] disminuyen el apetito y aumentan el estrés fisiológico.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mortalidad de peces:] modifica la biomasa total y la cantidad de alimento requerida.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cambios en el crecimiento:] obligan a recalcular las raciones según el peso promedio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Alteraciones sanitarias:] afectan el consumo y el aprovechamiento de nutrientes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Disminución del consumo:] indica posibles problemas ambientales o sanitarios dentro del cultivo.
            p.mb-0 La identificación oportuna de estos factores permite realizar ajustes precisos y mantener condiciones adecuadas de producción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones de ajuste
      p.mb-5 El manejo técnico de la alimentación requiere aplicar estrategias que permitan responder adecuadamente a las variaciones del sistema de cultivo.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reducir alimentación cuando el oxígeno sea bajo
                  p.mb-0.text-center Disminuir el estrés y evitar acumulación de alimento no consumido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Suspender alimentación durante enfermedades graves
                  p.mb-0.text-center Reducir el deterioro de la calidad del agua y facilitar la recuperación de los peces.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incrementar raciones según crecimiento y biomasa
                  p.mb-0.text-center Ajustar el suministro de nutrientes a las necesidades reales del cultivo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Realizar biometrías periódicas
                  p.mb-0.text-center Determinar el crecimiento y recalcular adecuadamente las raciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Observar comportamiento alimenticio diariamente
                  p.mb-0.text-center Detectar oportunamente alteraciones sanitarias o ambientales.
          p.mb-5 La aplicación de estas recomendaciones mejora el aprovechamiento del alimento y favorece el bienestar de los peces. El consumo alimenticio puede verse afectado por múltiples condiciones ambientales y de manejo. La siguiente tabla resume algunos de los principales factores y sus efectos sobre el sistema productivo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Factores que afectan el consumo de alimento
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Factor
                  th.ajuste-border-tabla.texto-left Efecto sobre el pez
                  th.texto-left Consecuencia productiva
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja temperatura
                  td.ajuste-border-tabla.texto-left Disminuye el metabolismo
                  td.texto-left Menor consumo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bajo oxígeno
                  td.ajuste-border-tabla.texto-left Estrés respiratorio
                  td.texto-left Pérdida de apetito
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sobrealimentación
                  td.ajuste-border-tabla.texto-left Acumulación de residuos
                  td.texto-left Contaminación del agua
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mala calidad del alimento
                  td.ajuste-border-tabla.texto-left Baja digestibilidad
                  td.texto-left Crecimiento deficiente
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Enfermedades
                  td.ajuste-border-tabla.texto-left Debilitamiento
                  td.texto-left Disminución del consumo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta densidad
                  td.ajuste-border-tabla.texto-left Competencia
                  td.texto-left Alimentación desigual
      p.mb-5 El monitoreo constante de estos factores permite mantener condiciones más estables dentro del cultivo y prevenir pérdidas productivas. La implementación de buenas prácticas alimenticias favorece la eficiencia productiva y contribuye al mantenimiento de condiciones sanitarias adecuadas.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Buenas prácticas de alimentación en piscicultura
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Práctica
                  th.ajuste-border-tabla.texto-left Objetivo
                  th.texto-left Beneficio
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alimentar en horarios fijos
                  td.ajuste-border-tabla.texto-left Regular el consumo
                  td.texto-left Mejor conversión alimenticia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dividir la ración diaria
                  td.ajuste-border-tabla.texto-left Facilitar la digestión
                  td.texto-left Menor desperdicio
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilizar alimento balanceado
                  td.ajuste-border-tabla.texto-left Cubrir requerimientos nutricionales
                  td.texto-left Mejor crecimiento
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Monitorear consumo
                  td.ajuste-border-tabla.texto-left Detectar problemas
                  td.texto-left Ajuste oportuno de raciones
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Realizar biometrías
                  td.ajuste-border-tabla.texto-left Calcular biomasa
                  td.texto-left Mayor precisión alimenticia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Almacenar correctamente el alimento
                  td.ajuste-border-tabla.texto-left Evitar deterioro
                  td.texto-left Conservación de calidad
      p.mb-5 La aplicación permanente de estas prácticas contribuye al aprovechamiento eficiente del alimento y mejora el desempeño del sistema piscícola.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Almacenamiento del alimento
      p.mb-5 El almacenamiento adecuado del concentrado evita pérdidas nutricionales y problemas sanitarios en los peces. Las condiciones de almacenamiento influyen directamente sobre la calidad y conservación del alimento balanceado.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Condiciones de la bodega  
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img33.png', alt='').m-auto
          .col-xl.fit___box_container
            p Para conservar adecuadamente el concentrado, la bodega debe cumplir las siguientes condiciones:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lugar seco y ventilado:] evita humedad y deterioro del alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Protección contra humedad y calor:] conserva la calidad nutricional del concentrado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uso de estibas:] evita contacto directo con el piso y facilita ventilación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Rotación constante del inventario:] previene almacenamiento prolongado y pérdida de calidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Separación de productos tóxicos:] reduce riesgos de contaminación del alimento.
            p.mb-0 El cumplimiento de estas condiciones favorece la conservación del alimento y disminuye pérdidas económicas.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Problemas ocasionados por mal almacenamiento 
      p.mb-5 Un almacenamiento inadecuado puede deteriorar el alimento y afectar directamente la salud de los peces.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img34.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Hongos y micotoxinas
            p.mb-0.text-center Pueden ocasionar daños hepáticos, disminución del crecimiento y mortalidades.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img35.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Plagas
            p.mb-0.text-center Generan contaminación del alimento, proliferación bacteriana y pérdidas económicas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img36.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img44.svg', alt='' style="width: 90px")
            .col-xl
              p.mb-0 Se recomienda implementar programas periódicos de limpieza y control de plagas para mantener condiciones adecuadas de almacenamiento. El manejo adecuado de la alimentación constituye uno de los pilares fundamentales de la producción piscícola, ya que influye directamente sobre el crecimiento, la salud, la conversión alimenticia y la rentabilidad del cultivo.
          p.mb-0 La correcta selección del alimento, el cálculo preciso de las raciones, el ajuste según las condiciones ambientales y el adecuado almacenamiento del concentrado permiten optimizar los recursos, disminuir pérdidas económicas y mejorar la productividad de la empresa piscícola.

</template>

<script>
export default {
  name: 'Tema5',
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
