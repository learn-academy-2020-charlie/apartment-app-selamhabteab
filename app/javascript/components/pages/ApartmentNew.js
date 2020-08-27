import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component{
    constructor(props){
    super(props)
        this.state = {
            form:{
                apartment_name: "",
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                user_id: this.props.current_user.id
            },
        success: false
        }
    }

    handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
    }

    handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    this.props.createNewApartment(this.state.form)
    this.setState({ success: true })
    }

    render(){
    console.log("current_user", this.props.current_user)
        return(
            <React.Fragment>
            <h3>Add an Apartment</h3>
            <div className="body-container">
                <div className="form">
                <Form>
                    
                    <FormGroup>
                    <Label>Apartment Name</Label>
                    <Input
                        type="text"
                        name="apartment_name"
                        onChange={ this.handleChange }
                        value={ this.state.form.apartment_name }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Street</Label>
                    <Input
                        type="text"
                        name="street"
                        onChange={ this.handleChange }
                        value={ this.state.form.street }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>City</Label>
                    <Input
                        type="text"
                        name="city"
                        onChange={ this.handleChange }
                        value={ this.state.form.city }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>State</Label>
                    <Input
                        type="text"
                        name="state"
                        onChange={ this.handleChange }
                        value={ this.state.form.state }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Manager's Name</Label>
                    <Input
                        type="text"
                        name="manager"
                        onChange={ this.handleChange }
                        value={ this.state.form.manager }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Manager's Email</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={ this.handleChange }
                        value={ this.state.form.email }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Number of Bedrooms</Label>
                    <Input
                        type="number"
                        name="bedrooms"
                        onChange={ this.handleChange }
                        value={ this.state.form.bedrooms }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Number of Bathrooms</Label>
                    <Input
                        type="number"
                        name="bathrooms"
                        onChange={ this.handleChange }
                        value={ this.state.form.bathrooms }
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label>Are Pets Allowed?</Label>
                    <Input
                        type="text"
                        name="pets"
                        onChange={ this.handleChange }
                        value={ this.state.form.pets }
                    />
                    </FormGroup>

                    <Button
                    name="submit"
                    color="secondary"
                    onClick={ this.handleSubmit }
                    >
                    Add a New Apartment
                    </Button>
                </Form>
                </div>
            </div>
            { this.state.success && <Redirect to="/myapt" />}
            </React.Fragment>
        )
    }
}
export default ApartmentNew