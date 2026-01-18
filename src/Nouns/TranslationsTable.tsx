import type { Translation } from "../../types/Translation";

export type TranslationsTableProps = {
    translations: Translation[];
};

export const TranslationsTable: React.FC<TranslationsTableProps> = ({ translations }) => {
    return <div style={{ marginTop: 16 }}>
        <h3>Translations</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Language</th>
                    <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Translation</th>
                </tr>
            </thead>
            <tbody>
                {translations.map(t => (
                    <tr key={t.language}>
                        <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{t.language}</td>
                        <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{t.translation}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}
