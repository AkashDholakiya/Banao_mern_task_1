import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css';
import VerticalCenterModal from './VerticalCenterModal';


const Navs = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar expand="lg" className="nav-main bg-body-tertiary my-2">
      <Container className='main-nav-con' fluid>
        <Navbar.Brand className='mx-5' href="#"><img src="/images/logo_icon.png" width={162.58} height={
24.01} alt="logo" /></Navbar.Brand>
        <div>
          <InputGroup>
            <InputGroup.Text id="basic-addon1"><img src="/images/mirror.png" alt="" /></InputGroup.Text>
            <Form.Control
              placeholder="Search for your favorite groups in ATG"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id='input-search'
            />
        </InputGroup>
        </div>
        <div className='mx-5 '>
            <div className='create-acc' onClick={() => setModalShow(true)}>Create account. <span>It’s free!</span> <span>&#9660;</span></div>
            <VerticalCenterModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navs;