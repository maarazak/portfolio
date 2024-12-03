"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { Project } from "./sections/ProjectSection"
interface Props {
  item: Project
}

export default function ProjectCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      cardRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.inOut",
      }
    )
  }, [])

  return (
    <a
      href={item.url} // Accès direct via item
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden col-span-1 w-full flex flex-col shadow-sm border rounded-[0.75rem] h-[380px]"
      >
        <div className="relative w-full h-[200px]">
          <Image
            priority
            alt={item.title}
            src={item.image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="flex-1 group relative after:content-[''] after:rounded-full after:absolute after:content after:z-[10] after:w-[32px] after:h-[32px] after:bg-accentColor after:scale-[1] after:bottom-[-24px] after:right-[-24px] after:origin-center after:transition-transform after:duration-500 after:ease-out hover:after:scale-[25] overflow-hidden p-4 flex flex-col items-start justify-between">
          <div className="w-full px-4 absolute left-[50%] -translate-x-1/2 z-20 flex flex-col gap-2 items-start ">
            <div className="w-full flex justify-between items-center">
              <div className="text-accentColor group-hover:text-white font-medium">
                {item.title}
              </div>
            </div>
            <div className="dark:text-white text-sm group-hover:text-white">
              {item.description}
            </div>
          </div>

          <div className="w-full px-4 left-[50%] -translate-x-1/2 bottom-[10%] absolute z-20 flex items-center justify-between">
            <div className="flex w-3/4 overflow-x-scroll items-center gap-2">
              {item.techStacks.map((tech, index) => {
                return index % 2 === 0 ? (
                  <div
                    key={index}
                    className="px-2 py-[3px] shadow-sm border border-accentColor bg-white rounded-xl text-sm text-black flex justify-center items-center"
                  >
                    {tech}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="px-2 py-[3px] shadow-sm bg-accentColor group-hover:border-[0.01px] rounded-xl text-sm text-white flex justify-center items-center"
                  >
                    {tech}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
