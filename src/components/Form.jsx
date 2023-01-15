import { useState } from "react"

const Form = ({ users, setUsers }) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        setUsers([
            ...users,
            newUser,
        ]);
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form