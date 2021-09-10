import React from 'react';
import '../D.css';
//import {Link} from 'react-router-dom'
function D1d1(){
    return (
     
       <div className="d1d1">
           <div className="dheader">ช่วงที่ 1 เวลา 09.00-10.30 น.</div>
           <br></br><br></br><br></br><br></br>
           
  <div className="d1d1-grid">
  
  <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      กรุณาเลือกเวลา
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">09.00-09.02</a>
      <a class="dropdown-item" href="#">09:02-09:04</a>
      <a class="dropdown-item" href="#">09:04-09:06</a>
      <a class="dropdown-item" href="#">09:06-09:08</a>
      <a class="dropdown-item" href="#">09:08-09:10</a>
      </div>
  </div>


<div>
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      กรุณาเลือกประเภท
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">กยศ.</a>
      <a class="dropdown-item" href="#">กรอ.</a>
    
    </div>
   </div></div>

   <div className="decision"> 
       <button type="button" class="btn btn-success">ยืนยัน</button>&emsp;&emsp;&emsp;&emsp;
   <button type="button" class="btn btn-danger">ยกเลิก</button></div>
  
  </div>
  
  
  



  
 
  
    
   
    
 
 
 

    );
}
export default D1d1;