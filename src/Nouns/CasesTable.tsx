import type React from "react";
import type { NounEntry } from "../../types/Noun";

export type CasesTableProps = {
    noun: NounEntry;
};

export const CasesTable: React.FC<CasesTableProps> = ({ noun }) => {
    return (
        <div>
            <h3>Cases</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Case</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Form</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(noun.cases).map(([caseName, word]) => (
                        <tr key={caseName}>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{caseName}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
};
