import React from 'react';
import { useEffect, useState } from 'react'
import { SearchIcon } from '../shared/AppIcons'
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
                <button type='submit'><SearchIcon height="2rem" width="2rem" /></button>
            </form>
        </div>
    );
}

export default SearchForm;