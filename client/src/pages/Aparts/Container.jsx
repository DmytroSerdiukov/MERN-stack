import React, { useEffect, useState } from 'react'
import Aparts from './Aparts'
import axios from 'axios'
import {connect} from 'react-redux'
import Modal from '../../common/Modal'
import {getApartments, updateApartItem} from '../../api/apartsAPI'
import { ApartsSelector } from '../../selectors/selectors'
const Container = ({authIn}, ...props) => {
  const [open, setOpen] = useState(false)
  const [aparts, setAparts] = useState(null)
  
  const updateItem = (data) => {
    updateApartItem(data)
  }

  const getData = async() => {
    try{
      const response = await getApartments()
      setAparts(response)
      console.log(response)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect( () => {
    getData()
  }, [])

  return <>
    <Aparts
    authIn = {authIn} 
    data={aparts}
    updateItem={updateItem}
    />
  </>
}


let mapStateToProps = (state) => ({
  authIn: state.auth.authIn
})

export default connect(mapStateToProps, null)(Container)