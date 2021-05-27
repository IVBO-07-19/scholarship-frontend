import React, {createContext, useState, Dispatch, FC, SetStateAction, useContext} from 'react';

type Checkboxes = {
    checkedY: boolean,
    checkedH: boolean,
    checkedO: boolean,
    checkedK: boolean,
    checkedS: boolean,
    checkedX: boolean,
    checkedP: boolean,
}

type MainContextState = {
    checkboxes: Checkboxes,
    setCheckboxes: Dispatch<SetStateAction<Checkboxes>>
};

const contextDefaultValues: MainContextState = {
    checkboxes: {
        checkedY: false,
        checkedH: false,
        checkedO: false,
        checkedK: false,
        checkedS: false,
        checkedX: false,
        checkedP: false,
    },
    setCheckboxes: () => {}
};

export const MainContext = createContext<MainContextState>(contextDefaultValues);

const MainProvider: FC = ({children}) => {
    const [checkboxes, setCheckboxes] = useState<Checkboxes>(contextDefaultValues.checkboxes);

    return (
        <MainContext.Provider value={{checkboxes, setCheckboxes}}>
            {children}
        </MainContext.Provider>
    )
}

export function useMain() {
    return useContext(MainContext)
}

export default MainProvider