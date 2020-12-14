import React from "react";
import avatarka from '../../assets/avatarka.jpg';
import {Message} from './Message';

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageType = {
    avatar: avatarka,
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
