"use client"
import HomeSection from "@/components/HomeSection"
import FeathuredSection from "@/components/FeaturedSection"
// import JournalingSection from "@/components/JournalingSection"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"

export default function HomePage() {

  return (
    <>
    {/* // <main className="min-h-screen bg-black/[0.90] antialiased bg-grid-white/[0.02]"> */}
    {/* //   <div className="h-screen w-full flex items-center justify-center scroll-auto text-white">Hello, Welcome to StayRelaxed.</div> */}
        <HomeSection />
        <FeathuredSection />
        {/* <JournalingSection /> */}
        <Faq />
        <Footer />
    </>
    // </main>
  )
}
