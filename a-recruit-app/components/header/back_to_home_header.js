import React from 'react'
import Link from 'next/link'

export default function default_user_header() {
    return (
        <div>
            <div className="d_u_header center"> 
                <Link href="/">
                    <a>
                        <div className="redirection center">
                        ACCEUIL
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .d_u_header{
                    width: 100%;
                    padding: 1em;
                    cursor:pointer;
                }
                
                .d_u_header a{
                    text-decoration: none;
                }
                .redirection{
                   // background-color: #000;
                    height: 40px;
                    background-position: left;
                    background-image: url("/images/home_icon.png");
                    background-repeat: no-repeat;
                    background-size: 20px;
                    padding-left: 30px;
                    text-align:center;
                    border-bottom: 2px solid ;
                }

            `}</style>
        </div>
    )
}
