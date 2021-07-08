import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ReactLocalStorage from 'reactjs-localstorage'
import jwt_decode from 'jwt-decode'


export default function header() {

    const [user,setUser]=useState("");

    useEffect(() => {
        let data={};
        data= ReactLocalStorage.reactLocalStorage.getObject('jwt');
        //decoder
        let decoded = jwt_decode(JSON.stringify(data))
        setUser(decoded)
    }, [])

   // console.log(user)


    const nb_notif = 5;

    return (
        <>
            <div className="header orientationH spaceBetween">
                <Link href="/">
                    <a>
                        <img className="h_logo" src="/images/A_Recruit.jpg" alt="LOGO"/>
                    </a>
                </Link>
                <div className="orientationH ">
                    <div className="notification_z">
                        <img className="icon" src="/images/icon_notification.png" alt='noti_icon'/>
                        <span>{nb_notif}</span>
                    </div>
                    <div className="user_icon_z">
                        <img className="icon" src="/images/icon_def_usr.png" alt='noti_icon'/>
                    </div>
                    <div className="user_name_z">{""+user.user_name + " " + user.user_firstname}</div>
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
