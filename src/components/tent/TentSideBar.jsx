import React, { useState } from 'react'
import styles from'./sidebar.module.css'
import Form from 'react-bootstrap/Form';

const TentSideBar = ({getTentList}) => {
    const[first,setFirst]=useState(false)
    const[second,setSecond]=useState(false)
    const[third,setThird]=useState(false)
    
    const handleFirst=()=>{
    setFirst(!first)
    console.log(first)
    getTentList('first',!first)
}
const handleSecond=()=>{
    setSecond(!second)
    console.log(second)
    getTentList('second',!second)
}
const handleThird=()=>{
    setThird(!third)
    getTentList('third',!third)
    console.log(third)
    }
  return (
    <div styles={styles.editor}>
      <Form.Check type='checkbox' label = '1등급' onClick={handleFirst}/>
      <Form.Check type='checkbox' label = '2등급' onClick={handleSecond}/>
      <Form.Check type='checkbox' label = '3등급' onClick={handleThird}/>
    </div>
  )
}

export default TentSideBar
