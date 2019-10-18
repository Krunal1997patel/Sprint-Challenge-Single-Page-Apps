import React from "react";


export default function SearchForm(props) {


  const Input = event =>{
    event.preventDefault();
    props.setSearch(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault();
  };
 
  return (
    <section className="search-form">
     <form onSubmit={submitForm}>
        <input
        className='text'
        type='text'
        onChange={Input}
        value={props.search}
        placeholder='Search'
        name='name'
        />
      </form>
    </section>
  );
}