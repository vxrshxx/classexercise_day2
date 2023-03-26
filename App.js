

      
import React, { Component } from 'react'

import './App.css'   
import Material from './Material'
import Footer from './Footer'
import Naving from './Naving'
      export class App extends Component {
        render() {
          return (
            <div><Naving></Naving>
            <Material></Material>
            <Footer></Footer>
            </div>
            
          )
        }
      }
      
      export default App
