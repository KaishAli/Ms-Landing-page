import { useEffect, useState } from 'react';
import '../../components/Login/Login.css'
function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [Authen, setAuthen] = useState(false);

    useEffect(() => {
    }, [Authen]);
    
    function handleSubmit(e) {
        e.preventDefault();
        if (password && email) {
            setAuthen(true);
            setIsAuthenticated(true);
        } else {
            setAuthen(false);
            setIsAuthenticated(false);
            alert("Please Enter Valid Credential");
        }
        console.log(Authen); // This will still log the previous state value
    }
    return (
        <>
        
            <div className="Logcontainer">
                <img
                    src="https://www.yourwebsite.com/path/to/your/logo.png"
                    alt="Your Logo"
                />
                <h1 className="textColor">Sign In</h1>
                <form id="signinForm" onSubmit={handleSubmit}>
                    <label className="textColor" htmlFor="email">
                        Email or phone number:
                    </label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" id="email" name="email" required="" />
                    <br />
                    <label className="textColor" htmlFor="password">
                        Password:
                    </label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" required="" />
                    <br />
                    <br />
                    <button className='sbm' type="submit">Sign In</button>
                </form>
            </div>

        </>
    )
}
export default Login;