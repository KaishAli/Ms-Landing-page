import { useEffect, useState } from 'react';
import '../../components/Login/Login.css'
import Header from '../Header/Header';
import Snackbar from '@mui/material/Snackbar';
function Login({ setIsAuthenticated }) {
    const [password, setPassword] = useState('')
    const [Authen, setAuthen] = useState(false);
    const [errMes, setErrMes] = useState("");
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(() => {
    }, [Authen]);

    function validation() {
        let isValid = true;
        // const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrMes('Invalid email address');
            setOpen(true)
            handleClose()
            isValid = false;
        }
        if (password.length < 6) {
            setErrMes('Password must be 6-digits');
            setOpen(true)
            handleClose()
            isValid = false;
        }
        if (!emailRegex.test(email) && password.length < 6) {
            setErrMes('Invalid email address and Password must be 6-digits');
            setOpen(true)
            handleClose()
            isValid = false;
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const valid = validation()
        if (valid) {
            if (password && email) {
                setAuthen(true);
                setIsAuthenticated(true);
                setEmail(email);
            } else {
                setAuthen(false);
                setIsAuthenticated(false);
            }
        }
    };
    console.log(email);


    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    // Save email to local storage whenever it changes

    useEffect(() => {
        localStorage.setItem('userEmail', email);
    }, [email]);

    function handleClose() {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    return (
        <>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={errMes}
            />
            <div className="Logcontainer">
                <span>😎</span>
                <h1 className="textColor">Sign In</h1>
                <form id="signinForm" onSubmit={handleSubmit}>
                    <label className="textColor" htmlFor="email">
                        Email Address
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