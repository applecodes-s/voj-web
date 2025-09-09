import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>




       
            <ul className="navigation left-nav clearfix">
                <li className="dropdown">
                    <Link href="index-4">Home </Link>
                    {/* <ul>
                        <li className="/"><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                        <li><Link href="index-4">Home Four</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown">
                    <Link href="#specials">Specials</Link>
                </li>
                <li className="dropdown">
                    <Link href="#location">Locations</Link>
                </li>
                <li className="dropdown">
                    <Link href="#menu">Menu</Link>
                </li>
            </ul>
        </>
    )
}
