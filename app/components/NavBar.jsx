import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <h1>Shadeform</h1>
            <Link href='/'>Instance List</Link>
            <Link href='/instances'>Instances</Link>
        </nav>
    )
}
