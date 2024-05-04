import React from 'react'
import { Link} from "react-router-dom";

export default function Fotter() {
    return (
        <div  className ="bg-info-subtle " data-bs-theme="dark" style={{color: "white", border:"black" ,borderWidth:"3px" }}>
            
            <div className="container text-center " >
                <div className="row">
                    <div className="col" style={{ marginTop:"80px" , marginLeft:"0px", alignItems:"left"}}>
                       <img src='images/png1.png' alt='Mata Logo'  style={{height: "70%" , width: "80%"}} />
                    </div>
                    <div className="col"  style={{ marginTop:"50px" ,  textAlign:"left" }}>
                    <h4>Contact Us</h4>
                       <div style={{ fontSize:"12px"}}>
                        <p > <b> Office Address </b> : village- Mora , Distt- Saharanpur ,Uttar Pradesh , 247453</p>
                        <p><b> Email : </b> thakurragoranan16@gmail.com</p>
                        <p> <b> Help Desk Number : </b> 7895527236</p>
                        </div>
                    </div>
                    <div className="col"  style={{ marginTop:"50px",  textAlign:"left" }}>
                    <h4>Main Links</h4>
                    <div style={{ fontSize:"12px"}}>
                        <Link className="nav-link active" aria-current="page" to="/"><b>Home </b></Link>
                        <Link className="nav-link active" aria-current="page" to="/about"><b> About</b></Link>
                        </div>
                    </div>
                    <div className="col"  style={{ marginTop:"50px" , textAlign:"left"}}>
                        <h4>More Info</h4>
                        <div style={{ fontSize:"12px"}}>
                        <Link className="nav-link active" aria-current="page" to="/gallery"><b> Photo Gallery </b></Link>
                        <Link className="nav-link active" aria-current="page" to="/members"><b> Commetee Members </b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
