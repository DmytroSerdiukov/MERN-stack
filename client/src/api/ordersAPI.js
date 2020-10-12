import axios from 'axios'

export const getOrders = async() => {
    const orders = await axios.get("http://localhost:5000/orders/items")
    return orders.data.data
}

export const sendOrder = async() => {
    await axios.post("http://localhost:5000/orders/create", {
        price: "4000$",
        rooms: "10",
        buyer: {
            firstName: "Name",
            lastName: "Surname"
        }
    })
}