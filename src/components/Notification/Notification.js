import { useEffect, useState } from "react";
import { useNotification } from "../../context/NotificationContext";
import './Notification.css';
import checkIcon from '../../assets/check-icon.svg';

const Notification = ({ message }) => {
    const [ visibility, setVisibility ] = useState(true);
    const { notifications, removeNotification } = useNotification();



    useEffect(() => {
        setVisibility(!visibility); // eslint-disable-next-line 
    }, [ message ]); 

    // if( visibility ) {
    //     return (
    //         <div className='notification'>
    //             <p>{ message }</p>
    //             <button onClick={ handleClick }>x</button>
    //         </div>
    //     );
    // } 
    // else {
    //     return '';
    // }

    // if(message === null || !visibility) {
    //     return null;
    // } else {
        return (

            <div className='notifications-container'>
                {notifications.map(item => 
                    <div className= 'notification-item' key={item.id}>
                        <div className='notification-image'>
                            <img src={ checkIcon } alt='check-icon'/>
                        </div>
                        { item.message }
                        <button onClick={ () => removeNotification(item.id)}>X</button>
                    </div>
                )}
            </div>
        );
    }


export default Notification;