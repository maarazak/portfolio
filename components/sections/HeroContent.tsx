"use client"

import { useEffect, useRef } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"

export default function HeroContent() {
  const sectionRef = useRef(null)
  const q = gsap.utils.selector(sectionRef)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const textAnimationTimeline = gsap.timeline({
      defaults: { stagger: 0.2, duration: 0.3 },
    })

    textAnimationTimeline.fromTo(
      q(".text-animation"),
      {
        y: 100,
      },
      {
        y: 0,
        delay: 2.2,
      }
    )
    textAnimationTimeline.fromTo(
      ".bio-animation ",
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "back",
        duration: 0.3,
      }
    )
  }, [q])

  return (
    <div
      ref={sectionRef}
      className="absolute max-w-[55rem] m-auto w-full top-[20%] md:top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/2 flex flex-col gap-4 justify-center items-center"
    >
      {/* <div className="overflow-hidden ">
        <div className="relative flex flex-col items-center">
            <div
                className="text-animation dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text leading-none text-2xl md:text-3xl font-semibold">
                MAHAMADOU ALI Abdoul Razak
            </div>
        </div>
    </div> */}

      <div className="overflow-hidden text-center">
        <div className="text-animation text-2xl md:text-4xl font-semibold">
          <span className="bg-[linear-gradient(#000000,rgba(255,255,255,.6))] dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            Développement, Mentor et Coach
          </span>
        </div>
        <div className=" text-accentColor text-xl md:text-3xl font-semibold">
          Full-Stack Web et Mobile
        </div>
        <span className="font-semibold text-accentColor">PHP - Laravel - </span>
        <span className="font-semibold text-accentColor">
          Dart - Flutter - Wordpress
        </span>
      </div>
      <div className="w-[300px] md:w-[370px] relative z-30 text-center text-sm dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text">
        <span className="block mt-2">
          De l&#39;analyse à la mise en production, je vous accompagne dans le
          développement ou pour booster votre activité.
        </span>
      </div>

      <div className="bio-animation dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text text-md md:text-lg">
        Prêt à donner vie à vos projets ?
      </div>

      <Link
        href="#contact"
        aria-label="Contact Me"
        className="contact_me_btn px-4 py-[6px] shadow-md group flex items-center gap-2 mb-10"
      >
        <div className="dark:text-black relative z-[3] text-sm">
          Contactez-moi
        </div>
        <div className="sr-only">Contactez-moi</div>
        <div className="contact_me_btn_overlay group-hover:opacity-100" />
        <div className="relative group overflow-hidden w-4 z-[3]">
          <div className="flex group-hover:animate-animate-frame-contact-me-btn-icon translate-x-[-100%]">
            <ArrowRightIcon className="text-black flex-none relative z-[3]" />
            <ArrowRightIcon className="text-black flex-none relative z-[3]" />
          </div>
        </div>
      </Link>
    </div>
  )
}
