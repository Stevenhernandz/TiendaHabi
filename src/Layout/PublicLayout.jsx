import React from 'react'
import Navbars from '../Components/Navbar'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars />
            este es mi publicLayout
            {children}
        </div>
    )
}

export default PublicLayout
