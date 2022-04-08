import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as BoxIcons from 'react-icons/bi';

export const Menucontent = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        cName: 'nav-text'
    },
    {
        title: 'Rutinas',
        path: '/rutinas',
        icon: <GiIcons.GiWeightLiftingUp></GiIcons.GiWeightLiftingUp>,
        cName: 'nav-text'
        
    },
    {
        title: 'Dieta',
        path: '/dieta',
        icon: <GiIcons.GiFruitBowl></GiIcons.GiFruitBowl>,
        cName: 'nav-text'
    },
    {
        title: 'Cuenta',
        path: '/cuenta',
        icon: <BoxIcons.BiUserCircle></BoxIcons.BiUserCircle>,
        cName: 'nav-text'
    }
]