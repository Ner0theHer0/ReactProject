import { useState } from "react"
import poemService from "../services/poems"
import {useHistory} from "react-router-dom"
import "../App.css"


const Submit = () => {
    const initialState = {title: '', author: '', text: '', votes: 0}

    const [formContent, setFormContent] = useState(initialState)

    const updateTitleField = (event) => {
        setFormContent({...formContent,  title: event.target.value})
    }

    const updateAuthorField = (event) => {
        setFormContent({...formContent,  author: event.target.value})
    }

    const updateTextField = (event) => {
        setFormContent({...formContent,  text: event.target.value})
    }

    const history = useHistory()

    const handleForm = (event) => {
        
        event.preventDefault()
        poemService.createPoem(formContent).then(() => {
            history.push('/')
        })
    }

    return (
        <div className='sub'>
            <form onSubmit={handleForm}>
                <label htmlFor="title" style={{marginTop: '30px'}}>Title</label>
                <input name="title" style={{width: '100%'}} onChange={updateTitleField}></input>

                <label htmlFor="author">Authors Name</label>
                <input name="author" style={{width: '100%'}} onChange={updateAuthorField}></input>

                <label htmlFor="text">Poem contents</label>
                <textarea  name="text" style={{ height:"300px", width: '100%'}} onChange={updateTextField}></textarea>

                <div>
                    <input type="submit" className='submit'></input> 
                </div>
            </form>
        </div>
    )
}

export default Submit