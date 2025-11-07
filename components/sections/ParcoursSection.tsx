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

        {/* Skills Section */}
        <div className="w-full pt-40">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-white text-center">
            Compétences Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-white text-center">
            Parcours Professionnel
          </h2>

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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accentColor dark:hover:border-accentColor transition-all duration-300">
      <h4 className="text-lg font-bold dark:text-white mb-4 text-center">
        {category.name}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium hover:bg-accentColor hover:text-white transition-colors duration-200"
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
    period: "Mars 2025 - À nos jours",
    title: "Responsable Innovation et Intégration",
    company: "SOFTONE BURKINA FASO",
    description:
      "Pilotage des projets d'intégration et d'innovation digitale. Supervision du développement et des déploiements applicatifs. Diagnostic et résolution d'incidents complexes. Formation et accompagnement des utilisateurs. Mise en place d'une base de connaissance technique.",
  },
  {
    period: "Mars 2024 - Mars 2025",
    title: "Développeur Web et Mobile",
    company: "SOFTONE BURKINA FASO",
    description:
      "Développement de ShopOne, solution web et mobile de gestion commerciale avec PHP, Laravel, Livewire, Flutter, Firebase et API REST. Optimisation UI/UX avec TailwindCSS et Bootstrap. Déploiement de l'application et formation des utilisateurs. Maintenance évolutive et support technique.",
  },
  {
    period: "Juillet 2023 - Février 2024",
    title: "Ingénieur Informatique Junior",
    company: "PHARMA DIGITAL AFRICA",
    description:
      "Conception d'une application web de contrôle des officines pour l'ANRP avec Laravel et Livewire. Développement d'un outil de contrôle pharmaceutique. Déploiement et formation des agents sur le terrain. Maintenance et support technique aux utilisateurs. Amélioration continue des performances applicatives.",
  },
  {
    period: "Novembre 2022 - Juin 2023",
    title: "Développeur",
    company: "SWITCH MAKER",
    description:
      "Conception d'un système MRV de suivi des émissions GES pour la Côte d'Ivoire. Développement d'une application mobile de connectivité (MY TDN). Réalisation d'un site vitrine institutionnel avec PHP/Laravel, Flutter, Firebase et API REST. Support technique et mise à jour continue.",
  },
  {
    period: "Juillet - Septembre 2022",
    title: "Stagiaire",
    company: "ORANGE DIGITAL CENTER | GOOGLE - EY TUNISIE",
    description:
      "Conception de l'application mobile KOBERMY (analyse de fertilité agricole). Collaboration agile au sein d'une équipe pluridisciplinaire. Lauréat du 1er prix Orange Summer Challenge 2022.",
  },
]

const skillCategories: SkillCategory[] = [
  {
    name: "Langages de Programmation",
    skills: ["PHP", "Dart", "JavaScript", "HTML", "CSS", "Sass"],
  },
  {
    name: "Frameworks & Librairies",
    skills: [
      "Laravel",
      "Livewire",
      "Flutter",
      "React",
      "Vue.js",
      "Next.js",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    name: "Base de Données",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase (Cloud Firestore)",
      "MongoDB",
      "SQLite",
    ],
  },
  {
    name: "CMS & Déploiement",
    skills: ["WordPress", "Vercel", "cPanel", "Firebase Hosting"],
  },
  {
    name: "Outils & Environnements",
    skills: ["Git", "GitHub", "Postman", "Jira", "MySQL Workbench", "VS Code"],
  },
  {
    name: "Systèmes d'Exploitation",
    skills: ["macOS", "Windows", "Linux (Ubuntu)"],
  },
]

const educations: Education[] = [
  {
    period: "Octobre 2022 - Octobre 2023",
    title: "Licence Professionnelle en Système d&apos;Information et Réseaux",
    institution: "École Supérieure des Techniques Avancées (ESTA)",
    description:
      "Formation complète en ingénierie des systèmes d&apos;information, développement d&apos;applications et administration de réseaux.",
  },
  {
    period: "Novembre 2021 - Juin 2022",
    title: "Développeur Full Stack Laravel et Symfony",
    institution: "Orange Digital Center (ODC)",
    description:
      "Formation intensive en développement web full-stack avec Laravel et Symfony.",
  },
  {
    period: "Novembre 2023",
    title: "Certification ChatGPT et Prompt Engineering",
    institution: "Udemy",
    description:
      "Formation à la maîtrise de ChatGPT et aux techniques de prompt engineering.",
  },
  {
    period: "Novembre 2023",
    title: "Certification Développeur Web",
    institution: "Udemy",
    description: "Maîtrise complète du développement web full-stack.",
  },
  {
    period: "Mars 2022",
    title: "Certification Développeur Flutter",
    institution: "Udemy",
    description:
      "Expertise en développement mobile multiplateforme avec Flutter et Dart.",
  },
  {
    period: "2021-2022",
    title: "Certificate of Participation - Excellent English",
    institution: "Ouagadougou, Burkina Faso",
    description: "Programme de perfectionnement en langue anglaise.",
  },
  {
    period: "Octobre 2018 - Juillet 2019",
    title: "Baccalauréat Série H option Informatique",
    institution:
      "Centre d&apos;Étude et de Formation en Informatique et Gestion (CEFIG)",
    description:
      "Diplôme de l&apos;enseignement technologique spécialisé en informatique de gestion.",
  },
]
