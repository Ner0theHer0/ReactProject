import { useState, useEffect } from "react"
import poemService from "../services/poems"
import { useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import {useHistory} from "react-router-dom"

const Poem = () => {
    const id = useParams().id
    const [poem, setPoem] = useState()
    const history = useHistory()
    
    useEffect(() => {
        poemService.getPoem(id)
        .then (response => {
            setPoem(response.data)
        }   
            
        )
      },[id]);

    const upvotePoemHandler = () => {
        poemService.upvotePoem(id)
        .then(response => {
          
          setPoem(response.data);
        })
    }

    const deletePoemHandler = () => {
        poemService.deletePoem(id)
        .then(response => {
            history.push('/') 
        })
    }

    try {
        return (
            <div className='single'>
            <div>
                <h3>{poem.title} <button onClick={upvotePoemHandler} className='upvote'>{poem.votes}</button></h3>
                <h4>By: {poem.author}<button onClick={deletePoemHandler} className='upvote'>Delete</button></h4>
            </div>
            <div>
                <ReactMarkdown children={poem.text} />
            </div>
        </div>
        )
    } catch {
        return null
    }
}

export default Poem