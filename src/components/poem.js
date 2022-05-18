import {React} from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import ReactMarkdown from 'react-markdown';

const Poem = ({poem, upvote}) => {

    const upvotePoemHandler = () => {
        upvote(poem)
    }

    //var count = (poem.text.match(/  /g) || []).length;

    return (
        <div className='poemList'>
            <div>
                <h3><Link to={`/poems/${poem.id}`} className='linkBut'>{poem.title}</Link> <button onClick={upvotePoemHandler} className='upvote'>{poem.votes}</button></h3>
                <h4>By: {poem.author}</h4>
            </div>
            <div>
                <ReactMarkdown children={poem.text.length > 150 
                    ?poem.text = poem.text.substring(0,150) + "..."
                    :poem.text} /> 
                {poem.text.length > 150
                ?<Link to={`/poems/${poem.id}`}> Read more</Link> 
                :null}
            </div>
        </div>
       
)}

export default Poem;