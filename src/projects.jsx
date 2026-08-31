// SOCIAL LINKS (ICONS)
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// BACKGROUND
import bgImage from "./assets/img/bg_15.jpg";
//PROJECT CARD IMGS (USED & UNUSED)
import amazerImg from "./assets/img/amazer.png";
import bookImg from "./assets/img/book.png";
import inplaceImg from "./assets/img/inpace1.jpg";
import FemtoImg from "./assets/img/femto_game_thumbnail.png";
import ppImg from "./assets/img/plasma_photo.jpg";
import printlyImg from "./assets/img/printly_home2.png";
import MicroImg from "./assets/img/micro_mouse.jpeg";
import wild from "./assets/img/wild.png";
import strandbeest from "./assets/img/strandbeest_2.png"
//PFP ON INTRO CARD
import pfpImg from "./assets/img/pfp.jpeg";
// OTHER (MARKDOWN RENDER, POSTS, SOUND EFFECT)
import ReactMarkdown from "react-markdown";
import posts from "./posts.js";
import { useNavigate } from 'react-router-dom';
import { play_hover_sound } from "./sound.js";

export default function Projects()
{
    const navigate = useNavigate();
    const latest_post = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    // PROJECT CARD INFO
    const projects =
    [
        {
            name: "Amazer",
            description: "Build, solve & simulate mazes. Visualise DFS, and wall-following algorithms, generate mazes, edit and find solutions.",
            date: "APR 2026",
            image: amazerImg,
            liveLink: "https://siddharthan-pradeep07.github.io/Amazer/src/pages/home.html",
            codeLink: "https://github.com/siddharthan-pradeep07/Amazer",
        },
        {
            name: "Inplace",
            description: "A small device with an OLED display, joystick, and Arduino Nano used for handling the basic features.",
            date: "JAN 2025",
            image: inplaceImg,
            liveLink: "http://i-do-not-have-a-demo-for-this.com/",
            codeLink: "https://github.com/siddharthan-pradeep07/Inplace",
        },
        {
            name: "Plasma plant",
            description: "Farming rover that detects the soil, suggests seeds, sows them, and waters. Stops automatically when land is covered.",
            date: "SEP 2025",
            image: ppImg,
            liveLink: "https://youtube.com/shorts/KFvk7Cw4Y6I?si=3ox_9fIEVDu8zfDL",
            codeLink: "https://github.com/siddharthan-pradeep07/Plasma_plant",
        },
        {
            name: "Femto",
            description: "A javascript platforer game based on a hen, collect coins & avoid enemies. made for the sprig console (sprig.hackclub.com)",
            date: "JUL 2025",
            image: FemtoImg,
            playLink: "/femto",
            codeLink: "https://github.com/hackclub/sprig/pull/3172",
        },
        // {
        //     name: "Printly 3D",
        //     description: "3D printing website, for everyone: just upload a 3D model and I'll print it and deliver it to you. (redesign of socxly.me/p3d)",
        //     date: "MAR 2024",
        //     image: printlyImg,
        //     codeLink: "https://github.com/siddharthan-pradeep07/Printly-3D",
        //     liveLink: "https://siddharthan-pradeep07.github.io/Printly-3D",
        // },
        {
            name: "Micro Mouse V2",
            description: "Maze solving robot v2 made with esp32, TB6612FNG and N20 motors with an array of 4 ultrasonic sensors.",
            date: "FEB 2026",
            image: MicroImg,
            codeLink: "https://this-is-a-private-project.com",
            liveLink: "https://youtube.com/shorts/P9D8oNlkbqY",
        },
        // {
        //     name: "Strandbeest simulator",
        //     description: "Simulate Theo jansen's strandbeests (beach animals) with various tools.",
        //     date: "JUN 2026",
        //     image: strandbeest,
        //     codeLink: "https://github.com/siddharthan-pradeep07/Strandbeest-simulator",
        //     liveLink: "https://strandbeest-simulator.siddharthan.com"
        // },
        {
            name: "WILD (ysws)",
            description: "A ysws site made for hackclub, with airtable as database. It also has Hack Club Oauth, with admin/reviewer perms",
            date: "JUL 2026",
            image: wild,
            codeLink: "https://github.com/siddharthan-pradeep07/wild-ysws",
            liveLink: "https://wild-ysws.vercel.app"
        },
    ];

    return (
        <div style=
        {{
            minHeight: "100vh",
            width: "100vw",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Ribeye Marrow', serif",
            padding: "60px 40px",
        }}>
            {/* INTRO CARD */}
            <div className="intro-card" style=
            {{
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                gap: 20,
                marginBottm: 40,
                backgroundColor: "#fff0c8ec",
                border: "3px solid #666666",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%"
            }}>
                {/* INTRO CARD - PFP IMAGE */}
                <img src = {pfpImg} className="press-btn" onMouseEnter={play_hover_sound} alt="huh, try refreshing to see me"
                  style=
                  {{
                    width:150,
                    height:150,
                    borderRadius: "10%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #000000"
                  }}
                />
                {/* INTRO CARD - TEXT */}
                <div className="intro-text">
                    <p style={{
                        color: "#000000",
                        fontSize: 26,
                        letterSpacing: 1,
                        fontFamily: "'Ribeye Marrow', serif",
                        lineHeight: 1.6,
                    }}>
                        Heya! I make cool stuff like robots, websites, rockets, electronics and CAD
                    </p>
                    <p style={{
                        color: "#353535",
                        fontSize: 16,
                        letterSpacing: 1,
                        fontFamily: "'horizon', serif",
                        lineHeight: 1.6,
                        marginBottom: 10,
                    }}>
                       <i><b>Born some/lot years ago</b> (HE/HIM)</i>
                    </p>
                    {/* INTRO CARD - ICONS */}
                    <div className="intro-socials" style=
                    {{
                        display: "flex",
                        gap: 14,
                        marginBottom: 10,
                    }}>
                        <a href="https://github.com/siddharthan-pradeep07" target="_blank" onMouseEnter={play_hover_sound} rel="noreferrer" className="press-btn"style={{ color: "#3b3628" }}>
                            <FaGithub size={45} />
                        </a>
                        <a href="https://www.linkedin.com/in/siddharthan-pradeep-0202342a5" onMouseEnter={play_hover_sound} className="press-btn" style={{color:"#3b3628"}}>
                            <FaLinkedin size={45} />
                        </a>
                        <a href="https://youtube.com/@siddharthan.pradeep" target="_blank" rel="noreferrer" onMouseEnter={play_hover_sound} className="press-btn" style={{ color: "#3b3628" }}>
                            <FaYoutube size={45} />
                        </a>
                        <a href="mailto:siddharthansp07@gmail.com" onMouseEnter={play_hover_sound} className="press-btn" style={{ color: "#3b3628" }}>
                            <MdEmail size={45} />
                        </a>
                    </div>
                </div>
            </div>
            {/* BLOG CARD - FETCHES THE LATEST POST */}
            {latest_post &&
            (
                // BLOG CARD
                <div className="blog-card" style=
                {{
                    border: "3px solid #666666",
                    borderRadius: "5px",
                    padding: "16px 24px",
                    maxWidth: 960,
                    width: "100%",
                    marginTop: 24,
                    marginBottom: 0,
                    backgroundColor: "#fff0c8e3",
                }}>
                    {/* BLOG CARD - TEXT */}
                    <p style=
                    {{
                        color: "#000000",
                        fontSize: 20,
                        letterSpacing: 2,
                        fontFamily: "'Ribeye Marrow', serif",
                        marginBottom: 10,
                    }}>
                        Latest post:
                    </p>
                    <div className="blog-card-body" style={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style=
                    {{
                        color: "#000000",
                        fontSize: 24,
                        letterSpacing: 1,
                        marginBottom: 6,
                        fontFamily: "'Ribeye Marrow', serif",
                    }}>
                        {latest_post.title}
                    </h2>
                    <p style=
                    {{
                        color: "#555555",
                        fontSize: 12,
                        letterSpacing: 2,
                        marginBottom: 14,
                        fontFamily: "'horizon', serif",
                    }}>
                    {latest_post.date}
                    </p>
                <div style=
                {{
                    color: "#000000",
                    fontSize: 15,
                    lineHeight: 1.6,
                    fontFamily: "'horizon', serif",
                    marginBottom: 18,
                }}>
                <ReactMarkdown>{latest_post.content.slice(0, 200) + "..."}</ReactMarkdown>
                    </div>
                    {/* BUTTON - LINKED TO /BLOG */}
                    <button
                        onClick=
                        {() => navigate('/blog')}
                        className="press-btn"
                        onMouseEnter={play_hover_sound}
                        style=
                        {{
                            padding: "8px 20px",
                            backgroundColor: "#3f3e2c",
                            border: "4px inset rgb(94, 90, 68)",
                            color: "#ffffff",
                            fontSize: 14,
                            letterSpacing: 2,
                            fontFamily: "'Ribeye Marrow', serif",
                            cursor: "pointer",
                        }}>
                        ↪ all posts
                    </button>
                </div>
                {/* gif */}
                <img
                    src={latest_post.gif}
                    alt=""
                    className="press-btn blog-card-gif"
                    onMouseEnter={play_hover_sound}
                    style=
                    {{
                        width: 240,
                        height: 150,
                        objectFit: "cover",
                        borderRadius: 4,
                        border: "3px solid #4d4e4c",
                        flexShrink: 0,
                    }}
                />
                </div>
                </div>
            )}
            {/* COMMIT DENSITY GRAPH */}
            <div className="commit-card" style=
            {{
                border: "3px solid #666666",
                borderRadius: "5px",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%",
                marginTop: 24,
                marginBottom: 24,
                backgroundColor: "#e4e4dae5",
            }}>
                <p style=
                {{
                    color: "#000000",
                    fontSize: 26,
                    letterSpacing: 2,
                    fontFamily: "'Ribeye Marrow', serif",
                    marginBottom: 14,
                }}>
                    My commit history
                </p>
                <img
                    src="https://ghchart.rshah.org/siddharthan-pradeep07"
                    alt="GitHub contributions"
                    style=
                    {{
                        width: "100%",
                        borderRadius: 4,
                        display: "block",
                    }}
                />
                <div style=
                {{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 12,
                    justifyContent: "flex-end",
                }}>
                    <p style=
                    {{
                        color: "rgb(0, 0, 0)",
                        fontSize: 17,
                        fontFamily: "'horizon', serif",
                        letterSpacing: 1,
                    }}>
                        Less
                    </p>
                    {["#c6e48b", "#7bc96f", "#239a3b", "#195f26"].map((color, i) => (
                        <div key={i} style=
                        {{
                            width: 14,
                            height: 14,
                            backgroundColor: color,
                            border: "1px solid rgba(255, 255, 255, 0)",
                        }} 
                        />
                    ))}
                    <p style=
                    {{
                        color: "rgb(0, 0, 0)",
                        fontSize: 17,
                        fontFamily: "'horizon', serif",
                        letterSpacing: 1,
                    }}>
                        More
                    </p>
                </div>
            </div>

            <div className="page-heading" style=
            {{
                backgroundColor: "rgba(63, 53, 34, 0.95)",
                border: "5px inset rgb(100, 91, 70)",
                borderRadius: 1,
                padding: "14px 28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
                marginBottom: 25,
            }}>
            <h1 style=
            {{
                color: "rgb(255, 255, 221)",
                fontSize: 28,
                letterSpacing: 4,
                fontFamily: "'Ribeye Marrow', serif",
                margin: 0,
                textAlign: "center",
            }}>
                Here's my top projects
            </h1>
            </div>
            {/* PROJECT CARDS */}
            <div className="project-grid" style=
            {{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                maxWidth: 960,
                width: "90%",
                marginBottom: 60,
            }}>
                {projects.map((project, index) => (
                    <div className="press-btn" key={index} style=
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
            {/* VIEW ALL PROJECTS BUTTON, LINKED TO /all-projects */}
            <button
                onClick={() => navigate('/all-projects')}
                className="press-btn view-all-btn"
                onMouseEnter={play_hover_sound}
                style=
                {{
                    backgroundColor: "rgba(63, 53, 34, 0.95)",
                    border: "5px inset rgb(100, 91, 70)",
                    borderRadius: 1,
                    padding: "14px 28px",
                    color: "rgb(255, 255, 221)",
                    fontSize: 20,
                    letterSpacing: 3,
                    fontFamily: "'Ribeye Marrow', serif",
                    cursor: "pointer",
                    marginBottom: 60,
                }}>
                <span className="arrow arrow-left">&lt;&lt;</span>
                view all projects
                <span className="arrow arrow-right">&gt;&gt;</span>
            </button>
        </div>
    );
}