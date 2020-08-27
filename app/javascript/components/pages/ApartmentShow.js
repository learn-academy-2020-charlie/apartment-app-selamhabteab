import React, { Component } from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentShow extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }
    
    render(){
        let { apartment } = this.props
        console.log(apartment)
        return(
            <React.Fragment>
                    <h3>Apartment Show Page!</h3>
                    <p>Where you can learn more about the apartment's location, unit information, and rent!</p>
                
                    <Row id="cards">
                        <Col md="6">
                            <Card body>
                            <CardTitle>
                                <h5>{apartment.apartment_name}</h5>
                                <p>
                                { apartment.street }
                                <br />
                                { apartment.city }, { apartment.state }
                                </p>
                                <p>Manager name: { apartment.manager }</p>
                                <p>Manager email: { apartment.email }</p>
                                <p>Monthly rent: ${ apartment.price }</p>
                                <p>Bedrooms: { apartment.bedrooms }</p>
                                <p>Bathrooms: { apartment.bathrooms }</p>
                                <p>Pets Allowed: { apartment.pets }</p>
                                <NavLink
                                to={"/index"}
                                >
                                <Button color="secondary">
                                    Back to All Apartments
                                </Button>
                                </NavLink>
                            </CardTitle>
                            </Card>
                        </Col>
                    </Row>
                { this.state.success && <Redirect to={ `/index` }/> }
            </React.Fragment>
        )
    }
}
export default ApartmentShow