import type React from "react";
import { getPrepositionsForNoun } from "../PrepositionMapper";
import type { NounEntry } from "../../types/Noun";

export type PrepositionTableProps = {
    noun: NounEntry;
};

export const PrepositionTable: React.FC<PrepositionTableProps> = ({ noun }) => {
    const prepositions = getPrepositionsForNoun(noun);

    return (
        <div>
            <h3>Przyimki</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th rowSpan={2} style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Przyimek</th>
                        <th colSpan={2} style={{ textAlign: "center", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba Pojedyncza</th>
                        <th colSpan={2} style={{ textAlign: "center", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba Mnoga</th>
                    </tr>
                    <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Static</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Motion</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Static</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Motion</th>
                    </tr>
                </thead>
                <tbody>
                    {prepositions.map(p => (
                        <tr key={p.preposition}>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.preposition}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.singular.static ?? "-"}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.singular.motion ?? "-"}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.plural.static ?? "-"}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.plural.motion ?? "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
