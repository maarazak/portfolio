"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"

// Types pour les données et les props
interface Experience {
  period: string
  title: string
  company: string
  description: string
}

// Catégorie de compétences avec un nom et une liste de compétences
interface SkillCategory {
  name: string
  skills: string[]
}

interface Education {
  period: string
  title: string
  institution: string
  description: string
}

interface ExperienceCardProps {
  experience: Experience
  isLeft: boolean
}

interface SkillCardProps {
  category: SkillCategory
}

interface EducationCardProps {
  education: Education
}

export default function ParcoursSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef<HTMLElement>(null)
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

  return (
    <section
      ref={sectionRef}
      id="parcours"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1200px] h-full m-auto flex flex-col items-center gap-14">
        {/* Titre principal avec la même disposition que ProjectSection */}
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Mon Parcours Professionnel
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="dark:text-white qoutes-animation md:w-full text-center font-medium flex flex-col items-center">
              Un parcours riche en expériences variées, alliant innovation
              technique et gestion de projets pour créer des solutions digitales
              performantes.
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full pt-40">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <RoughNotation
            type="circle"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            show={isOnScreen}
            padding={15}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-white text-center">
              Compétences Techniques
            </h2>
          </RoughNotation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="w-full">
          <RoughNotation
            type="highlight"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            show={isOnScreen}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-white text-center">
              Formation & Certifications
            </h2>
          </RoughNotation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-white text-center">
            🏆 Réalisations Marquantes
          </h2>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl text-white text-center">
            <div className="text-3xl font-bold mb-4">🥇 1er Prix</div>
            <div className="text-xl mb-2">Orange Summer Challenge 2022</div>
            <div className="text-sm opacity-90">
              Application mobile d&apos;analyse de la fertilité du sol agricole
              - Tech4Good
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, isLeft }: ExperienceCardProps) {
  return (
    <div
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

      {/* Content */}
      <div
        className={`flex-1 ml-12 md:ml-0 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">
            {experience.period}
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-2">
            {experience.title}
          </h3>
          <div className="text-gray-600 dark:text-gray-300 font-medium mb-3">
            {experience.company}
          </div>
          <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <h4 className="text-lg font-bold dark:text-white mb-4 text-center">
        {category.name}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
        {education.period}
      </div>
      <h3 className="text-lg font-bold dark:text-white mb-2">
        {education.title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300 font-medium mb-3">
        {education.institution}
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-sm">
        {education.description}
      </p>
    </div>
  )
}

const experiences: Experience[] = [
  {
    period: "Mars 2024 - Juin 2025",
    title: "Responsable Innovation et Intégration",
    company: "SOFTONE BURKINA FASO",
    description:
      "Coordination et supervision du développement des outils technologiques. Gestion des déploiements en équipe, pilotage de l'innovation et de l'intégration des solutions digitales.",
  },
  {
    period: "Juillet 2023 - Février 2024",
    title: "Développeur Full Stack",
    company: "SWITCH MAKER",
    description:
      "Transformation des besoins clients en applications web et mobile performantes. Accompagnement sur-mesure du cahier des charges à la mise en ligne.",
  },
  {
    period: "Novembre 2022 - Juin 2023",
    title: "Développeur Full Stack",
    company: "PHARMA DIGITAL AFRICA",
    description:
      "Développement d'applications web et mobile sur mesure pour le secteur pharmaceutique. Conception de solutions digitales innovantes.",
  },
  {
    period: "Juillet - Septembre 2022",
    title: "Développeur Full Stack Laravel",
    company: "ORANGE DIGITAL CENTER",
    description:
      "Formation intensive et développement d'une application de gestion agricole. Maîtrise des technologies Frontend et Backend.",
  },
]

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "HTML/CSS",
      "TailwindCSS",
      "Bootstrap",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    skills: ["Laravel", "PHP", "API REST", "Livewire"],
  },
  {
    name: "Mobile",
    skills: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
]

const educations: Education[] = [
  {
    period: "2020 - 2022",
    title: "Licence Pro. Systèmes d&apos;Information et Réseaux",
    institution: "École Supérieure des Techniques Avancées (ESTA)",
    description:
      "Formation complète en ingénierie des systèmes d&apos;information, développement d&apos;applications et administration de réseaux.",
  },
  {
    period: "2023",
    title: "Certification Développeur Web",
    institution: "Udemy",
    description:
      "Maîtrise complète du développement web full-stack avec création d&apos;un site e-commerce en PHP.",
  },
  {
    period: "2022",
    title: "Certification Développeur Flutter",
    institution: "Udemy",
    description:
      "Expertise en développement mobile multiplateforme avec Flutter et Dart.",
  },
  {
    period: "2017 - 2019",
    title: "Baccalauréat Série H - Informatique",
    institution: "CEFIG - Ouagadougou",
    description:
      "Diplôme de l&apos;enseignement technologique spécialisé en informatique.",
  },
]
