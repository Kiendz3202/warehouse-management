import React from 'react'
import Header from '../Header/Header'

function Layout({ children }) {
    return (
        <div>
            <div className=" max-w-[1280px] mx-auto pb-[70px]">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout