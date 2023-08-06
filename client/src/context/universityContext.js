import React , {useState, createContext} from 'react';

export const UniversityContext = createContext();

export const UniversityContextProvider = props => {
    const [universities, setUniversities] = useState([])
    return (
        <UniversityContext.Provider value={{universities : universities, setUniversities : setUniversities}}>
            {props.children}
        </UniversityContext.Provider>
    )

}