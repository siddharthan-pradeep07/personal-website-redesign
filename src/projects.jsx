import bgImage from "./assets/img/bg.png";
export default function Projects()
{
    const projects =
    [
        {
            name: "Amazer",
            description: "A micro mouse analizing tool",
            date: "APR 2026",
        },
        {
            name: "Inplace",
            description: "A small device with an OLED display, joystick, and Arduino Nano used for handling the basic features.",
            date: "JAN 2025",
        },
        {
            name: "Plasma plant",
            description: "An agricultural rover",
            date: "SEP 2025",
        },
        {
            name: "A Model Rocket | Sqare V1",
            description: "A model rocket with an engine of potassium nitrate and sugar, PVC body tube, and water bottle nose cone. made using components available at home",
            date: "FEB 2024",
        },
        {
            name: "Printly 3D",
            description: "3D printing website, for everyone: just upload a 3D model and I'll print it and deliver it to you. the website looks cool, check it out!(view it in a bigger screen for the best experience)",
            date: "MAR 2024",
        },
        {
            name: "Micro Mouse V2",
            description: "Maze solving robot v2 made with esp32, TB6612FNG and N20 motors with an array of 4 ultrasonic sensors for a competition @ YUGAM KCT",
            date: "FEB 2026",
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
                {projects.map((project, index) => 
                (
                    <div key={index} style=
                    {{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backdropFilter: "blur(8px)",
                        border: "3px solid rgb(204, 196, 171)",
                        borderRadius: 1,
                        padding: 24,
                        width: "100%",
                        height: 320,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                    }}>
                        <h2 style=
                        {{
                            color: "#ffffff",
                            fontSize: 20,
                            letterSpacing: 3,
                            marginBottom: 10,
                            fontFamily: "'Cinzel', serif",
                        }}>
                            {project.name}
                        </h2>
                        <p style=
                        {{
                            color: "#ffffff",
                            fontSize: 13,
                            letterSpacing: 3,
                            marginBottom: 10,
                            fontFamily: "'Cinzel', serif",
                        }}>
                            {project.date}
                        </p>
                        <p style=
                        {{
                            color: "rgba(255, 255, 255, 0.86)",
                            fontSize: 14,
                            letterSpacing: 1,
                            fontFamily: "'Cinzel', serif",
                        }}>
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}