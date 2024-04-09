import { create } from "zustand";

interface GameQuery {       //shape of the state object that will be managed by the store
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;       //store will have a property of gameQuery of type GameQuery
    setSearchText: (searchText: string) => void;    //methods to update the state
    setGenreId: (genreId: number) => void;
    setPlatformId:(platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}
    //hook = useGameQueryStore to access state and methods
const useGameQueryStore = create<GameQueryStore>(set => ({  //callback functions
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId }})),
    setPlatformId: (platformId) => set(store => ({ gameQuery: {...store.gameQuery, platformId }})),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder }}))
})); 

export default useGameQueryStore;