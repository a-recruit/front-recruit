import {useEffect} from 'react'
import ReactLocalStorage from 'reactjs-localstorage'

export const  security = ({childen})=>{

    const  jwt= " "
    

   useEffect(() => {
    jwt= ReactLocalStorage.reactLocalStorage.getObject('jwt')

   }, [])

   
    Jwt.verify(jwt,"ac66e3d2-c588-4f18-aa64-64ebebd875e4", async function(err, decoded) {
        
        if(!err && decoded){
            return(<div>{childen}</div>)
        }
        return <div>404</div>
    });
    
    

}