import bgImage from "./assets/img/bg_15.jpg";
import { useNavigate } from "react-router-dom";
import { play_hover_sound } from "./sound.js";

export default function Roles()
{
    const navigate = useNavigate();

    const currentRoles =
    [
        "reviewing for #macondo @ Hack Club",
        "reviewing + admining for #beest @ Hack Club",
        "working on #wild @ Hack Club"
    ];

    const pastRoles =
    [
        "feovn",
        "sdvsdv",
        "rfgdsvsdcvsd"
    ];

    return (
        <div style =
        {{
            // minHeight: "100vh",
            // width: "100vh",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Ribeye Marrow', serif",
            padding: "60px 40px",
        }}>
           {/* <button
              onClick={() => navigate(-1)}
              className="press-btn"
              onMouseEnter={play_hover_sound}
              style=
              {{
                position: "fixed",
                alignContent: "left",
                top: "10",
                left: "10",
                padding: "8px 20px",
                backgroundColor: "#3f3e2c",
                border: "4px inset #695e49",
                color: '#ffffff',
                fontSize: 14,
                letterSpacing: 2,
                fontFamily: "'Ribeye Marrow', serif",
                cursor: "pointer",
                zIndex: 10,
              }}>
                ← back
            </button> */}

            <div className="page-heading" style=
            {{
                backgroundColor: "#3f3e2c",
                border: "5px inset #695e49",
                borderRadius: 1,
                padding: "14px 28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 25
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
                    ROLES
                </h1>
            </div>
            <div className="roles-card" style=
            {{
                border: "3px solid #666666",
                borderRadius: "5px",
                padding: "16px 24px",
                maxWidth: 960,
                width: "100%",
                marginBottom: 60,
                backgroundColor: "#fff0c8e3",
            }}>
                <p style=
                {{
                    color: "#000000",
                    fontSize: 22,
                    letterSpacing: 2,
                    fontFamily: "'Ribeye Marrow', serif",
                    marginBottom: 14,
                    borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                    paddingBottom: 8,
                }}>
                    Current roles
                </p>
                {currentRoles.map((role, i) => (
                    <p key={i} style=
                    {{
                        color: "#000000",
                        fontSize: 16,
                        letterSpacing: 1,
                        lineHeight: 1.8,
                        fontFamily: "'horizon', serif",
                        margin: 0,
                    }}>
                        {role}
                    </p>
                ))}
                <p style=
                {{
                    color: "#000000",
                    fontSize: 22,
                    letterSpacing: 2,
                    fontFamily: "'Ribeye Marrow', serif",
                    marginTop: 28,
                    marginBottom: 14,
                    borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                    paddingBottom: 8,
                }}>
                    Past roles
                </p>
                {pastRoles.map((role, i) => (
                    <p key={i} style=
                    {{
                        color: "#000000",
                        fontSize: 16,
                        letterSpacing: 1,
                        lineHeight: 1.8,
                        fontFamily: "'horizon', serif",
                        margin: 0,
                    }}>
                        {role}
                    </p>
                ))}
            </div>
        </div>
    );
}