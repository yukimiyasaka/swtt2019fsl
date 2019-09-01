import React, { Component } from 'react';

import Home from '../assets/hidden-feature/home.png';
import notificationEarlier from '../assets/hidden-feature/notification-earlier.png';
import notificationNow from '../assets/hidden-feature/notification-now.png';
import Lockscreen from '../assets/hidden-feature/lockscreen.png';

export default class Hidden extends Component {

	constructor(props){
		super(props);

		this.state = {
			display : 'block',
			display2 : 'none'
		}

		this.showNotification = this.showNotification.bind(this);

	}

	

	showNotification(){
		this.setState({
			display2 : 'block'
		});
		document.getElementById('hidden-notification-now').classList.remove('hidden-popup');
		document.getElementById('hidden-notification-now').classList.add('iphone-popup');
		document.getElementById('hidden-notification-earlier').classList.add('iphone-popup-earlier');
	}

    render() {
        return (
        	<div>
				<div id="hidden-lock-screen" style={{display: this.state.display}} onClick={this.showNotification}>
        			<img className="mobile-full-width" src={Lockscreen} alt="" />
					<img id="hidden-notification-earlier" src={notificationEarlier} alt=""/>
				</div>
				
				<img id="hidden-notification-now" className="hidden-popup" src={notificationNow} alt="" style={{display: this.state.display2}}/>
			</div>
        );
	}
	
}