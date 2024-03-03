import React, { Component } from "react";
import GoodHealthIcon from '../../assets/SDG Images/GoodHealthIcon.png'
import { Link } from 'react-router-dom'

class GoodHealth extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Link to='/'>Back to Home Page</Link>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={GoodHealthIcon} width={100} height={100} alt="" style={{ marginRight: '10px' }} />
                    <h1 style={{fontSize: '60px'}}>Good Health Case Study</h1>
                </div>  
            </div>
        );
    }

}

export default GoodHealth