import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "./posts.js";
import bgImage from "./assets/img/bg_8.jpg";

import { play_hover_sound } from "./sound.js";

export default function Blog()
{
    const navigate = useNavigate();
    const [flipped_index, setFlippedIndex] = useState(null);

    const sorted_posts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

    function toggle_flip(index)
    {
        setFlippedIndex(flipped_index === index ? null : index);
    }

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
            fontFamily: "'Ribeye Marrow', serif",
            padding: "100px 40px",
        }}>
            <div style=
            {{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: 960,
                width: "100%",
                marginBottom: 30,
            }}>
                <h1 style=
                {{
                    color: "#ffffff",
                    fontSize: 44,
                    letterSpacing: 4,
                    fontFamily: "'Ribeye Marrow', serif",
                }}>
                    All blog posts
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

            <div style=
            {{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                maxWidth: 960,
                width: "100%",
            }}>
                {sorted_posts.map((post, index) => (
                    <div key={index} className="flip-card-container" onClick={() => toggle_flip(index)} style={{ cursor: "pointer" }}>
                        <div className={"flip-card-inner" + (flipped_index === index ? " flipped" : "")}>

                            {/* INVISIBLE SIZER */}
                            <div className="flip-card-sizer">
                                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <h2 style=
                                        {{
                                            color: "#000000",
                                            fontSize: 24,
                                            letterSpacing: 1,
                                            marginBottom: 6,
                                            fontFamily: "'Ribeye Marrow', serif",
                                            borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                                        }}>
                                            {post.title}
                                        </h2>
                                        <p style=
                                        {{
                                            color: "#555555",
                                            fontSize: 12,
                                            letterSpacing: 2,
                                            marginBottom: 14,
                                            fontFamily: "'horizon', serif",
                                        }}>
                                            {post.date}
                                        </p>
                                        <div style=
                                        {{
                                            color: "#000000",
                                            fontSize: 15,
                                            lineHeight: 1.6,
                                            fontFamily: "'horizon', serif",
                                        }}>
                                            <ReactMarkdown>{post.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                    {post.gif &&
                                    (
                                        <img
                                            src={post.gif}
                                            alt=""
                                            style=
                                            {{
                                                width: 200,
                                                height: 150,
                                                objectFit: "cover",
                                                borderRadius: 4,
                                                border: "3px solid #4d4e4c",
                                                flexShrink: 0,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* FRONT FACE */}
                            <div className="flip-card-front press-btn" onMouseEnter={play_hover_sound} style=
                            {{
                                backgroundColor: "rgba(255, 240, 211, 0.95)",
                                border: "5px inset rgb(141, 141, 141)",
                                borderRadius: 1,
                                padding: 24,
                                height: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}>
                                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <h2 style=
                                        {{
                                            color: "#000000",
                                            fontSize: 24,
                                            letterSpacing: 1,
                                            marginBottom: 6,
                                            fontFamily: "'Ribeye Marrow', serif",
                                            borderBottom: "3px solid rgba(111, 140, 102, 0.3)",
                                        }}>
                                            {post.title}
                                        </h2>
                                        <p style=
                                        {{
                                            color: "#555555",
                                            fontSize: 12,
                                            letterSpacing: 2,
                                            marginBottom: 14,
                                            fontFamily: "'horizon', serif",
                                        }}>
                                            {post.date}
                                        </p>
                                        <div style=
                                        {{
                                            color: "#000000",
                                            fontSize: 15,
                                            lineHeight: 1.6,
                                            fontFamily: "'horizon', serif",
                                        }}>
                                            <ReactMarkdown>{post.content}</ReactMarkdown>
                                        </div>
                                    </div>

                                    {post.gif &&
                                    (
                                        <img
                                            src={post.gif}
                                            alt=""
                                            style=
                                            {{
                                                width: 200,
                                                height: 150,
                                                objectFit: "cover",
                                                borderRadius: 4,
                                                border: "3px solid #4d4e4c",
                                                flexShrink: 0,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* BACK FACE */}
                            <div className="flip-card-back"
                            style=
                            {{
                                backgroundColor: "rgba(255, 240, 211, 0.95)",
                                border: "5px inset rgb(141, 141, 141)",
                                borderRadius: 1,
                                padding: 24,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 12,
                                height: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}>
                                {post.images && post.images.length > 0
                                    ? post.images.map((img, i) => (
                                        <img key={i} src={img} alt=""
                                        style=
                                        {{
                                            flex: 1,
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                            width: 0,
                                            objectFit: "contain",
                                            borderRadius: 4,
                                            border: "3px solid #4d4e4c",
                                        }} />
                                    ))
                                    : <p style=
                                    {{
                                        color: "#555555",
                                        fontSize: 14,
                                        fontFamily: "'horizon', serif",
                                    }}>
                                        This post doesn't have any images attached, and you know... I'm lazy to add those images.
                                    </p>
                                }
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}