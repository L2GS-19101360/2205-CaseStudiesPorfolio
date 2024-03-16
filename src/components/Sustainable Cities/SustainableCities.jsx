import React, { Component } from "react";
import SustainableCitiesIcon from '../../assets/SDG Images/SustainableCitiesIcon.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import LawrencePersona from '../../assets/ideal users/Sustainable Cities/Personas/LawrencePersona.jpg'
import LorenzoPersona from '../../assets/ideal users/Sustainable Cities/Personas/LorenzoPersona.jpg'

import LawrenceEmpathyMap from '../../assets/ideal users/Sustainable Cities/EmpathyMaps/LawrenceEmpathyMap.jpg'
import LorenzoEmpathyMap from '../../assets/ideal users/Sustainable Cities/EmpathyMaps/LorenzoEmpathyMap.jpg'

import CommuteSmartInspirationBoard from '../../assets/ideations/Sustainable Cities/CommuteSmartInspirationBoard.jpg'
import CommuteSmartMindMap from '../../assets/ideations/Sustainable Cities/CommuteSmartMindMap.jpg'
import CommuteSmartFishbone from '../../assets/ideations/Sustainable Cities/CommuteSmartFishbone.jpg'
import CommuteSmartSCAMPER from '../../assets/ideations/Sustainable Cities/CommuteSmartSCAMPER.jpg'
import CommuteSmartBrainStorming from '../../assets/ideations/Sustainable Cities/CommuteSmartBrainStorming.jpg'

import CommuteSmartWireframe from '../../assets/wireframes/Sustainable Cities/CommuteSmartWireframe.jpg'

import LawrenceFlowchart from '../../assets/flowcharts/Sustainable Cities/LawrenceFlowchart.jpg'
import LorenzoFlowchart from '../../assets/flowcharts/Sustainable Cities/LorenzoFlowchart.jpg'

import CommuteSmartTimeline from '../../assets/timelines/CommuteSmartTimeline.jpg'

import CommuteSmartDoc from '../../assets/documents/CommuteSmartDocument.pdf'

