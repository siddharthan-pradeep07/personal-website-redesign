import tvImage from "./assets/crt_tv.png";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img src={tvImage} alt="Old CRT TV" style={{ width: 560 }} />
    </div>
  );
}
