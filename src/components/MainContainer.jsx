import React, {  useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import '../css/maincontainer.css'
import post_json from '../json/post.json'
import { Dropdown } from 'react-bootstrap';



const MainContainer = () => {
  const [active, setActive] = useState(0);

  const data = post_json;
 
  const followPeo = [
    {
        name: "Leisure",
        img: "/images/follow-people/follow-1.svg",
    },
    {
        name: "Activism",
        img: "/images/follow-people/follow-2.svg",   
    },
    {
        name: "MBA",
        img: "/images/follow-people/follow-3.svg",
    },
    {
        name: "Philosophy",
        img : "/images/follow-people/follow-4.svg",
    }
  ]



  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary nav-sub">
        <div className='main-handler'>
            <ul className='flat-list'>
                <li className={`${active === 0 && 'active'}`} onClick={() => setActive(0)}>All Posts(32)</li>
                <li className={`${active === 1 && 'active'}`} onClick={() => setActive(1)}>Article</li>
                <li className={`${active === 2 && 'active'}`} onClick={() => setActive(2)}>Event</li>
                <li className={`${active === 3 && 'active'}`} onClick={() => setActive(3)}>Education</li>
                <li className={`${active === 4 && 'active'}`} onClick={() => setActive(4)}>Job</li>
            </ul>
            <div className='below-flat-list'>
                <button className='mx-4' id='cust-btn'>Write a Post &nbsp; <span style={{fontSize:"13px"}}>&#9660;</span></button>
                <Button className='text-center' variant="primary"><img className='mb-1' width={23} src="/images/addper.svg" alt="person" /> Join Group</Button>
            </div>
        </div>
        </Navbar>
        <Row className='mt-1 d-flex justify-content-between'>
            <Col sm={8}>
                <Container className='d-flex flex-column align-items-start p-0'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='post mb-3 w-100'>
                                {item.post_image && <img width="100%" src={item.post_image} alt="post" />}
                                <h5 className='my-3 px-3'>{item.label}</h5>
                                <Row className='px-3 d-flex justify-content-between'>
                                    <Col sm={9}>
                                        <h4>{item.head_text}</h4>
                                    </Col>
                                    <Col sm={2} style={{textAlign:"end"}}>
                                        <Dropdown className="mx-2">
                                            <Dropdown.Toggle className='p-0 m-0' style={{backgroundColor:"transparent",border:"none",width:"30px"}}>
                                                <img id={`drop-img-${index}`} src="/images/three_dots.svg" alt="three dots" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                <Dropdown.Item href="#">Report</Dropdown.Item>
                                                <Dropdown.Item href="#">Option 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                {(item.date || item.location || item.company) && <div className='px-3 d-flex mb-3'>
                                    {item.date && 
                                        <div className='d-flex' style={{fontSize:"15px",fontWeight:"500",marginRight:"80px"}}>
                                            <img src="/images/date_time.svg" alt="dateTime" />&nbsp; {item.date} 
                                        </div>
                                    }
                                    {item.company && 
                                        <div className='d-flex' style={{fontSize:"15px",fontWeight:"500",marginRight:"50px"}}>
                                            <img src="/images/company.svg" alt="dateTime" />&nbsp; {item.company} 
                                        </div>
                                    }
                                    {item.location && 
                                        <div className='d-flex' style={{fontSize:"15px",fontWeight:"500",marginRight:"50px"}}>
                                            <img src="/images/location.svg" alt="dateTime" />&nbsp; {item.location} 
                                        </div>
                                    }
                                </div>}
                                {item.site && <div className='mx-3 post-site'>
                                    <p className='h-100 m-0 d-flex align-items-center' style={{fontSize:"13px",color : `${item.company ? "green" : "red"}`}}>{item.site}</p>
                                </div>}

                                <p className='px-3 post-text'>{item.text}</p>
                                <div className='px-3 my-4 d-flex justify-content-between'>
                                    <div className='w-50 d-flex align-items-center'>
                                        <img src={item.person_image} alt="person" />
                                        <p style={{fontWeight:"500"}} className='m-0 mx-4'>{item.name}</p>
                                    </div>
                                    <div className='w-50 d-flex justify-content-end align-items-center'>
                                        <div style={{fontSize:"14px", fontWeight:"500",color:"#525252",marginRight:"3rem"}}>
                                            <img src="/images/views.svg" alt="share" /> &nbsp; {item.views}
                                        </div>
                                        <img src="/images/share.svg" alt="share" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Container>
            </Col>
            <Col sm={3}>
                <InputGroup className='d-flex mt-5'>
                    <InputGroup.Text style={{border:"none",boxShadow:"none",borderRadius:"0",borderBottom:"1px solid #B8B8B8",background:"white"}}><img src="/images/location.svg" alt="" /></InputGroup.Text>
                    <Form.Control
                        placeholder="Enter your location"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{border:"none",borderBottom:"1px solid #B8B8B8",borderRadius:"0",boxShadow:"none"}}
                    />
                    <InputGroup.Text style={{border:"none",boxShadow:"none",borderRadius:"0",borderBottom:"1px solid #B8B8B8",background:"white"}}><img src="/images/close.svg" alt="" /></InputGroup.Text>
                </InputGroup>
                <div className='mt-5 d-flex align-items-start'>
                    <img className='mx-2' width={25} src="/images/exla.svg" alt="exclamation" />
                    <p style={{fontSize:"12px"}}>Your location will help us serve better and extend a personalised experience.</p>
                </div>
                <div className='mt-4'>
                    <div className='d-flex'>
                        <img className='mx-2' src="/images/thumb.svg" alt="thumb" />
                        <h5 className='m-0'>RECOMMANDED GROUPS</h5>
                    </div>
                </div>
                <div className='mt-4'>
                    {followPeo.map((item, index) => {
                        return (
                            <div key={index} className='mx-2 mb-3 d-flex align-items-center justify-content-between'>
                                <div className='m-0 p-0 d-flex align-items-center'>
                                    <img src={item.img} width={50} alt="follow" />
                                    <p style={{fontSize:"14px",fontWeight:"500"}} className='m-0 mx-3'>{item.name}</p>
                                </div>
                                <button className='button-folow'>Follow</button>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-5 mx-2 d-flex align-items-center justify-content-end'>
                    <a href="/" style={{textDecoration:"none"}}>see more...</a>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default MainContainer
