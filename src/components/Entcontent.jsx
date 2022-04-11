import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as BoxIcons from 'react-icons/bi';

export const entContentDef = [
    {
        title: 'Brazos',
        path: '/rutinas/brazos',
        icon: <GiIcons.GiBiceps></GiIcons.GiBiceps>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Pecho',
        path: '/rutinas/pecho',
        icon: <GiIcons.GiMuscularTorso></GiIcons.GiMuscularTorso>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Abdomen',
        path: '/rutinas/abdomen',
        icon: <GiIcons.GiMuscularTorso></GiIcons.GiMuscularTorso>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Piernas',
        path: '/rutinas/piernas',
        icon: <GiIcons.GiLeg></GiIcons.GiLeg>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Espalda',
        path: '/rutinas/espalda',
        icon: <GiIcons.GiShoulderArmor></GiIcons.GiShoulderArmor>,
        cName: 'nav-text-dieta'
    },
]

export const entContentAde = [
    {
        title: 'Cardio',
        path: '/rutinas/cardio',
        icon: <GiIcons.GiJumpingRope></GiIcons.GiJumpingRope>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Hiit',
        path: '/rutinas/hiit',
        icon: <FaIcons.FaRunning></FaIcons.FaRunning>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Crossfit',
        path: '/rutinas/crossfit',
        icon: <GiIcons.GiJumpAcross></GiIcons.GiJumpAcross>,
        cName: 'nav-text-dieta'
    }
]