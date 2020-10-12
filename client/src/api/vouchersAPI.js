import axios from 'axios'

export const getVouchers = async() => {
  const data = await axios.get('http://localhost:5000/vouchers/items')
  return data.data
}

export const createVoucher = async(data) => {
  await axios.post('http://localhost:5000/vouchers/create', data)
}