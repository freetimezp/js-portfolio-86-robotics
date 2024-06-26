import React, { useState, useRef } from 'react';
import './funFacts.css';

import Odometer from "react-odometerjs";

import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FunFacts = () => {
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [team, setTeam] = useState(0);
    const [awards, setAwards] = useState(0);

    const container = useRef(null);

    const updateData = () => {
        const timeId = setTimeout(() => {
            setClients(120);
            setProjects(150);
            setTeam(44);
            setAwards(89);
        }, 500);

        return () => {
            clearTimeout(timeId);
        }
    };

    const reset = () => {
        setClients(0);
        setProjects(0);
        setTeam(0);
        setAwards(0);
    };

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 4,
                onEnter: updateData,
                onLeaveBack: reset

            }
        });

        return () => timeline.revert();
    }, { scope: container });

    return (
        <div className='fun__facts blur-effect' ref={container}>
            <div className="container">
                <div className="fact">
                    <div className="icon__container">
                        <FaUsersLine />
                    </div>
                    <div className="row">
                        <Odometer value={clients} className='title' />
                        <h1 className="title">K</h1>
                    </div>
                    <small className="text__muted">Happy Customers</small>
                </div>

                <div className="fact">
                    <div className="icon__container">
                        <FaDiagramProject />
                    </div>
                    <div className="row">
                        <Odometer value={projects} className='title' />
                        <h1 className="title">+</h1>
                    </div>
                    <small className="text__muted">Completed Projects</small>
                </div>

                <div className="fact">
                    <div className="icon__container">
                        <GiTeamIdea />
                    </div>
                    <div className="row">
                        <Odometer value={team} className='title' />
                        <h1 className="title">+</h1>
                    </div>
                    <small className="text__muted">Team</small>
                </div>

                <div className="fact">
                    <div className="icon__container">
                        <FaAward />
                    </div>
                    <div className="row">
                        <Odometer value={awards} className='title' />
                        <h1 className="title">+</h1>
                    </div>
                    <small className="text__muted">Awards Winning</small>
                </div>
            </div>
        </div>
    );
}

export default FunFacts;
