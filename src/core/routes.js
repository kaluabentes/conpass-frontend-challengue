import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from '../pages/index'

const Routes = () => (
  <Switch>
    <Route path="/" component={Index} />
  </Switch>
)

export default Routes
