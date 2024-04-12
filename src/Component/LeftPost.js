import React from 'react'

function LeftPost() {
  return (
    <>
    <div className='leftPost' style={{marginTop:"1rem", width: "70%" }}>
                    <div class="card left-1" style={{ width: "18rem", width: "70%", margin: "0 15%" }} >
                        <img src="../image/forest.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0" }}><img src="../image/article2.png" style={{ height: "20px", marginBottom: "3px" }} /> Article</p>
                            <p class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                            <p class="card-text">I'vs worked in UX for the better part of a decade. From now on, I plan to rel..</p>
                            <p class="card-text d-flex bd-highlight  ">
                                <div className='me-auto p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <img src="../image/person1_1.png" style={{ height: "50px" }} alt="" srcset="" />
                                    <p style={{ margin: "0", marginTop: "12px", marginLeft: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>Sarthak Kamra</p>
                                </div>
                                <div className='p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <p style={{ marginBottom: "0", marginTop: "12px" }}><img src='../image/eye.png' style={{ height: "25px" }} />1.4k views</p>
                                    <img src="../image/share.png" style={{ height: "25px", marginBottom: "0", marginTop: "12px", marginLeft: "40px" }} alt="" />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div class="card left-1" style={{ width: "18rem", width: "70%", margin: "0 15%", marginTop:"1rem" }} >
                        <img src="../image/rust.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0" }}><img src="../image/education_logo.png" style={{ height: "20px", marginBottom: "3px" }} /> Education</p>
                            <p class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>Tax Benefits for Investment under Nation Pension Scheme launched by Government</p>
                            <p class="card-text">I'vs worked in UX for the better part of a decade. From now on, I plan to rel..</p>
                            <p class="card-text d-flex bd-highlight  ">
                                <div className='me-auto p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <img src="../image/person2.png" style={{ height: "50px" }} alt="" srcset="" />
                                    <p style={{ margin: "0", marginTop: "12px", marginLeft: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>Sarah West</p>
                                </div>
                                <div className='p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <p style={{ marginBottom: "0", marginTop: "12px" }}><img src='../image/eye.png' style={{ height: "25px" }} />1.4k views</p>
                                    <img src="../image/share.png" style={{ height: "25px", marginBottom: "0", marginTop: "12px", marginLeft: "40px" }} alt="" />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div class="card left-1" style={{ width: "18rem", width: "70%", margin: "0 15%" , marginTop:"1rem"}} >
                        <img src="../image/car.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0" }}><img src="../image/meetup_logo.png" style={{ height: "20px", marginBottom: "3px" }} /> Meetup</p>
                            <p class="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>Finance & Investment Elite Social Mixer @Lujiazui</p>
                            <div className='d-flex mb-3'>
                                <span className='me-auto p-2'><span><img style={{height:"25px"}} src="../image/calendar.png" alt="" /></span> Fri, 12 Oct, 2018</span>
                                <span className=' p-2'><span><img style={{height:"25px"}} src="../image/location2.png" alt="" /></span> Ahmedabad, India</span>
                            </div>
                            <p style={{height:"3rem",width:"100%",border:"1px",borderColor:"black",borderStyle:"solid",borderRadius:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",color:"#ff4a00",fontWeight:"bold"}}>
                                Visit Website
                            </p>
                           
                        </div>
                    </div>
                </div>
    </>
)
}

export default LeftPost