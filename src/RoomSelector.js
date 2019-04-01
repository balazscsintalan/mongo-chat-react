import React from 'react';
import { navigate } from 'hookrouter';

const RoomSelector = () => {
    const [room, setRoom] = React.useState('');

    const onRoomChange = (event) => {
        setRoom(event.target.value);
    };
    // This router doesn't support query params.
    const selectRoom = () => {
        navigate(`/room/${room}`);
    };

    return (
        <div className="room-selector">
            <label>Choose a room</label>
            <input type="text" value={room} onChange={onRoomChange}/>
            <button onClick={selectRoom}>Select</button>
        </div>
    );
};

export default RoomSelector;