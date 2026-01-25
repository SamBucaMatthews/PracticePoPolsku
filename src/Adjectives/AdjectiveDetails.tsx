import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadAdjectives } from "../DataAccess/DataAccess";
import type { Adjective } from "../../types/Adjective";

export default function AdjectiveDetails() {
    const { lemma } = useParams<{ lemma: string }>();
    const [adjective, setAdjective] = useState<Adjective | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            const adjectives = await loadAdjectives();
            if (lemma && adjectives[lemma]) {
                setAdjective(adjectives[lemma]);
            }
            setLoading(false);
        }
        load();
    }, [lemma]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!adjective) {
        return <p>Adjective not found.</p>;
    }

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>{lemma}</h2>
        </div>
    );
}
