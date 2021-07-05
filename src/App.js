 import NavBar from './Components/NavBar.js'
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import MovieList from './Components/MovieList.js';
import Add from './Components/Add.js'
import MovieVideos from './Components/MovieVideos.js';
import {Route,Switch} from 'react-router-dom'

function App() {
  const [movies,setMovies]=useState([
    {
    id:0,
    title:"SKATER GIRL",
    desc:"En Inde, une ado se découvre une passion qui va changer sa vie : le skateboard. Elle rêve de faire de la compétition, mais son parcours sera semé d'embûches.",
    img:"https://fr.web.img6.acsta.net/c_310_420/pictures/21/05/14/10/42/2616738.jpg",
    rate:5,
    url:"https://www.youtube.com/embed/k5Fn99wmFCQ"
    },
    {
    id:1,
    title:"THE FATHER",
    desc:"THE FATHER raconte la trajectoire intérieure d’un homme de 81 ans, Anthony, dont la réalité se brise peu à peu sous nos yeux. Mais c’est aussi l’histoire d’Anne, sa fille.",
    img:"https://fr.web.img6.acsta.net/c_310_420/pictures/21/05/06/12/38/3783901.jpg",
    rate:2,
    url:"https://www.youtube.com/embed/HVCs_ahGpls"
  },
  {
    id:2,
    title:"AINBO",
    desc:"Née au cœur de la forêt amazonienne, Ainbo n’a que 13 ans mais rêverait d'être la meilleure chasseuse de tout Candamo.",
    img:"https://fr.web.img6.acsta.net/c_310_420/pictures/21/06/07/12/57/3421198.jpg",
    rate:4,
    url:"https://www.youtube.com/embed/Cr17EKfDDdQ"
  },
  {
    id:3,
    title:"UN TOUR CHEZ MA FILLE",
    desc:"Cette fois-ci, c’est elle qui débarque ! Jacqueline, en pleins travaux dans son appartement, est joyeusement contrainte d’aller vivre « quelques jours » chez sa fille ainée Carole et son gendre.",
    img:"https://fr.web.img2.acsta.net/c_310_420/pictures/21/04/26/13/25/1269217.jpg",
    rate:1,
    url:"https://www.youtube.com/embed/p5_3Le8dfHQ"
  },
  {
    id:4,
    title:"ANNETTE",
    desc:"Los Angeles, de nos jours. Henry est un comédien de stand-up à l’humour féroce. Ann, une cantatrice de renommée internationale. Ensemble, sous le feu des projecteurs.",
    img:"https://fr.web.img6.acsta.net/c_310_420/pictures/21/06/01/12/08/4034608.jpg",
    rate:5,
    url:"https://www.youtube.com/embed/sf4gJl6Uq5U"
  },
  {
    id:5,
    title:"FAST & FURIOUS 9",
    desc:"Si Dom Toretto mène une vie tranquille, loin du bitume, auprès de Letty et de leur fils, le petit Brian, ils savent bien tous les deux que derrière les horizons .",
    img:"https://fr.web.img3.acsta.net/c_310_420/pictures/21/05/18/10/40/2487837.jpg",
    rate:3,
    url:"https://www.youtube.com/embed/Eumj0-UxrQM"
  }
  
])
const [input,setInput]=useState("")
const [searchRate,setSearchRate]=useState(0)
const ajoutFilm=(newMovie)=>{
  setMovies([...movies,newMovie])
}


  return (
    <div className="App">
     <NavBar setInput={setInput} setSearchRate={setSearchRate}/>
     <Switch>
     <Route exact path="/" render={(props)=> 
          <MovieList {...props} movies={movies} input={input} searchRate={searchRate}/>}/>
     <Route exact path="/:ID" render={(props)=> 
          <MovieVideos {...props} movies={movies}/>}/>
     </Switch>
     <Add ajoutFilm={ajoutFilm}/>
    </div>
  );
}

export default App;
