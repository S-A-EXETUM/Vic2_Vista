import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as ImIcons from 'react-icons/im'
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'
import * as BoxIcons from 'react-icons/bi'

// Ultima modificación Diego Canelo 7/04/2022
// contenido de rutinas
export const entContentDef = [
    {
        title: 'Brazos',
        descripcion: 'Para ganar fuerza en los brazos, el mejor camino es optar por ejercicios globales o poliarticulares. Como dominadas o press de banca, que implican varias articulaciones. Pero si quieres trabajar de manera más aislada, te decimos qué puedes hacer para ganar volumen tanto en bíceps como en tríceps.',
        path: '/rutinas/brazos',
        icon: <GiIcons.GiBiceps></GiIcons.GiBiceps>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Pecho',
        descripcion: 'Para fortalecer los músculos de tu pecho y hacerlos crecer, enfócate en ejercicios especiales para incrementar el tamaño de tus pectorales, utilizando las técnicas adecuadas y llevando una dieta saludable enfocada a hacer músculo.',
        path: '/rutinas/pecho',
        icon: <GiIcons.GiMuscularTorso></GiIcons.GiMuscularTorso>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Abdomen',
        descripcion: 'El abdomen entrénalo como un músculo más. Hacer abdomen no puede limitarse a hacer unas planchas y unos crunchs al final de tu entrenamiento o el día que te acuerdas. Planifica tu entreno con detalle. Respeta el descanso. Como cualquier otro músculo, las abdominales necesitan un mínimo de dos días para recuperarse y crecer.',
        path: '/rutinas/abdomen',
        icon: <GiIcons.GiMuscularTorso></GiIcons.GiMuscularTorso>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Piernas',
        descripcion: 'Antes de empezar con los ejercicios para ganar masa múscular en las piernas es imprescindible hacer algunos estiramientos para entrar en calor y preparar el cuerpo. Puedes empezar con algo suave, como trotar durante 5 minutos para que la sangre irrigue bien los músculos y estos logren su máxima potencia durante el entrenamiento.',
        path: '/rutinas/piernas',
        icon: <GiIcons.GiLeg></GiIcons.GiLeg>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Espalda',
        descripcion: 'Tonificar los músculos de la espalda y nuestro cuerpo en general no es algo difícil siempre y cuando contemos con los medios para conseguir nuestros objetivos e ir progresando paulatinamente. Realizar una actividad física regularmente te ayuda a prevenir los imprevistos que pueden surgir por nuestro modo de vida sedentario, así como el riesgo de aparición de una enfermedad cardiovascular. Esto significa que si adoptamos una buena postura corporal y una higiene de vida sanitaria, vamos a mejorar tanto nuestro estado mental como de salud.',
        path: '/rutinas/espalda',
        icon: <GiIcons.GiShoulderArmor></GiIcons.GiShoulderArmor>,
        cName: 'nav-text-dieta'
    },
]

export const entContentAde = [
    {
        title: 'Cardio',
        descripcion: 'La actividad cardio te hace quemar calorías y el ejercicio de fuerza acelera tu metabolismo. Por eso esta combinación, cardio + fuerza, es la mejor para perder peso.El ejercicio cardiovascular es aquel que, por definición, aumenta la frecuencia cardiaca y nos asegura un aumento del consumo energético mientras lo estamos practicando.',
        path: '/rutinas/cardio',
        icon: <GiIcons.GiJumpingRope></GiIcons.GiJumpingRope>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Hiit',
        descripcion: 'Empezaremos diciendo que el término HIIT proviene del concepto en inglés High Intensity Interval Training, es decir, Entrenamiento Interválico de Alta Intensidad. Podríamos definirlo como periodos repetidos de ejercicio de alta intensidad desarrollados a la máxima velocidad o potencia intercalados con periodos de ejercicio de baja intensidad o reposo absoluto.',
        path: '/rutinas/hiit',
        icon: <FaIcons.FaRunning></FaIcons.FaRunning>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Crossfit',
        descripcion: 'CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad. Esto significa que nos valemos de una gran cantidad de ejercicios y disciplinas deportivas (gimnasia, halterofilia, carrera…).',
        path: '/rutinas/crossfit',
        icon: <GiIcons.GiJumpAcross></GiIcons.GiJumpAcross>,
        cName: 'nav-text-dieta'
    }
]