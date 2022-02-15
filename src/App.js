import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from './Components/SearchForm'
import SearchResults from "./Components/SearchResults"
import SearchHeader from './Components/SearchHeader'
import './App.css';





function App() {

 const [lastSearch, setLastSearch] = useState('');
 const searchOptions = {
   key: 'HyPHqefoiTwyVKXaCF4bK5JJoUU2Rn16',
   limit: 25,
   rating: 'G',
   api: 'https://api.giphy.com/v1/gifs',
   endpoint: '/search'
 }
 const[images, setImages] = useState([])
 const [searchString, setSearchString] = useState('')
 
 const handleChange = (e) => {
   setSearchString(e.target.value)
 }

 const handleSubmit =(e) => {
   e.preventDefault();
   getImages(searchString)
 }

const getImages = (searchString) => {
  
const url = `${searchOptions.api}${searchOptions.endpoint}
?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}
&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`
fetch(url)
.then(response => {
  response.json() 
  console.log(response)
})
.then(data => {
  setImages(data.data)
  setLastSearch(searchString)
  setSearchString('')
})
.catch(console.error)
 }
 

 useEffect(()=> {
   getImages(searchString);
 }, [])


  
  return (
    <div className="App">
      <header className="App-header">
        <SearchHeader lastSearch={lastSearch} />
        <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
        
        />
        <SearchResults imageData={images}/>
      </header>
    </div>
  );
}

export default App;
