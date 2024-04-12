import React from 'react'
import LeftPost from './LeftPost'
import RightInfo from './RightInfo'

function Main() {
    return (
        <>
        <img  alt="..." src="../image/cse.png" style={{width:"100%",height:"30rem"}}  />
            <div style={{ display: "flex", flexDirection: "row", width: "100%" ,marginTop:"1rem"}} className=' option'>
                <div style={{ flexWrap: "nowrap", width: "70%" }} className=' d-flex align-items-center'>
                    <p style={{ color: "black", textDecoration: "none", fontWeight: "bold", marginLeft: "18%" }} >All Post</ p>
                    <p style={{ color: "black", textDecoration: "none", fontWeight: "bold", marginLeft: "3%" }} >Article</ p>
                    <p style={{ color: "black", textDecoration: "none", fontWeight: "bold", marginLeft: "3%" }} >Event</ p>
                    <p style={{ color: "black", textDecoration: "none", fontWeight: "bold", marginLeft: "3%" }} >Education</ p>
                    <p style={{ color: "black", textDecoration: "none", fontWeight: "bold", marginLeft: "3%" }} >Job</ p>
                </div>
                <div className='' style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", width: "30%" }}>
                    <button style={{ marginLeft: "3%", border: "1px", borderColor: "black", borderStyle: "solid", padding: "0.5rem 1rem 0.5rem 1rem",borderRadius:"0.5rem", fontWeight: "bold" }}  >Write a Post</button>
                    <button style={{ marginLeft: "3%", border: "1px", borderColor: "black", borderStyle: "solid", padding: "0.5rem 1rem 0.5rem 1rem",borderRadius:"0.5rem", backgroundColor: "blue", color: "white" }} ><img  alt="..." src="../image/contact2.png" height={"19px"}  />Join Group</button>
                </div>

            </div>
            <div style={{width: "100%",display :"flex" }} className='op-2'>
                <div className='p-2'>Post(368)</div>
                <select name="" id="" className='ms-auto p-1' style={{height:"2.5rem"}}>
                    <option value="" defaultChecked>Filter: All</option>
                    <option value="">Article</option>
                    <option value="">Education</option>
                    <option value="">Car</option>
                </select>
            </div>
            <hr style={{margin:"0.4rem"}}/>

            <div className="d-flex" style={{flexDirection:"row"}}>
                <LeftPost/>
                <RightInfo/>
            </div>
        </>
    )
}

export default Main