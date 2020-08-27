import React, {Component} from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApartmentIndex from '../pages/ApartmentIndex'
import apartment1 from '../assets/aerial_apartment.jpg'
import apartment2 from '../assets/browncouch'
import apartment3 from '../assets/greencouch.jpg'
import apartment4 from '../assets/livingroom.jpg'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import { Container } from 'reactstrap'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <Header
                    logged_in={ this.props.logged_in }
                    sign_in_route={ this.props.sign_in_route }
                    sign_out_route={ this.props.sign_out_route }
                />

            <div>
            <h2 style={{ display:'flex', justifyContent:'center', padding:'16px', paddingTop:'32px' }}>Check out our Modern Apartments or add your listing!</h2>

            <Container className="themed-container" fluid="sm" style={{ display:'flex', justifyContent:'center', padding:'16px', paddingTop:'32px' }}>
                <Card style={{width:"50%", height:"50%"}}> 
                    <Row >
                    <Col >
                    <CardImg top width="100%" src={apartment1} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><strong>Meet Galaxy Apartment</strong></CardTitle>
                    <CardSubtitle>Based in Knowhere, CA </CardSubtitle>
                    <CardText>The Galaxy is a modern luxury residential collection in the heart of Knowhere. Offering top-notch amenities like our expansive community rooftop with stunning 360° views, enriching shared spaces for health + wellness, and a variety of well-appointed apartments and townhomes, this is the perfect place to get away from it all in the middle of it all.</CardText>
                    <Button href="/index">
                    View All Apartments
                    </Button>
                    </CardBody>
                    </Col>
                    </Row>
                </Card>
                </Container>
            </div>
                <Footer
                    logged_in={ this.props.logged_in }
                    sign_in_route={ this.props.sign_in_route }
                    sign_out_route={ this.props.sign_out_route }
                />
            </React.Fragment>
        )
    }
}
export default Home

// App.js:
editMyApt = (editmyapt, id) => {
    return fetch(`/editmyapt/${id}`, {
        // converting an object to a string
        body: JSON.stringify(editmyapt),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {"Content-Type": "application/json"},
        // HTTP verb so the correct endpoint is invoked on the server
        method: "PATCH"
    }).then(response => {
        // if the response is good  - reload the cats
        if(response.status === 200){ this.componentDidMount()}
        return response
    }).catch(errors => {
        console.log("edit errors", errors)
    })
}

deleteMyApt = (id) => {
    console.log("deletedMyAptId: ", id)
    return fetch(`/myapt/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 200){
        this.componentDidMount()
      }else {
        alert("Not successfully deleted")
    }
    return response
      
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }




  import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MyApt extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }

    render(){
    return(
    <React.Fragment>
    <h3>My Apartments</h3>
    <Row id="cards">
        { this.props.apartments.map((apartment, index) => {
            return (
            <Col sm="4" key={ index }>
                <Card body>
                <CardTitle>
                    <h5>{ apartment.street }</h5>
                    <h5>{ apartment.city }</h5>
                    <h5>{ apartment.state }</h5>
                    <p>
                    <NavLink to={`/show/${apartment.id}`}>
                        <Button color="secondary">
                        More Info
                        </Button>
                    </NavLink>
                    </p>
                </CardTitle>
                </Card>
            </Col>
            )
        })}
    </Row>
    { this.state.success && <Redirect to={ `/` }/> }
    </React.Fragment>
    )
    }
}
export default MyApt
