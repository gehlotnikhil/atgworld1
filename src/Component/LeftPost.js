import React from 'react'

function LeftPost() {
  return (
    <>
    <div className='leftPost' style={{marginTop:"1rem", width: "70%" }}>
                    <div className="card left-1" style={{ width: "70%", margin: "0 15%" }} >
                        <img  alt="..." src="../image/forest.png" className="card-img-top"  />
                        <div className="card-body">
                            <div style={{ margin: "0" }}><img  alt="..." src="../image/article2.png" style={{ height: "20px", marginBottom: "3px" }} /> Article</div>
                            <div className="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>What if famous brands had regular fonts? Meet RegulaBrands!</div>
                            <div className="card-text">I'vs worked in UX for the better part of a decade. From now on, I plan to rel..</div>
                            <div className="card-text d-flex bd-highlight  ">
                                <div className='me-auto p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <img  alt="..." src="../image/person1_1.png" style={{ height: "50px" }}  srcSet="" />
                                    <div style={{ margin: "0", marginTop: "12px", marginLeft: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>Sarthak Kamra</div>
                                </div>
                                <div className='p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ marginBottom: "0", marginTop: "12px" }}><img  alt="..." src='../image/eye.png' style={{ height: "25px" }} />1.4k views</div>
                                    <img  alt="..." src="../image/share.png" style={{ height: "25px", marginBottom: "0", marginTop: "12px", marginLeft: "40px" }}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card left-1" style={{  width: "70%", margin: "0 15%", marginTop:"1rem" }} >
                        <img  alt="..." src="../image/rust.png" className="card-img-top"  />
                        <div className="card-body">
                            <div style={{ margin: "0" }}><img  alt="..." src="../image/education_logo.png" style={{ height: "20px", marginBottom: "3px" }} /> Education</div>
                            <div className="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>Tax Benefits for Investment under Nation Pension Scheme launched by Government</div>
                            <div className="card-text">I'vs worked in UX for the better part of a decade. From now on, I plan to rel..</div>
                            <div className="card-text d-flex bd-highlight  ">
                                <div className='me-auto p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <img  alt="..." src="../image/person2.png" style={{ height: "50px" }}  srcSet="" />
                                    <div style={{ margin: "0", marginTop: "12px", marginLeft: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>Sarah West</div>
                                </div>
                                <div className='p-2 bd-highlight' style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ marginBottom: "0", marginTop: "12px" }}><img  alt="..." src='../image/eye.png' style={{ height: "25px" }} />1.4k views</div>
                                    <img  alt="..." src="../image/share.png" style={{ height: "25px", marginBottom: "0", marginTop: "12px", marginLeft: "40px" }}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card left-1" style={{  width: "70%", margin: "0 15%" , marginTop:"1rem"}} >
                        <img  alt="..." src="../image/car.png" className="card-img-top"  />
                        <div className="card-body">
                            <div style={{ margin: "0" }}><img  alt="..." src="../image/meetup_logo.png" style={{ height: "20px", marginBottom: "3px" }} /> Meetup</div>
                            <div className="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold",display:"block" }}>Finance & Investment Elite Social Mixer @Lujiazui</div>
                            <div className='d-flex mb-3'>
                                <span className='me-auto p-2'><span><img  alt="..." style={{height:"25px"}} src="../image/calendar.png"  /></span> Fri, 12 Oct, 2018</span>
                                <span className=' p-2'><span><img  alt="..." style={{height:"25px"}} src="../image/location2.png"  /></span> Ahmedabad, India</span>
                            </div>
                            <div style={{height:"3rem",width:"100%",border:"1px",borderColor:"black",borderStyle:"solid",borderRadius:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",color:"#ff4a00",fontWeight:"bold"}}>
                                Visit Website
                            </div>
                           
                        </div>
                    </div>
                </div>
    </>
)
}

export default LeftPost