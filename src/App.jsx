import { useNavigate } from 'react-router-dom'
import tvImage from "./assets/img/crt_tv.png";
import bgImage from "./assets/img/bg_2.jpg";
import myVideo from "./assets/videos/rr.mp4";

export default function App() 
{
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1 style={{
        fontFamily: "'Cinzel', serif",
        color: "#ffffff",
        fontSize: 48,
        letterSpacing: 6,
        marginBottom: 24,
        textAlign: "center",
      }}>
        Welcome! Click the TV to get started!
        {/* siddharthan.com is now up, yay*/}
      </h1>
      <div
        onClick={() => navigate('/projects')}
        style={{
          position: "relative",
          width: 660,
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