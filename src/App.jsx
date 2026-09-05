import { useNavigate } from 'react-router-dom'
import tvImage from "./assets/img/crt_tv.png";
import bgImage from "./assets/img/bg_9.jpg";
import myVideo from "./assets/videos/rr.mp4";

export default function App() 
{
  const navigate = useNavigate();

  return (
    <div className="page-shell" style={{
      '--page-bg': `url(${bgImage})`,
      justifyContent: "center",
    }}>
      <h1 style={{
        fontFamily: "'Cinzel', serif",
        color: "#ffffff",
        fontSize: "clamp(28px, 6vw, 48px)",
        letterSpacing: 6,
        marginBottom: 24,
        textAlign: "center",
      }}>
        Welcome! Click the TV to get started!
      </h1>
      <div
        onClick={() => navigate('/')}
        style={{
          position: "relative",
          width: "min(660px, 90vw)",
          cursor: "pointer",
        }}>
        <video
          src={myVideo}
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "10%",
            left: "9%",
            width: "70%",
            height: "80%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        <img
          src={tvImage}
          alt="Old CRT TV"
          style={{
            position: "relative",
            width: "100%",
            zIndex: 2,
            display: "block",
          }}
        />
      </div>

    </div>
  );
}