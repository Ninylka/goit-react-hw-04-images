
import { useState } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, ButtonLabel, SearchFormInput } from '../Searchbar/Searchbar.styled';
import { SlMagnifier }  from "react-icons/sl";

export const Searchbar =({ onSubmit }) => {
  const [query, setQuery] = useState('');
    

       
   
    const handleChange =(e) => {
      setQuery(e.target.value)
    }

   

const handleSubmit = (e) => {
  e.preventDefault()
       
        if (query.trim() === '') {
          alert('Please enter a search query!');
          return;
      }
      onSubmit(query);
     
      setQuery('');

}


      
        return (<SearchbarHeader>
            <SearchForm  onSubmit = {handleSubmit}>
              <SearchFormButton  type="submit" >
              < SlMagnifier/>
                <ButtonLabel>Search</ButtonLabel>
              </SearchFormButton>
          
              <SearchFormInput
                      type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={handleChange}
                value={query}
              />
            </SearchForm>
          </SearchbarHeader>);
    }
 