class SustainableCities extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div id="TopPage">
                <Link to='/'>Back to Home Page</Link><br /><br />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={SustainableCitiesIcon} width={100} height={100} alt="" style={{ marginRight: '10px' }} />
                    <h1 style={{ fontSize: '60px' }}>Sustainable Communities and Cities Case Study</h1>
                </div><br />
                Sustainable Communities and Cities Document: <a href={CommuteSmartDoc} target="_blank" rel="noopener noreferrer">View CommuteSmart Document</a><br /><br />
                <div style={{ border: '1px solid black', padding: '5px', backgroundColor: 'white' }}>
                    <ol>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#project-background">Project Background</a></li>
                        <li><a href="#problem-statement">Problem Statement</a></li>
                        <li><a href="#user-search">User Search</a></li>
                        <li><a href="#ideation-and-brainstorming">Ideation and Brainstorming</a></li>
                        <li><a href="#prototyping">Prototyping</a></li>
                        <li><a href="#usertesting">User Testing</a></li>
                        <li><a href="#iteration-design-process">Iteration Design Process</a></li>
                        <li><a href="#final-design-solutions">Final Design Solutions</a></li>
                        <li><a href="#impact-and-results">Impact and Results</a></li>
                        <li><a href="#lessons-learned">Lessons Learned</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ol>
                </div><br />
                <h1 id="introduction">Introduction</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The team selects and focuses on addressing the critical issues of Sustainable Cities and Communities in alignment with Sustainable Development Goals. The goal of the team is to revolve around the development of innovative solutions to promote sustainable social inclusivity and social cohesion, enhancing the quality of life for civilians.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>In this portfolio, the team aims to address the challenge of promoting and facilitating sustainable and efficient and eco-friendly commuting solutions for university students.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>In today's urban landscapes, navigating daily travels to and from campus can be daunting, often leading to congestion and environmental strain. CommuteSmart aims to revolutionize this experience by providing real-time traffic updates and alternative route suggestions, empowering students to make informed decisions and reduce their carbon footprint. Through this innovative platform, we aspire to foster sustainable mobility practices and contribute towards building healthier and more resilient communities.</p>
                </div><br />
                <h1 id="project-background">Project Background</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The CommuteSmart project is aimed at addressing the daily commuting challenges faced by students of the university. With the increasing number of students commuting to and from the university campus, there is a growing need for a solution that can provide real-time information and guidance to help them navigate their journeys more efficiently.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>In recent years, there has been a significant increase in traffic congestion and delays, especially during peak hours. This has not only resulted in wasted time for students but has also contributed to environmental issues due to increased emissions from vehicles.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The rise of smart technology and mobile applications has revolutionized the way people travel, with many commuters now relying on real-time traffic information to plan their routes. This project aims to leverage these advancements to provide students with a user-friendly platform that offers accurate and up-to-date information on traffic conditions, alternative routes, and public transportation options.</p>
                </div><br />
                <h1 id="problem-statement">Problem Statement</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>CommuteSmart endeavors to tackle these issues head-on by providing a user-friendly, comprehensive platform designed to streamline daily commutes for university students. By offering real-time updates on traffic conditions and suggesting alternative routes, CommuteSmart aims to empower students to make informed choices that reduce their environmental footprint while optimizing their travel experience </p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The scope of CommuteSmart extends to developing a robust system tailored to the specific needs of students commuting to and from the University of San Carlos Talamban campus. Through features such as route optimization and transportation sharing options, the platform seeks to enhance accessibility and promote sustainable transportation practices among students. However, potential challenges related to infrastructure, user adoption, and behavior change may arise. Efforts will be directed towards addressing these challenges and continually improving the platform to maximize its impact on fostering sustainable commuting habits among students.</p>
                </div><br />
                <h1 id="user-search">User Research</h1>
                <div>
                    <div style={{ backgroundColor: 'white', padding: '2%' }}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Understanding the needs and behaviors of both students and teachers is vital for the success of CommuteSmart. A comprehensive user research process was undertaken to gather insights into their commuting experiences and preferences, informing the design and functionality of the proposed platform.</p>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>User Personas: Based on the research findings, several user personas were developed to represent the diverse needs and preferences of the target audience, including students and teachers:</p>
                    </div><br />
                    <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '30px' }}>
                        <li><img src={LawrencePersona} width={684} height={502} alt="" /></li>
                        <li><img src={LorenzoPersona} width={684} height={502} alt="" /></li>
                    </ul>
                    <div style={{ backgroundColor: 'white', padding: '2%' }}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Empathy Maps: Empathy maps were created to visualize the thoughts, feelings, and actions of the user personas, helping to understand their motivations and needs more deeply. These maps guided the design process by ensuring that the proposed platform addresses the specific challenges and requirements of the target audience.</p>
                    </div><br />
                    <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '30px' }}>
                        <li><img src={LawrenceEmpathyMap} width={684} height={380} alt="" /></li>
                        <li><img src={LorenzoEmpathyMap} width={684} alt="" /></li>
                    </ul>
                </div><br />
                <h1 id="ideation-and-brainstorming">Ideation and Brainstorming</h1>
                <div>
                    <div style={{ backgroundColor: 'white', padding: '2%' }}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>During the ideation phase for CommuteSmart, a collaborative approach was taken to generate a variety of potential solutions to address the commuting challenges faced by students and teachers at the university. Brainstorming sessions and workshops were conducted, involving stakeholders from different departments to gather diverse perspectives. Ideas were generated around enhancing the user experience, promoting sustainability, and leveraging technology to provide real-time information and guidance.</p>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>These concepts were initially evaluated based on feasibility, impact on user experience, and alignment with the project's goals of efficiency and sustainability. The ideation phase fostered creativity and innovation, laying the groundwork for the development of a comprehensive solution in the form of the CommuteSmart React Website.</p>
                    </div><br />
                    <div style={{ textAlign: 'center' }}>
                        <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '10px' }}>
                            <li><img src={CommuteSmartInspirationBoard} width={700} height={500} alt="" /></li>
                            <li><img src={CommuteSmartFishbone} width={700} height={500} alt="" /></li>
                        </ul>
                        <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '10px' }}>
                            <li><img src={CommuteSmartMindMap} width={700} height={500} alt="" /></li>
                            <li><img src={CommuteSmartSCAMPER} width={700} height={500} alt="" /></li>
                        </ul>
                        <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '10px' }}>
                            <li><img src={CommuteSmartBrainStorming} width={700} height={500} alt="" /></li>
                        </ul>
                    </div>
                    <br />Sustainable Communities and Cities Miro Board: <a href="https://miro.com/welcomeonboard/VjJ6bkhEalE5NUdraFFRYmx6SmNDcmNZdWROdnlINVE4emNTcEVHSnhkQXlUZ1IzMWFaSDVWbkRtc0UzVkpqYXwzNDU4NzY0NTc2NTI2Mjg3NDY3fDI=?share_link_id=918196913925" target="_blank" rel="noopener noreferrer">CommuteSmart Miro</a>
                </div><br />
                <h1 id="prototyping">Prototyping</h1>
                <div>
                    <div style={{ backgroundColor: 'white', padding: '2%' }}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>In the prototyping phase of CommuteSmart, design concepts were transformed into tangible prototypes through a series of iterations, progressing from low-fidelity to high-fidelity versions. Initially, wireframes and mockups were created to outline the basic layout and functionality of the website, focusing on key features such as real-time traffic information and alternative route suggestions. These low-fidelity prototypes allowed for rapid iteration and feedback gathering from stakeholders and potential users. </p>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Feedback from these sessions was carefully analyzed and incorporated into subsequent iterations, ensuring that the final prototype of the CommuteSmart React Website meets the needs and expectations of its users while fulfilling its goal of assisting students and teachers in their daily commute efficiently and sustainably.</p>
                    </div><br />
                    <div style={{ textAlign: 'center' }}>
                        <img src={CommuteSmartWireframe} alt="" />
                    </div>
                    <br />Sustainable Communities and Cities Figma Board: <a href="https://www.figma.com/file/crhFKUNdQxrJoRZbhwspQY/CommuteSmart-Wireframe?type=design&node-id=0%3A1&mode=design&t=YHRyFB23bnCZ4WtP-1" target="_blank">CommuteSmart Figma</a>
                </div><br />
                <h1 id="usertesting">User Testing</h1>
                <div>
                    <div style={{ backgroundColor: 'white', padding: '2%' }}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>User testing sessions involved participants performing tasks such as checking traffic conditions, exploring alternative routes, and planning a commute. Observations were made on how users interacted with the website, and feedback was collected through surveys and interviews.</p>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Insights from the user testing sessions highlighted several key findings. Users appreciated the real-time traffic information provided by the platform, finding it valuable for planning their commute.</p>
                    </div><br />
                    <div style={{ textAlign: 'center' }}>
                        <img src={LawrenceFlowchart} width={1284} alt="" /><br /><br />
                        <img src={LorenzoFlowchart} width={1284} alt="" />
                    </div>
                </div><br/>
                <h1 id="iteration-design-process">Iteration Design Process</h1>
                <div >
                    <div style={{backgroundColor: 'white', padding: '2%'}}>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The development timeline of CommuteSmart follows an iterative design process, characterized by continuous refinement and enhancement based on feedback and insights gathered throughout various stages of the project. Initially, the project kicked off with the identification of key objectives and requirements, outlining the core functionalities and features of the website. As the design phase commenced, prototypes were created to visualize the proposed solution, allowing stakeholders to provide input and suggestions for improvement.</p>
                        <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Throughout the ongoing development process, the design of CommuteSmart continues to evolve, guided by the goal of creating a user-friendly and effective platform that meets the needs of students and teachers at the university. </p>
                    </div><br/>
                    <div style={{ textAlign: 'center' }}>
                        <img src={CommuteSmartTimeline} width={1450} alt="" />
                    </div>
                    <br />Sustainable Communities and Cities Miro Board: <a href="https://miro.com/welcomeonboard/VjJ6bkhEalE5NUdraFFRYmx6SmNDcmNZdWROdnlINVE4emNTcEVHSnhkQXlUZ1IzMWFaSDVWbkRtc0UzVkpqYXwzNDU4NzY0NTc2NTI2Mjg3NDY3fDI=?share_link_id=918196913925" target="_blank" rel="noopener noreferrer">CommuteSmart Timeline</a>
                </div><br/>
                <h1 id="final-design-solutions">Final Design Solutions</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The final design solution for CommuteSmart is a comprehensive website that addresses the daily commuting challenges faced by students and teachers at the university while promoting sustainability and efficiency. The platform provides real-time information on upcoming traffic conditions, allowing users to plan their commute effectively and avoid congestion. Additionally, CommuteSmart offers advice on alternative routes, taking into account factors such as traffic volume and travel time to help users navigate their journey efficiently.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>By providing valuable real-time information and guidance, CommuteSmart aims to improve the overall commuting experience for students and teachers at the university while contributing to sustainable cities and communities. The final design solution reflects a refined and effective solution that addresses the initial problem statement and fulfills the needs of its users.</p>
                </div><br/>
                <h1 id="impact-and-results">Impact and Results</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <ol>
                        <li style={{ fontWeight: 'bold' }}>Improved User Experience: Feedback from users indicates a noticeable improvement in the overall commuting experience since the introduction of CommuteSmart. </li>
                        <li style={{ fontWeight: 'bold' }}>Reduced Commute Times: The implementation of CommuteSmart has led to measurable reductions in commute times for users.</li>
                        <li style={{ fontWeight: 'bold' }}>Promotion of Sustainable Transportation: CommuteSmart has played a key role in promoting sustainable transportation options among students and teachers.</li>
                        <li style={{ fontWeight: 'bold' }}>Enhanced Campus Accessibility: With the assistance of CommuteSmart, students and teachers have reported improved accessibility to campus facilities and resources.</li>
                        <li style={{ fontWeight: 'bold' }}>Contribution to Sustainable Cities and Communities: By facilitating more efficient and sustainable commuting practices, CommuteSmart has contributed to the university's efforts to create a more sustainable campus environment.</li>
                    </ol>
                </div><br/>
                <h1 id="lessons-learned">Lessons Learned</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>CommuteSmart is a comprehensive solution designed to address the challenge of sustainable and efficient commuting for university students, with a focus on the University of San Carlos Talamban campus. It is a user-friendly platform that offers real-time traffic updates, alternative route suggestions, and various transportation options to empower students in making informed decisions and reducing their environmental footprint.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>CommuteSmart revolutionizes the commuting experience for university students by offering a user-centric platform that addresses their specific needs and challenges. Through real-time updates, alternative route suggestions, and comprehensive transportation options, the platform empowers students to make sustainable and efficient choices in their daily travels. With a focus on user-friendliness, personalization, and safety, CommuteSmart aims to enhance the overall quality of life for students while contributing to the development of healthier and more resilient communities.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>By leveraging technology and fostering a collective commitment to sustainability, CommuteSmart paves the way for a greener and more accessible future of commuting, ultimately leading to positive social and environmental impact.</p>
                </div><br/>
                <h1 id="conclusion">Conclusion</h1>
                <div style={{ backgroundColor: 'white', padding: '2%' }}>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>CommuteSmart presents a transformative solution to the challenges of sustainable commuting for university students, particularly those attending the University of San Carlos Talamban campus. Through real-time traffic updates, alternative route suggestions, and various transportation options, CommuteSmart aims to empower students to make informed decisions and reduce their environmental footprint.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>The significance of CommuteSmart lies in its potential to revolutionize the commuting experience, not only improving the daily lives of students but also contributing to the development of healthier and more resilient communities. By fostering a collective commitment to sustainability and leveraging technology, CommuteSmart paves the way for a greener and more accessible future of commuting.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Encouraging collaboration and further exploration is essential to the success of CommuteSmart. We invite stakeholders, including university administrators, students, transportation authorities, and tech enthusiasts, to join us in refining and implementing this innovative platform. Through collaboration, we can address potential challenges, enhance user experience, and scale CommuteSmart to other universities and communities, maximizing its positive impact.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>Together, let's embrace sustainable commuting practices and build a brighter future for our cities and communities. Join us in the journey towards a more efficient, eco-friendly, and inclusive commuting experience with CommuteSmart.</p>
                </div><br />
                <div style={{ textAlign: 'center' }}>
                    <a href="#TopPage">Back to the Top</a>
                </div>
            </div>
        );
    }

}

export default SustainableCities