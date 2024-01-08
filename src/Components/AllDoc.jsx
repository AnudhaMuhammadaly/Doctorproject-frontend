import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import DocCard from './DocCard'




function AllDoc() {



  const base_url='https://doctor-backend-3zqe.onrender.com/doctors'
  //state creation-to hold array of doc data
  const [allDocData,setAllDocData]=useState([])

//apifetching

const fetchData=async()=>{
  const result=await axios.get(base_url)
  console.log(result.data);//array(10)............give to state from this only we can give data from js to html
  setAllDocData(result.data)
}
console.log(allDocData);//array(10) so it now in frntend then give to card
useEffect(()=>{
  fetchData()
},[])



return (
    <div style={{backgroundColor:"lightblue"}}>
    <Row>
          {
            allDocData.map(item=>(
              <Col sm={12} md={6} lg={4} xl={3}>
                
                <DocCard doctors={item}/>

              </Col>

            ))
          }
    </Row>





    </div>
  )
}

export default AllDoc