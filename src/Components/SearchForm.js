import React from 'react';

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
                <button type='submit'><SearchIcon height="1.4rem" width="1.2rem" /></button>
                
            </form>
        </div>
    );
}

export default SearchForm;