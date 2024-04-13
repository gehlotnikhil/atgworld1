import React from 'react'

function RightInfo() {

  return (
    <>
    <div className='d-flex align-items-center rightinfo' id='rightm' style={{ flexDirection: "column", width: "30%"}}>
                    <div style={{ height: "29px", marginTop: "58px", borderBottom: "1px", borderBottomColor: "gray", borderBottomStyle: "solid" }}>
                        <img  alt="..." src="../images/location.png" height="25px"  />
                        <input type="text" style={{ border: "none", color: "black" }} placeholder='Enter your Location' />
                    </div>
                    <div style={{ width: "198px", marginTop: "15px" }}>
                        <div style={{ fontSize: "12px" }}><img  alt="..." height="20px" src="../images/stop.png" />Your location will help us serve better and extend a personalised experience.</div>
                    </div>
                    <div style={{ width: "198px", marginTop: "15px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: "13px",display:"inline" }}><img  alt="..." style={{ marginRight: "6px", marginTop: "0.5rem", marginBottom: "15px" }} height="20px" src="../images/thumbsup.png"  /><div> RECOMMENDED GROUPS</div></div>
                        <div>
                            <div className='bd-highlight ' style={{marginTop:"0.5rem", height: "20px", display: "flex", flexDirection: "row" }}>
                                <div className='p-2 bd-highlight'><img  alt="..." src="../images/leisure.png" height="25px"  /> Leisure</div>
                                <div className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</div>
                            </div>
                            <div className='bd-highlight ' style={{marginTop:"0.5rem", height: "20px", display: "flex", flexDirection: "row" }}>
                                <div className='p-2 bd-highlight'><img  alt="..." src="../images/activism.png" height="25px"  /> Activism</div>
                                <div className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</div>
                            </div>
                            <div className='bd-highlight ' style={{marginTop:"0.5rem", height: "20px", display: "flex", flexDirection: "row" }}>
                                <div className='p-2 bd-highlight'><img  alt="..." src="../images/mba.png" height="25px"  /> MBA</div>
                                <div className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</div>
                            </div>
                            <div className='bd-highlight ' style={{marginTop:"0.5rem", height: "20px", display: "flex", flexDirection: "row" }}>
                                <div className='p-2 bd-highlight'><img  alt="..." src="../images/philosophy.png" height="25px"  /> Philosophy</div>
                                <div className='ms-auto bd-highlight' style={{ marginTop: "10px", padding: "5px 10px 5px 10px", height: "23px", backgroundColor: "gray", borderRadius: "5px", fontSize: "12px" }}>Follow</div>
                            </div>
                        </div>
                    </div>

                </div>
    </>
  )
}

export default RightInfo