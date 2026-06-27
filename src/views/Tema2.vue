<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Manejo del cultivo piscícola
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El manejo del cultivo piscícola comprende el conjunto de actividades técnicas, administrativas, sanitarias y productivas orientadas a garantizar el adecuado crecimiento, supervivencia y rendimiento de los organismos acuáticos durante todo el ciclo de producción. Un manejo eficiente permite optimizar los recursos disponibles, mejorar la conversión alimenticia, reducir riesgos sanitarios y aumentar la rentabilidad del sistema piscícola.
          p.mb-0 Dentro de este proceso se incluyen actividades relacionadas con la fertilización del estanque, la siembra de alevinos, la alimentación, el monitoreo de la calidad del agua, el control sanitario, la programación de labores, el manejo de registros productivos y la supervisión permanente de las condiciones del cultivo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='').m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Buenas prácticas de piscicultura para la presiembra o fertilización del estanque
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 La fertilización del estanque es una práctica fundamental en piscicultura, ya que permite incrementar la productividad natural del agua mediante el desarrollo de fitoplancton y zooplancton, organismos microscópicos que constituyen una importante fuente de alimento natural para los peces.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img2.jpg', alt='').m-auto
        .col-xl
          figure.mb-1.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 90px")
          p El objetivo principal de esta labor es estimular la producción biológica del estanque antes de la siembra, favoreciendo la disponibilidad de nutrientes y mejorando las condiciones ecológicas del sistema de cultivo.
          p.mb-0 La fertilización puede realizarse utilizando abonos orgánicos o fertilizantes inorgánicos, dependiendo de la disponibilidad de materiales y de las necesidades del cultivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Abonos orgánicos
      p.mb-5 Los fertilizantes orgánicos están constituidos principalmente por estiércoles de origen animal, los cuales aportan nutrientes esenciales y favorecen el crecimiento del plancton. Los estiércoles más utilizados corresponden a los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Cantidad semanal de estiércol 
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de estiércol
                  th.texto-left Cantidad semanal por hectárea
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bovino o equino
                  td.texto-left 675 kg
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Porcino
                  td.texto-left 600 kg
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aves de corral
                  td.texto-left 170 kg
      p.mb-5 El estiércol bovino y porcino son los más recomendados debido a que presentan menores riesgos de toxicidad. El estiércol de aves contiene altos niveles de nitrógeno, por lo que debe utilizarse con precaución y únicamente cuando no existan otras alternativas disponibles. Cuando los estanques poseen dimensiones menores a una hectárea, es necesario ajustar las cantidades mediante conversiones proporcionales de acuerdo con el área superficial del estanque. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los estiércoles pueden aplicarse de diferentes formas:
          br 
          ul.fa-ul.estilo___ul_bloque.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Esparcidos sobre el fondo antes del llenado. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Distribuidos homogéneamente sobre la superficie del agua. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Colocados en costales o canastillas sumergidas para una liberación gradual de nutrientes. 
      p.mb-5 Una práctica recomendada consiste en esparcir el estiércol seco sobre el fondo del estanque y cubrirlo ligeramente con tierra antes del llenado, evitando así que el material flote.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fertilizantes inorgánicos
      p.mb-5 Los fertilizantes químicos o inorgánicos contienen concentraciones elevadas de nitrógeno, fósforo y potasio, por lo que se requieren menores cantidades en comparación con los abonos orgánicos. Entre los fertilizantes más utilizados se encuentran los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Fertilizantes químicos utilizados en la fertilización del estanque 
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Fertilizante
                  th.texto-left Aplicación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Superfosfato simple
                  td.texto-left 34 kg/ha semanal o 135 kg/ha mensual
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Superfosfato triple
                  td.texto-left 12.5 kg/ha semanal o 50 kg/ha mensual
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 10-30-10
                  td.texto-left 22.5 kg/ha semanal o 90 kg/ha mensual
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 10-20-10
                  td.texto-left 34 kg/ha semanal o 135 kg/ha mensual
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 11-53-0
                  td.texto-left 13 kg/ha semanal o 51 kg/ha mensual
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 18-46-0
                  td.texto-left 14.5 kg/ha semanal o 58 kg/ha mensual
      p.mb-5 La fertilización semanal suele ser más eficiente que la mensual, debido a que mantiene una producción constante de fitoplancton y estabilidad en el ecosistema acuático. Los fertilizantes químicos pueden aplicarse de las siguientes formas:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img6.png', alt='').m-auto
        .col-xl
          .caja-6.mb-3(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img7.svg', alt='' style="width: 58px").m-auto
              .col-xl.col-md-10
                p.mb-0 Durante el llenado del estanque. 
          .caja-6.mb-3(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img7.svg', alt='' style="width: 58px").m-auto
              .col-xl.col-md-10
                p.mb-0 Con el estanque parcialmente lleno. 
          .caja-6.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img7.svg', alt='' style="width: 58px").m-auto
              .col-xl.col-md-10
                p.mb-0 Mediante costales o bolsas de malla fina ubicadas en la entrada del agua. 
      p.mb-5 Para garantizar buenos resultados durante la fertilización del estanque, es importante considerar varias recomendaciones técnicas y ambientales que contribuyen al equilibrio biológico del sistema.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img8.png', alt='').m-auto
          .col-xl.fit___box_container
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Evitar el exceso de malezas acuáticas:] favorecer la penetración de luz y el aprovechamiento de nutrientes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mantener la transparencia del agua entre 13 y 45 cm:] garantizar adecuada producción de fitoplancton.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Realizar encalamiento cuando el pH sea menor de 5.9:] corregir condiciones de acidez del agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b No fertilizar estanques con exceso de turbidez:] evitar disminución de la productividad biológica.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Evitar fertilizar estanques con rebosaderos activos:] reducir pérdidas de fertilizante.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Implementar cultivos agrícolas en terrenos pobres:] mejorar progresivamente la fertilidad del suelo.
      p.mb-0 Cuando el fitoplancton disminuye y el agua presenta excesiva transparencia, es necesario realizar nuevas aplicaciones de fertilizante para recuperar la productividad natural del estanque.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Manejo en la siembra de alevinos
      p.mb-5 La siembra de alevinos constituye una etapa crítica dentro del cultivo piscícola, debido a que de ella depende el adecuado establecimiento de la población y el éxito inicial de la producción. Antes de la siembra, el estanque debe encontrarse completamente preparado, con parámetros fisicoquímicos adecuados y buenas condiciones sanitarias.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Selección y adquisición de alevinos
      p.mb-5 Los alevinos deben adquirirse en centros piscícolas reconocidos que garanticen calidad genética, buen estado sanitario y adecuado manejo reproductivo. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img9.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los peces seleccionados deben presentar las siguientes características:
          br 
          ul.fa-ul.estilo___ul_bloque.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Coloración uniforme. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Cuerpo brillante. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Buena movilidad. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Nado activo en grupo. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Ausencia de deformidades o lesiones. 
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Baja mortalidad durante el transporte.
      p.mb-5 Se recomienda que el tiempo de transporte no supere las seis horas. Sin embargo, con adecuado suministro de oxígeno y protección térmica, los peces pueden resistir periodos mayores.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Transporte de alevinos
      p.mb-5 El transporte puede realizarse en bolsas plásticas con agua y oxígeno o en tanques y recipientes con sistemas de aireación, dependiendo de la distancia y de la cantidad de peces transportados. Las principales condiciones que deben garantizarse durante el transporte son las siguientes:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Bolsas resistentes y sin perforaciones
                  p.mb-0.text-center Evitar pérdidas de agua y daños durante el traslado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Una tercera parte de agua y dos terceras partes de oxígeno
                  p.mb-0.text-center Mantener adecuada disponibilidad de oxígeno para los peces.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Protección contra calor y luz directa
                  p.mb-0.text-center Reducir estrés y cambios bruscos de temperatura.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uso de cajas térmicas con hielo en viajes largos
                  p.mb-0.text-center Mantener estabilidad térmica durante el transporte.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recepción y aclimatación
          p.mb-5 Los alevinos deben recibirse preferiblemente en horas de la mañana para facilitar el seguimiento de su comportamiento durante el día. Al momento de la recepción, es importante verificar los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img15.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Estado físico de los peces. 
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img16.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Nivel de oxígeno en las bolsas. 
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img17.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Comportamiento y movilidad. 
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img18.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Presencia de mortalidad. 
      p.mb-5 La aclimatación se realiza colocando las bolsas sobre el agua del estanque durante 15 a 20 minutos para igualar la temperatura. Posteriormente, se incorpora gradualmente agua del estanque dentro de las bolsas antes de liberar lentamente los peces, permitiendo que naden por sus propios medios y reduciendo así el estrés.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protección y cuidados iniciales
      p.mb-5 Durante las primeras etapas del cultivo, los alevinos son altamente vulnerables a depredadores como garzas y martines pescadores. Por esta razón, se recomienda instalar mallas antipájaros sobre el estanque durante los primeros dos meses. El primer día no debe suministrarse alimento. En cambio, se debe realizar seguimiento cuidadoso al comportamiento de los peces para evaluar su adaptación al nuevo ambiente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Densidad de siembra
      p.mb-5 La densidad de siembra depende de múltiples factores técnicos relacionados con las características del sistema de producción y las necesidades de la especie cultivada.
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img19.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Especie cultivada
              p.mb-0.text-center Determina requerimientos de espacio y comportamiento productivo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img20.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Disponibilidad de agua
              p.mb-0.text-center Condiciona la capacidad de renovación y calidad del agua.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Capacidad de oxigenación
              p.mb-0.text-center Influye en la cantidad de peces que puede soportar el sistema.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Sistema de producción
              p.mb-0.text-center Define el nivel de intensificación del cultivo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Nivel tecnológico del cultivo
              p.mb-0.text-center Permite mayor control ambiental y productivo.
          p.mb-0 La sobrepoblación puede generar múltiples efectos negativos sobre el sistema piscícola y el bienestar de los peces, debido a que incrementa la competencia por espacio, oxígeno y alimento dentro del estanque. Esta condición favorece la aparición de estrés, disminuye el crecimiento de los organismos, reduce la disponibilidad de oxígeno disuelto y aumenta el riesgo de enfermedades, afectando la productividad y estabilidad del cultivo.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Labores de manejo en la empresa piscícola
      p.mb-5 El piscicultor debe realizar de manera periódica diversas actividades para garantizar el adecuado funcionamiento del cultivo, mantener condiciones sanitarias óptimas y favorecer el crecimiento saludable de los peces durante todo el ciclo productivo. Estas labores permiten detectar oportunamente problemas ambientales, sanitarios o productivos que puedan afectar el rendimiento del sistema piscícola. Las actividades de manejo se desarrollan de acuerdo con una programación periódica que facilita el control técnico y operativo de la unidad de producción.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diarias
                  p.mb-0 Revisar el estado general del estanque; analizar el comportamiento de los peces; detectar signos de falta de oxígeno o enfermedades; retirar peces muertos; vigilar cambios de coloración del agua; eliminar residuos y malezas acuáticas; ahuyentar aves depredadoras; supervisar el suministro y almacenamiento del alimento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Semanales
                  p.mb-0 Realizar limpieza de filtros y canales para mantener el adecuado flujo del agua; efectuar limpieza de bodegas y zonas de trabajo con el fin de conservar condiciones higiénicas; planificar las actividades técnicas y operativas de la semana siguiente; solicitar y controlar el suministro de alimento balanceado requerido para el cultivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Quincenales
                  p.mb-0 Ejecutar biometrías para evaluar crecimiento y desarrollo de los peces; ajustar las raciones alimenticias de acuerdo con el peso promedio y comportamiento productivo; evaluar los registros productivos del sistema; realizar limpieza de bordes y canales del estanque para conservar condiciones adecuadas de operación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mensuales
                  p.mb-0 Elaborar informes productivos y administrativos del cultivo; reparar mallas deterioradas para fortalecer la bioseguridad; realizar adecuaciones y mantenimiento general de la infraestructura piscícola.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Semestrales
                  p.mb-0 Desarrollar actividades de siembra y cosecha de peces; reparar estructuras del estanque; ejecutar procesos generales de limpieza y desinfección; preparar nuevamente el sistema para el siguiente ciclo productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img28.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La correcta ejecución de estas labores contribuye a mantener la estabilidad del sistema de cultivo, optimizar el crecimiento de los peces, reducir riesgos sanitarios y mejorar la productividad de la empresa piscícola.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Programación de actividades productivas
      p.mb-5 La programación de actividades permite organizar adecuadamente todas las labores del cultivo y optimizar los recursos humanos, técnicos y económicos disponibles dentro de la empresa piscícola. Una adecuada planificación facilita el cumplimiento oportuno de las actividades productivas y reduce riesgos operativos y sanitarios. Las principales actividades programadas dentro del cultivo piscícola se presentan a continuación:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Alimentación
          p.mb-0.text-center Diaria
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img30.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Monitoreo del agua
          p.mb-0.text-center Diario
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img31.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Limpieza
          p.mb-0.text-center Semanal
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img32.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Biometrías
          p.mb-0.text-center Quincenal
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img33.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Fertilización
          p.mb-0.text-center Según necesidad
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img34.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Tratamientos sanitarios
          p.mb-0.text-center Según diagnóstico
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img35.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Cosecha
          p.mb-0.text-center Final del ciclo
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img36.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La planificación de las actividades productivas aporta múltiples beneficios para el adecuado funcionamiento del sistema de cultivo. Entre los principales beneficios se encuentran los siguientes:
          br 
          ul.fa-ul.estilo___ul_bloque.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Facilita el control de costos. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Permite programar la adquisición de insumos. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Garantiza disponibilidad oportuna de alimento. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Favorece la programación de mano de obra. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Contribuye a prevenir problemas sanitarios.  
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Manejo de registros productivos
      p.mb-5 Los registros productivos constituyen herramientas fundamentales para evaluar el desempeño del cultivo y tomar decisiones técnicas oportunas durante el ciclo de producción. Estos documentos permiten mantener control detallado de las actividades realizadas y del comportamiento productivo de los peces. Entre los registros más importantes se encuentran los siguientes:
      .row.justify-content-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Registro de siembra").ajuste-cajaAcordion
              p.mb-3 Controlar la cantidad, fecha y características de los peces sembrados. Este registro permite llevar seguimiento de la densidad de siembra, especie cultivada, tamaño inicial de los organismos y condiciones del inicio del ciclo productivo. Además, facilita la planificación del manejo alimenticio y sanitario del cultivo.
            .row(titulo="Registro de alimentación").ajuste-cajaAcordion
              p.mb-3 Llevar seguimiento del suministro y consumo de alimento balanceado. Permite controlar cantidades suministradas, horarios de alimentación, comportamiento alimenticio y eficiencia en el aprovechamiento del concentrado. También facilita el cálculo de conversión alimenticia y costos de producción.
            .row(titulo="Registro de mortalidad").ajuste-cajaAcordion
              p.mb-3 Identificar pérdidas y posibles problemas sanitarios o ambientales dentro del cultivo. El seguimiento de mortalidades permite detectar oportunamente enfermedades, deficiencias de calidad del agua, problemas de manejo o alteraciones fisiológicas que afecten la supervivencia de los peces.
            .row(titulo="Registro de biometrías").ajuste-cajaAcordion
              p.mb-3 Evaluar el crecimiento y desarrollo de los peces mediante mediciones periódicas de peso y talla. Esta información permite ajustar raciones alimenticias, calcular biomasa y verificar el desempeño productivo del cultivo durante las diferentes etapas de crecimiento.
            .row(titulo="Registro de calidad del agua").ajuste-cajaAcordion
              p.mb-3 Monitorear las condiciones fisicoquímicas del sistema, incluyendo parámetros como oxígeno disuelto, temperatura, pH, amonio y transparencia. Este registro facilita el control ambiental del estanque y ayuda a prevenir problemas sanitarios y productivos asociados a deterioro de la calidad del agua.
            .row(titulo="Registro sanitario").ajuste-cajaAcordion
              p.mb-3 Documentar tratamientos aplicados, presencia de enfermedades, medidas preventivas y condiciones generales de salud del cultivo. Este registro contribuye al control sanitario, la bioseguridad y el seguimiento de eventos que puedan afectar el bienestar animal y la productividad del sistema.
            .row(titulo="Registro de cosecha").ajuste-cajaAcordion
              p.mb-3 Registrar los resultados productivos y el rendimiento final del cultivo. Incluye información relacionada con biomasa obtenida, peso promedio, supervivencia, producción total y rendimiento económico. Esta información permite evaluar la eficiencia del sistema y fortalecer la planificación de futuros ciclos productivos.
      p.mb-5 El manejo adecuado de los registros productivos permite obtener información técnica y económica relevante para el cultivo. Entre sus principales aportes se encuentran los siguientes:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img37.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Calcular la conversión alimenticia. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img38.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Evaluar crecimiento y supervivencia. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img39.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Detectar fallas productivas. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img40.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Analizar costos y rentabilidad. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img41.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Llevar trazabilidad del cultivo. 
          Separador
          #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.6 Control de condiciones del cultivo
          p.mb-5 El monitoreo constante de las condiciones del cultivo es fundamental para mantener el bienestar de los peces y prevenir enfermedades. La evaluación periódica de los parámetros ambientales permite detectar alteraciones que puedan afectar la productividad del sistema piscícola. Los principales parámetros de control corresponden a los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Parámetros recomendados para el control de las condiciones 
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Parámetro
                  th.texto-left Rango recomendado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Oxígeno disuelto
                  td.texto-left Mayor a 4 mg/L
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold pH
                  td.texto-left 6.5 – 8.5
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
                  td.texto-left Según la especie cultivada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Transparencia
                  td.texto-left 30 – 40 cm
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Amonio
                  td.texto-left Bajo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nitritos
                  td.texto-left Bajos
      p.mb-0 Además de la calidad del agua, es necesario mantener seguimiento constante sobre otros factores relacionados con el comportamiento y el estado general del cultivo, debido a que estos influyen directamente en el bienestar animal y en la productividad del sistema piscícola. Entre los aspectos que deben controlarse se encuentran la densidad poblacional, el comportamiento de los peces, el consumo de alimento, la presencia de lesiones o signos clínicos y el adecuado funcionamiento de aireadores y sistemas hidráulicos, ya que cualquier alteración puede afectar las condiciones sanitarias y ambientales del cultivo.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Programa de manejo sanitario y bienestar animal
      p.mb-5 En piscicultura no existen programas de vacunación tan estructurados como en otras especies pecuarias. Sin embargo, la prevención sanitaria basada en buenas prácticas de bienestar animal es fundamental para mantener peces sanos y productivos. Las principales medidas preventivas orientadas al bienestar animal y al control sanitario son las siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener densidades adecuadas
                  p.mb-0 Reducir el estrés y la competencia entre peces por alimento, espacio y oxígeno. Una densidad equilibrada favorece el crecimiento uniforme, mejora el bienestar animal y disminuye la propagación de enfermedades dentro del cultivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Garantizar buena oxigenación
                  p.mb-0 Favorecer las funciones fisiológicas y el bienestar de los peces. Niveles adecuados de oxígeno disuelto permiten mantener un metabolismo estable, mejorar el consumo de alimento y disminuir problemas respiratorios y estrés fisiológico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evitar cambios bruscos de temperatura
                  p.mb-0 Disminuir alteraciones metabólicas y estrés en los organismos acuáticos. Las variaciones extremas de temperatura afectan el apetito, el crecimiento y la capacidad inmunológica de los peces, aumentando la susceptibilidad a enfermedades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Suministrar alimentación balanceada y rica en nutrientes
                  p.mb-0 Fortalecer el crecimiento, el desarrollo corporal y la resistencia natural frente a enfermedades. Una nutrición adecuada mejora la conversión alimenticia, favorece el sistema inmune y contribuye al adecuado funcionamiento fisiológico de los peces.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener horarios estables de alimentación
                  p.mb-0 Favorecer la adaptación y el comportamiento alimenticio de los peces. La alimentación en horarios constantes ayuda a regular el consumo, disminuir desperdicios y mejorar el aprovechamiento de los nutrientes suministrados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vigilar constantemente el comportamiento de los peces
                  p.mb-0 Detectar oportunamente alteraciones sanitarias, ambientales o nutricionales. La observación diaria permite identificar cambios en el consumo de alimento, nado anormal, lesiones, mortalidades o signos tempranos de enfermedad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img47.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El bienestar animal contribuye a reducir el estrés y fortalecer la resistencia natural frente a enfermedades, mejorando así la productividad y estabilidad del sistema de cultivo. Entre los productos utilizados para desinfección y control sanitario se encuentran los siguientes:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img48.svg' style="max-width: 90px").m-auto
          p.mb-0.text-center Verde de malaquita
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img49.svg' style="max-width: 90px").m-auto
          p.mb-0.text-center Formol
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img50.svg' style="max-width: 90px").m-auto
          p.mb-0.text-center Sulfato de cobre 
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img51.svg' style="max-width: 90px").m-auto
          p.mb-0.text-center Amonio cuaternario 
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img52.svg' style="max-width: 90px").m-auto
          p.mb-0.text-center Sal común
      p La utilización de estos productos debe realizarse bajo supervisión técnica especializada. El manejo integral del cultivo piscícola requiere la aplicación de buenas prácticas técnicas, sanitarias y administrativas orientadas a garantizar el bienestar de los peces y la eficiencia productiva del sistema.
      p.mb-0 Actividades como la fertilización del estanque, la correcta siembra de alevinos, el monitoreo de la calidad del agua, la programación de labores y el manejo de registros permiten optimizar el crecimiento de los peces, prevenir enfermedades y mejorar la sostenibilidad y rentabilidad de la producción acuícola.

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
