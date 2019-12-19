import React,{propTypes} from "react"
import {Switch, Route} from "react-router-dom";
import List from "./List"
import Blog from "./Blog"




export default class Layout extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return <main>
      <Switch>
        <Route exact path='/' component={List}/>
        <Route exact path='/blog/:id' component={Blog}/>
      </Switch>
    </main>
  }
}