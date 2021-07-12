import React,{useState} from 'react'

export default function bigSizeScreenNotif(props) {
    
    return (
        <>
            {props.showHide &&
            
                <div className="bigSizeNotif">
                    <div className="orientationH spaceBetween">
                        <div>Notification</div>
                        <div className="close" onClick={()=>{props.callback()}}>X</div>
                    </div>
                    
                </div>
            }
            <style jsx>
                {`
                    .bigSizeNotif{
                        width: 50vw;
                        max-width: 500px;
                        height:100vh;
                        background-color: #fff;
                        position:absolute;
                        top : 40px;
                        right: 0px;
                        padding: 2em;
                        animation-duration: 1s;
                        animation-name: slidein;
                        border-left: 1px solid var(--color-primary-light)
                    }

                    .close{
                        cursor:pointer;
                    }

                    @keyframes slidein {
                        from {
                          width: 0%;
                        }
                      
                        to {
                          width: 50vw;
                        }
                      }

                  
                `}
            </style>
        </>
    )
}
