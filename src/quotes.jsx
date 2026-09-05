import bgImage from "./assets/img/bg_15.jpg";
import { useNavigate } from 'react-router-dom';
import { play_hover_sound } from "./sound.js";

export default function Quotes()
{
    const navigate = useNavigate();

    const quotes =
    [
        {
            quote: "Use AI as a tool to express your creativity, not as creativity itself",
            date: "july 2026",
            by: "siddharthan",
        },
        {
            quote: "Defenition: A robot is a machine that performs physical tasks automatically or with minimal human input accordingly to the environment.",
            date: "february 2026",
            by: "siddharthan",
        },
    ];

    return (
        <div className="page-shell" style=
        {{
            '--page-bg': `url(${bgImage})`,
            justifyContent: "center",
        }}>
            {quotes.map((quote, index) => (
                <div key={index} className='intro-card' style=
                {{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    gap: 20,
                    marginBottom: 40,
                    backgroundColor: "#fff0c8ec",
                    border: "3px solid #666666",
                    padding: "16px 24px",
                    maxWidth: 960,
                    width: "100%"
                }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <h2 style=
                            {{
                                color: "#000000",
                                fontSize: 19,
                                letterSpacing: 1,
                                marginBottom: 10,
                                fontFamily: "'Ribeye Marrow', serif",
                                borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                            }}>
                            "{quote.quote}"
                        </h2>
                        <p style=
                            {{
                                color: "#555555",
                                fontSize: 13,
                                letterSpacing: 2,
                                fontFamily: "'horizon', serif",
                            }}>
                            — {quote.by}, {quote.date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}