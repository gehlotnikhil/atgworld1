import React from 'react'

function RightInfo() {
    const m1 = window.matchMedia('(max-width: 600px)').matches;
    const s1 = {
        // display:m1?"none":flex
    }
  return (
    <>
    <div className='d-flex align-items-center rightinfo' id='rightm' style={{ s1,flexDirection: "column", width: "30%"}}>
                    <div style={{ height: "29px", marginTop: "58px", borderBottom: "1px", borderBottomColor: "gray", borderBottomStyle: "solid" }}>
                        <img src="../image/location.png" height="25px" alt="" />
                        <input type="text" style={{ border: "none", color: "black" }} placeholder='Enter your Location' />
                    </div>
                    <div style={{ width: "198px", marginTop: "15px" }}>
                        <p style={{ fontSize: "12px" }}><img height="20px" src="../image/stop.png" />Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                    <div style={{ width: "198px", marginTop: "15px", display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "13px",display:"inline" }}><img style={{ marginRight: "6px", marginTop: "0.5rem", marginBottom: "15px" }} height="20px" src="../image/thumbsup.png" alt="" /><p> RECOMMENDED GROUPS</p></p>
                        <div>
                            <p className='bd-highlight ' style={{ height: "20px", display: "flex", flexDirection: "row" }}>
                                <p className='p-2 bd-highlight'><img src="../image/leisure.png" height="25px" alt="" /> Leisure</p>
                                <p className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</p>
                            </p>
                            <p className='bd-highlight ' style={{ height: "20px", display: "flex", flexDirection: "row" }}>
                                <p className='p-2 bd-highlight'><img src="../image/activism.png" height="25px" alt="" /> Activism</p>
                                <p className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</p>
                            </p>
                            <p className='bd-highlight ' style={{ height: "20px", display: "flex", flexDirection: "row" }}>
                                <p className='p-2 bd-highlight'><img src="../image/mba.png" height="25px" alt="" /> MBA</p>
                                <p className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</p>
                            </p>
                            <p className='bd-highlight ' style={{ height: "20px", display: "flex", flexDirection: "row" }}>
                                <p className='p-2 bd-highlight'><img src="../image/philosophy.png" height="25px" alt="" /> Philosophy</p>
                                <p className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</p>
                            </p>
                        </div>
                    </div>

                </div>
    </>
  )
}

export default RightInfo