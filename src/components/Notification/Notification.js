import { useEffect, useState } from "react";

const Notification = ({ message }) => {
    const [ visibility, setVisibility ] = useState(true);

    const handleClick = e => {
        setVisibility(false);
    }



    useEffect(() => {
        setVisibility(!visibility);
    }, [message]);

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

    if(message === null || !visibility) {
        return null;
    } else {
        return (
            <div className='notification'>
                <p>{ message }</p>
                <button onClick={ handleClick }>x</button>
            </div>
        );
    }
    

    
    
    
}

export default Notification;