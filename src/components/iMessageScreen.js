import React, { Component } from 'react';

import topBar from '../assets/iMessage/top-bar.png';
import bottomBar from '../assets/iMessage/bottom-bar.png';
import screen01 from '../assets/iMessage/screen-01.png';
import screen02 from '../assets/iMessage/screen-02.png';
import screen03 from '../assets/iMessage/screen-03.png';
import screen04 from '../assets/iMessage/screen-04.png';
import screen05 from '../assets/iMessage/screen-05.png';
import dots from '../assets/iMessage/dots-iphone.gif';

export default class iMessageScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			screenNumber : 1,
			screen : screen01,
            allowNextMessage: true
		}

		this.changeScreen = this.changeScreen.bind(this);
	}

	changeScreen(){
		if (this.state.allowNextMessage) {
			switch(this.state.screenNumber) {
				case 1:
					this.setState({
						screen : screen02
					});
				break;

				case 2:
					this.setState({
						screen : screen03,
						allowNextMessage : true
					});
				break;

				case 3:
					this.setState({
						screen : screen04
					});
				break;

				case 4:
					this.setState({
						screen : screen05,
						allowNextMessage : true
					});
				break;

				case 5:
					this.props.history.push('/lockscreen_notification');
				break;

				default:
			}

			this.setState(prevState => {
				return {
					screenNumber: prevState.screenNumber + 1
				}
			});
		}
	}

    render() {
        return (
        	<div className="iMessage">
        		<img className="mobile-full-width fixed-top" src={topBar} alt="" />
				<img id="screenBody" className="mobile-full-width imessage-body" src={this.state.screen} alt="" onClick={this.changeScreen} />
				<img className="dots-iphone-first hidden-dots" src={dots} alt="" />
                <img className="dots-iphone-last hidden-dots" src={dots} alt="" />
		    	<img className="mobile-full-width fixed-bottom" src={bottomBar} alt="" />
		    </div>
        );
	}

}