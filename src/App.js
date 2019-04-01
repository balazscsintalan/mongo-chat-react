import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import RoomSelector from "./RoomSelector";
import ChatRoom from "./ChatRoom";

const routes = {
	'/'           : () => <RoomSelector/>,
	'/room/:room' : ({ room }) => <ChatRoom room={room}/>
};

const App = () => {
	const routeResult = useRoutes(routes);

	return (
		<div className="App">
			{routeResult}
		</div>
	);
};

export default App;
