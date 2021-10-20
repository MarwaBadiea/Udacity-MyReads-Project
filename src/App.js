import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Search from './pages/search';


class BooksApp extends React.Component {
  
  render() {

    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route  path={"/search"} component={Search} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
