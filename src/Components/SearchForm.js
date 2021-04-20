import React from 'react';
import { useEffect, useState } from 'react'
function SearchForm({handleSubmit, handleChange, searchString}) {
    return (
        <div>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <input placeholder="Search"
                 type="text" 
                 name="searchString" 
                 required 
                 onChange={handleChange}
                 value={searchString}
                 />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;