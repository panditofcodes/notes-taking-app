import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {

  const navigate = useNavigate()

  const [user,setUser] = useState({
    name:"",email:"",password:""
  })

  let name, value;

  const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({...user, [name]:value})
  }
  const saveData =async (e) =>{
     e.preventDefault()

     const {name, email, password} = user

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      name, email, password
      })
    })


    const data = await res.json()

    if (data.status === 422 || !data){
      window.alert("Invalid Registration")
      
    } else{
      window.alert("Registration Successfull")
      navigate("/SignIn")
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
                <h1 className="d-flex justify-content-center">Sign Up</h1>
                <form method="POST">
                  <label for="inputEmail4">Name</label>
                  <div class="form-row">
                    <div class="col">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        value={user.name}
                        onChange={handleInputs} 
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label for="inputEmail4">Email</label>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="inputEmail4"
                          value={user.email}
                          onChange={handleInputs}
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputPassword4">Password</label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="inputPassword4"
                          value={user.password}
                          onChange={handleInputs}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="d-grid gap-2 p-3">
                    <button class="btn btn-primary" type="submit" onClick={saveData}>
                      Sign Up
                    </button>
                    <p className="m-auto">
                      Already have an account ?{" "}
                      <a href="/" onClick={props.switch}>
                        {" "}
                        Sign In
                      </a>
                    </p>
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
