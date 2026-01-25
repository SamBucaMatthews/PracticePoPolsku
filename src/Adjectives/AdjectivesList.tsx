import { WordList } from "../WordList";
import { loadAdjectives } from "../DataAccess/DataAccess";
import type { AdjectiveDictionary } from "../../types/Adjective";

export default function AdjectivesList() {
    return (
        <WordList<AdjectiveDictionary>
            title="Przymiotniki"
            loadItems={loadAdjectives}
            getKeys={items => Object.keys(items)}
            getLink={lemma => `/adjectives/${encodeURIComponent(lemma)}`}
        />
    );
}
