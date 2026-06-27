<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Alimentación y nutrición en piscicultura
      .row.justify-content-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 La alimentación y nutrición en piscicultura representan uno de los aspectos más importantes dentro de la producción acuícola, debido a que influyen directamente en el crecimiento, la supervivencia, la salud y el rendimiento productivo de los peces. Una adecuada nutrición permite que los organismos desarrollen correctamente sus funciones fisiológicas, mejoren su capacidad de adaptación y presenten mayor resistencia frente a enfermedades y cambios ambientales.
          p.mb-0 En los sistemas piscícolas, la alimentación constituye uno de los costos más elevados de producción. Por esta razón, es fundamental realizar un manejo técnico y eficiente de los alimentos, garantizando que los peces reciban los nutrientes necesarios en cantidades adecuadas y en el momento oportuno.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img2.png', alt='').m-auto
      p.mb-0 Una correcta alimentación no solo favorece el crecimiento de los peces, sino que también contribuye al mantenimiento de la calidad del agua, al bienestar animal y a la sostenibilidad del sistema productivo.
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Introducción a la alimentación piscícola
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La alimentación piscícola comprende todas las prácticas relacionadas con el suministro de alimento a los peces, con el propósito de cubrir sus necesidades nutricionales durante las diferentes etapas de crecimiento y desarrollo.
          p.mb-0 Los peces requieren una alimentación balanceada que aporte proteínas, grasas, carbohidratos, vitaminas, minerales y energía suficiente para realizar procesos como el crecimiento, la formación muscular, la reproducción y el mantenimiento de las funciones vitales del organismo. La alimentación en piscicultura puede clasificarse en alimentación natural y alimentación suplementaria o balanceada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img3.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación natural
      p.mb-5 La alimentación natural corresponde a los organismos vivos y nutrientes que se desarrollan dentro del estanque de manera natural gracias a la fertilización y productividad biológica del agua. Entre los principales organismos naturales consumidos por los peces se encuentran:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fitoplancton
              p.mb-0.text-center Aporta nutrientes y constituye una fuente básica de alimento natural.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Zooplancton
              p.mb-0.text-center Proporciona proteínas y energía, especialmente en etapas tempranas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Larvas de insectos
              p.mb-0.text-center Complementan el aporte nutricional de los peces.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Algas microscópicas
              p.mb-0.text-center Participan en la productividad biológica del estanque.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Pequeños organismos acuáticos
              p.mb-0.text-center Favorecen la alimentación natural de diferentes especies.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Materia orgánica suspendida
              p.mb-0.text-center Puede aportar nutrientes aprovechables por algunos peces.
      p.mb-5 Este tipo de alimento es especialmente importante en las primeras etapas de crecimiento, ya que los peces pequeños aprovechan fácilmente estos organismos debido a su tamaño y alto valor nutricional. La producción de alimento natural depende de diversos factores ambientales y de manejo. Entre los más importantes se encuentran:
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img11.png', alt='').m-auto
          .col-xl.fit___box_container
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Calidad del agua:] determina las condiciones para el desarrollo de organismos acuáticos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fertilidad del estanque:] favorece la productividad biológica.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Temperatura:] influye en el crecimiento de microorganismos y plancton.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Entrada de luz solar:] facilita procesos biológicos como la fotosíntesis.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fertilización adecuada:] incrementa la disponibilidad de nutrientes en el agua.
      p.mb-5 Un estanque bien manejado presenta una adecuada producción de plancton, identificable mediante una coloración verde clara o café verdosa del agua.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación suplementaria o balanceada
      p.mb-5 La alimentación balanceada está constituida por concentrados elaborados técnicamente para cubrir las necesidades nutricionales de los peces según su especie, tamaño y etapa productiva. Estos alimentos contienen cantidades controladas de nutrientes y permiten mantener un crecimiento más rápido y uniforme. Entre las principales ventajas del alimento balanceado se encuentran:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img12.png').m-auto
              h4.mb-3.estilo-text Mayor crecimiento y desarrollo corporal
              p.mb-0.text-center Favorece un mejor desempeño productivo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img13.png').m-auto
              h4.mb-3.estilo-text Mejor conversión alimenticia
              p.mb-0.text-center Permite mayor aprovechamiento del alimento suministrado.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img14.png').m-auto
              h4.mb-3.estilo-text Reducción de deficiencias nutricionales
              p.mb-0.text-center Disminuye problemas asociados a desequilibrios alimenticios.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img15.png').m-auto
              h4.mb-3.estilo-text Mayor uniformidad del cultivo
              p.mb-0.text-center Favorece tamaños más homogéneos en los peces.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img16.png').m-auto
              h4.mb-3.estilo-text Incremento de la productividad
              p.mb-0.text-center Mejora el rendimiento del sistema piscícola.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img17.png').m-auto
              h4.mb-3.estilo-text Disminución de mortalidad
              p.mb-0.text-center Contribuye al bienestar y supervivencia de los organismos.
          p.mb-0 La calidad del alimento es fundamental, ya que concentrados de baja calidad pueden afectar el crecimiento, deteriorar la calidad del agua y aumentar los costos de producción.
          Separador
          #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.2 La nutrición en peces
          p.mb-5 La nutrición es el proceso biológico mediante el cual los peces obtienen, digieren, absorben y utilizan los nutrientes presentes en los alimentos para mantener sus funciones vitales. Una nutrición adecuada permite alcanzar múltiples beneficios dentro del sistema de producción acuícola. La siguiente tabla resume los principales aportes de una correcta nutrición en piscicultura:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 8.
            span Beneficios de una adecuada nutrición en piscicultura
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Beneficio de una adecuada nutrición
                  th.texto-left Impacto en los peces y el cultivo
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Favorecer el crecimiento y desarrollo muscular
                  td.texto-left Permite un mejor desarrollo corporal de los organismos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mejorar la respuesta inmunológica
                  td.texto-left Incrementa la capacidad de defensa frente a agentes patógenos.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Incrementar la resistencia frente a enfermedades
                  td.texto-left Reduce riesgos sanitarios dentro del cultivo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Favorecer la reproducción
                  td.texto-left Mejora el desempeño reproductivo de los peces.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mantener el equilibrio fisiológico del organismo
                  td.texto-left Contribuye al adecuado funcionamiento metabólico.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mejorar la eficiencia productiva del cultivo
                  td.texto-left Favorece un mayor rendimiento del sistema piscícola.
      p.mb-5 Las necesidades nutricionales de los peces varían dependiendo de diferentes factores relacionados con la especie y las condiciones de producción.
      .row.justify-content-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Especie cultivada").ajuste-cajaAcordion
              p.mb-3 Determina los requerimientos nutricionales específicos.
            .row(titulo="Edad y tamaño del pez").ajuste-cajaAcordion
              p.mb-3 Modifican las necesidades de energía y proteína.
            .row(titulo="Sistema de producción").ajuste-cajaAcordion
              p.mb-3 Influye en el manejo y disponibilidad de alimento.
            .row(titulo="Temperatura del agua").ajuste-cajaAcordion
              p.mb-3 Afecta el metabolismo y el consumo alimenticio.
            .row(titulo="Nivel de actividad física").ajuste-cajaAcordion
              p.mb-3 Incrementa o disminuye los requerimientos energéticos.
            .row(titulo="Estado sanitario del cultivo").ajuste-cajaAcordion
              p.mb-3 Condiciona el aprovechamiento de los nutrientes.
      p.mb-5 Por esta razón, cada especie requiere programas de alimentación específicos y adaptados a sus condiciones productivas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que influyen en la nutrición de los peces
      p.mb-5 Diversos factores ambientales y fisiológicos afectan el aprovechamiento de los nutrientes y el desempeño productivo de los peces.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Temperatura del agua
                  p.mb-0 Influye directamente sobre el metabolismo y el consumo de alimento. Cuando la temperatura es adecuada, los peces presentan mayor apetito y mejor crecimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Oxígeno disuelto
                  p.mb-0 Niveles bajos de oxígeno disminuyen el consumo de alimento y generan estrés en los peces, afectando su desarrollo y bienestar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Calidad del agua
                  p.mb-0 La presencia de contaminantes, amonio o exceso de materia orgánica afecta la salud y disminuye el aprovechamiento de los nutrientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estado sanitario
                  p.mb-0 Los peces enfermos presentan menor consumo de alimento y menor capacidad de crecimiento, lo que reduce la eficiencia productiva del sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img21.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 El control adecuado de estos factores favorece un mejor desempeño nutricional y contribuye al mantenimiento de condiciones óptimas dentro del cultivo.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Procesos de la nutrición
      p.mb-5 La nutrición en los peces se desarrolla mediante una serie de procesos fisiológicos que permiten transformar el alimento en energía y tejidos corporales. Estos procesos garantizan el aprovechamiento de los nutrientes y el mantenimiento de las funciones vitales del organismo. A continuación, se presentan los principales procesos de la nutrición en peces:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ingestión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ingestión
              p.mb-0 Es el proceso mediante el cual los peces consumen el alimento suministrado. La aceptación del alimento depende de factores como el tamaño de la partícula, la calidad del agua, la temperatura y el estado sanitario de los organismos. Una adecuada ingestión permite iniciar el aprovechamiento de nutrientes, mejorar la conversión alimenticia y reducir desperdicios dentro del sistema de cultivo.
        .py-3.py-md-4(titulo="Digestión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Digestión
              p.mb-0 Corresponde a la descomposición del alimento mediante enzimas digestivas presentes en el aparato digestivo. Durante este proceso, los nutrientes complejos son transformados en sustancias simples que pueden ser aprovechadas por el organismo. Una digestión eficiente mejora el crecimiento de los peces y disminuye la producción de residuos contaminantes.
        .py-3.py-md-4(titulo="Absorción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Absorción
              p.mb-0 Consiste en el paso de los nutrientes digeridos hacia el torrente sanguíneo a través del intestino. Posteriormente, estos nutrientes son transportados hacia tejidos y órganos del cuerpo para cumplir diferentes funciones fisiológicas. La adecuada absorción favorece el crecimiento corporal y el mantenimiento de las funciones vitales.
        .py-3.py-md-4(titulo="Metabolismo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Metabolismo
              p.mb-0 Comprende el conjunto de reacciones químicas mediante las cuales el organismo utiliza los nutrientes para producir energía, formar tejidos y mantener sus funciones fisiológicas. Un metabolismo adecuado favorece el crecimiento, el desarrollo muscular y el bienestar general de los peces dentro del sistema productivo.
        .py-3.py-md-4(titulo="Excreción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Excreción
              p.mb-0 Es el proceso mediante el cual el organismo elimina sustancias de desecho y nutrientes no aprovechados. Este proceso ayuda a mantener el equilibrio fisiológico y evita la acumulación excesiva de residuos en el organismo y en el agua del cultivo. Un adecuado manejo alimenticio contribuye a disminuir la contaminación y mejorar la sostenibilidad del sistema piscícola.
      p.mb-5 A continuación, se presentan los principales factores relacionados con la ingestión y las funciones metabólicas de los peces, destacando su importancia dentro de los procesos nutricionales y productivos en piscicultura.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Factores que afectan la ingestión
                  p La aceptación del alimento depende de diferentes condiciones relacionadas con el ambiente y las características del alimento suministrado. 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tamaño de la partícula:] debe ajustarse al tamaño de la boca del pez. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Olor y sabor del alimento:] favorecen la aceptación alimenticia. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Calidad del agua:] influye en el comportamiento alimentario. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Temperatura:] modifica el metabolismo y el apetito. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Estado sanitario del pez:] determina la capacidad de consumo de alimento. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Funciones del metabolismo
                  p El metabolismo comprende diferentes funciones esenciales para el crecimiento y mantenimiento fisiológico de los peces. 
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Producción de energía:] permite el funcionamiento general del organismo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Formación muscular:] favorece el crecimiento corporal. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Crecimiento corporal:] incrementa el desarrollo productivo de los peces. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reparación de tejidos:] mantiene la integridad de órganos y estructuras corporales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Funcionamiento fisiológico:] garantiza el equilibrio y la actividad metabólica. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Efectos de los nutrientes en los peces
      p.mb-5 Los nutrientes cumplen funciones específicas dentro del organismo y son indispensables para garantizar un adecuado desarrollo productivo y sanitario. Una nutrición balanceada permite mantener el crecimiento, la salud y el correcto funcionamiento fisiológico de los peces.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img28.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Proteínas").ajuste-cajaAcordion
              p.mb-3 Las proteínas son los nutrientes más importantes para el crecimiento y formación de tejidos. Participan en la formación muscular, el desarrollo corporal, la reparación celular y la producción de enzimas y hormonas. Además, fortalecen el sistema inmune y favorecen el adecuado funcionamiento fisiológico del organismo. Los peces jóvenes requieren mayores niveles de proteína debido a su rápido crecimiento. La falta de proteínas puede ocasionar bajo crecimiento, debilidad corporal, mayor susceptibilidad a enfermedades y pérdida de peso.
            .row(titulo="Lípidos o grasas").ajuste-cajaAcordion
              p.mb-3 Los lípidos constituyen una importante fuente de energía para los peces. Cumplen funciones relacionadas con la reserva energética, la protección de órganos internos, el transporte de vitaminas liposolubles y la formación de membranas celulares. También participan en procesos metabólicos y fisiológicos esenciales para el desarrollo de los peces. El exceso de grasa puede afectar la calidad del agua y generar acumulación de tejido graso en los organismos, disminuyendo la calidad final del producto.
            .row(titulo="Carbohidratos").ajuste-cajaAcordion
              p.mb-3 Los carbohidratos aportan energía rápida para las actividades metabólicas y favorecen diferentes procesos fisiológicos. Su presencia en la dieta ayuda a disminuir el uso de proteínas como fuente energética, permitiendo que estas se utilicen principalmente en el crecimiento y formación de tejidos. Los peces aprovechan los carbohidratos en menor proporción que otros animales terrestres debido a diferencias en su metabolismo digestivo.
            .row(titulo="Vitaminas").ajuste-cajaAcordion
              p.mb-3 Las vitaminas participan en múltiples funciones fisiológicas y metabólicas. Intervienen en el fortalecimiento del sistema inmune, la formación de tejidos, el crecimiento adecuado y la prevención de enfermedades. También favorecen diferentes procesos bioquímicos necesarios para el mantenimiento de la salud. La falta de vitaminas puede producir deformidades, crecimiento deficiente, baja resistencia a enfermedades y problemas reproductivos.
            .row(titulo="Minerales").ajuste-cajaAcordion
              p.mb-3 Los minerales son esenciales para el desarrollo estructural y el funcionamiento fisiológico de los peces. Participan en la formación ósea, la regulación metabólica, el equilibrio osmótico y el desarrollo corporal. Algunos minerales pueden absorberse directamente del agua, mientras que otros deben suministrarse mediante la alimentación. Una adecuada disponibilidad de minerales favorece el crecimiento saludable y el equilibrio fisiológico del organismo.
      p.mb-0 El suministro equilibrado de nutrientes favorece el crecimiento saludable, mejora la eficiencia productiva y contribuye al bienestar general de los peces dentro del sistema piscícola.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Requerimientos nutricionales según especie
      p.mb-5 Cada especie piscícola posee necesidades nutricionales diferentes de acuerdo con sus hábitos alimenticios y características biológicas. Estas diferencias determinan el tipo de alimento, el nivel de proteína requerido y la capacidad de aprovechamiento de nutrientes dentro del sistema digestivo. La adecuada formulación de las dietas permite mejorar el crecimiento, fortalecer la salud de los peces y optimizar el rendimiento productivo del cultivo.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Peces herbívoros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Peces herbívoros
              p.mb-0 Se alimentan principalmente de vegetales y organismos vegetales microscópicos. Requieren menor contenido de proteína y presentan mayor capacidad de aprovechamiento de carbohidratos y fibras vegetales. Su sistema digestivo está adaptado para utilizar eficientemente recursos de origen vegetal presentes en el estanque o en alimentos balanceados.
        .py-3.py-md-4(titulo="Peces omnívoros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Peces omnívoros
              p.mb-0 Consumen alimentos tanto de origen vegetal como animal. Presentan requerimientos intermedios de proteína y alta capacidad de adaptación alimenticia. Además, poseen mayor facilidad de manejo en sistemas productivos debido a su capacidad para aprovechar diferentes tipos de alimentos y adaptarse a distintas condiciones de cultivo.
        .py-3.py-md-4(titulo="Peces carnívoros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Peces carnívoros
              p.mb-0 Necesitan dietas con altos niveles de proteína debido a su alimentación natural basada en otros organismos animales. Presentan mayor demanda energética y menor capacidad de aprovechamiento de carbohidratos. Requieren alimentos con ingredientes de alta calidad proteica para mantener un adecuado crecimiento y desempeño fisiológico.
      p.mb-5 Los requerimientos nutricionales pueden modificarse según diferentes condiciones ambientales, fisiológicas y productivas. La siguiente tabla presenta los principales factores que influyen sobre las necesidades nutricionales de los peces:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 9.
            span Factores que influyen sobre los requerimientos nutricionales de los peces
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Factor
                  th.texto-left Influencia sobre los requerimientos nutricionales
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Edad y tamaño del pez
                  td.texto-left Determinan la cantidad de nutrientes necesarios para el crecimiento y mantenimiento corporal.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura del agua
                  td.texto-left Influye sobre el metabolismo y el consumo de alimento.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Calidad del agua
                  td.texto-left Condiciona el aprovechamiento de nutrientes y el bienestar de los peces.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Densidad de siembra
                  td.texto-left Modifica la competencia por alimento y el nivel de estrés.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Estado sanitario
                  td.texto-left Afecta el consumo de alimento y la eficiencia nutricional.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel de oxígeno disuelto
                  td.texto-left Influye en la actividad metabólica y digestiva.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Etapa productiva
                  td.texto-left Determina cambios en las necesidades de energía y proteína.
      p.mb-0 Los peces juveniles requieren mayores niveles de proteína para favorecer el crecimiento acelerado y el adecuado desarrollo corporal durante las primeras etapas de vida.
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Importancia del cálculo de raciones
      p.mb-5 El cálculo de raciones consiste en determinar la cantidad adecuada de alimento que debe suministrarse diariamente a los peces según su biomasa, tamaño y etapa productiva. Un adecuado cálculo alimenticio permite optimizar el crecimiento y reducir pérdidas económicas dentro del sistema piscícola. La correcta planificación de las raciones favorece el bienestar animal, mejora la eficiencia productiva y contribuye al mantenimiento de condiciones adecuadas de calidad del agua.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios del cálculo adecuado de raciones
      p.mb-5 Realizar correctamente el cálculo de las raciones alimenticias permite suministrar a los peces la cantidad exacta de alimento que necesitan según su tamaño, peso, edad y etapa de crecimiento. Esta práctica mejora la eficiencia del cultivo y favorece el bienestar animal.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mejora la conversión alimenticia
                  p.mb-0 Cuando la cantidad de alimento es adecuada, los peces aprovechan mejor los nutrientes y transforman el alimento en crecimiento corporal de manera más eficiente. Esto permite obtener mayor ganancia de peso utilizando menor cantidad de concentrado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reduce desperdicios de concentrado
                  p.mb-0 El suministro controlado de alimento evita que grandes cantidades de concentrado queden sin consumir en el estanque. Esto disminuye pérdidas económicas y mejora el aprovechamiento del alimento suministrado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantiene buena calidad del agua
                  p.mb-0 Al evitar excesos de alimento, se reduce la acumulación de residuos orgánicos en el fondo del estanque. Esto ayuda a conservar niveles adecuados de oxígeno, disminuye la producción de gases tóxicos y mantiene mejores condiciones fisicoquímicas del agua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disminuye costos de producción
                  p.mb-0 La alimentación representa uno de los mayores gastos en piscicultura. Un cálculo adecuado de raciones permite optimizar el uso del concentrado, reducir desperdicios y mejorar la rentabilidad del sistema productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Favorece el crecimiento uniforme
                  p.mb-0 Cuando todos los peces reciben cantidades adecuadas de alimento, se reduce la competencia y se obtiene un crecimiento más homogéneo dentro del cultivo, facilitando posteriormente las labores de manejo y cosecha.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reduce la contaminación del estanque
                  p.mb-0 El exceso de alimento no consumido se descompone y deteriora el agua. Un manejo adecuado de las raciones disminuye la contaminación, reduce la proliferación de bacterias y contribuye al equilibrio biológico del sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img37.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación de programas de alimentación ajustados a las necesidades del cultivo favorece una producción más eficiente y sostenible.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img38.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Consecuencias de una mala alimentación
          br
          p.mb-0 Una alimentación inadecuada puede afectar gravemente la salud de los peces, disminuir el rendimiento productivo y deteriorar las condiciones del cultivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Exceso de alimento
      p.mb-5 El suministro excesivo de concentrado genera acumulación de residuos orgánicos que afectan la calidad del agua y aumentan los riesgos sanitarios.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img39.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img40.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Acumulación de materia orgánica
                  p.mb-0.text-center El alimento sobrante se deposita en el fondo del estanque y comienza a descomponerse, produciendo lodos y sustancias contaminantes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img41.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Disminución del oxígeno disuelto
                  p.mb-0.text-center La descomposición del alimento consume grandes cantidades de oxígeno, lo que puede generar estrés y problemas respiratorios en los peces.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contaminación del agua
                  p.mb-0.text-center El exceso de nutrientes favorece el deterioro de la calidad del agua, incrementando turbidez, malos olores y desequilibrios biológicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incremento de enfermedades
                  p.mb-0.text-center Las malas condiciones del agua favorecen la proliferación de bacterias, hongos y parásitos, aumentando la mortalidad y los problemas sanitarios.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación insuficiente
          p.mb-5 Cuando los peces no reciben suficiente alimento, se afecta directamente su crecimiento y bienestar.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img44.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Bajo crecimiento
              p.mb-0.text-center La falta de nutrientes limita el desarrollo corporal y retrasa el tiempo de producción.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img45.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Debilidad corporal
              p.mb-0.text-center Los peces mal alimentados presentan menor resistencia física y mayor susceptibilidad frente a enfermedades y cambios ambientales.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mayor competencia entre peces
              p.mb-0.text-center La escasez de alimento genera competencia dentro del estanque, ocasionando agresividad y desigualdad en el crecimiento.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img47.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Incremento del estrés
              p.mb-0.text-center La falta de alimentación adecuada produce estrés fisiológico, disminuye las defensas del organismo y afecta el comportamiento normal de los peces.
      p.mb-5 El manejo adecuado de las raciones permite prevenir alteraciones sanitarias y mantener condiciones estables dentro del sistema piscícola.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores para calcular la ración
      p.mb-5 Para determinar correctamente la cantidad de alimento que debe suministrarse, es necesario considerar varios factores técnicos y productivos.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Biomasa total")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img48.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Biomasa total
              p.mb-0 La biomasa corresponde al peso total de los peces presentes en el estanque. Este cálculo se realiza mediante biometrías periódicas y permite ajustar la cantidad de alimento de acuerdo con el crecimiento del cultivo.
        .py-3.py-md-4(titulo="Etapa de crecimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img49.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Etapa de crecimiento
              p.mb-0 Los peces pequeños o juveniles requieren mayores porcentajes de alimentación debido a su rápido desarrollo metabólico. A medida que aumentan de tamaño, el porcentaje de ración disminuye gradualmente.
        .py-3.py-md-4(titulo="Temperatura del agua")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img50.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Temperatura del agua
              p.mb-0 La temperatura influye directamente sobre el metabolismo y el apetito de los peces. En temperaturas adecuadas, el consumo aumenta; mientras que temperaturas bajas o extremas reducen la actividad alimenticia.
        .py-3.py-md-4(titulo="Calidad del agua")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img51.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Calidad del agua
              p.mb-0 Factores como bajos niveles de oxígeno, presencia de amonio o contaminación afectan el consumo de alimento y el aprovechamiento de nutrientes.
        .py-3.py-md-4(titulo="Comportamiento alimenticio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img52.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comportamiento alimenticio
              p.mb-0 La observación diaria durante la alimentación permite identificar si los peces consumen adecuadamente el concentrado o si es necesario ajustar las cantidades suministradas.
      p.mb-5 La evaluación permanente de estos factores permite realizar ajustes oportunos y mejorar el aprovechamiento del alimento.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para un adecuado manejo alimenticio
      p.mb-5 Un manejo alimenticio adecuado permite mejorar la productividad del cultivo y mantener buenas condiciones sanitarias y ambientales.
      .row.justify-content-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Suministrar alimento en horarios fijos").ajuste-cajaAcordion
              p.mb-3 Establecer horarios constantes ayuda a crear hábitos alimenticios y mejora el consumo del alimento por parte de los peces.
            .row(titulo="Distribuir el alimento uniformemente").ajuste-cajaAcordion
              p.mb-3 El concentrado debe suministrarse de manera homogénea en diferentes zonas del estanque para garantizar que todos los peces tengan acceso al alimento.
            .row(titulo="Evitar la sobrealimentación").ajuste-cajaAcordion
              p.mb-3 Se debe suministrar únicamente la cantidad necesaria para evitar desperdicios y contaminación del agua.
            .row(titulo="Utilizar concentrados de buena calidad").ajuste-cajaAcordion
              p.mb-3 El alimento debe contener nutrientes balanceados y cumplir condiciones adecuadas de almacenamiento, textura y frescura.
            .row(titulo="Almacenar correctamente el alimento").ajuste-cajaAcordion
              p.mb-3 El concentrado debe mantenerse en lugares secos, ventilados y protegidos de humedad, roedores e insectos para evitar su deterioro.
            .row(titulo="Realizar biometrías periódicas").ajuste-cajaAcordion
              p.mb-3 Las biometrías permiten conocer el crecimiento de los peces y ajustar correctamente las raciones alimenticias.
            .row(titulo="Monitorear permanentemente el consumo").ajuste-cajaAcordion
              p.mb-3 La observación diaria del comportamiento durante la alimentación ayuda a detectar problemas sanitarios, estrés o alteraciones en la calidad del agua.
      p.mb-0 Un adecuado manejo nutricional contribuye al bienestar animal, fortalece la salud de los peces, mejora la eficiencia productiva y aumenta la sostenibilidad y rentabilidad de la empresa piscícola.

</template>

<script>
export default {
  name: 'Tema4',
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
