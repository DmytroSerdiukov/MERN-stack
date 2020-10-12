import React, {createRef} from 'react';
import ReactDom from 'react-dom';
import { TextField } from '@material-ui/core';
// import { Field, reduxForm } from 'redux-form';

const styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "500px",
    backgroundColor: 'white',
    zIndex: 1000,
    fontSize: "40px"
}

const overlay = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    position:"fixed",
    backgroundColor: "gray",
}

 const ApartModal = ({open, openModal}) => {
    const Name = createRef()
    const Description = createRef()
    const Price = createRef()
    const Amount = createRef()

    if (!open) return null

    const show = () => {
        const values = {
            name: Name.current.value,
            description: Description.current.value,
            price: Price.current.value,
            rooms: Amount.current.value
        }
        // sendApartData(values)
    }
    return ReactDom.createPortal(
        <>
        <div style={overlay}>
            <div style={styles}>
            <form>
                <TextField inputRef={Name} id="standard-basic" label="Name" />
                <TextField inputRef={Description} id="standard-basic" label="Description" />
                <TextField inputRef={Price} id="standard-basic" label="Price" />
                <TextField inputRef={Amount} id="standard-basic" label="Amount of rooms" />
            </form>
            <button type="submit" onClick={function(event){ show(); openModal()}}>close</button>
                
            </div>
        </div>
        </>, 
        document.getElementById("portal")
    )
}

export default ApartModal
