import bgImage from "./assets/img/bg.png";
import amazerImg from "./assets/img/amazer.jpg";
import bookImg from "./assets/img/book.png";
import inplaceImg from "./assets/img/inplace1.jpg";
import FemtoImg from "./assets/img/femto_game_thumbnail.png";
import ppImg from "./assets/img/plasma_plant.jpg";
import printlyImg from "./assets/img/printly_home2.png";
import MicroImg from "./assets/img/micro_mouse.jpeg";

export default function Projects()
{
    const projects =
    [
        {
            name: "Amazer",
            description: "A micro mouse analizing tool",
            date: "APR 2026",
            image: amazerImg,
            liveLink: "#",
            codeLink: "#",
        },
        {
            name: "Inplace",
            description: "A small device with an OLED display, joystick, and Arduino Nano used for handling the basic features.",
            date: "JAN 2025",
            image: inplaceImg,
            liveLink: "#",
            codeLink: "#",
        },
        {
            name: "Plasma plant",
            description: "Farming rover that detects the soil, suggests seeds, sows them, and waters. Stops automatically when land is covered.",
            date: "SEP 2025",
            image: ppImg,
            liveLink: "#",
            codeLink: "#",
        },
        {
            name: "Femto",
            description: "A javascript platforer game based on a hen",
            date: "JUL 2025",
            image: FemtoImg,
            liveLink: "#",
            codeLink: "#",
        },
        {
            name: "Printly 3D",
            description: "3D printing website, for everyone: just upload a 3D model and I'll print it and deliver it to you.",
            date: "MAR 2024",
            image: printlyImg,
            liveLink: "#",
            codeLink: "#",
        },
        {
            name: "Micro Mouse V2",
            description: "Maze solving robot v2 made with esp32, TB6612FNG and N20 motors with an array of 4 ultrasonic sensors.",
            date: "FEB 2026",
            image: null,
            liveLink: "#",
            codeLink: "#",
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
                width: "100%",
            }}>
                {projects.map((project, index) => (
                    <div key={index} style=
                    {{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backdropFilter: "blur(8px)",
                        border: "3px solid rgb(204, 196, 171)",
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
                            height: 160,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            borderBottom: "1px solid rgb(204, 196, 171)",
                        }}>
                            {project.image
                                ? <img src={project.image} alt={project.name} style=
                                {{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }} />
                                : <span style=
                                {{
                                    color: "rgba(255,255,255,0.3)",
                                    fontSize: 12,
                                    letterSpacing: 2,
                                    fontFamily: "'Cinzel', serif",
                                }}>NO IMAGE</span>
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
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgb(204, 196, 171)",
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
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgb(204, 196, 171)",
                                    color: "#ffffff",
                                    fontSize: 11,
                                    letterSpacing: 2,
                                    fontFamily: "'Cinzel', serif",
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                }}>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}