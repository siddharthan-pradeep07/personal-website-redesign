import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImage from "./assets/img/bg.png";
import amazerImg from "./assets/img/amazer.png";
import bookImg from "./assets/img/book.png";
import inplaceImg from "./assets/img/inpace1.jpg";
import FemtoImg from "./assets/img/femto_game_thumbnail.png";
import ppImg from "./assets/img/plasma_photo.jpg";
import printlyImg from "./assets/img/printly_home2.png";
import MicroImg from "./assets/img/micro_mouse.jpeg";
import pfpImg from "./assets/img/pfp.jpeg";

export default function Projects()
{
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
            fontFamily: "'Cinzel', serif",
            padding: "60px 40px",
        }}>
            <div style=
            {{
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                gap: 20,
                marginBottm: 40,
                backgroundColor: "transparent",
                border: "3px solid #fff5db",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%"
            }}>
                <img src = {pfpImg} alt="why are you hovering? you can't grab me"
                  style=
                  {{
                    width:84,
                    height:84,
                    borderRadius: "10%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #a5967f"
                  }}
                />
                <div>
                    <p style={{
                    color: "#fff5db",
                    fontSize: 16,
                    letterSpacing: 2,
                    fontFamily: "'Cinzel', serif",
                    marginBottom: 6,
                }}>
                </p>
                <p style={{
                    color: "#fff5db",
                    fontSize: 18,
                    letterSpacing: 1,
                    fontFamily: "'Cinzel', serif",
                    lineHeight: 1.6,
                }}>
                    Heya! I make cool stuff like robots, websites, rockets, and CAD
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
            <h1 style=
            {{
                color: "#ffffff",
                fontSize: 52,
                letterSpacing: 6,
                fontFamily: "'Cinzel', serif",
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
                        backgroundColor: "rgba(88, 68, 55, 0)",
                        border: "4px solid rgb(0, 0, 0)",
                        borderRadius: 4,
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
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
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
                                    fontFamily: "'Cinzel', serif",
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
                                color: "#ffffff",
                                fontSize: 16,
                                letterSpacing: 3,
                                marginBottom: 8,
                                fontFamily: "'Cinzel', serif",
                                borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
                            }}>
                                {project.name}
                            </h2>
                            <p style=
                            {{
                                color: "#ffffff",
                                fontSize: 11,
                                letterSpacing: 3,
                                marginBottom: 10,
                                fontFamily: "'Cinzel', serif",
                                borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
                            }}>
                                {project.date}
                            </p>
                            <p style=
                            {{
                                color: "rgba(255, 255, 255, 0.75)",
                                fontSize: 12,
                                letterSpacing: 1,
                                lineHeight: 1.6,
                                fontFamily: "'Cinzel', serif",
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
                                <a href={project.liveLink} target="_blank" rel="noreferrer" style=
                                {{
                                    flex: 1,
                                    padding: "8px 0",
                                    textAlign: "center",
                                    backgroundColor: "#00000000",
                                    border: "4px solid rgba(31, 30, 29, 0.79)",
                                    color: "#ffffff",
                                    fontSize: 11,
                                    letterSpacing: 2,
                                    fontFamily: "'Cinzel', serif",
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                }}>
                                    Demo
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer" style=
                                {{
                                    flex: 1,
                                    padding: "8px 0",
                                    textAlign: "center",
                                    backgroundColor: "#d69696",
                                    border: "4px solid rgb(163, 101, 101)",
                                    color: "#ffffff",
                                    fontSize: 11,
                                    letterSpacing: 2,
                                    fontFamily: "'horizon', serif",
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