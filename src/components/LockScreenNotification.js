import React, { Component } from 'react';

import Home from '../assets/lockscreen-notification.png';
import HomeWithMsg from '../assets/lockscreen-notification-with-msg.png';
import IphoneNotification from '../assets/iphone-notification.png';
import ClosetInstallationImage from '../assets/closet-installation-image.png';

export default class LockScreenNotification extends Component {

	constructor(props){
		super(props);

		this.changeScreen = this.changeScreen.bind(this);
		this.showNotification = this.showNotification.bind(this);

		this.state = {
			display : 'none',
			background : Home
		}
	}

	showNotification(){
		document.getElementById('notification').classList.remove('hidden-popup');
		document.getElementById('notification').classList.add('popup');

		setTimeout(() => {
            this.setState({
				background : HomeWithMsg
			});
        }, 300);
		
	}

	changeScreen(){
		this.setState({
			display : 'block'
		});
		document.getElementsByClassName("lock-screen").item(0).className = "lock-screen lock-screen_active";
	}

    render() {
        return (
        	<div>
				<div className="lock-screen">
        			<img className="mobile-full-width" src={this.state.background} alt="" onClick={this.showNotification}/>
					<img id="notification" className="hidden-popup" src={IphoneNotification} alt="" onClick={this.changeScreen}/>
				</div>
				<img className="mobile-full-width closet-installation_modal" src={ClosetInstallationImage} alt="" style={{display: this.state.display}}/>
			</div>
        );
	}
	
}