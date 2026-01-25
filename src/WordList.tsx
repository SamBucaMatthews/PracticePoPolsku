import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type WordListProps<TDict> = {
    title: string;
    loadItems: () => Promise<TDict>;
    getKeys: (items: TDict) => string[];
    getLink: (lemma: string) => string;
};

export function WordList<TDict>({
    title,
    loadItems,
    getKeys,
    getLink,
}: WordListProps<TDict>) {
    const navigate = useNavigate();
    const [items, setItems] = useState<TDict | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadItems().then(data => {
            setItems(data);
            setLoading(false);
        });
    }, [loadItems]);

    if (loading) {
        return <p>Loading…</p>;
    }

    if (!items) {
        return <p>No data loaded.</p>;
    }

    const keys = getKeys(items).sort((a, b) => a.localeCompare(b, "pl"));

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>{title}</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {keys.map(key => (
                    <li
                        key={key}
                        style={{
                            padding: "8px 0",
                            borderBottom: "1px solid #ddd",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(getLink(key))}
                    >
                        <strong>{key}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}
