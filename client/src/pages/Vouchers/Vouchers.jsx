import React, { useState, createRef } from 'react'
import { useEffect } from 'react'
import {getVouchers, createVoucher, buyVoucher} from '../../api/vouchersAPI'
import axios from 'axios'
import { TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import FormWrapper from '../../common/BuyForm'
import BuyForm from './BuyForm'

const Form = FormWrapper()

const Voucher = ({name, id, variant, authIn,quantity ,price}, ...props) => {
  const [open, setOpen] = useState(false)
  
  const buyItem = (e) => {
    const data = {
      _id: id,
    }
    buyVoucher(data)
  }


  return <div style = {{border: "1px solid black", margin: "5px"}}>
    <div>{id}</div>
    <div>{name}</div>
    <div>{variant}</div>
    <div>{price}</div>
    <div>{quantity}</div>
    {
    authIn ? 
    <button>
      Edit
    </button>
    : 
    <button 
      onClick = {() => setOpen(true)}
    >
      Buy
    </button>
    // <button onClick = {buyItem}>
    //   Buy
    // </button>
    }
    <Form
      open = {open} 
      setOpen = {() => setOpen(false)}
    >
      <BuyForm />
    </Form>
  </div>
}

const Vouchers = ({vouchers, authIn}, ...props) => {
  // console.log('vouchers',vouchers)
  return <div>
    {vouchers === null? "Ваучеров нет" : vouchers.map( (el, i) => (
      <Voucher key={i}
        id = {el._id}
        name = {el.name}
        variant = {el.variant}
        price = {el.price}
        quantity = {el.quantity}
        authIn = {authIn}
      />
    )) }
  </div>
} 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const VouchersContainer = ({authIn}, ...props) => {
  const [items, setItems] = useState(null)
  const name = createRef()
  const description = createRef()
  const price = createRef()
  const quantity = createRef()

  const createVoucherItem = () => {
    const data = {
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
      variant: type,
      quantity: quantity.current.value
    }
    createVoucher(data)
  }

  const getData = async() => {
    const data = await getVouchers()
    setItems(data.data)
  }

  useEffect( () => {getData()}, [])

  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return <>
  <div>
    { authIn ? 
    <div>
    <TextField inputRef={name} id="standard-basic" label="name" />
    <TextField inputRef={description} id="standard-basic" label="description" />
    <TextField inputRef={price} id="standard-basic" label="price" />
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={10}>Кафе</MenuItem>
          <MenuItem value={20}>Ресторан</MenuItem>
          <MenuItem value={30}>Столовая</MenuItem>
          <MenuItem value={40}>Бар</MenuItem>
          <MenuItem value={50}>Закусочная</MenuItem>
        </Select>
      </FormControl>
    <TextField inputRef={quantity} id="standard-basic" label="quantity" />
    <button onClick={createVoucherItem}>Create</button>
    </div>: null

    }
    <Vouchers 
    authIn = {authIn}
    vouchers = {items}
    />
    </div>
  </>
}

let props = state => ({
  authIn: state.auth.authIn,

})

export default connect(props, null)(VouchersContainer)
