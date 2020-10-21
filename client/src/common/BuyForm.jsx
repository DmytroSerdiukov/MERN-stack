import React from 'react'
import ReactDom from 'react-dom';

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
  backgroundColor: "rgba(0,0,0, 0.3)",
}
const BuyForm = Element => ({open, setOpen, children}) => {

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={overlay}>
        <div style={styles}>
          {children}
        </div>
        <button onClick = {() => setOpen(false)}>close</button>
      </div>
    </>, 
    document.getElementById("portal")
  )
}



export default BuyForm