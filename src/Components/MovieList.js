import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movies,input,searchRate}) {
    
    return (
        <div className="moviesList">
            {
                movies.filter((el)=>(el.title.toUpperCase().includes(input.toUpperCase())) && (el.rate>=searchRate))
                .map((el,i)=><MovieCard movie={el} key={i} />)
            }
        </div>
    )
}


