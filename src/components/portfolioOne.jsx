import React, { useState } from 'react'
import Modal from 'react-modal';
import FsLightbox from "fslightbox-react";

export default function PortfolioOne() {
    // For Modal Box
    const [isOpen1, setIsOpen1] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalOne(value) {
        setIsOpen1(!isOpen1);
        setModalContent(value);
    }
    // For Lightbox
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(index) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1 // increment index by 1 to match slide numbering
        });
    }

    const projects = [
        {
            title: "I gift for a good boy",
            subTitle: "Art Design",
            img: "assets/img/project-1.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Drawing",
            languages: "I dunno",
            platform: "I dunno",
            country: "Brazil",
            liveURL: "www.demo.com"


        },
        {
            title: "Playing with my dog",
            subTitle: "LMFAOOOOO",
            img: "assets/img/project-2.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Screenshot",
            languages: "English?",
            platform: "My PC",
            country: "Brazil",
            liveURL: "www.example.com"


        },
        {
            title: "Dancing to kPop in VR",
            subTitle: "We were drunk and i forced him to do it",
            img: "assets/img/project-3.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "I dunno",
            languages: "I dunno",
            platform: "VR CHAT BABYYY",
            country: "Brazil",
            liveURL: "www.xyz.com"


        },
        {
            title: "Speed running",
            subTitle: "EZ Clap didn't get scared at all *worried laughter*",
            img: "assets/img/project-4.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Videogame",
            languages: "I dunno",
            platform: "VR CHAT AGAIN",
            country: "Brazil",
            liveURL: "www.mysite.com"



        },
        {
            title: "I am not an alcoholic okay?",
            subTitle: "I swear",
            img: "assets/img/project-5.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "i dunno",
            languages: "alcohol",
            platform: "My table",
            country: "Brazil",
            liveURL: "www.yoursite.com"



        },
        {
            title: "Me",
            subTitle: "I draw myself",
            img: "assets/img/project-6.jpg",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Aigital art",
            languages: "imagination",
            platform: "my tablet",
            country: "Brazil",
            liveURL: "www.realsite.com"



        }
    ]
    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>My Portfolio</span>
                    </h3>
                </div>
                <div className="lightbox-gallery">
                    <div className="row g-3 g-lg-4 portfolio-content">
                        {projects.map((data, index) => (
                            <div className="col-sm-6 col-lg-4 grid-item" key={index}>
                                <div className="portfolio-box">
                                    <div className="portfolio-text">
                                        <h6>{data.title}</h6>
                                        <p>{data.subTitle}</p>
                                        <a onClick={() => openLightboxOnSlide(index)} className="gallery-link" href="#project_1" ><i className="bi-arrow-up-right-circle" /></a>
                                    </div>
                                    <div className="portfolio-img">
                                        <img src={data.img} />
                                        <a onClick={() => toggleModalOne(data)} className="px_modal portfolio-modal-link" href="#project_1">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <FsLightbox
                            toggler={lightboxController.toggler}
                            sources={projects.map((data) => data.img)}
                            slide={lightboxController.slide}
                        />
                    </div>
                    {modalContent && (
                        <Modal
                            isOpen={isOpen1}
                            onRequestClose={toggleModalOne}
                            closeTimeoutMS={300}
                            openTimeoutMS={300}
                        >
                            <div id="full_description" className="px-modal">
                                <div className="single-project-box">
                                    <div className="row align-items-start">
                                        <button onClick={toggleModalOne} title="Close (Esc)" type="button" className="mfp-close">×</button>
                                        <div className="col-lg-7">
                                            <div className="row g-2">
                                                <div className="col-6">
                                                    <img className="border" src={modalContent.img} alt="title" />
                                                </div>
                                                <div className="col-6">
                                                    <img className="border" src={modalContent.img} alt="title" />
                                                </div>
                                                <div className="col-6">
                                                    <img className="border" src={modalContent.img} alt="title" />
                                                </div>
                                                <div className="col-6">
                                                    <img className="border" src={modalContent.img} alt="title" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 pt-4 pt-lg-0">
                                            <h4>{modalContent.title}</h4>
                                            <p className="mb-3">{modalContent.desc}</p>
                                            <div className="about-content">
                                                <ul>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Type:</span>
                                                        <span>{modalContent.type}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Languages:</span>
                                                        <span>{modalContent.languages}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Platform:</span>
                                                        <span>{modalContent.platform}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Country:</span>
                                                        <span>{modalContent.country}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Live URL:</span>
                                                        <span>{modalContent.liveURL}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    )
}
