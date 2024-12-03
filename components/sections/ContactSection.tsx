"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"
import ContactForm from "@/components/ContactForm";
export default function ContactSection() {
gsap.registerPlugin(ScrollTrigger)
const sectionRef = useRef(null)

useEffect(() => {
const q = gsap.utils.selector(sectionRef)

gsap.timeline({
scrollTrigger: {
trigger: sectionRef.current,
scrub: true,
onEnter: () => {
gsap.fromTo(
q(".title-animation"),
{
y: "200%",
},
{
y: 0,
}
)

gsap.fromTo(
q(".end-title"),
{ scale: 0 },
{ scale: 1, ease: "back.inOut" }
)
},
},
})
}, [])

// Set Active Session

const contactSectionOnView = useScrollActive(sectionRef)

const { setSection } = useSectionStore()

useEffect(() => {
contactSectionOnView && setSection("#contact")
}, [contactSectionOnView, setSection])

return (
<section ref={sectionRef} id="contact" className="max-h-max bg-gray-100 dark:bg-[#161D1F] py-[80px] px-10 lg:px-[5%]">
    <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden">
                <div className="title-animation dark:text-white text-lg">
                    Envie de collaborer ?
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="title-animation text-5xl navlink text-accentColor">
                    <a href="mailto:abdoulrazakmaali@gmail.com">Contactez-moi !</a>
                </div>
            </div>
            {/* Liens sociaux */}
            <div className="flex gap-4">
                <Link href="tel:+22670147315" aria-label="Contact me on Linkedin" target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full group flex items-center gap-2 hover:border-accentColor border py-[5px] px-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                    strokeWidth="1.5" className="stroke-black group-hover:scale-105 dark:stroke-white" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-4.146 4.147a.5.5 0 01-.708-.708L14.293 1H11.5a.5.5 0 01-.5-.5z" />
                </svg> */}
                <div className="text-xs dark:text-white group-hover:scale-105">Téléphone</div>
                </Link>
                <Link href="https://wa.me/+22670147315" aria-label="Contact me on Linkedin" target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full group flex items-center gap-2 hover:border-accentColor border py-[5px] px-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                    strokeWidth="1.5" className="stroke-black group-hover:scale-105 dark:stroke-white" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg> */}
                <div className="text-xs dark:text-white group-hover:scale-105">WhatsApp</div>
                </Link>
                <Link href="https://www.linkedin.com/in/mahamadoualiabdoulrazak/" aria-label="Contact me on Linkedin" target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full group flex items-center gap-2 hover:border-accentColor border py-[5px] px-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                    strokeWidth="1.5" className="stroke-black group-hover:scale-105 dark:stroke-white" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                </svg> */}
                <div className="text-xs dark:text-white group-hover:scale-105">Linkedin</div>
                </Link>
                {/* <Link href="https://github.com/lilraz70" aria-label="Contact me on Github" target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full group flex items-center gap-2 hover:border-accentColor border py-[5px] px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                    strokeWidth="1.5" className="stroke-black group-hover:scale-105 dark:stroke-white" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <div className="text-xs dark:text-white group-hover:scale-105">Github</div>
                </Link> */}
            </div>
        </div>

        {/* Formulaire de contact */}
        <ContactForm />


        <div className="end-title dark:text-white text-md mt-6">
            Créé avec ❤️ par <a href="tel:+22670147315" className="text-green-500">MAHAMADOU ALI Abdoul Razak</a>
        </div>

    </div>
</section>
);
}
