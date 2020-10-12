import axios from "axios"

export const getApartments = async() => {
    const response = await axios.get("http://localhost:5000/aparts/items")
    return response.data.data      
}

export const sendApartData = async(values) => {
    await axios.post("http://localhost:5000/aparts/create", values)
}

export const updateApartItem = async(data) => {
    await axios.put(`http://localhost:5000/aparts/update`, data)
}