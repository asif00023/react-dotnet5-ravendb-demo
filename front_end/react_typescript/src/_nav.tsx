import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,cilLibraryAdd,cilLibrary,cilLibraryBuilding,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilLayers,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [    
  {
    component: CNavGroup,
    name: 'Materials',
    to: '/materials',
    // icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create',
        icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
        to: '/materials/create',
      },
      // {
      //   component: CNavItem,
      //   name: 'Details',
      //   icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
      //   to: '/materials/details',
      // },
      {
        component: CNavItem,
        name: 'List',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        to: '/materials/list',
      },
    ],
  }
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
