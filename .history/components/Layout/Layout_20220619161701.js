import React from 'react'
import Header from '../Header/Header'

function Layout({ children }) {
    return (
        <div>
            <div className=" max-w-[1536px] mx-auto pb-[70px] bg-blue-400">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout