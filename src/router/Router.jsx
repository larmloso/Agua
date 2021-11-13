import { Suspense, useEffect, useRef } from 'react'

// Router
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

// Routes
import { Routes } from './routes'

// Layouts
import VerticalLayout from '../layout/VerticalLayout'
import FullLayout from '../layout/FullLayout'

// Components
import Ecommerce from '../view/Dashboards/dashboard/ecommerce'
import Error404 from '../view/errors/404'

import Login from '../view/Login'

export default function Router() {
  // Default Layout
  const DefaultLayout = null // FullLayout or VerticalLayout

  // All of the available layouts
  const Layouts = { VerticalLayout, FullLayout }

  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = []
    const LayoutPaths = []
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          (route.layout === layout || DefaultLayout === layout) &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      )
    }

    return { LayoutRoutes, LayoutPaths }
  }

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)
      const LayoutTag = Layouts[layout]
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={(props) => {
                      return (
                        <Suspense fallback={null}>
                          <route.component {...props} />
                        </Suspense>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  return (
    <AppRouter>
      <Switch>
        {ResolveRoutes()}
        <Route
          exact
          path={'/'}
          render={() => {
            return <Login />
          }}
        />
        {/* <Route exact path={'/dashboard'} render={() => { return ( <Layouts.VerticalLayout> <Ecommerce /> </Layouts.VerticalLayout>)}}/> */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </AppRouter>
  )
}
