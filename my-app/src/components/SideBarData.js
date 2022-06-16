import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import React from 'react';
export const SideBarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'table',
        path:'/table',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon: <FaIcons.FaEnvelopeOpen />,
        cName: 'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]
