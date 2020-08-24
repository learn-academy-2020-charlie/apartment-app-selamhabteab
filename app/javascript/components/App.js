import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in", logged_in);
    return (
      <React.Fragment>
        <h1>Apartment App</h1>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in && 
        <div>
          <a href={sign_in_route}>Sign In</a>
        </div>
        }
      </React.Fragment>
    );
  }
}

export default App
