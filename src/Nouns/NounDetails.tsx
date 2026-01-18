import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NounEntry } from "../../types/Noun";
import { loadNouns } from "../DataAccess/DataAccess";
import { PrepositionTable } from "./PrepositionTable";
import { CasesTable } from "./CasesTable";
import { TranslationsTable } from "./TranslationsTable";

export default function NounDetails() {
    const { lemma } = useParams<{ lemma: string }>();
    const [noun, setNoun] = useState<NounEntry | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            const nouns = await loadNouns();
            if (lemma && nouns[lemma]) {
                setNoun(nouns[lemma]);
            }
            setLoading(false);
        }
        load();
    }, [lemma]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!noun) {
        return <p>Noun not found.</p>;
    }

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>{lemma}</h2>
            <p>Gender: {noun.gender}</p>

            {noun.translations && <TranslationsTable translations={noun.translations} />}
            <CasesTable noun={noun} />
            <PrepositionTable noun={noun} />
        </div>
    );
}
