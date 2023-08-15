import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
 
export default function SignIn(props) {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [serverMsg, setServerMsg] = useState('')

  const userLogin = async (e) => {

    e.preventDefault()

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    await res.json()
    
    // console.log(res.status)
    
    switch (res.status) {
      case 400:
        setServerMsg('Invalid Credential!')
        break;
      case 404:
        setServerMsg("User Not Found.")
        break;
      case 401:
        setServerMsg("Unauthorized Access!" )
        break;
      case 200:
        navigate('/Landingpage')
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="container-field">
        <h1>Welcome to Notes Taking App</h1>
        <div className="col-md-5 m-auto">
          <div className="mt-3">
            <div className="card text-left">
              <div className="card-body">
                <h1 className="d-flex justify-content-center">Sign In</h1>
                <form method="POST">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your registered email"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value) }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value) }
                    />
                  </div>
                  <div className="d-grid gap-2 p-3">
                    <button className="btn btn-primary" onClick={userLogin}  type="submit">
                      Sign In
                    </button>
                    <p className="m-auto">
                      Don't have an account ?{" "}
                      <a href="/" onClick={props.switch}>
                        {" "}
                        Sign Up
                      </a>
                    </p>
                    <p style={{color: 'Red',textAlign: 'center'}}>{serverMsg}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}