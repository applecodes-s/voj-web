import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            <ul className="navigation left-nav clearfix">
                <li className="dropdown">
                    <Link href="home">Home </Link>
                    
                </li>
                <li className="dropdown">
                    <Link href="about">About</Link>
                    <ul>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="prophetic-centre">Prophetic Centre</Link></li>
                    </ul>

                </li>
                <li><Link href="gallery">Gallery</Link></li>

               
            </ul>
        </>
    )
}
