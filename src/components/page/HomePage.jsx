import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { ContainerDiv,HeaderDiv,FormDiv } from '../style/FormStyle';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ScheduleHeader from '../include/ScheduleHeader';
const HomePage = () => {
  const navigate = useNavigate()
  const handleLogin=()=>{
    console.log('로그인요청')
    navigate('/login')//버블링 이슈 잡자 어디에 써야해? prevent default
  }
  return (
    <>
      <ContainerDiv>
      <ScheduleHeader />
      <HeaderDiv>
        <h1 style={{marginLeft:"10px"}}>터짐블로그</h1>
        <Button onClick={handleLogin}>로그인</Button>
      </HeaderDiv>
      <FormDiv>
        <div>이벤트존</div>
        <hr style={{height:"2px"}} />
        <div>추천 수업존</div>
        <hr style={{height:"2px"}}/>
        
        <div>카카오맵존</div>
        <hr style={{height:"2px"}}/>
      </FormDiv>
      </ContainerDiv>
    </>
  )
}

export default HomePage
