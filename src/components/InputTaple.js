import React, { useState } from 'react';

export default function InputTaple() {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Alimentação');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const teste = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte','Saúde'];

  function handleSubmit(event) {
    event.preventDefault();
  }

  return(
    <form onSubmit={ handleSubmit }>
      <label HtmlFor="date">
        Data
        <input 
          id="date" 
          type="date"
          onChange={ ({ target }) => setDate(target.value)}
        />
      </label>

      <label HtmlFor="category">
        Categoria
        <select
          id="category"
          onChange={({ target }) => setCategory(target.value)}
        >
          {
            teste.map((category, index) => (
              <option key={ index } value={ category }>{category}</option>
            ))
          }
        </select>
      </label>

      <label HtmlFor="description">
        Descrição
        <input 
          id="description" 
          type="text"
          onChange={ ({ target }) => setDescription(target.value)}
        />
      </label>

      <label HtmlFor="value">
        Valor
        <input 
          id="value" 
          type="number"
          onChange={ ({ target }) => setValue(target.value)}
        />
      </label>

      <button type="submit">Adicionar despesa</button>
    </form>
  );
}