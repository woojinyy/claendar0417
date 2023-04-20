import React, { useEffect, useState } from 'react'
import ScheduleFooter from '../include/ScheduleFooter'
import ScheduleHeader from '../include/ScheduleHeader'
import TentSideBar from '../tent/TentSideBar'
import TentMain from '../tent/TentMain'
import styles from './tent.module.css'
import axios from 'axios'
const TentPage = () => {
    const [tentList,setTentList]=useState([])
    const getTentList =(name,value)=>{
        console.log(name)
        console.log(value)
        if('first'===name){
            axios.get("/tent.json").then(res=>{
                setTentList(res.data)//데이터 초기화하기
                if(value){
                    const tents = tentList.filter(tent=>tent.id===1)
                    setTentList([...tents])
                }
            })
        }else if('second'===name){
            axios.get("/tent.json").then(res=>{
                setTentList(res.data)//데이터 초기화하기
                if(value){
                    const tents = tentList.filter(tent=>tent.id===2)
                    setTentList([...tents])
                }
            })

        }else if('third'===name){
            axios.get("/tent.json").then(res=>{
                setTentList(res.data)//데이타 초기화하기
                if(value){
                    const tents = tentList.filter(tent=>tent.id===3)
                    setTentList([...tents])
                }
            })
        }else{//아무것도 체크하지 않았을 때
            axios.get("/tent.json").then(res=>{
                setTentList(res.data)//데이타 초기화하기
            })
        }
    }
    useEffect(()=>{
        getTentList()
    },[])
    
  return (
    <>
     <ScheduleHeader/>
        <div styles={styles.container}>
        <TentSideBar getTentList={getTentList}/>{/* 함수가 넘어가는  props */}
        <TentMain tentList={tentList}/>{/* state훅이 넘어가는 props */}
        </div>
     <ScheduleFooter/>
    </>
  )
}

export default TentPage
