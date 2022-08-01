import React, { Component } from 'react'
import Burger from './Burger'
import MenuBurger from './MenuBurger'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center text-success mt-3">Burger-App</h1>
        <div className="row mt-3">
            <div className="col-8">
                <Burger/>
            </div>

            <div className="col-4">
                <MenuBurger/>
            </div>
        </div>
      </div>
    )
  }
}
