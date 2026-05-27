import tvImage from "./assets/img/crt_tv.png";
import bgImage from "./assets/img/bg.png";
import myVideo from "./assets/videos/rr.mp4";

export default function App() 
{
  return (
    <div style=
    {{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1 style=
      {{
        fontFamily: "'Cinzel', serif",
        color: "#ffffff",
        fontSize: 48,
        letterSpacing: 6,
      }}>
        Welcome to My Website
      </h1>
      
      <div style={{ position: "relative", width: 660 }}>

        {/* Video sits behind the TV image */}
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

        {/* TV image on top */}
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
