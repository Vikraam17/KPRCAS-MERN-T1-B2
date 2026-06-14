import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list"><Link to="/" className="link">Parent</Link></li>
                <li className="list"><Link to="/useState" className="link">State</Link></li>
                <li className="list"><Link to="" className="link">Effect</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar