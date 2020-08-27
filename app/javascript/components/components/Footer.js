import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import ApartmentIndex from '../pages/ApartmentIndex'
import MyApt from '../pages/MyApt'
import ApartmentNew from '../pages/ApartmentNew'
import Home from '../pages/Home'

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <React.Fragment>
            <Breadcrumb tag="nav" listTag="div">

                <BreadcrumbItem tag="a" href="/"> Home 
                </BreadcrumbItem>

                <BreadcrumbItem tag="a" href="/index">
                Apartment List
                </BreadcrumbItem>

                { this.props.logged_in &&
                <>
                    <BreadcrumbItem tag="a" href="/myapt">
                    My Apartments
                    </BreadcrumbItem>

                    <BreadcrumbItem tag="a" href="/new">
                    Add a New Apartment
                    </BreadcrumbItem>

                    <BreadcrumbItem tag="a" href={ this.props.sign_out_route }>
                    Sign Out
                    </BreadcrumbItem>
                </>
                }
                { !this.props.logged_in &&
                <>
                <BreadcrumbItem tag="a" href={ this.props.sign_in_route }>
                    Sign In
                    </BreadcrumbItem>
                </>
                }
            </Breadcrumb>
        </React.Fragment>
        )
    }
}

export default Footer