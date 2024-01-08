import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function ViewDoc() {


  const [docDetails, setdocDetails] = useState({})


  //useParams - used to get path parameter from the url
  //   const paraId =useParams()
  //  console.log(paraId.id);

  //destructure
  const { id } = useParams()
  console.log(id);

  //api call to get details of particular doc using path paramter

  const base_url = 'https://doctor-backend-3zqe.onrender.com/doctors'
  const fetchDoc = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setdocDetails(result.data)
  }

  console.log(docDetails);

  useEffect(() => {
    fetchDoc()
  }, [])

  return (
    <div>
      <Row>
        <Col>
          <div>
            <div >

              <Card style={{ width: '61rem', marginLeft: '250px', color: 'black', padding: '40px' }}>
                <Card.Body>
                  <h3>{docDetails.hospital}</h3>
                  <Card.Subtitle >  phone:{docDetails.phone}</Card.Subtitle> <br />

                  <h4> {docDetails.name}({docDetails.specialty} )</h4>
                  <Card.Subtitle >  mail : {docDetails.email}</Card.Subtitle>
                  <Card.Subtitle >  address : {docDetails.address}</Card.Subtitle> <br />

                  <div  >
                    <Accordion >

                      <Accordion.Item style={{ color: "black" }}  >
                        <Accordion.Header>Availabilty</Accordion.Header>
                        <Accordion.Body>

                        <h6>  Available Days :   {
                            docDetails.available_days?.map(item => (
                              <p className='d-inline'>|{item}|</p>
                            )
                            )
                          }</h6>
                        
                        <h6>Available Hours : {docDetails.available_hours}</h6>  
                        </Accordion.Body>

                      </Accordion.Item>
                    </Accordion>

                    <br /> <br />
                    <Accordion>

                      <Accordion.Item style={{ color: "black" }} >
                        <Accordion.Header>Reviews</Accordion.Header>
                        <Accordion.Body>

                        {
                            docDetails.reviews?.map(item => (
                              <ListGroup style={{ textAlign: 'left', border: 'solid lightblue', margin: '20px' }} >
                                <ListGroup.Item style={{ color: "black" }}> <h5>Name : {item.patient_name}</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }}>{item.comments}</ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }}>{item.date}</ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }} >⭐ {item.rating}</ListGroup.Item>


                              </ListGroup>
                               )
                            )
                          }

                        </Accordion.Body>
                       </Accordion.Item>

                    </Accordion>
                  </div>
                  </Card.Body>
              </Card>

            </div>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default ViewDoc