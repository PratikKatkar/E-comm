import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const [form, setForm] = useState({ email: "", password: "" })

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });

    }
    const handleClick = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                console.log(userCredential);
                // Signed Un 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }


    return (
        <>
        <h1>This is Register page</h1>
        <form className="form-horizontal container border" style={{border:"5px solid black "}}>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label >
                <div className="col-sm-10">
                    <input type="email" className="form-control" name="email" value={form.email} id="inputEmail3" placeholder="email" onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" name="password" value={form.password} id="inputPassword3" placeholder="Password" onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">

                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" onClick={handleClick} className="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
        </>


    )
}

export default SignUp;
