import { useNavigate } from "react-router-dom";

export default function NounsCasePractice() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>Nouns Case Practice</h2>
            <p>Practice Polish noun cases with prepositions.</p>
        </div>
    );
}
