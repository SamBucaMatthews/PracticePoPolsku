import { useEffect, useState } from "react";
import { loadAdjectives } from "../DataAccess/DataAccess";
import { useNavigate } from "react-router-dom";
import type { AdjectiveDictionary } from "../../types/Adjective";

export default function AdjectivesList() {
    const navigate = useNavigate();
    const [adjectives, setAdjectives] = useState<AdjectiveDictionary | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const adjectives = await loadAdjectives();
            setAdjectives(adjectives);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <p>Loading</p>;
    }

    if (!adjectives) {
        return <p>No Adjectives loaded.</p>;
    }

    const lemmas = Object.keys(adjectives).sort((a, b) => a.localeCompare(b, "pl"));

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>
            <h2>Przymiotniki</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {lemmas.map(lemma => (
                    <li key={lemma}
                        style={{ padding: "8px 0", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                        onClick={() => navigate(`/adjectives/${encodeURIComponent(lemma)}`)}>
                        <strong>{lemma}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}
