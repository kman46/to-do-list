import React from 'react'

export const Footer = () => {
    let footerStyle ={ 
        position: "absolute",
        top: "100vh",
        width: "100%"
        
    }
    return (
        <footer className="bg-dark text-light py-3" style=
        //used footerStyle variable to add styling 
        {footerStyle}>
            <p align="center" className="textcenter">
             Copyright &copy; MyTodosList.com
             </p>
        </footer>
    )
}
