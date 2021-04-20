import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from './Components/SearchForm'
import SearchResults from "./Components/SearchResults"
import SearchHeader from './Components/SearchHeader'
import './App.css';


// const images = [
//   {
//     id: 1,
//     url: 'https://media.giphy.com/media/3DsNP07nApt1eEyjvM/giphy.gif'
//   },
//   {
//     id: 2,
//     url: 'https://media1.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
//   },
//   {
//     id: 3,
//     url:
//       'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif'
//   },
//   {
//     id: 4,
//     url: 'https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif'
//   },
//   {
//     id: 5,
//     url: 'https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif'
//   },
//   {
//     id: 6,
//     url: 'https://buffer.com/library/wp-content/uploads/2016/06/giphy.gif'
//   },
//   {
//     id: 7,
//     url: 'https://media4.giphy.com/avatars/default5.gif'
//   },
//   {
//     id: 8,
//     url: 'https://media2.giphy.com/media/3oEduPff5ErjNmlbwY/source.gif'
//   }
// ];


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
.then(response => response.json())
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
