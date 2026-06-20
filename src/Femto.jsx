import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { webEngine } from "sprig/web";
import bgImage from "./assets/img/bg_8.jpg";
import { play_hover_sound } from "./sound";

export default function Femto()
{
    const navigate = useNavigate();
    const canvas_ref = useRef(null);

    useEffect(() =>
    {
        const game = webEngine(canvas_ref.current);
        let is_unmounted = false;
        const interval_ids = [];

        const tracked_set_interval = (fn, ms) =>
        {
            const id = window.setInterval(fn, ms);
            interval_ids.push(id);
            return id;
        };

        import("./femto-game.js?raw").then((module) =>
        {
            if (is_unmounted) return;

            const run_game = new Function
            (
                "setLegend", "bitmap", "tune", "setSolids", "setMap", "map",
                "setPushables", "onInput", "setInterval", "getFirst", "getAll",
                "getTile", "addText", "clearText", "addSprite", "playTune",
                "color", "width", "height",
                module.default
            );

            run_game
            (
                game.api.setLegend, game.api.bitmap, game.api.tune, game.api.setSolids,
                game.api.setMap, game.api.map, game.api.setPushables, game.api.onInput,
                tracked_set_interval, game.api.getFirst, game.api.getAll, game.api.getTile,
                game.api.addText, game.api.clearText, game.api.addSprite, game.api.playTune,
                game.api.color, game.api.width, game.api.height
            );
        });

        canvas_ref.current.focus();

        return () =>
        {
            is_unmounted = true;
            interval_ids.forEach((id) => window.clearInterval(id));
            game.cleanup();
        };
    }, []);

    function press_key(key)
    {
        canvas_ref.current.dispatchEvent(new KeyboardEvent("keydown", { key }));
        setTimeout(() =>
        {
            canvas_ref.current.dispatchEvent(new KeyboardEvent("keyup", { key }));
        }, 100);
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
                    Femto
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
                backgroundColor: "rgba(255, 240, 211, 0.95)",
                border: "5px inset rgb(141, 141, 141)",
                borderRadius: 1,
                maxWidth: 560,
                width: "100%",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div style=
                {{
                    width: "100%",
                    aspectRatio: "5 / 4",
                    border: "4px solid #000000",
                    borderRadius: 6,
                    overflow: "hidden",
                    marginBottom: 20,
                    backgroundColor: "#000000",
                }}>
                    <canvas
                        ref={canvas_ref}
                        width={500}
                        height={400}
                        tabIndex={0}
                        style=
                        {{
                            width: "100%",
                            height: "100%",
                            display: "block",
                        }}
                    />
                </div>

                <div style=
                {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 20,
                }}>
                    <button
                        onClick={() => press_key("w")}
                        className="press-btn"
                        onMouseEnter={play_hover_sound}
                        style=
                        {{
                            width: 56,
                            height: 44,
                            backgroundColor: "#8b8c66",
                            border: "3px inset #666666",
                            color: "#ffffff",
                            fontSize: 18,
                            fontFamily: "'Ribeye Marrow', serif",
                            cursor: "pointer",
                        }}
                    >
                        ▲
                    </button>
                    <div style={{ display: "flex", gap: 8 }}>
                        <button
                            onClick={() => press_key("a")}
                            className="press-btn"
                            onMouseEnter={play_hover_sound}
                            style=
                            {{
                                width: 56,
                                height: 44,
                                backgroundColor: "#6f8c66",
                                border: "3px inset #666666",
                                color: "#ffffff",
                                fontSize: 18,
                                fontFamily: "'Ribeye Marrow', serif",
                                cursor: "pointer",
                            }}
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => press_key("d")}
                            className="press-btn"
                            onMouseEnter={play_hover_sound}
                            style=
                            {{
                                width: 56,
                                height: 44,
                                backgroundColor: "#6f8c66",
                                border: "3px inset #666666",
                                color: "#ffffff",
                                fontSize: 18,
                                fontFamily: "'Ribeye Marrow', serif",
                                cursor: "pointer",
                            }}
                        >
                            ▶
                        </button>
                    </div>
                </div>

                <p style=
                {{
                    color: "#080808",
                    fontSize: 14,
                    letterSpacing: 1,
                    fontFamily: "'horizon', serif",
                    textAlign: "center",
                }}>
                    Use WASD or the buttons above. W to jump, A and D move left and right.
                </p>
            </div>
        </div>
    );
}