import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <img src="https://mintlify.s3-us-west-1.amazonaws.com/shadeform-67/logo/light-shadeform.svg" width="150" alt="light logo" />
            <Link href='/'>Instance List</Link>
            <Link href='/instances'>Instances</Link>
        </nav>
    )
}
