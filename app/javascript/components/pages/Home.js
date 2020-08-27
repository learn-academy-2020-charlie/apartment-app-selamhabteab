import React, {Component} from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApartmentIndex from '../pages/ApartmentIndex'
import apartment1 from '../assets/aerial_apartment.jpg'
import apartment2 from '../assets/browncouch'
import apartment3 from '../assets/greencouch.jpg'
import apartment4 from '../assets/livingroom.jpg'
import { UncontrolledCarousel } from 'reactstrap'


    class Home extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                items: [
                {
                    src: apartment1,
                    altText: 'Slide 1',
                    caption: 'This is the perfect place to get away from it all in the middle of it all.',
                    header: 'Check out our modern homes!',
                    key: '1'
                },
                {
                    src: apartment2,
                    altText: 'Slide 2',
                    caption: 'Check out our model units and get a feel of what could be',
                    header: 'Do you value natural light for your remote life?',
                    key: '2'
                },
                {
                    src: apartment3,
                    altText: 'Slide 3',
                    caption: 'Check out the varied spaces that fit your stylistic needs',
                    header: 'Do you value high ceilings, hard wood flooring, and a great floorplan?',
                    key: '3'
                },
                {
                    src: apartment4,
                    altText: 'Slide 4',
                    caption: 'Studios are available',
                    header: 'Made perfect for remote work',
                    key: '4'
                }
                ]
            }
        }
        render(){
            return(
            <React.Fragment>
                <h3 className="text-center">Check out our Modern Apartments or add your listing!</h3>
                <UncontrolledCarousel items={this.state.items} />
            </React.Fragment>
            )
        }
    }
    
    export default Home