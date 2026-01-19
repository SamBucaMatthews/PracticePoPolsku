import qrUrl from "/qr-url.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <h1>PracticePoPolsku</h1>
            <div>
                <img src={qrUrl} className="logo" alt="QR code to access the URL via camera" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <button onClick={() => navigate("/nouns")}>Rzeczowniki</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <button onClick={() => navigate("/nouns/case-practice")}>Nouns Case Practice</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <button onClick={() => navigate("/nouns/prepositions-practice")}>Nouns Prepositions Practice</button>
            </div>
        </div>
    );
}
