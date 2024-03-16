import './App.css'
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import Lorenz from '../src/assets/developers/Lorenz.jpg';
import Francis from '../src/assets/developers/Francis.jpg';
import James from '../src/assets/developers/James.jpg';
import Nathan from '../src/assets/developers/Nathan.jpg';
import SustainableCitiesIcon from '../src/assets/SDG Images/SustainableCitiesIcon.png'
import GoodHealthIcon from '../src/assets/SDG Images/GoodHealthIcon.png'
import SustainableCitiesTab from '../src/assets/SDG Images/SustainableCitiesTab.png'
import GoodHealthTab from '../src/assets/SDG Images/GoodHealthTab.png'
import { Link } from 'react-router-dom'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isGoodHealthHovered: false,
      isSustainableCitiesHovered: false,
    }
    this.toGoodHealthPage = this.toGoodHealthPage.bind(this);
    this.toSustainableCitiesPage = this.toSustainableCitiesPage.bind(this);
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  toGoodHealthPage() {
    this.props.history.push('GoodHealthPage');
  }
  toSustainableCitiesPage() {
    this.props.history.push('SustainablePage');
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>SNAP InfoTechnovations, Incorporation</h1><br />
          <div style={{ backgroundColor: 'white', padding: '2%' }}>
            <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '18px' }}>Welcome to SNAP InfoTechnovations, Incorporation, a pioneering force in Information Technology Innovations. Our corporation is dedicated to the development, distribution, and provision of cutting-edge software solutions tailored for diverse industries such as information technology, telecommunications, finance, and beyond. With a commitment to excellence, we also offer consultancy services to enhance operational efficiency and drive strategic growth. Please note that while we engage in providing information technology solutions both domestically and internationally, we do not solicit, accept, or take investments/placements from the public, nor do we issue investment contracts.</p>
            <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '18px' }}>Our core mission is to develop, distribute, and deliver innovative software solutions tailored for diverse sectors, encompassing information technology, telecommunications, finance, and beyond. Complemented by comprehensive consultancy services, our commitment lies in enhancing operational efficiency and driving technological evolution. Embracing a global perspective, we cater to clients domestically and internationally, spearheading transformative IT solutions. It is crucial to note that while we are poised for growth and innovation, we uphold ethical standards by refraining from soliciting investments from the public or issuing investment contracts. At SNAP InfoTechnovations, we are not just shaping the future of technology; we are redefining it.</p>
          </div>
          <br />

          <h1>SNAP InfoTechnovations Team and Developers</h1>
          <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '75px' }}>
            <li><img src={Lorenz} height={180} width={180} style={{ border: '1px solid black' }} alt="" /><br />Lorenz Gil Suico</li>
            <li><img src={Francis} height={180} width={180} style={{ border: '1px solid black' }} alt="" /><br />Francis Louis Aliser</li>
            <li><img src={James} height={180} width={180} style={{ border: '1px solid black' }} alt="" /><br />James Winston Ng</li>
            <li><img src={Nathan} height={180} width={180} style={{ border: '1px solid black' }} alt="" /><br />Nathan Eldridge Pernites</li>
          </ul><br />

          <div style={{ backgroundColor: 'white', padding: '2%' }}>
            <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '18px' }}>At SNAP InfoTechnovations, we are deeply committed to contributing to sustainable development through our innovative solutions. The corporation is committed to developing systems that contribute to sustainable development and address critical global challenges outlined in the United Nations Sustainable Development Goals (SDGs). Focusing on SDG 11: Sustainable Cities and Communities, and SDG 3: Good Health and Well-being, our teams and developers are dedicated to creating innovative solutions that promote urban sustainability and enhance public health. Our dedicated teams and developers are tasked with developing systems that not only tackle these Sustainable Development Goals (SDGs) but also create real-world impact. Through comprehensive case studies and rigorous problem-solving methodologies, we aim to provide sustainable solutions that enhance urban living environments, promote community well-being, and improve overall health outcomes. By aligning our technological advancements with these SDGs, we strive to foster a more sustainable and inclusive world for generations to come.</p>
          </div>
          <br />

          <div style={{ textAlign: "center", display: "inline-flex", gap: "75px" }}>
            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={GoodHealthTab} />
              <Card.Body>
                <Card.Title>VirtualFit Case Study</Card.Title>
                <Card.Text>
                  VirtualFit aims to revolutionize the way individuals engage with physical activity by providing a platform for virtual workout classes and fitness routines.
                </Card.Text>
                <Link to='/GoodHealthPage'><Button variant="success">Go to VirtualFit Case Study</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={SustainableCitiesTab} />
              <Card.Body>
                <Card.Title>CommuteSmart Case Study</Card.Title>
                <Card.Text>
                  CommuteSmart aims to empower students to make informed choices that reduce their environmental footprint while optimizing their travel experience.
                </Card.Text>
                <Link to="/SustainableCitiesPage"><Button variant="warning">Go to CommuteSmart Case Study</Button></Link>
              </Card.Body>
            </Card>
          </div>

          <br />
        </div>
      </div>
    );
  }

}

export default App
