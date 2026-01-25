import type React from "react";
import type { Noun } from "../../types/Noun";

export type CasesTableProps = {
    noun: Noun;
};

export const CasesTable: React.FC<CasesTableProps> = ({ noun }) => {
    const cases = Object.keys(noun.cases.singular) as (keyof typeof noun.cases.singular)[];

    return (
        <div>
            <h3>Przypadki</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Przypadek</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba Pojedyncza</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Liczba Mnoga</th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map(caseName => (
                        <tr key={caseName}>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{caseName}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{noun.cases.singular[caseName]}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{noun.cases.plural[caseName]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
