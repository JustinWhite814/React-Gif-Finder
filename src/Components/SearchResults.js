import React from 'react';
import {useState, useEffect} from 'react'
function SearchResults({ imageData }) {

let[img, setImg] = useState([])

useEffect(()=> {
    setImg(imageData)
}, [imageData])

let imageElements = img.map(img => {
return (
         <div key={img.id} className="gif">
         <img src={img.images.downsized_large.url} alt=''/>
         </div>
);
}) 
return (
    <div className='gallery'>
        {imageElements} 
    </div>
)
}

export default SearchResults;