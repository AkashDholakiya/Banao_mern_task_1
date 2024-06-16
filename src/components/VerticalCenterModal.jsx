import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import React from 'react'
import '../css/vertimodal.css'
 
const VerticalCenterModal = (props) => {
    const clientWidth = window.innerWidth;
    const [login, setLogin] = React.useState(false);
    const HandleSubmit = () => {
        props.setSigned(true);
        props.setModalShow(false);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='px-2' id="contained-modal-title-vcenter">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='px-3 my-2 d-flex justify-content-between align-items-end'>
                    <h4 className='w-50' style={{fontWeight:"700",fontSize:`${clientWidth >= 768 && clientWidth < 1024 ? "25px" : "30px"}`}} >{!login ? "Create Account" : "Sign In"}</h4>
                    {!login ? <p style={{fontWeight:"500",fontSize:`${clientWidth >= 768 && clientWidth < 1024 ? "13px" : "15px"}`}}>Already have an account? <span style={{color : "#2F6CE5",cursor:"pointer"}} onClick={() => setLogin(!login)}>Sign In</span></p> : 
                     <p className='w-50' style={{fontWeight:"500",fontSize:`${clientWidth >= 768 && clientWidth < 1024 ? "10px" : "15px"}`}}>Don’t have an account yet? <span style={{color : "#2F6CE5",cursor:"pointer"}} onClick={() => setLogin(!login)}>Create new for free!</span></p>}
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50 p-3 logsign-control'>
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
                        <Button onClick={HandleSubmit} className='py-2 mt-3 rounded-4' style={{width:"100%"}}>Create Account</Button>
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
                                <Button onClick={HandleSubmit} className='py-2 mt-3 rounded-4' style={{width:"100%"}}>Sign In</Button>
                            </InputGroup>
                        </>}   
                        <Stack gap={3} className='mt-4'>
                            <div className="st-item"><img src="/images/facebook.svg" alt="fb" />&nbsp; Sign {!login ? "up" : "in"} with Facebook</div>
                            <div className="st-item"><img src="/images/google.svg" alt="gg" />&nbsp; Sign {!login ? "up" : "in"} with Google</div>
                            {login && <div className='forg-pass'>Forgot Password?</div>}
                        </Stack>
                    </div>
                    <div className='w-50 p-3 d-flex flex-column justify-content-center'>
                        <img src="/images/signup.svg" alt="sdas" />
                        {!login && <p style={{fontSize:"11px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>}
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default VerticalCenterModal
