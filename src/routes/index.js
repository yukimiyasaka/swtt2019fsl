import React from 'react';
import { Route, Switch } from 'react-router-dom';

import iMessageScreen from '../components/iMessageScreen';
import LockScreenNotification from '../components/LockScreenNotification';
import Hidden from '../components/Hidden';

export default () => (
	<Switch>
		<Route exact path="/" component={iMessageScreen}/>
		<Route path="/lockscreen_notification" component={LockScreenNotification} />
		<Route path="/hidden" component={Hidden} />
		<Route path="*" component={iMessageScreen}/>
	</Switch>
);