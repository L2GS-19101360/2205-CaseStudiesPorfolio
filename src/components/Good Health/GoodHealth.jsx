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
                    <h1 style={{ fontSize: '60px' }}>Good Health Case Study</h1>
                </div>
                <div style={{ border: '1px solid black', padding: '5px' }}>
                    <ol>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#project-background">Project Background</a></li>
                        <li><a href="#problem-statement">Problem Statement</a></li>
                        <li><a href="#user-search">User Search</a></li>
                        <li><a href="#ideation-and-brainstorming">Ideation and Brainstorming</a></li>
                        <li><a href="#prototyping">Prototyping</a></li>
                        <li><a href="#iteration-design-process">Iteration Design Process</a></li>
                        <li><a href="#final-design-solutions">Final Design Solutions</a></li>
                        <li><a href="#impact-and-results">Impact and Results</a></li>
                        <li><a href="#lessons-learned">Lessons Learned</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ol>
                </div>
                <h1 id="introduction">Introduction</h1>
                <h1 id="project-background">Project Background</h1>
                <h1 id="problem-statement">Problem Statement</h1>
                <h1 id="user-search">User Search</h1>
                <h1 id="ideation-and-brainstorming">Ideation and Brainstorming</h1>
                <h1 id="prototyping">Prototyping</h1>
                <h1 id="iteration-design-process">Iteration Design Process</h1>
                <h1 id="final-design-solutions">Final Design Solutions</h1>
                <h1 id="impact-and-results">Impact and Results</h1>
                <h1 id="lessons-learned">Lessons Learned</h1>
                <h1 id="conclusion">Conclusion</h1>
            </div>
        );
    }

}

export default GoodHealth