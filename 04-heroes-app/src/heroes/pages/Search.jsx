import React from 'react';
import {HeroCard} from '../components';
import { useForm } from '../../Hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import {getHerosByName} from '../helpers';

export const Search = () => {
  const {onInputChange, searchText} = useForm({searchText:''}); 

  const navigate = useNavigate(); //To navegate to URL
  const location =useLocation(); //To navegate to 

  const query = queryString.parse(location.search);

  const heroes = getHerosByName(query.q);

  console.log('estos son los heroes', heroes);

  const onSearchSubmite = (event) => {
    event.preventDefault();

    console.log(searchText);
    if(searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`);

  }

  return (
    <>
      <h1>Serach</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmite} >
            <input type="text" 
              placeholder='Search hero' 
              className='form-control' 
              name='searchText' 
              autoComplete='off' 
              onChange={onInputChange}
              value={searchText}
            />
            <button className='btn btn-outline-primary mt-1' > Search </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />

          <div className="alert alert-primary"> search a hero </div>
          <div className="alert alert-danger">
            No hero with <b> {query.q} </b>
          </div>

          {
            heroes.map( (heroe)=> ( <HeroCard key={heroe.id} {...heroe} /> ) )
          }

        </div>
      </div>
    </>
  )
}
