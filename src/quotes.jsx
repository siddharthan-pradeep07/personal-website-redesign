import bgImage from "./assets/img/bg_15.jpg";
import { useNavigate } from 'react-router-dom';
import { play_hover_sound } from "./sound.js";

export default function Quotes()
{
    const navigate = useNavigate();

    const quotes =
    [
        {
            quote: "tesiovubsdv",
            date: "368248",
            by: "siddharthan",
        },
        {
            quote: "yiuowteru",
            date: "oigvhsdvb",
            by: "siddharthan",
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
                    <h2 style=
                        {{
                            color: "#000000",
                            fontSize: 19,
                            letterSpacing: 3,
                            marginBottom: 10,
                            fontFamily: "'Ribeye Marrow', serif",
                            borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                        }}>
                        {quote.date}
                    </h2>
                </div>
            ))}
        </div>
    );
}