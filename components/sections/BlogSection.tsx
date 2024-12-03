"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
// import ComingSoon1 from "@/public/assets/blog/coming-soon-1.jpg"
// import ComingSoon2 from "@/public/assets/blog/coming-soon-2.jpg"
// import SpaceCat from "@/public/assets/blog/space-cat.webp"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
// import { ArrowRight } from "iconsax-react"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import PlansSection from "../PlansSection"
// import BlogCard from "../BlogCard"
// import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function BlogSection() {
gsap.registerPlugin(ScrollTrigger)
const sectionRef = useRef(null)

const elementRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(elementRef)

    useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
    scrollTrigger: {
    trigger: sectionRef.current,
    scrub: true,
    onEnter: () => {
    gsap.fromTo(
    q(".qoutes-animation"),
    {
    y: "-200%",
    },
    {
    y: 0,
    }
    )
    },
    },
    })
    }, [])

    // Set Active Session
    const aboutSectionOnView = useScrollActive(sectionRef)
    const { setSection } = useSectionStore()

    useEffect(() => {
    aboutSectionOnView && setSection("#blog")
    }, [aboutSectionOnView, setSection])

    return (
    <section ref={sectionRef} id="blog" className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]">
        <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
            <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
                <RoughNotation type="underline" strokeWidth={2} color="hsl(157, 87%, 41%)" order={1} show={isOnScreen}>
                    <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
                        Mentor <span className="text-accentColor font-bold">&</span> Coach
                    </div>
                </RoughNotation>
                <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
                    {/* <div
                        className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
                        Je documente mon parcours en écrivant des articles de blog sur mes projets et mes expériences.
                    </div> */}
                    {/* <div
                        className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
                        <div>Découvrez quelques-unes de mes dernières publications ci-dessous. 🚀</div>
                    </div> */}
                </div>
            </div>
            <PlansSection />
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="flex justify-center items-center">
                    <img src="/cford.jpg" // Remplacez par le chemin de votre logo alt="Logo Client 1"
                        className="max-h-24 object-contain" alt="Cford burkina faso" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/vatilove.png" // Remplacez par le chemin de votre logo alt="Logo Client 2"
                        className="max-h-24 object-contain" />
                </div>

                <div className="flex justify-center items-center">
                    <img src="/eker.jpg" // Remplacez par le chemin de votre logo alt="Logo Client 3"
                        className="max-h-24 object-contain" alt="Eker Management" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/harmen.jpg" // Remplacez par le chemin de votre logo alt="Logo Client 1"
                        className="max-h-24 object-contain" alt="Harmen & bott" />
                </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="flex justify-center items-center">
                    <img src="/saabatv.jpg" // Remplacez par le chemin de votre logo alt="Logo Client 4"
                        className="max-h-24 object-contain" alt="Saabatv" />
                </div>

            </div> */}
            <Link href="#contact" aria-label="Contact Me"
                className="contact_me_btn px-4 py-[6px] shadow-md group flex items-center gap-2 mb-10">
            <div className="dark:text-black relative z-[3] text-sm">Contactez-moi</div>
            <div className="sr-only">Contactez-moi</div>
            <div className="contact_me_btn_overlay group-hover:opacity-100" />
            </Link>
        </div>
    </section>
    )
    }

    export interface Blog {
    id: number
    title: string
    description: string
    image: StaticImageData
    publishAt: string
    link: string
    }



    {/* <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
        {blogs.map((blog) => (
        <BlogCard key={blog.id} item={blog} />
        ))}
    </div> */}
    // const blogs: Blog[] = [
    // {
    // id: 1,
    // title: "The Mystery of React Children Re-rendering",
    // description:
    // "Component rendering is important for the overall performance of the app. So, although it seems simple, I want to
    // share the complex children render logic.",
    // image: SpaceCat,
    // publishAt: "2024, March 10",
    // link: "https://medium.com/@shinthantequi/the-mystery-of-react-children-re-rendering-3544a68944f4",
    // },
    // {
    // id: 2,
    // title: "Testing 1",
    // description:
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti
    //neque dolores ad provident magnam?",
    // image: ComingSoon1,
    // publishAt: "2022, March 10",
    // link: "",
    // },
    // {
    // id: 3,
    // title: "Testing 2",
    // description:
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti
    // neque dolores ad provident magnam?",
    // image: ComingSoon2,
    // publishAt: "2024, January 15",
    // link: "",
    // },
    // ]
