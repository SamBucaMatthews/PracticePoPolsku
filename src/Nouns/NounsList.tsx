import { useEffect, useState } from "react";
import type { NounsDictionary } from "../../types/Noun";
import { loadNouns } from "../dataAccess/DataAccess";
import { useNavigate } from "react-router-dom";

export default function NounsList() {
    const navigate = useNavigate();
    const [nouns, setNouns] = useState<NounsDictionary | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const nouns = await loadNouns();
            setNouns(nouns);
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <p>Loading</p>;
    }

    if (!nouns) {
        return <p>No nouns loaded.</p>;
    }

    const lemmas = Object.keys(nouns).sort((a, b) => a.localeCompare(b, "pl"));

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>
            <h2>Rzeczowniki</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {lemmas.map(lemma => (
                    <li key={lemma}
                        style={{ padding: "8px 0", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                        onClick={() => navigate(`/nouns/${encodeURIComponent(lemma)}`)}>
                        <strong>{lemma}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}
