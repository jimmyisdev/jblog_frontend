'use client'
import { nav_item } from '@/const'
import React, { useState } from 'react'
import Link from 'next/link'


export default function Sidebar() {
    const [openSetting, setOpenSetting] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    return (
        <nav className='p-2 border-b-2 md:border-r-2 md:min-w-32'>
            <ul>
                <li>
                    <button onClick={() => setOpenSetting(!openSetting)}>Setting</button>
                    {
                        openSetting && <ul className='pl-2'>
                            <li>Dark/Bright</li>
                        </ul>
                    }
                </li>
                <li>
                    <Link href="/chat">Chat</Link>
                </li>
                <li>
                    <Link href="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}
