import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>




       
            <ul className="navigation right-nav clearfix">
               
             
                <li><Link href="frappe">Give</Link></li>

                <li><Link href="contact">Contact</Link></li>
            </ul>
        </>
    )
}
