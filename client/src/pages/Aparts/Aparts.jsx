import React, { useState, createRef } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import {bookApart} from '../../api/apartsAPI'

const UpdateFormFields = ({switchForm, id, updateItem}) => {
  const nameRef = createRef()
  const descriptionRef = createRef()
  const priceRef = createRef()
  const roomsRef = createRef()

  const [formData, setFormData] = useState('');
  const [info, setInfo] = useState({
    image: '',
    name: '',
  });

  const [error, setError] = useState({
    found: false,
    message: '',
  });

  const updateInfo = (e) => {
    const data = {
      _id: id,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      rooms: roomsRef.current.value,
    }
    console.log(data)
    updateItem(data)
  }

  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      image: '',
      name: '',
    });
    axios
      .post('http://localhost:8000/api/category', formData)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setInfo(res.data.category);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors,
        });
        setTimeout(() => {
          setError({
            found: false,
            message: '',
          });
        }, 3000);
      });
    
  };

  return (
  <div id={id}>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='file'
          id='inputGroupFile'
          aria-describedby='inputGroupFileAddon'
          onChange={upload}
        />
      <label className='custom-file-label' htmlFor='inputGroupFile'>
        Choose file
      </label>
      </div>
      <button type='submit'>
        Submit
      </button>
      <img
        src={`http://localhost:8000/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '359px' }}
      />
    </form>
    
    <TextField inputRef={nameRef} id="standard-basic" label="name" />
    <TextField inputRef={descriptionRef} id="standard-basic" label="description" />
    <TextField inputRef={priceRef} id="standard-basic" label="price" />
    <TextField inputRef={roomsRef} id="standard-basic" label="rooms" />
    <button onClick={(e) => {updateInfo(e); switchForm(false)}}>Save</button>
  </div>
  )}

const Apart = (props) => {
  const {name, description, price, 
  rooms, id, updateItem, authIn, image} = props
  const [updateForm, switchForm] = useState(false)

  const bookApartItem = () => {
    console.log(id)
    const data = {
      _id: id,
    }
    bookApart(data)
  }

 return (
  updateForm ? <UpdateFormFields
    switchForm = {switchForm}
    updateItem = {updateItem}
    id = {id}
    />
  :
  <div>
    <div>{id}</div>
    <div>{image || "image"}</div>
    <div>{name}</div>
    <div>{description}</div>
    <div>{price}</div>
    <div>{rooms}</div>
    {
     authIn ? <button onClick={() => {switchForm(true)}}>Edit</button>
      : <button onClick={bookApartItem}>Book</button>
    }
</div>)
}

const Aparts = ({data, updateForm, updateItem, switchForm, authIn}) => {
  console.log(authIn)
    return (
    <div>
      {data === null? "Апартаменты отсутсвуют": 
      data.map( (el, i) => (
        <Apart key = {i}
          id = {el._id}
          authIn = {authIn}
          updateItem = {updateItem} 
          name = {el.name}
          description = {el.description}
          price = {el.price}
          rooms = {el.rooms}
          updateForm = {updateForm}
          switchForm = {() => {switchForm(true)}}
        />
      ))}
    </div>
    )}
    

export default Aparts