import React from 'react'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="{{ url('/') }}">Student Management</a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hidden-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		  </div>
		    <div className="collapse navbar-collapse" id="hidden-nav">
		      <ul className="nav navbar-nav">
		        <li><a className="nav-item nav-link" href="">Home  </a></li>
		          <li><a className="nav-item nav-link" href="">Create </a></li>
		          <li><div className="dropdown nav-item">
		            <span></span>
		            <div className="dropdown-content">
		            <a href="" className="button">Logout</a>
		            </div>
		          </div></li>
		      </ul>
		    </div>
		</nav>	
  )
}

export default Navbar