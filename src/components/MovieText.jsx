import { useContext } from "react"
import {MainContext} from '../context/MainContext'

function MovieText() {
    
    const {movieScript} = useContext(MainContext)

  return (
    <div>
        <p>{ movieScript }</p>
    </div>
  )
}

export default MovieText