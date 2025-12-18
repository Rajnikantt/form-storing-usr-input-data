import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData,setFormData ] = useState( {firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favSport:"" } );

  console.log(formData)

  function changeHandler(event) {
    const { name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("printing from Data....")
    console.log(formData)
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <br/>
        <input
        type='text'
        placeholder='first name'
        name='firstName'
        onChange={changeHandler}
        value={formData.firstName}/>

        <br/>
        <br></br>

        <input
        type='text'
        placeholder='last name'
        name='lastName'
        onChange={changeHandler}
        value={formData.lastName}/>

        <br/>
        <br/>

        <input
        type='email'
        placeholder='Enter Your Email'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>

        <br/>
        <br/>

        <textarea
        placeholder='enter yout comments here'
        name='comments'
        onChange={changeHandler}
        value={formData.comments}/>

        <br/>
        <br/>

        <input
        type='checkbox'
        name='isVisible'
        id='isVisible'
        onChange={changeHandler}
        value={formData.isVisible}/>
        <label>
          Am is visible
        </label>

        <br/>
        <br/>

        <fieldset>
          <legend>Mode:</legend>
          <input
          type='radio'
          onChange={changeHandler}
          value='Online Mode'
          id='Online Mode'
          name='mode'
          checked={formData.mode === "Online Mode"}/>
          <label>Online Mode</label>

          <input
          type='radio'
          value='Offline Mode'
          name='mode'
          id='offline Mode'
          onChange={changeHandler}
          checked={formData.mode === "offline Mode"}/>
          <label>Offline Mode</label>

          </fieldset>

          
            <label>favSport</label>
            <select 
            value={formData.favSport}
            onChange={changeHandler}
            name='favSport'
            id='favSport'>

             <option value='cricket'>Cricket</option>
             <option value='football'>Football</option>
             <option value='volley ball'>volley Ball</option>
             <option value='basket ball'>Basket Ball</option>
             <option value='hockey'>Hockey</option>
             <option></option>
            </select>

            <br/>
            <br/>
            <button className='bg-blue-500  rounded  mt-5' >
              Submit
            </button>
       


      </form>
    </div>
    
  );
}

export default App;
