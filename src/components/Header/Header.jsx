import React from 'react'
import img from "../../img/my.png"
import img2 from "../../img/img2.png"
import "./style.css"
export default function Header() {
    return (
        <div className='content '>
            <br />
            <br />
            <div className="container row align-items-center">
                <div className="left col-6">
                    <div className="left-content">
                        <h1>Hello, I'm</h1>
                        <h1>Akhmedov Botir</h1>
                        <div className='content-sub'>
                            I have been working in frontend web development for a long time. I learned a lot of knowledge and tried it in practice. Now I plan to grow further. New knowledge certainly interests me. If you want to know more about me, check out the site.
                        </div>
                        <br />
                        <a href="/about" className="nav-contact px-4">About Me</a>
                    </div>
                </div>
                <div className="right col-6">
                    <div className="content-img">
                        <img src={img2} />
                    </div>
                </div>
            </div>
            <br />
            <div className='header-me container' id='about'>
                <div className="me-content p-5">
                    <div className="me-left">
                        <img src={img2} alt="" />
                        <div className="me-link">
                            <div className="me-link-a p-2">
                                <a href="https://www.linkedin.com/in/ahmedov-botir-229434240">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/AkhmedovBotir">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a href="https://t.me/akhmedovbotirofficial">
                                    <i class="fa-brands fa-telegram"></i>
                                </a>
                                <a href="https://www.instagram.com/akhmedovbotirofficial">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="me-right">
                        <div className="left-content">
                            <h1 className='bold-font'>I am a frontend developer</h1>
                            <p className="content-sub">
                                I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                            </p>
                            <p className="content-sub">
                                I design and develop services for customers specializing creating stylish, modern websites, web services.
                            </p>
                        </div>
                        <div className="me-btn">
                            <a href="/about" className='me-btn-1 p-2 px-3'>About Me</a>
                            <a href="/" className='me-btn-2 p-2 px-3'><i class="fa-solid fa-download"></i> Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
