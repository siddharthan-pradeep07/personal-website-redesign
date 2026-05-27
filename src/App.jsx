import tvImage from "./assets/crt_tv.png";
import bgImage from "./assets/bg.png";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img src={tvImage} alt="Old CRT TV" style={{ width: 560 }} />
    </div>
  );
}
