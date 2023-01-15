const Display = ({ users }) => {
    return (
        <div className='card mt-3'>
            <h4 className="card-body">Your Form Data</h4>
            {
                users.map((user, idx) => {
                    return (
                        <div key={idx}>
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                            <p>Confirm Password: {user.confirmPassword}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display