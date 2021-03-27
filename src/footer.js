import React from 'react'

const footer = () => {
	return (
		<div className="container"> 
		    <div className="row">
		        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
		          <p><u><a href="">University Online System</a></u> is an online platform for the online transaction of the University</p>
		          <p className="h6">© All right Reversed.<a className="text-green ml-2" href="{{ url('/') }}" target="_blank">Universtiy</a></p>
		        </div>
		    </div>
		</div>
	)
}

export default footer