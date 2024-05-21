import {createContext, useState} from 'react'
import {newMovieScript} from '../data/movieScript'

export const MainContext = createContext()

export function MainContextProvider(props) {
    
    const [ movieScript, setMovieScript] = useState("Waiting for request")
    function setScript() {
        console.log(newMovieScript);
        setMovieScript(newMovieScript)
    }


  return (
    <MainContext.Provider value={{
        movieScript,
        setScript
    }}>
        {props.children}
    </MainContext.Provider>
  )
}
