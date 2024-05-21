import MovieForm from './MovieForm'
import MovieText from './MovieText'

function Movie() {
  return (
    <div className='mb-10 bg-zinc-800 p-10 rounded-lg max-w-6xl'>
      <MovieForm/>
      <MovieText/>
    </div>
  )
}

export default Movie