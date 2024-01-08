import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import './DocCard.css'
import { Link } from 'react-router-dom';



function DocCard({doctors}) {

    console.log(doctors);

  return (
    <div>
     
      <MDBCard style={{ borderRadius: '15px' }} class='card text-dark '>
      <MDBCardBody >
        <MDBCardTitle>{doctors.hospital}</MDBCardTitle>
        <MDBCardText>
          {doctors.name}
        </MDBCardText>
        <MDBCardText>
        Speciality :  {doctors.specialty}
        </MDBCardText>
        <MDBCardText>
         ⭐ {doctors.rating}
        </MDBCardText>
        <Link to={`view/${doctors.id}`} style={{textDecoration:"none"}}>      
        <MDBBtn>More Details</MDBBtn>
         </Link>
      </MDBCardBody>
    </MDBCard>
     
    </div>
  )
}

export default DocCard