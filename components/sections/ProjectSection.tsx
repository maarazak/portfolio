"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import BebeBoutiqueIMG from "@/public/assets/projects/bbboutique.png"
import BYMSIMG from "@/public/assets/projects/byms.png"
import ControlPlusIMG from "@/public/assets/projects/controlplus.png"
import EkerIMG from "@/public/assets/projects/eker.png"
import MRVIMG from "@/public/assets/projects/mrv.png"
import PDAIMG from "@/public/assets/projects/pda.png"
import Portfolio from "@/public/assets/projects/portfolio.png"
import SAABATVIMG from "@/public/assets/projects/saabatv.png"
import SHOPONEIMG from "@/public/assets/projects/shopone.png"
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
              Mes réalisations
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="dark:text-white qoutes-animation md:w-full text-center font-medium flex flex-col items-center">
              Chaque projet raconte une histoire de collaboration et
              d&#39;innovation, transformant les défis techniques en succès
              digitaux concrets.
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        {/* <div className="font-medium dark:text-white">
          Découvrez d&#39;autres projets sur demande{" "}
          <Link
            href="#contact"
            aria-label="contactez-moi"
            className="text-accentColor navlink dark:hover:text-white"
          >
            Contactez-moi.
          </Link>
        </div> */}
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
    techStacks: ["PHP", "Laravel", "Livewire", "Bootstrap"],
    image: XtrakIMG,
    url: "https://xtrak.fr/",
  },
  {
    id: 3,
    title: "Vatilove",
    description:
      "Une application mobile qui permet de rencontrer des personnes à proximité via un système de match basé sur la géolocalisation et les préférences.",
    techStacks: ["PHP", "Laravel", "Flutter", "Dart", "Firebase"],
    image: VatilobeIMG,
    url: "https://vatilove.com/",
  },
  {
    id: 4,
    title: "bebeboutic",
    description:
      "Un site e-commerce permettant de gérer les achats de produits, leur livraison aux clients, avec un back-office dédié à l’administration.",
    techStacks: ["PHP", "Laravel", "VueJS", "TailwindCSS"],
    image: BebeBoutiqueIMG,
    url: "https://bebeboutic.parapharma.store/",
  },
  {
    id: 5,
    title: "Eker Management",
    description:
      "Un site web vitrine pour Eker Management qui met en valeur ses services, son expertise et facilite la prise de contact avec ses clients.",
    techStacks: ["PHP", "Wordpress"],
    image: EkerIMG,
    url: "https://ekermanagement.com/",
  },
  {
    id: 6,
    title: "BYM'S GROUP",
    description:
      "Un site web vitrine pour BYM'S GROUP qui met en valeur ses services, son expertise et facilite la prise de contact avec ses clients.",
    techStacks: ["PHP", "Wordpress"],
    image: BYMSIMG,
    url: "https://bymsgroup.com/",
  },
  {
    id: 7,
    title: "Pharma Control Plus",
    description:
      "Logiciel de cartographie développé pour l'ANRP, permettant de gérer les officines du Burkina Faso et d’en visualiser la répartition géographique en temps réel. ",
    techStacks: ["PHP", "Laravel", "Livewire", "Bootstrap"],
    image: ControlPlusIMG,
    url: "http://controlplus.pharmadigitalafrica.tech/",
  },
  {
    id: 8,
    title: "Pharma Digital Africa",
    description:
      "Un site web vitrine pour Pharma Digital Africa qui met en valeur ses services, son expertise et facilite la prise de contact avec ses clients.",
    techStacks: ["PHP", "Wordpress"],
    image: PDAIMG,
    url: "https://pharmadigitalafrica.tech/",
  },
  {
    id: 9,
    title: "SHOPONE",
    description:
      "Logiciel de gestion de stock permettant de gérer les inventaires, de passer des commandes, de générer des factures pour les clients et les fournisseurs, et bien plus encore. ",
    techStacks: ["PHP", "Laravel", "Livewire", "Bootstrap"],
    image: SHOPONEIMG,
    url: "https://nini.shoponeplus-cloud.com/",
  },
  {
    id: 10,
    title: "Attenuation MNV Cote d'Ivoire",
    description:
      "Système de suivi des gaz à effet de serre en Côte d'Ivoire, incluant une cartographie des mesures d'atténuation par secteur.",
    techStacks: ["PHP", "Laravel", "Livewire", "Bootstrap"],
    image: MRVIMG,
    url: "https://attenuation.mnv-cotedivoire.ci/",
  },
  {
    id: 11,
    title: "SAABA TV",
    description:
      "Une plateforme de diffusion de contenu vidéo pour les émissions de SAABA TV.",
    techStacks: ["PHP", "Wordpress"],
    image: SAABATVIMG,
    url: "https://saabatv.com/",
  },
]
