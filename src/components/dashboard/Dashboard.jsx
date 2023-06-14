import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className='dashboard'>
            <div>
                <h1>Kerakli bo’limni tanlang</h1>
                <ul className="links">
                    <li>
                        <Link to="/doctors">
                            <img src="./assets/imgs/doccar.png" alt="" />
                            <h3>Tez Yordam</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/firemans">
                            <img src="./assets/imgs/firecar.png" alt="" />
                            <h3>O’t o’chirish</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/polices">
                            <img src="./assets/imgs/polcar.png" alt="" />
                            <h3>Politsiya</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/transports">
                            <img src="./assets/imgs/transcar.png" alt="" />
                           <h3> Transport xizmati</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard