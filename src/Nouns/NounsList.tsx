import { WordList } from "../WordList";
import { loadNouns } from "../DataAccess/DataAccess";
import type { NounsDictionary } from "../../types/Noun";

export default function NounsList() {
    return (
        <WordList<NounsDictionary>
            title="Rzeczowniki"
            loadItems={loadNouns}
            getKeys={items => Object.keys(items)}
            getLink={lemma => `/nouns/${encodeURIComponent(lemma)}`}
        />
    );
}
