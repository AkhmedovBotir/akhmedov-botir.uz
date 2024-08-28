import React from 'react'
import EastIcon from '@mui/icons-material/East';
import './style.css'
import { Link } from 'react-router-dom';
export default function Your() {
    return (
        <div className='your py-5 text-white'>
            <div className="container d-flex flex-column align-items-center justify-content-center py-3">
                <h1 className="your-title text-center bold-font">Do you have Project Idia? <br /> Let's discuss your project!</h1>
                <p className='text-center py-3 m-0 your-sub'>Feel free to contact me if you have a project</p>
                <Link to={"/contact"} className="your-button px-4 py-2">Contact Me<EastIcon /></Link>
            </div>
        </div>
    )
}
