import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from 'react-router-dom';

const ScheduleHeader = () => { 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Link to="/"className='nav-link'>TerrGYM</Link>
          <Nav className="me-auto">
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/cal" className='nav-link'>일정관리</Link>
            <Link to="/memo" className='nav-link'>메모관리</Link>
            <Link to="/schedule" className='nav-link'>스케줄관리</Link>
          </Nav>
          {/* js와 jsx섞어쓰기 */}
        </Container>
      </Navbar>
    </>
  )
}

export default ScheduleHeader
