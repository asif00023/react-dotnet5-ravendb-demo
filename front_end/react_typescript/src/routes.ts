import React from 'react'

const Dashboard = React.lazy(() => import('./app/views/dashboard/Dashboard'))

// materials
const MaterialsCreate = React.lazy(() => import('./app/views/materials/create/create'))
const MaterialsDetails = React.lazy(() => import('./app/views/materials/details/details'))
const MaterialsList = React.lazy(() => import('./app/views/materials/list/list'))
const MaterialsEdit = React.lazy(() => import('./app/views/materials/edit/edit'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/materials', name: 'Materials', element: MaterialsList, exact: true },
  { path: '/materials/create', name: 'Create', element: MaterialsCreate },
  { path: '/materials/details', name: 'Details', element: MaterialsDetails },
  { path: '/materials/list', name: 'List', element: MaterialsList },
  { path: '/materials/edit', name: 'List', element: MaterialsEdit },


]

export default routes
