import React from 'react'
import Link from 'next/link'

const HeaderComponent = () => {
  return (
    <nav className="navbar my-navbar navbar-expand-lg navbar-light mb-3 " style={{backgroundColor:'#3888A3'}} >
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src='https://listica.com/assets/img/logolp.png' alt='logo' width='auto' height='50px' />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style={{textAlign:'center'}}>
                    <ul className="navbar-nav  my-navbar-nav me-auto mb-3 mb-lg-0 " >  
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Carrousel</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link" >Servicios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" >Equipo</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" >Contáctenos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default HeaderComponent