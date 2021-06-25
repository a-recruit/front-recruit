import React from 'react'


export default function header() {
    
    //const user_img = require('../../public/images/icon_def_usr.png');
    const nb_notif = 5;

    return (
        <>
            <div className="header orientationH spaceBetween">
                <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                <div className="orientationH ">
                    <div className="notification_z">
                        <img className="icon" src="/images/icon_notification.png" alt='noti_icon'/>
                        <span>{nb_notif}</span>
                    </div>
                    <div className="user_icon_z">
                        <img className="icon" src="/images/icon_def_usr.png" alt='noti_icon'/>
                    </div>
                    <div className="user_name_z">Zinedine PIRO</div>
                </div>
                
            </div>
            <style jsx>{`

                .header{
                    background-color: var(--color-primary-light);
                    width: 100%;
                    height : 40px;
                    align-items: center;
                    color: #fff;
                }
                
                .icon{
                    width: 20px;
                }
                .notification_z{
                    padding-right:0.7em;
                }
                .notification_z span{
                    position: relative;
                    top: -6px; left: -5px;
                    width: 20px;
                    min-width: 15px;
                    font-size: 0.8em;
                    padding-left : 0.3em;
                    padding-right : 0.3em;
                    background-color: green;
                    border-radius: 15px;
                }
                .h_logo{
                    max-height: 40px;
                }

                .user_name_z{
                    padding-right:1em;
                    padding-left: 0.5em;
                }

            `}</style>
        </>
    )
}
