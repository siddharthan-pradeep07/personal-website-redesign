import { useState } from "react";
import bgImage from "./assets/img/bg_8.jpg";
import amazerImg from "./assets/img/amazer.png";
import bookImg from "./assets/img/book.png";
import inplaceImg from "./assets/img/inpace1.jpg";
import FemtoImg from "./assets/img/femto_game_thumbnail.png";
import ppImg from "./assets/img/plasma_photo.jpg";
import printlyImg from "./assets/img/printly_home2.png";
import MicroImg from "./assets/img/micro_mouse.jpeg";
import wild from "./assets/img/wild.png";
import strandbeest from "./assets/img/strandbeest_2.png"
import { useNavigate } from 'react-router-dom';
import { play_hover_sound } from "./sound.js";


export default function Projects()
{
    const navigate = useNavigate();
    // PROJECT CARD INFO
    const projects =
    [
        {
            name: "Amazer",
            description: "Build, solve & simulate mazes. Visualise DFS, and wall-following algorithms, generate mazes, edit and find solutions.",
            date: "APR 2026",
            category: "Software",
            image: amazerImg,
            liveLink: "https://siddharthan-pradeep07.github.io/Amazer/src/pages/home.html",
            codeLink: "https://github.com/siddharthan-pradeep07/Amazer",
        },
        {
            name: "Inplace",
            description: "A small device with an OLED display, joystick, and Arduino Nano used for handling the basic features.",
            date: "JAN 2025",
            category: "Hardware",
            image: inplaceImg,
            liveLink: "http://i-do-not-have-a-demo-for-this.com/",
            codeLink: "https://github.com/siddharthan-pradeep07/Inplace",
        },
        {
            name: "Plasma plant",
            description: "Farming rover that detects the soil, suggests seeds, sows them, and waters. Stops automatically when land is covered.",
            date: "SEP 2025",
            category: "Robotics",
            image: ppImg,
            liveLink: "https://youtube.com/shorts/KFvk7Cw4Y6I?si=3ox_9fIEVDu8zfDL",
            codeLink: "https://github.com/siddharthan-pradeep07/Plasma_plant",
        },
        {
            name: "Femto",
            description: "A javascript platforer game based on a hen, collect coins & avoid enemies. made for the sprig console (sprig.hackclub.com)",
            date: "JUL 2025",
            category: "Games",
            image: FemtoImg,
            playLink: "/femto",
            codeLink: "https://github.com/hackclub/sprig/pull/3172",
        },
        {
            name: "Printly 3D",
            description: "3D printing website, for everyone: just upload a 3D model and I'll print it and deliver it to you. (redesign of socxly.me/p3d)",
            date: "MAR 2024",
            category: "Web",
            image: printlyImg,
            codeLink: "https://github.com/siddharthan-pradeep07/Printly-3D",
            liveLink: "https://siddharthan-pradeep07.github.io/Printly-3D",
        },
        {
            name: "Micro Mouse V2",
            description: "Maze solving robot v2 made with esp32, TB6612FNG and N20 motors with an array of 4 ultrasonic sensors.",
            date: "FEB 2026",
            category: "Robotics",
            image: MicroImg,
            codeLink: "https://this-is-a-private-project.com",
            liveLink: "https://youtube.com/shorts/P9D8oNlkbqY",
        },
        {
            name: "Strandbeest simulator",
            description: "Simulate Theo jansen's strandbeests (beach animals) with various tools.",
            date: "JUN 2026",
            category: "Software",
            image: strandbeest,
            codeLink: "https://github.com/siddharthan-pradeep07/Strandbeest-simulator",
            liveLink: "https://strandbeest-simulator.siddharthan.com"
        },
        {
            name: "WILD (ysws)",
            description: "A ysws site made for hackclub, with airtable as database. It also has Hack Club Oauth, with admin/reviewer perms",
            date: "JUL 2026",
            category: "Web",
            image: wild,
            codeLink: "https://github.com/siddharthan-pradeep07/wild-ysws",
            liveLink: "https://wild-ysws.vercel.app"
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", ...new Set(projects.map((project) => project.category))];
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (

            <div className="page-shell" style=
                {{
                    '--page-bg': `url(${bgImage})`,
                    '--page-bg-position': 'top',
                }}>

            <div style=
            {{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                maxWidth: 960,
                width: "100%",
                marginBottom: 30,
            }}>
                <h1 style=
                {{
                    color: "#ffffff",
                    fontSize: "clamp(28px, 5vw, 44px)",
                    letterSpacing: 4,
                    fontFamily: "'Ribeye Marrow', serif",
                }}>
                    Here's all of my projects
                </h1>
                <button
                    onClick={() => navigate('/')}
                    className="press-btn"
                    onMouseEnter={play_hover_sound}
                    style=
                    {{
                        padding: "10px 20px",
                        backgroundColor: "#3f3e2c",
                        border: "4px inset rgb(94, 90, 68)",
                        color: "#ffffff",
                        fontSize: 14,
                        letterSpacing: 2,
                        fontFamily: "'Ribeye Marrow', serif",
                        cursor: "pointer",
                    }}
                >
                    ↩ back to home
                </button>
            </div>

            {/* CATEGORY FILTER TABS */}
            <div className="filter-tabs" style=
                {{
                    maxWidth: 960,
                    width: "90%",
                    marginBottom: 30,
                }}>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        onMouseEnter={play_hover_sound}
                        className={"press-btn filter-tab" + (activeCategory === category ? " active" : "")}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="project-grid" style=
                {{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    maxWidth: 960,
                    width: "90%",
                    marginBottom: 60,
                }}>
                        {filteredProjects.map((project) => (
                            <div className="press-btn" key={project.name} style=
                            {{
                                backgroundColor: "rgba(255, 240, 211, 0.95)",
                                border: "5px inset rgb(141, 141, 141)",
                                borderRadius: 1,
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                cursor: "pointer",
                                overflow: "hidden",
                            }}>
                                <div style=
                                {{
                                    width: "100%",
                                    height: 220,
                                    backgroundColor: "rgba(124, 105, 105, 0)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                    borderBottom: "3px solid #272727",
                                }}>
                                    {project.image
                                        ? <img src={project.image} alt={project.name} style=
                                        {{
                                            width: "93%",
                                            height: "90%",
                                            objectFit: "cover",
                                            borderRadius: 15,
                                            padding: "1px 1px",
                                            border: "4px groove #3d3d3d",
                                        }} />
                                        : <span style=
                                        {{
                                            color: "rgba(255,255,255,0.3)",
                                            fontSize: 12,
                                            letterSpacing: 2,
                                            fontFamily: "'Ribeye Marrow', serif",
                                        }}></span>
                                    }
                                </div>
        
                                <div style=
                                {{
                                    padding: 20,
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                }}>
                                    {/* PROJECT NAME - TITLE */}
                                    <h2 style=
                                    {{
                                        color: "#000000",
                                        fontSize: 19,
                                        letterSpacing: 3,
                                        marginBottom: 10,
                                        fontFamily: "'Ribeye Marrow', serif",
                                        borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                                    }}>
                                        {project.name}
                                    </h2>
                                    {/* PROJECT DATE*/}
                                    <p style=
                                    {{
                                        color: "#000000",
                                        fontSize: 11,
                                        letterSpacing: 3,
                                        marginBottom: 1,
                                        fontFamily: "'horizon', serif",
                                        borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                                    }}>
                                        {project.date}
                                    </p>
                                    {/* PROJECT DESCRIPTION */}
                                    <p style=
                                    {{
                                        color: "rgba(0, 0, 0, 0.75)",
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        lineHeight: 1.6,
                                        fontFamily: "'horizon', serif",
                                        flexGrow: 1,
                                        marginBottom: 16,
                                        borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                                    }}>
                                        {project.description}
                                    </p>
        
                                    {/* LINKS - BUTTON */}
                                    <div style=
                                    {{
                                        display: "flex",
                                        gap: 10,
                                    }}>
                                        {project.liveLink &&
                                        (
                                            // DEMO BUTTON
                                            <a href={project.liveLink} target="_blank" onMouseEnter={play_hover_sound} rel="noreferrer" className="press-btn" style=
                                            {{
                                                flex: 1,
                                                padding: "8px 0",
                                                textAlign: "center",
                                                backgroundColor: "#3f3e2c",
                                                border: "4px inset rgb(94, 90, 68)",
                                                color: "#ffffff",
                                                fontSize: 19,
                                                letterSpacing: 2,
                                                fontFamily: "'Ribeye Marrow', serif",
                                                textDecoration: "none",
                                                transition: "background 0.2s",
                                            }}>
                                                DEMO
                                            </a>
                                        )}
                                        {/* GITHUB LINK - BUTTON */}
                                        <a href={project.codeLink} target="_blank" onMouseEnter={play_hover_sound} rel="noreferrer" className="press-btn" style=
                                        {{
                                            flex: 1,
                                            padding: "8px 0",
                                            textAlign: "center",
                                            backgroundColor: "#576354",
                                            border: "4px inset rgb(126, 136, 123)",
                                            color: "#ffffff",
                                            fontSize: 19,
                                            letterSpacing: 2,
                                            fontFamily: "'Ribeye Marrow', serif",
                                            textDecoration: "none",
                                            transition: "background 0.2s",
                                        }}>
                                            CODE
                                        </a>
                                        {/* PLAY BUTTON - ONLY FOR "FEMTO" PROJECT CARD */}
                                        {project.playLink &&
                                        (
                                            <a href={project.playLink} onMouseEnter={play_hover_sound} className="press-btn" style=
                                            {{
                                                flex: 1,
                                                padding: "8px 0",
                                                textAlign: "center",
                                                backgroundColor: "#415f3b",
                                                border: "4px inset rgb(90, 124, 78)",
                                                color: "#ffffff",
                                                fontSize: 19,
                                                letterSpacing: 2,
                                                fontFamily: "'Ribeye Marrow', serif",
                                                textDecoration: "none",
                                                transition: "background 0.2s",
                                            }}>
                                                PLAY
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            //  {/* </div>        */}
            );
}      