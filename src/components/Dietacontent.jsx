import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'
import * as BoxIcons from 'react-icons/bi'

// Ultima modificación Diego Canelo 7/04/2022
export const Dietacontent = [
    {
        title: 'Ectomorfo',
        descripcion: 'El cuerpo ectomorfo es naturalmente delgado, tiene las caderas y hombros estrechos, poca grasa corporal y brazos y piernas muy delgados. Los ectomorfos dicen cosas como: “Da igual cuánto coma, nunca gano peso”. No todo el mundo quiere perder peso.',
        path: '/dieta/ectomorfo',
        icon: <ImIcons.ImManWoman></ImIcons.ImManWoman>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Endomorfo',
        descripcion: 'El tipo endomorfo es más redondeado y tiene forma de pera. Tienden a acumular más grasa en todo el cuerpo, sobre todo en piernas y brazos. Es más difícil construir músculo para el endomorfo y más fácil ganar peso. Sin embargo, como mecionamos antes, no tienes que tirarte en el sofá y echarle la culpa a la genética. Puedes estar agradecido por el cuerpo que tienes y trabajarlo para estar en forma y saludable: sólo te llevará algo más de tiempo y esfuerzo que para un mesomorfo.',
        path: '/dieta/endomorfo',
        icon: <ImIcons.ImManWoman></ImIcons.ImManWoman>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Mesomorfo',
        descripcion: 'El tipo mesomorfo está entre el ectomorfo y el endomorfo. Son capaces de crear masa muscular fácilmente y genéticamente son el tipo de cuerpo ideal para hacer culturismo. Tienen piernas muy fuertes, hombros anchos y cintura estrecha. En general también tienen poca grasa.',
        path: '/dieta/mesomorfo',
        icon: <ImIcons.ImManWoman></ImIcons.ImManWoman>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Definir',
        descripcion: '',
        path: '/dieta/definir',
        icon: <GiIcons.GiMeat></GiIcons.GiMeat>,
        cName: 'nav-text-dieta'
    },
]