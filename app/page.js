
import Layout from "@/components/layout/Layout"

import Banner from "@/components/sections/home4/Banner"
import Gallery from "@/components/sections/home4/Gallery"
import Menu from "@/components/sections/home4/Menu"
import Menu2 from "@/components/sections/home4/Menu2"
import Menu3 from "@/components/sections/home4/Menu3"
import Testimonial from "@/components/sections/home4/Testimonial"
import Tips from "@/components/sections/home4/Tips"
import Video from "@/components/sections/home4/Video"
export default function Home() {

    return (  
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Banner />
                <Testimonial />
                <Menu />
                <Video />
                <Tips />
                <Menu2 />
                <Gallery />
                <Menu3 />
                {/* <Staff />
                <Clients /> */}

            </Layout>
        </>
    )
}