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
            name: "Plasma plant",
            description: "An agricultural rover",
            date: "SEP 2025",
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
                color: "#a584ff",
                fontSize: 52,
                letterSpacing: 6,
            }}>
                Here's my projects!
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
                        backgroundColor: "rgba(58, 16, 16, 0.08)",
                        backdropFilter: "blur(8px)",
                        border: "3px solid rgba(36, 36, 36, 0.62)",
                        borderRadius: 12,
                        padding: 24,
                        width: "100%",
                        height: 320,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                    }}>
                        <h2 style={{
                            color: "#ffffff",
                            fontSize: 20,
                            letterSpacing: 3,
                            marginBottom: 10,
                        }}>
                            {project.name}
                        </h2>
                        <p style={{
                            color: "#ffffff",
                            fontSize: 13,
                            letterSpacing: 3,
                            marginBottom: 10,
                        }}>
                            {project.date}
                        </p>
                        <p style={{
                            color: "rgba(255, 255, 255, 0.86)",
                            fontSize: 14,
                            letterSpacing: 1,
                        }}>
                            {project.description}
                        </p>
                    </div>
                ))}      
            </div>
        </div>
    );
}
            