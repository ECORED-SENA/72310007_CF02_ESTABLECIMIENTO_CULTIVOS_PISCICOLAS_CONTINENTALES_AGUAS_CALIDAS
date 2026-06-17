<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Bienestar animal en piscicultura
      p El bienestar animal en piscicultura comprende el conjunto de condiciones físicas, sanitarias, nutricionales y ambientales que permiten a los peces desarrollarse de manera saludable, reduciendo el estrés y favoreciendo su comportamiento natural durante todo el ciclo productivo.
      p.mb-5 Un adecuado manejo del bienestar animal mejora la supervivencia, el crecimiento, la conversión alimenticia y la productividad del cultivo, además de disminuir enfermedades y pérdidas económicas. Los principales componentes relacionados con el bienestar animal en piscicultura se presentan a continuación:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento del bienestar
                  p.mb-0 Nado normal, buen apetito, crecimiento uniforme, baja mortalidad y ausencia de lesiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo sanitario
                  p.mb-0 Bioseguridad, desinfección, control sanitario, prevención de enfermedades y manejo higiénico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones ambientales
                  p.mb-0 Oxígeno adecuado, pH estable, temperatura óptima, buena calidad del agua y control de amonio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control del estrés
                  p.mb-0 Evitar manipulación excesiva, reducir cambios bruscos y garantizar buena oxigenación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Densidad poblacional
                  p.mb-0 Evitar sobrepoblación, disminuir competencia y reducir enfermedades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Buenas prácticas de manejo
                  p.mb-0 Alimentación adecuada, limpieza del sistema, monitoreo permanente y registros productivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Bienestar animal: concepto y reconocimiento 
      p El bienestar animal se define como el estado físico y mental en el cual los peces pueden desarrollarse en condiciones adecuadas de salud, alimentación, confort y manejo, libres de sufrimiento innecesario, enfermedades y factores de estrés que afecten su crecimiento y productividad.
      p.mb-5 En piscicultura, el bienestar animal se reconoce mediante el seguimiento permanente del comportamiento, la apariencia física y la respuesta productiva de los peces. Un adecuado bienestar favorece el crecimiento, mejora la conversión alimenticia, reduce enfermedades y disminuye la mortalidad dentro del sistema de cultivo.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img7.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Indicadores de buen bienestar animal").ajuste-cajaAcordion.ajuste-vineta
              p Los peces que se encuentran en buenas condiciones de bienestar presentan características físicas y comportamentales normales, entre las cuales se destacan las siguientes:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Nado activo y coordinado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Buen consumo de alimento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Crecimiento uniforme. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Coloración normal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ausencia de lesiones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Baja mortalidad.
            .row(titulo="Signos de alerta o alteración del bienestar").ajuste-cajaAcordion.ajuste-vineta
              p Cuando existen problemas sanitarios, ambientales o de manejo, los peces pueden presentar cambios físicos y de comportamiento que indican alteraciones en su bienestar.
              p Entre los principales signos de alerta se encuentran los siguientes:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Pérdida de apetito. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Nado irregular. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Permanencia en la superficie. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Agrupamiento excesivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cambios de coloración. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Lesiones visibles.
      p.mb-5 Los factores que afectan el bienestar animal y las principales medidas preventivas se relacionan a continuación:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img8.png').m-auto
              h4.mb-3.estilo-text Baja oxigenación
              p.mb-0.text-center Genera estrés, mortalidad y bajo crecimiento; se previene mediante aireación adecuada y monitoreo diario.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img9.png').m-auto
              h4.mb-3.estilo-text Sobrepoblación
              p.mb-0.text-center Produce competencia, enfermedades y estrés; se controla mediante manejo adecuado de densidades.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img10.png').m-auto
              h4.mb-3.estilo-text Mala calidad del agua
              p.mb-0.text-center Provoca intoxicaciones y enfermedades; se previene con control de pH, amonio y temperatura.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img11.png').m-auto
              h4.mb-3.estilo-text Manipulación excesiva
              p.mb-0.text-center Ocasiona lesiones y debilitamiento; se reduce disminuyendo el tiempo fuera del agua.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img12.png').m-auto
              h4.mb-3.estilo-text Alimentación inadecuada
              p.mb-0.text-center Genera bajo crecimiento y disminución de defensas; se corrige utilizando alimento balanceado.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img13.png').m-auto
              h4.mb-3.estilo-text Cambios bruscos de temperatura
              p.mb-0.text-center Producen estrés fisiológico; se controlan manteniendo estabilidad térmica.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img14.png').m-auto
              h4.mb-3.estilo-text Presencia de patógenos
              p.mb-0.text-center Favorece enfermedades y mortalidad; se previene mediante desinfección y bioseguridad.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img15.png').m-auto
              h4.mb-3.estilo-text Acumulación de residuos
              p.mb-0.text-center Deteriora las condiciones ambientales del sistema; se controla mediante limpieza frecuente.
          p.mb-0 La implementación de buenas prácticas de bienestar animal contribuye a mejorar las condiciones sanitarias, optimizar el desempeño productivo y fortalecer la sostenibilidad de los sistemas piscícolas.
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Programa de manejo sanitario
          p El programa de manejo sanitario en piscicultura comprende el conjunto de medidas preventivas orientadas a conservar la salud de los peces, reducir la aparición de enfermedades y garantizar condiciones adecuadas de bienestar animal durante todo el ciclo productivo.
          p.mb-5 El manejo sanitario se fundamenta principalmente en la aplicación de buenas prácticas de bioseguridad, higiene, control ambiental y monitoreo permanente del cultivo. Un adecuado programa sanitario permite disminuir pérdidas económicas, mejorar el rendimiento productivo y asegurar una producción acuícola sostenible. Los objetivos, medidas preventivas y acciones sanitarias más importantes se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Objetivos del programa sanitario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Objetivos del programa sanitario
              p.mb-0 Prevenir enfermedades infecciosas, mantener peces sanos, reducir mortalidades, mejorar la productividad y garantizar bienestar animal.
        .py-3.py-md-4(titulo="Bioseguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad
              p.mb-0 Incluye control de ingreso de personas y animales, desinfección de equipos y materiales, uso de agua de buena calidad e instalación de filtros y mallas de protección para evitar el ingreso y propagación de agentes patógenos.
        .py-3.py-md-4(titulo="Higiene y limpieza")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Higiene y limpieza
              p.mb-0 Comprende retiro diario de peces muertos, limpieza de canales y estanques, eliminación de residuos orgánicos y desinfección periódica de equipos e infraestructura para disminuir contaminación y microorganismos perjudiciales.
        .py-3.py-md-4(titulo="Vigilancia sanitaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vigilancia sanitaria
              p.mb-0 Incluye observación diaria del comportamiento de los peces, identificación temprana de enfermedades y monitoreo permanente de la calidad del agua para detectar oportunamente problemas sanitarios.
      p.mb-0 La implementación continua de estas medidas sanitarias contribuye a fortalecer el bienestar animal, mejorar la productividad y garantizar mayor estabilidad dentro del sistema piscícola.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Prevención de enfermedades
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La prevención constituye la principal herramienta para mantener peces saludables y disminuir las pérdidas económicas en piscicultura. La mayoría de las enfermedades aparecen como consecuencia de malas condiciones ambientales, estrés, deficiencias nutricionales o prácticas inadecuadas de manejo. Un sistema de producción que conserva condiciones sanitarias y ambientales adecuadas reduce significativamente la presencia de agentes infecciosos y fortalece la resistencia natural de los peces.
          p.mb-0 A continuación, se presenta un video sobre las principales medidas preventivas y los signos comunes de enfermedad en sistemas de cultivo acuícola, orientado al fortalecimiento de las prácticas sanitarias y al bienestar de los organismos acuáticos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img20.png', alt='').m-auto
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Prevención y enfermedades en acuicultura
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Control de factores de estrés
      p.mb-5 El estrés es uno de los principales factores que afectan el bienestar, crecimiento y supervivencia de los peces. Cuando los organismos son sometidos a condiciones inadecuadas, disminuye su capacidad inmunológica y aumenta la susceptibilidad a enfermedades.Por esta razón, es fundamental controlar todos aquellos factores que puedan alterar el equilibrio fisiológico de los peces dentro del sistema de cultivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales factores de estrés
      p.mb-5 Existen diferentes condiciones ambientales y de manejo que pueden generar estrés en los peces. La siguiente información presenta los factores más relevantes y sus posibles efectos dentro del sistema de producción:
      .row.justify-content-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Deficiencia de oxígeno").ajuste-cajaAcordion
              p.mb-3 Disminución de la actividad fisiológica y aumento de mortalidad.
            .row(titulo="Manipulación excesiva").ajuste-cajaAcordion
              p.mb-3 Incremento del estrés y debilitamiento del sistema inmunológico.
            .row(titulo="Transporte inadecuado").ajuste-cajaAcordion
              p.mb-3 Alteraciones fisiológicas y mayor susceptibilidad a enfermedades.
            .row(titulo="Mala calidad del agua").ajuste-cajaAcordion
              p.mb-3 Afectación del crecimiento y deterioro de la salud.
            .row(titulo="Sobrepoblación").ajuste-cajaAcordion
              p.mb-3 Competencia por espacio y oxígeno, además de incremento del estrés.
            .row(titulo="Cambios bruscos de temperatura").ajuste-cajaAcordion
              p.mb-3 Alteración del metabolismo y afectación del bienestar de los peces.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias para reducir el estrés
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El control adecuado del ambiente y de las prácticas de manejo permite disminuir significativamente el estrés en los organismos acuáticos. Entre las principales estrategias se encuentran:
          br 
          ul.fa-ul.estilo___ul_bloque.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Mantener parámetros estables del agua. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Manipular cuidadosamente los peces. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Garantizar suficiente oxigenación. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Reducir ruidos y vibraciones. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Realizar un transporte adecuado. 
      p.mb-0 La aplicación constante de estas estrategias favorece el bienestar animal, mejora el desempeño productivo y reduce la aparición de enfermedades en los sistemas de cultivo
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Manejo adecuado de la densidad poblacional
      p La densidad poblacional corresponde al número de peces sembrados por unidad de área o volumen de agua dentro del sistema de cultivo. Este aspecto influye directamente en el crecimiento, bienestar, alimentación y estado sanitario de los organismos.
      p.mb-5 Mantener una densidad adecuada permite optimizar el uso del espacio y de los recursos disponibles, favoreciendo mejores resultados productivos y condiciones más estables dentro del cultivo.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Beneficios de una densidad adecuada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Beneficios de una densidad adecuada
              p.mb-0 Cuando la densidad de siembra es apropiada, los peces presentan mejores condiciones de desarrollo y bienestar. Entre los principales beneficios se encuentran el mejor crecimiento, la menor competencia por alimento y espacio, la reducción del estrés, la disminución de enfermedades y el mejor aprovechamiento del alimento. La adecuada planificación de la densidad poblacional contribuye al equilibrio del sistema y mejora las condiciones generales de producción.
        .py-3.py-md-4(titulo="Consecuencias de la sobrepoblación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Consecuencias de la sobrepoblación
              p.mb-0 El exceso de peces dentro del estanque genera deterioro de las condiciones ambientales y afecta negativamente la salud de los organismos. Entre las principales consecuencias de la sobrepoblación se encuentran la disminución del oxígeno disuelto, el crecimiento desigual, el aumento de mortalidad, la mayor transmisión de enfermedades y el deterioro de la calidad del agua. El control de la densidad poblacional permite mantener condiciones ambientales adecuadas y favorece la sostenibilidad del sistema acuícola.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Condiciones óptimas del ambiente
      p.mb-5 Las condiciones ambientales influyen directamente en el bienestar, crecimiento y desarrollo de los peces. Por esta razón, es necesario monitorear permanentemente los parámetros físicos y químicos del agua para garantizar un ambiente adecuado dentro del sistema de cultivo. Los principales parámetros ambientales y sus rangos recomendados se presentan en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Parámetros recomendados
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Parámetro
                  th.ajuste-border-tabla.texto-left Rango recomendado
                  th.texto-left Importancia
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Oxígeno disuelto
                  td.ajuste-border-tabla.texto-left Mayor a 4 mg/L
                  td.texto-left Favorece la respiración y el metabolismo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold pH
                  td.ajuste-border-tabla.texto-left 6.5 – 8.5
                  td.texto-left Mantiene el equilibrio fisiológico.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
                  td.ajuste-border-tabla.texto-left Según la especie
                  td.texto-left Influye en el crecimiento y la alimentación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Transparencia
                  td.ajuste-border-tabla.texto-left 30 – 40 cm
                  td.texto-left Favorece la producción de plancton.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Amonio
                  td.ajuste-border-tabla.texto-left Bajo
                  td.texto-left Evita efectos tóxicos en los peces.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nitritos
                  td.ajuste-border-tabla.texto-left Bajos
                  td.texto-left Previene intoxicaciones y alteraciones fisiológicas.
      p.mb-5 El monitoreo constante de estos parámetros contribuye a mantener condiciones estables y reduce el riesgo de enfermedades o alteraciones productivas. La implementación de buenas prácticas de manejo favorece la sostenibilidad del sistema productivo y fortalece las condiciones de bienestar animal en piscicultura.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 7.
            span Buenas prácticas de bienestar animal en piscicultura
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Área de manejo
                  th.ajuste-border-tabla.texto-left Buena práctica
                  th.texto-left Beneficio obtenido
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alimentación
                  td.ajuste-border-tabla.texto-left Suministrar alimento balanceado y en horarios fijos
                  td.texto-left Mejor crecimiento y conversión alimenticia.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Calidad del agua
                  td.ajuste-border-tabla.texto-left Monitorear oxígeno, pH y temperatura
                  td.texto-left Menor estrés y mortalidad.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sanidad
                  td.ajuste-border-tabla.texto-left Desinfectar instalaciones y equipos
                  td.texto-left Prevención de enfermedades.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Densidad poblacional
                  td.ajuste-border-tabla.texto-left Evitar sobrepoblación
                  td.texto-left Mayor bienestar y crecimiento uniforme.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Manejo de peces
                  td.ajuste-border-tabla.texto-left Reducir manipulación excesiva
                  td.texto-left Menor estrés y lesiones.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Infraestructura
                  td.ajuste-border-tabla.texto-left Mantener estanques y filtros limpios
                  td.texto-left Mejor ambiente de cultivo.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bioseguridad
                  td.ajuste-border-tabla.texto-left Controlar el ingreso de animales y personas
                  td.texto-left Disminución de riesgos sanitarios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Monitoreo
                  td.ajuste-border-tabla.texto-left Revisar diariamente el comportamiento de los peces
                  td.texto-left Detección temprana de problemas.
      p.mb-0 El bienestar animal en piscicultura constituye un componente esencial para garantizar sistemas de producción eficientes, sostenibles y responsables. La aplicación de buenas prácticas de manejo sanitario, control ambiental, alimentación adecuada, manejo de densidades y prevención del estrés permite mejorar la salud, el crecimiento y la productividad de los peces. Un sistema de cultivo que prioriza el bienestar animal favorece tanto la sostenibilidad productiva como la calidad final del producto acuícola. 

</template>

<script>
export default {
  name: 'Tema3',
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
