import React, { useState ,useRef} from 'react'

function Navbar() {
    const ref = useRef(null)

    const [Sign, setSign] = useState("inline-block")
    function toggleform() {
        if (Sign === "none") {
            setSign("inline-block")
        } else {
            setSign("none")
        }
    }
    const [ChangeName, setChangeName] = useState("Join Group")
    function changeName() {
        if(ChangeName === "Join Group"){
            setChangeName("Leave Group")
        }else
        setChangeName("Join Group")
    }
    const [credential, setCredential] = useState({ first: "", last: "" })
    const onChanges = (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value })
      console.log(credential)
    }
    function submit(element){
        element.preventDefault()
        ref.current.click();
    }
    return (
        <>
            <div>
                <button className='join' onClick={() => changeName()}>{ChangeName}</button>
            </div>
            <div className="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content main-head ">
                        <div className="modal-header d-flex up-head" style={{ color: "green", background: "#ebffeb" }}>
                            <div className='modal-title' id="exampleModalToggleLabel">Let's learn, share & inspire each pther with our passion for computer engineering. Sign up now</div>
                            <button type="button" className="btn-close ms-auto p-2 " style={{ margin: "0" }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  d-flex mb-3">
                            <h1 className="modal-title  me-auto p-2 " id="exampleModalToggleLabel" ref={ref} style={{ fontSize: "1.5rem", fontWeight: "bold" }}> {Sign === "none" ? "Create Account" : "Sign In"}</h1>
                            <div onClick={() => toggleform()} className='modal-title p-2' style={{ color: "blue" }}> {Sign === "none" ? `Already have an account? Sign In` : "Create new for free"}</div>
                        </div>
                        <div style={{ height: "30rem", display: "flex", flexDirection: "row" }}>
                            {/* Form */}
                            <div className='m-form' style={{ padding: " 0rem 2rem", width: "50%", height: "100%", display: "inline-block" }}>
                                <form >
                                    <input name = "first" onChange={onChanges} className={`d-${!(Sign === "none") ? "none" : "inline-block"}`} style={{ borderColor: "#e0e0e0", width: "50%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} type="text" placeholder='First Name' />
                                    <input name = "second" onChange={onChanges} className={`d-${!(Sign === "none") ? "none" : "inline-block"}`} style={{ borderColor: "#e0e0e0", width: "50%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} type="text" placeholder='Last Name' />
                                    <input style={{ borderColor: "#e0e0e0", width: "100%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} type="email" placeholder='Email' />
                                    <input style={{ borderColor: "#e0e0e0", width: "100%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} type="password" placeholder='Password' />
                                    <input className={`d-${!(Sign === "none") ? "none" : "inline-block"}`} style={{ borderColor: "#e0e0e0", width: "100%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} type="password" placeholder='Confirm Password' />
                                    <button onClick={submit} style={{ padding: "0.5rem 0.7rem", backgroundColor: "#4040ff", color: "white", fontWeight: "bold", margin: "1rem 0rem", borderRadius: "5rem", border: "none", width: "100%" }} type="submit"> Create Account</button>
                                    <button style={{ borderColor: "#e0e0e0", width: "100%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} ><img  alt="..." src="../image/facebook.png" style={{ height: "1.3rem" }}  /> Sign up With Facebook</button>
                                    <button style={{ borderColor: "#e0e0e0", width: "100%", padding: "0.5rem 0.7rem", backgroundColor: "#c5c5c51c" }} ><img  alt="..." src="../image/google.png" style={{ height: "1.3rem" }}  /> Sign up with Google</button>
                                </form>
                            </div>
                            {/* Image */}
                            <div className='div-image' style={{ width: "50%", height: "100%", display: "inline-block" }}>
                                <img  alt="..." className='dive-image-1' src="../image/formright.png" height="85%" width="100%"  />
                                <div className='normal-text' style={{ height: "15%" }}>By signing up, you agree to our Terms & conditions. Privacy policy</div>
                            </div>

                        </div>

                    </div>
                </div >
            </div >



            <div className="d-flex justify-content-around nav-1" style={{ height: "50px", width: "100%" }}>

                {/* image */}
                <div className="d-flex align-content-center flex-wrap">
                    <img  alt="..." src="../image/atg_logo2.png" height={"35px"} />
                </div>
                <div className="d-flex align-content-center flex-wrap">

                    <form className="example" style={{
                        borderRadius: "16px",
                        padding: "3px",
                        background: "#d6d6d6",
                        border: "1px ",
                        borderStyle: "solid",
                        borderColor: "black",
                    }}>
                        <button style={{ border: "none", background: "#d6d6d6" }} type="submit"><i className="fa fa-search"></i></button>
                        <input style={{ width: "17pc", border: "none", background: "#d6d6d6" }} type="text" placeholder="Search for your favorite group in ATG" name="search" />
                    </form>
                </div>
                <div className="d-flex align-content-center flex-wrap">
                    <div data-bs-target="#exampleModalToggle" data-bs-toggle="modal" type="button" style={{ margin: "0" }}>{(credential.first===""?false:credential.first+" "+credential.last) ||"Create account.It's free"}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar