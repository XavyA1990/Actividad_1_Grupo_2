import {createContext} from "react";

// @ts-ignore // TODO remove this ts-ignore when context is typed
export const LibraryContext = createContext();

export const LibraryProvider = ({children}:{children: any}) => {
    return (
        <LibraryContext.Provider value={{}}>
            {children}
        </LibraryContext.Provider>
    )
}