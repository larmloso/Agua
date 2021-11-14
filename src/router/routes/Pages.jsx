import { lazy } from 'react'

const PagesRoutes = [
  // Dashboard
  {
    path: '/Dashboard',
    component: lazy(() => import('../../view/Dashboards/dashboard/ecommerce')),
    layout: 'VerticalLayout',
  },

  // Order
  {
    path: '/Order',
    component: lazy(() => import('../../view/Order')),
    layout: 'VerticalLayout',
  },

  //Employees
  {
    path: '/Employees',
    component: lazy(() => import('../../view/Employees')),
    layout: 'VerticalLayout',
  },

  // 404
  {
    path: '/pages/error-404',
    component: lazy(() => import('../../view/errors/404')),
    layout: 'FullLayout',
  },
]

export default PagesRoutes
