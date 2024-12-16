"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Portfolio from "@/public/assets/projects/portfolio.png"
import VatilobeIMG from "@/public/assets/projects/vatilove.jpeg"
import XtrakIMG from "@/public/assets/projects/xtrak.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
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

  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full  bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Projets en vedette
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="dark:text-white qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              Ses projets incluent des réalisations en freelance, tandis que
              d'autres restent confidentiels et non répertoriés.
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium dark:text-white">
          Découvrez d'autres projets sur demande{" "}
          <Link
            href="#contact"
            aria-label="contactez-moi"
            className="text-accentColor navlink dark:hover:text-white"
          >
            Contactez-moi.
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mon portfolio",
    description:
      "Une présentation soignée et optimisée de mon travail, mettant en valeur mes compétences et projets à travers une interface moderne et élégante.",
    techStacks: ["ShadnUI", "NextJS", "GSAP", "TailwindCSS"],
    image: Portfolio,
    url: "#",
  },
  {
    id: 2,
    title: "XTRAK",
    description:
      "Application métier avec tableaux de bord, statistiques, gestion de multi-utilisateurs et interface responsive.",
    techStacks: ["Livewire", "Laravel", "Bootstrap"],
    image: XtrakIMG,
    url: "https://xtrak.fr/",
  },
  {
    id: 3,
    title: "Vatilove",
    description:
      "Une application mobile qui permet de rencontrer des personnes à proximité via un système de match basé sur la géolocalisation et les préférences.",
    techStacks: ["Laravel", "Flutter", "Firebase"],
    image: VatilobeIMG,
    url: "https://vatilove.com/",
  },
]
