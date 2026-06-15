import { useEffect, useRef } from "react";

export default function Cursor()
{
    const cursor_ref = useRef(null);

    useEffect(() =>
    {
        const move = (e) =>
        {
            cursor_ref.current.style.left = e.clientX + "px";
            cursor_ref.current.style.top = e.clientY + "px";
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return <div className="cursor" ref={cursor_ref} />;
}