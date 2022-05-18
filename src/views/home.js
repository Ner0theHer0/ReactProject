import '../App.css';
import Poem from "../components/poem"
import poemService from "../services/poems"
import {useState, useEffect} from "react"

const Home = () => {

    const [poems, setPoems] = useState([])
    const [err, setError] = useState()

    const upvotePoems = (poem) => {
        poemService.upvotePoem(poem.id)
        .then(response => {
          const index = poems.indexOf(poem)
          const newPoems = [...poems];
          newPoems[index] = response.data;
          setPoems(newPoems);
        })
    }

    useEffect(() => {
        poemService.getPoems()
        .then(response => {
          setPoems(response.data)
        }).catch(e => setError(e))
      },[])
    
    if (err) {
       return <h1>Something went wrong: {err.message}</h1>
    } else {
        return (
            <div className="App">
              <div className="row">
                <div className="poems">
                  {poems.map(poem => (<Poem key={poem.id} poem={poem} upvote={upvotePoems}/>))}
                </div>
              </div>
              
            </div>
          )
    }
}

export default Home