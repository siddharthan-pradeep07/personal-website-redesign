import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImage from "./assets/img/bg_2.jpg";
import amazerImg from "./assets/img/amazer.png";
import bookImg from "./assets/img/book.png";
import inplaceImg from "./assets/img/inpace1.jpg";
import FemtoImg from "./assets/img/femto_game_thumbnail.png";
import ppImg from "./assets/img/plasma_photo.jpg";
import printlyImg from "./assets/img/printly_home2.png";
import MicroImg from "./assets/img/micro_mouse.jpeg";
import pfpImg from "./assets/img/pfp.jpeg";
import ReactMarkdown from "react-markdown";
import posts from "./posts.js";
import { useNavigate } from 'react-router-dom';

export default function Projects()
{
    const navigate = useNavigate();
    const latest_post = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    const projects =
    [
        {
            name: "Amazer",
            description: "A micro mouse analizing tool",
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
            description: "A javascript platforer game based on a hen",
            date: "JUL 2025",
            image: FemtoImg,
            liveLink: "http://i-do-not-have-a-demo-for-this.com/",
            codeLink: "https://github.com/hackclub/sprig/pull/3172",
        },
        {
            name: "Printly 3D",
            description: "3D printing website, for everyone: just upload a 3D model and I'll print it and deliver it to you.",
            date: "MAR 2024",
            image: printlyImg,
            codeLink: "https://github.com/siddharthan-pradeep07/Printly-3D",
            liveLink: "https://siddharthan-pradeep07.github.io/Printly-3D",
        },
        {
            name: "Micro Mouse V2",
            description: "Maze solving robot v2 made with esp32, TB6612FNG and N20 motors with an array of 4 ultrasonic sensors.",
            date: "FEB 2026",
            image: MicroImg,
            codeLink: "https://this-is-a-private-project.com",
            liveLink: "https://youtube.com/shorts/P9D8oNlkbqY",
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
            <div style=
            {{
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                gap: 20,
                marginBottm: 40,
                backgroundColor: "#ffffff",
                border: "3px solid #666666",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%"
            }}>
                <img src = {pfpImg} alt="why are you hovering? you can't grab me"
                  style=
                  {{
                    width:120,
                    height:120,
                    borderRadius: "10%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #000000"
                  }}
                />
                <div>
                    <p style={{
                    color: "#fff5db",
                    fontSize: 16,
                    letterSpacing: 2,
                    fontFamily: "'Ribeye Marrow', serif",
                    marginBottom: 6,
                }}>
                </p>
                <p style={{
                    color: "#000000",
                    fontSize: 26,
                    letterSpacing: 1,
                    fontFamily: "'Ribeye Marrow', serif",
                    lineHeight: 1.6,
                }}>
                    Heya! I make cool stuff like robots, websites, rockets, electronics and CAD
                </p>
                <div style=
                {{
                    display: "flex",
                    gap: 14,
                    marginTop: 10,
                }}>
                    <a href="https://github.com/siddharthan-pradeep07" target="_blank" rel="noreferrer" style={{ color: "#000000" }}>
                        <FaGithub size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/siddharthan-pradeep-0202342a5/" target="_blank" rel="noreferrer" style={{ color: "#000000" }}>
                        <FaLinkedin size={40} />
                    </a>
                    <a href="https://youtube.com/@siddharthan.pradeep" target="_blank" rel="noreferrer" style={{ color: "#000000" }}>
                        <FaYoutube size={40} />
                    </a>
                    <a href="mailto:siddharthansp07@gmail.com" style={{ color: "#000000" }}>
                        <MdEmail size={40} />
                    </a>
                </div>
                </div>  
            </div>
            {latest_post &&
            (
                <div style=
                {{
                    border: "3px solid #666666",
                    borderRadius: "5px",
                    padding: "16px 24px",
                    maxWidth: 960,
                    width: "100%",
                    marginTop: 24,
                    marginBottom: 0,
                    backgroundColor: "#e4e4e4f3",
                }}>
                    <p style=
                    {{
                        color: "#000000",
                        fontSize: 20,
                        letterSpacing: 2,
                        fontFamily: "'Ribeye Marrow', serif",
                        marginBottom: 10,
                    }}>
                        Latest blog post
                    </p>
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
                    color: "#333333",
                    fontSize: 15,
                    lineHeight: 1.6,
                    fontFamily: "'horizon', serif",
                    marginBottom: 18,
                }}>
                <ReactMarkdown>{latest_post.content.slice(0, 200) + "..."}</ReactMarkdown>
                    </div>
                    <button
                        onClick=
                        {() => navigate('/blog')}
                        className="press-btn"
                        style=
                        {{
                            padding: "8px 20px",
                            backgroundColor: "#906cb9",
                            border: "4px inset rgb(124, 96, 156)",
                            color: "#ffffff",
                            fontSize: 14,
                            letterSpacing: 2,
                            fontFamily: "'Ribeye Marrow', serif",
                            cursor: "pointer",
                        }}>
                        ↪ all blogs
                    </button>
                </div>
            )}

            <div style=
            {{
                border: "3px solid #666666",
                borderRadius: "5px",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%",
                marginTop: 24,
                marginBottom: 24,
                backgroundColor: "#e4e4e4f3",
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
                        filter: "invert(1)",
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
                    {["#000000", "#56427e", "#7e5788", "#dea3e4"].map((color, i) => (
                        <div key={i} style=
                        {{
                            width: 14,
                            height: 14,
                            backgroundColor: color,
                            border: "1px solid rgba(255, 255, 255, 0.7)",
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
            <h1 style=
            {{
                color: "#ffffff",
                fontSize: 52,
                letterSpacing: 6,
                fontFamily: "'Ribeye Marrow', serif",
                marginBottom: 40,
            }}>
                Here's my top projects!
            </h1>
            <div style=
            {{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                maxWidth: 960,
                width: "90%",
            }}>
                {projects.map((project, index) => (
                    <div key={index} style=
                    {{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
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
                            borderBottom: "3px solid rgb(0, 0, 0)",
                        }}>
                            {project.image
                                ? <img src={project.image} alt={project.name} style=
                                {{
                                    width: "93%",
                                    height: "90%",
                                    objectFit: "cover",
                                    padding: "1px 1px",
                                    border: "3px solid #000000",
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
                            <h2 style=
                            {{
                                color: "#000000",
                                fontSize: 19,
                                letterSpacing: 3,
                                marginBottom: 10,
                                fontFamily: "'Ribeye Marrow', serif",
                                borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
                            }}>
                                {project.name}
                            </h2>
                            <p style=
                            {{
                                color: "#000000",
                                fontSize: 11,
                                letterSpacing: 3,
                                marginBottom: 1,
                                fontFamily: "'horizon', serif",
                                borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
                            }}>
                                {project.date}
                            </p>
                            <p style=
                            {{
                                color: "rgba(0, 0, 0, 0.75)",
                                fontSize: 16,
                                letterSpacing: 1,
                                lineHeight: 1.6,
                                fontFamily: "'horizon', serif",
                                flexGrow: 1,
                                marginBottom: 16,
                                borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
                            }}>
                                {project.description}
                            </p>

                            <div style=
                            {{
                                display: "flex",
                                gap: 10,
                            }}>
                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="press-btn" style=
                                {{
                                    flex: 1,
                                    padding: "8px 0",
                                    textAlign: "center",
                                    backgroundColor: "#716cb9",
                                    border: "4px inset rgb(85, 84, 136)",
                                    color: "#ffffff",
                                    fontSize: 19,
                                    letterSpacing: 2,
                                    fontFamily: "'Ribeye Marrow', serif",
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                }}>
                                    DEMO
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer" className="press-btn" style=
                                {{
                                    flex: 1,
                                    padding: "8px 0",
                                    textAlign: "center",
                                    backgroundColor: "#716cb9",
                                    border: "4px inset rgb(85, 84, 136)",
                                    color: "#ffffff",
                                    fontSize: 19,
                                    letterSpacing: 2,
                                    fontFamily: "'Ribeye Marrow', serif",
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                }}>
                                    CODE
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}