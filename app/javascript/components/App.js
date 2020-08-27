import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import MyApt from './pages/MyApt'
import Home from './pages/Home'
import { Nav, NavItem } from 'reactstrap'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import mockApartments from './MockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    fetch("/apartments")
    .then(response => {
        if(response.status === 200){
            return(response.json())
        }
    }).then(apartmentArray => {
        this.setState({ apartments: apartmentArray })
    }).catch(errors => {
        console.log("index errors", errors)
    })
}

createNewApartment = (apartment) => {
  console.log(apartment)
    return fetch("/apartments", {
    // converting an object to a string
    body: JSON.stringify(apartment),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => {
    // if the response is good  - reload the cats
    if(response.status === 200){
      this.componentDidMount()
    }
    return response
  })
  .catch(errors => {
    console.log("create errors:", errors)
  })
}


  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      //passed in by index.html.erb (devise)
      current_user
    } = this.props
    console.log("logged_in", logged_in, current_user);
    return (
        <Router>
          <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
          />
          <Switch>
            <Route exact path="/" 
            render={ (props) =>
              <Home 
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
            />
            <Route path="/index" 
            render={ (props) =>
              <ApartmentIndex
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                apartments={ this.state.apartments }
              />
            }
            />
            <Route 
            path={"/show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return ( 
                <ApartmentShow apartment = { apartment } />
                )
            }}
            />
            <Route
            path="/new"
            render={ (props) =>
              <ApartmentNew
                createNewApartment={ this.createNewApartment }
                current_user={ current_user }
              />
            }
            />

            { logged_in &&
            <Route
            path="/myapt"
            render={ (props) => {
              let user = current_user.id
              let apartments = this.state.apartments.filter(apartment => apartment.user_id === user)
              console.log(user, apartments)
              return (
                <MyApt apartments={ apartments } />
              )
            }}
            />
          }

          </Switch>
          <Footer
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
          />
        </Router>
    );
  }
}

export default App
