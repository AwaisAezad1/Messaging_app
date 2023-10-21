import { useState } from 'react'
import {auth} from '../config/Firebase'
import styles from './Auth.module.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Auth(){

        const[email,setemail] = useState("")
        const[password,setpassword] = useState("")
        const navigate= useNavigate()


        const signUp = ()=>{
                createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    console.log(result);
                    alert("Signup successful!")
                    setTimeout(() => {
                        navigate('/Signin')
                    }, 500); 
                })
                .catch((error) => {
                  console.log(error.code);
                  console.log(error.message);
                  alert(error.message)
                });
                
        }


    return(
        <div className={styles.Authmain}>
           <div className={styles.box}>
                
                <input type="text" placeholder='Firstname' />
                <input type="text" placeholder='Lastname' />
                <input type="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)} />
                <input type= "password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)} />
                <button onClick={signUp}>Sign Up</button>
                <span>Already have an account? <NavLink to={'Signin'} className={styles.btn}>SignIn</NavLink></span>
            </div>
        </div>
    )
} export default Auth;