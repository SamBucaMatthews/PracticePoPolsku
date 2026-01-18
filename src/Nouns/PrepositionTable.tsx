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
            <h3>Prepositions</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Przyimek</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba pojedyncza</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba mnoga</th>
                    </tr>
                </thead>
                <tbody>
                    {prepositions.map(p => (<tr key={p.preposition}>
                        <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.preposition}</td>
                        <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.singular}</td>
                        <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{p.plural}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>);
};
