import { Button, Form, InputGroup, Stack } from 'react-bootstrap'
import React from 'react'
import '../css/custoModal.css'

const CustomPhoneModal = (p) => {
    const [login, setLogin] = React.useState(false);

  return (
    <div className='main-custo-modal'>
      <div className='custo-head'>
        <h1 className='m-0'>Create Account</h1>
        <img onClick={() => p.setphoneModal(false)} src="/images/phoneclose.svg" alt="phoneClose" />
      </div>
      <div className='mt-4 logsign-control'>
      {!login ? 
        <>
        <InputGroup>
            <Form.Control placeholder='First Name' aria-label="First name" />
            <Form.Control placeholder='Last Name' aria-label="Last name" />
        </InputGroup>
        <Form.Control placeholder='Email' />
        <InputGroup>
            <Form.Control
                placeholder="Password"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                id='input-search-20'
            />
            <InputGroup.Text id="basic-addon20"><img src="/images/views.svg" alt="eye" /></InputGroup.Text>
        </InputGroup>
        <Form.Control placeholder='Confirm Password' />
        <div className='mt-4 w-100 d-flex justify-content-between align-items-center'>
            <Button className='py-3 px-5 rounded-pill'>Create Account</Button>
            <div style={{textDecoration:"underline"}} onClick={() => setLogin(!login)}>or, Sign In</div>
        </div>
        </> :
        <>
            <Form.Control placeholder='Email' />
            <InputGroup>
                <Form.Control
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id='input-search-20'
                />
                <InputGroup.Text id="basic-addon20"><img src="/images/views.svg" alt="eye" /></InputGroup.Text>
                <div className='mt-4 w-100 d-flex justify-content-between align-items-center'>
                    <Button className='py-3 px-5 rounded-pill'>Sign In</Button>
                    <div style={{textDecoration:"underline"}} onClick={() => setLogin(!login)}>or, create account</div>
                </div>
            </InputGroup>
        </>}   
        <Stack gap={3} className='mt-4'>
            <div className="st-item"><img src="/images/facebook.svg" alt="fb" />&nbsp; Sign {!login ? "up" : "in"} with Facebook</div>
            <div className="st-item"><img src="/images/google.svg" alt="gg" />&nbsp; Sign {!login ? "up" : "in"} with Google</div>
            {login && <div className='forg-pass'>Forgot Password?</div>}
        </Stack>
        <div className='mt-4 w-100 d-flex justify-content-center'>
            {!login && <p className='w-75 text-center' style={{fontSize:"14px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>}
        </div>
      </div>
    </div>
  )
}

export default CustomPhoneModal
