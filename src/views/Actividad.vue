<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Buenas Prácticas Piscícolas y manejo sanitario en cultivos de aguas cálidas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con el manejo técnico, sanitario, nutricional y productivo en piscicultura de aguas cálidas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la preparación del estanque antes de la siembra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar condiciones adecuadas para el cultivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el tamaño de los peces cultivados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la cantidad de agua utilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la presencia de depredadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué actividad permite detectar grietas y filtraciones en el estanque?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Control de malezas acuáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisión del comportamiento alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificación de daños estructurales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicación de alimento balanceado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de eliminar lodos y sedimentos excesivos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la salinidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir acumulaciones que deterioran la calidad del agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el crecimiento de malezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la profundidad del estanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué coloración del agua indica adecuada productividad biológica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color rojo intenso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Color transparente brillante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color gris oscuro uniforme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color verde claro o café verdoso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el rango recomendado de pH para el estanque piscícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3.0 – 4.5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5.0 – 6.0.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6.5 – 8.5.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '9.5 – 10.5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué actividad favorece el desarrollo de fitoplancton y zooplancton?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación de antibióticos permanentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación total del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminución de la temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fertilización orgánica o inorgánica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué parámetro favorece la respiración y crecimiento de los peces?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del estanque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de lodo acumulado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel de malezas presentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oxígeno disuelto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es una labor diaria en la empresa piscícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar cosechas semanales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Construir nuevos estanques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Analizar el comportamiento de los peces.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar completamente el suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué producto se utiliza para desinfección de superficies y equipos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Harina de pescado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Melaza agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Arena de río.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Povisan.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el objetivo principal de la fertilización del estanque?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar totalmente el fitoplancton.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la temperatura del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la profundidad del estanque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estimular la productividad biológica del agua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la preparación del estanque antes de la siembra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar condiciones adecuadas para el cultivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el tamaño de los peces cultivados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la cantidad de agua utilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la presencia de depredadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué actividad permite detectar grietas y filtraciones en el estanque?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Control de malezas acuáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisión del comportamiento alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificación de daños estructurales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicación de alimento balanceado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de eliminar lodos y sedimentos excesivos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la salinidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir acumulaciones que deterioran la calidad del agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el crecimiento de malezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la profundidad del estanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué coloración del agua indica adecuada productividad biológica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color rojo intenso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Color transparente brillante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color gris oscuro uniforme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color verde claro o café verdoso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el rango recomendado de pH para el estanque piscícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3.0 – 4.5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5.0 – 6.0.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6.5 – 8.5.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '9.5 – 10.5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué actividad favorece el desarrollo de fitoplancton y zooplancton?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación de antibióticos permanentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación total del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminución de la temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fertilización orgánica o inorgánica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué parámetro favorece la respiración y crecimiento de los peces?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del estanque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de lodo acumulado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel de malezas presentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oxígeno disuelto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es una labor diaria en la empresa piscícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar cosechas semanales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Construir nuevos estanques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Analizar el comportamiento de los peces.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar completamente el suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué producto se utiliza para desinfección de superficies y equipos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Harina de pescado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Melaza agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Arena de río.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Povisan.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el objetivo principal de la fertilización del estanque?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar totalmente el fitoplancton.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la temperatura del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la profundidad del estanque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estimular la productividad biológica del agua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
