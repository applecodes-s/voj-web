import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>




       
            <ul className="navigation right-nav clearfix">
               
                {/* <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog-classic">Blog Classic</Link></li>
                        <li><Link href="blog-details2">Blog Single 02</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                        <li><Link href="/error">Not Found</Link></li>
                    </ul>
                </li> */}
                <li><Link href="frappe">Give</Link></li>

                <li><Link href="contact">Contact</Link></li>
            </ul>
        </>
    )
}
