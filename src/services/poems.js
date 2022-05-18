import axios from 'axios'
const baseUrl = '/api/poems'
const phrase = 'Bobalooba'

const createPoem = (newPoem) => {
    const request = axios.post(baseUrl, { 
        title: newPoem.title, author: newPoem.author, text: newPoem.text
    },  {headers: {bob: phrase}})
    return request
}

const upvotePoem = (id) => {
    return axios.post(`${baseUrl}/${id}`, null, {headers: {bob: phrase}})
}

const getPoems = () => {
    return axios.get(baseUrl, {headers: {bob: phrase}})
}

const getPoem = (id) => {
    return axios.get(`${baseUrl}/${id}`, {headers: {bob: phrase}})
}

const deletePoem = (id) => {
    return axios.delete(`${baseUrl}/${id}`, {headers: {bob: phrase}})
}


const exportList =  {
    createPoem,
    getPoems,
    deletePoem,
    upvotePoem,
    getPoem
}

export default exportList