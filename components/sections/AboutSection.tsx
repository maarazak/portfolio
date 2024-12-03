"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import Circle from "@/public/assets/about/circle.svg"
// import Signs from "@/public/assets/about/signs.svg"
import Star from "@/public/assets/about/star.svg"
import Triangle from "@/public/assets/about/triangle.svg"
import MeImage from "@/public/me.jpg"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import SplitType from "split-type"

export default function AboutSection() {
gsap.registerPlugin(ScrollTrigger)

const sectionRef = useRef(null)

useEffect(() => {
const q = gsap.utils.selector(sectionRef)

new SplitType(q(".title"), {
types: "chars",
tagName: "span",
})

gsap.from(q(".title .char"), {
opacity: 0.3,
duration: 0.5,
ease: "power1.out",
stagger: 0.1,

scrollTrigger: {
trigger: q(".title"),
start: "top center",
scrub: true,
},
})

gsap.timeline({
scrollTrigger: {
trigger: sectionRef.current,
scrub: true,
onEnter: () => {
const tl = gsap.timeline({
defaults: {
stagger: 0.2,
duration: 0.3,
},
})

tl.fromTo(
q(".image-animation"),
{
x: 200,
},
{
x: 0,
}
)

tl.fromTo(
q(".text-animation"),
{
y: 100,
},
{
y: 0,
}
)

tl.to(q(".experience-count"), {
innerText: 3,
duration: 0.5,
snap: {
innerText: 1,
},
})

tl.to(
q(".project-count"),
{
innerText: 5,
duration: 0.5,
snap: {
innerText: 1,
},
},
"-=0.3"
)

tl.to(
q(".user-count"),
{
innerText: 1,
duration: 0.5,
snap: {
innerText: 1,
},
},
"-=0.3"
)
},
},
})
}, [])

// Set Active Session
const aboutSectionOnView = useScrollActive(sectionRef)
const { setSection } = useSectionStore()

useEffect(() => {
aboutSectionOnView ? setSection("#about") : setSection("#home")
}, [aboutSectionOnView, setSection])

return (
<section ref={sectionRef} id="about"
    className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]">
    <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        <div className="relative title text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-white">
            La programmation est un domaine où il est plus important de trouver le bon problème à résoudre que de
            trouver la solution parfaite.
            {/* <div className="absolute -right-[10px] top-2">
                <Image className="w-14 pointer-events-none select-none" src={Signs} alt="signs" />
            </div> */}
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
            <div className="w-full flex flex-col items-start gap-7 md:gap-9">
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="text-animation dark:text-accentColor text-3xl md:text-4xl font-medium">
                            À propos de moi
                        </div>
                    </div>

                    <div className="absolute -top-6 -left-8">
                        <svg width="45" height="37" viewBox="0 0 45 37" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
                                fill="#ffffff"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <div className="overflow-hidden">
                        <div className="dark:text-white text-animation">
                            Développeur web et mobile avec 3+ ans d'expérience en ingénierie logicielle, spécialisé en
                            PHP (Laravel) , Dart (Flutter) et Wordpress.
                            Je conçois des applications sur mesure, performantes et centrées sur l'utilisateur.
                            <br />
                            <span className="block mt-2">
                                J'accompagne les professionnels dans leurs projets digitaux : création d'applications,
                                optimisation d'outils, ou initiation à la programmation, avec un plan d'action adapté à
                                leurs objectifs.
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="dark:text-white text-animation">
                            Mon parcours éducatif.
                        </div>
                    </div>
                    <div className="flex gap-1 flex-col items-start">
                        <div className="text-accentColor">Baccalauréat H (Informatique de gestion) - CEFIG</div>
                        <div className="overflow-hidden">
                            <div className="dark:text-white text-animation">
                                Obtention du Baccalauréat H en Informatique de gestion à CEFIG, une formation fondée sur
                                les principes du système d'information et de l'informatique.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1 flex-col items-start">
                        <div className="text-accentColor">Licence en Systèmes d'Information et Réseaux - ESTA</div>
                        <div className="overflow-hidden">
                            <div className="dark:text-white text-animation">
                                Obtention d'une Licence en Systèmes d'Information et Réseaux à l'ESTA, avec un accent
                                sur l'architecture des systèmes et la gestion des réseaux.
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-medium dark:text-white">
                            <span className="experience-count">3</span>{" "}
                            <span className="text-accentColor">+</span>
                        </div>
                        <div className="dark:text-white text-sm">Expériences</div>
                    </div>

                    <div className="flex flex-col font-medium items-center">
                        <div className="text-3xl md:text-4xl dark:text-white">
                            <span className="project-count">5</span>{" "}
                            <span className="text-accentColor">+</span>
                        </div>
                        <div className="dark:text-white text-sm">
                            Projets réalisés
                        </div>
                    </div>

                    <div className="flex flex-col font-medium items-center">
                        <div className="text-3xl md:text-4xl dark:text-white">
                            <span className="user-count">1</span>{" "}
                            {/* <span className="text-accentColor">+</span> */}
                        </div>
                        <div className="dark:text-white text-sm">Contribution</div>
                    </div>
                </div>

            </div>
            <div className="w-full h-full flex justify-center items-center image-animation ">
                <div className="relative w-[180px] h-[170px] lg:w-[300px] lg:h-[290px]">
                    <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
                    <Image className="absolute z-10 object-contain  w-full h-full shadow-sm rounded-sm" width={300}
                        height={300} priority alt="shin thant's profile" src={MeImage} />

                    <div className="absolute hidden lg:block -top-12 -right-12">
                        <Image className="pointer-events-auto select-none" width={26} height={26}
                            alt="triangle background" src={Triangle} />
                    </div>

                    <div className="absolute hidden lg:block -bottom-14 -right-10">
                        <Image className="pointer-events-auto select-none" width={22} height={22}
                            alt="circle background" src={Circle} />
                    </div>

                    <div className="absolute hidden lg:block -bottom-16 -left-10">
                        <Image className="pointer-events-auto select-none" width={34} height={34} alt="star background"
                            src={Star} />
                    </div>
                </div>
            </div>
        </div>

        <TechStack />
    </div>
</section>
)
}

const TechStack = () => {
return (
<div className="w-full inline-flex gap-20 flex-nowrap lg:overflow-hidden">
    <div className="flex items-center gap-20 justify-center animate-infinite-scroll">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5"
                className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08m-5.19-7.95c.54 0 .91.1 1.09.31.18.2.22.56.13 1.03-.1.53-.29.87-.58 1.09-.28.22-.71.33-1.29.33h-.87l.53-2.76h.99m-3.5 5.55h1.44l.34-1.75h1.23c.54 0 .98-.06 1.33-.17.35-.12.67-.31.96-.58.24-.22.43-.46.58-.73.15-.26.26-.56.31-.88.16-.78.05-1.39-.33-1.82-.39-.44-.99-.65-1.82-.65H4.59l-1.28 6.58m7.25-8.33l-1.28 6.58h1.42l.74-3.77h1.14c.36 0 .6.06.71.18.11.12.13.34.07.66l-.57 2.93h1.45l.59-3.07c.13-.62.03-1.07-.27-1.36-.3-.27-.85-.4-1.65-.4h-1.27L12 7.35h-1.44M18 10.13c.55 0 .91.1 1.09.31.18.2.22.56.13 1.03-.1.53-.29.87-.57 1.09-.29.22-.72.33-1.3.33h-.85l.5-2.76h1m-3.5 5.55h1.44l.34-1.75h1.22c.55 0 1-.06 1.35-.17.35-.12.65-.31.95-.58.24-.22.44-.46.58-.73.15-.26.26-.56.32-.88.15-.78.04-1.39-.34-1.82-.36-.44-.99-.65-1.82-.65h-2.75l-1.29 6.58z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">PHP</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5"
                className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 01.024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Laravel</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5"
                className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 011.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">DART</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Flutter</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M12.001 0C6.174 0 1.448 4.957 1.448 11.072c0 2.09.552 4.042 1.51 5.71.25.279.544.484.965.484 1.339 0 1.268-2.065 2.607-2.065 1.34 0 1.411 2.065 2.75 2.065 1.34 0 1.266-2.065 2.606-2.065.584 0 .928.397 1.24.84-.221-.205-.48-.348-.82-.348-1.196 0-1.307 1.678-2.201 2.141v4.51a1.657 1.657 0 003.312 0V16.45c.308.433.647.815 1.22.815 1.34 0 1.267-2.065 2.606-2.065.465 0 .774.255 1.04.58a1.108 1.108 0 00-.43-.088c-1.159 0-1.297 1.574-2.118 2.094v2.436a1.49 1.49 0 002.98 0V16.37c.324.466.67.894 1.278.894.796 0 1.093-.728 1.485-1.32a11.48 11.48 0 001.074-4.873C22.552 4.957 17.828 0 12 0zm-.566 2.877c2.88 0 5.214 2.784 5.214 5.807 0 3.023-1.545 5.15-5.214 5.15-3.67 0-5.215-2.127-5.215-5.15s2.335-5.807 5.215-5.807zm-1.403 1.66a1.955 2.158 0 00-1.955 2.158 1.955 2.158 0 001.955 2.158 1.955 2.158 0 001.955-2.158 1.955 2.158 0 00-1.955-2.158zm-.326.664a.978.996 0 01.979.996.978.996 0 01-.979.996.978.996 0 01-.977-.996.978.996 0 01.977-.996zm-2.95 10.492c-1.074 0-1.272 1.355-1.95 1.965v1.782a1.49 1.49 0 002.98 0v-3.182c-.264-.324-.577-.564-1.03-.564z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Livewire</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M7.5 8h3v8l-2 -1" />
                <path
                    d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <div className="dark:text-white text-lg font-medium">JavaScript</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Bootstrap</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Tailwind</div>
        </div>

        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.308 7.265l5.385 -3.029" />
                <path d="M13.308 4.235l5.384 3.03" />
                <path d="M20 9.5v5" />
                <path d="M18.693 16.736l-5.385 3.029" />
                <path d="M10.692 19.765l-5.384 -3.03" />
                <path d="M4 14.5v-5" />
                <path d="M12.772 4.786l6.121 10.202" />
                <path d="M18.5 16h-13" />
                <path d="M5.107 14.988l6.122 -10.201" />
                <path d="M12 3.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M12 20.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M4 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M4 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M20 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M20 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
            </svg>
            <div className="dark:text-white text-lg font-medium">GraphQL</div>
        </div>

        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" />
                <path
                    d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" />
                <path d="M4.57 17.18l10.93 -10.68" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Firebase</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M3.667 12a8.334 8.334 0 004.697 7.5L4.388 8.607A8.3 8.3 0 003.667 12zm8.48.729l-2.501 7.265a8.337 8.337 0 005.121-.133.746.746 0 01-.06-.115l-2.56-7.017zm5.479-1.15a4.389 4.389 0 00-.687-2.298 3.903 3.903 0 01-.819-1.954 1.443 1.443 0 011.4-1.48c.037 0 .072.005.107.008a8.331 8.331 0 00-12.59 1.568c.196.006.38.01.537.01.871 0 2.22-.106 2.22-.106a.345.345 0 01.054.687s-.452.052-.954.079l3.035 9.026 1.824-5.47-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 01.053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 01.053.687s-.452.052-.953.079l3.011 8.958.86-2.725c.336-.88.54-1.806.606-2.746zm1.743-2.72a7.866 7.866 0 01-.634 2.985l-2.545 7.359a8.334 8.334 0 003.123-11.2c.038.283.056.57.056.856zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.659 18.662a9.388 9.388 0 01-8.914-.867 9.432 9.432 0 01-3.407-4.136 9.386 9.386 0 01.867-8.914 9.427 9.427 0 014.136-3.406 9.388 9.388 0 018.914.866 9.432 9.432 0 013.407 4.136 9.386 9.386 0 01-.867 8.914 9.427 9.427 0 01-4.136 3.407z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Wordpress</div>
        </div>
    </div>

    <div className="flex items-center gap-20 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08m-5.19-7.95c.54 0 .91.1 1.09.31.18.2.22.56.13 1.03-.1.53-.29.87-.58 1.09-.28.22-.71.33-1.29.33h-.87l.53-2.76h.99m-3.5 5.55h1.44l.34-1.75h1.23c.54 0 .98-.06 1.33-.17.35-.12.67-.31.96-.58.24-.22.43-.46.58-.73.15-.26.26-.56.31-.88.16-.78.05-1.39-.33-1.82-.39-.44-.99-.65-1.82-.65H4.59l-1.28 6.58m7.25-8.33l-1.28 6.58h1.42l.74-3.77h1.14c.36 0 .6.06.71.18.11.12.13.34.07.66l-.57 2.93h1.45l.59-3.07c.13-.62.03-1.07-.27-1.36-.3-.27-.85-.4-1.65-.4h-1.27L12 7.35h-1.44M18 10.13c.55 0 .91.1 1.09.31.18.2.22.56.13 1.03-.1.53-.29.87-.57 1.09-.29.22-.72.33-1.3.33h-.85l.5-2.76h1m-3.5 5.55h1.44l.34-1.75h1.22c.55 0 1-.06 1.35-.17.35-.12.65-.31.95-.58.24-.22.44-.46.58-.73.15-.26.26-.56.32-.88.15-.78.04-1.39-.34-1.82-.36-.44-.99-.65-1.82-.65h-2.75l-1.29 6.58z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">PHP</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 01.024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Laravel</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">DART</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 011.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Flutter</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M12.001 0C6.174 0 1.448 4.957 1.448 11.072c0 2.09.552 4.042 1.51 5.71.25.279.544.484.965.484 1.339 0 1.268-2.065 2.607-2.065 1.34 0 1.411 2.065 2.75 2.065 1.34 0 1.266-2.065 2.606-2.065.584 0 .928.397 1.24.84-.221-.205-.48-.348-.82-.348-1.196 0-1.307 1.678-2.201 2.141v4.51a1.657 1.657 0 003.312 0V16.45c.308.433.647.815 1.22.815 1.34 0 1.267-2.065 2.606-2.065.465 0 .774.255 1.04.58a1.108 1.108 0 00-.43-.088c-1.159 0-1.297 1.574-2.118 2.094v2.436a1.49 1.49 0 002.98 0V16.37c.324.466.67.894 1.278.894.796 0 1.093-.728 1.485-1.32a11.48 11.48 0 001.074-4.873C22.552 4.957 17.828 0 12 0zm-.566 2.877c2.88 0 5.214 2.784 5.214 5.807 0 3.023-1.545 5.15-5.214 5.15-3.67 0-5.215-2.127-5.215-5.15s2.335-5.807 5.215-5.807zm-1.403 1.66a1.955 2.158 0 00-1.955 2.158 1.955 2.158 0 001.955 2.158 1.955 2.158 0 001.955-2.158 1.955 2.158 0 00-1.955-2.158zm-.326.664a.978.996 0 01.979.996.978.996 0 01-.979.996.978.996 0 01-.977-.996.978.996 0 01.977-.996zm-2.95 10.492c-1.074 0-1.272 1.355-1.95 1.965v1.782a1.49 1.49 0 002.98 0v-3.182c-.264-.324-.577-.564-1.03-.564z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Livewire</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M7.5 8h3v8l-2 -1" />
                <path
                    d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <div className="dark:text-white text-lg font-medium">JavaScript</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Bootstrap</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Tailwind</div>
        </div>

        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.308 7.265l5.385 -3.029" />
                <path d="M13.308 4.235l5.384 3.03" />
                <path d="M20 9.5v5" />
                <path d="M18.693 16.736l-5.385 3.029" />
                <path d="M10.692 19.765l-5.384 -3.03" />
                <path d="M4 14.5v-5" />
                <path d="M12.772 4.786l6.121 10.202" />
                <path d="M18.5 16h-13" />
                <path d="M5.107 14.988l6.122 -10.201" />
                <path d="M12 3.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M12 20.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M4 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M4 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M20 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                <path d="M20 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
            </svg>
            <div className="dark:text-white text-lg font-medium">GrapQL</div>
        </div>

        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" />
                <path
                    d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" />
                <path d="M4.57 17.18l10.93 -10.68" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Firebase</div>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                strokeWidth="1.5" className="stroke-black dark:stroke-white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M3.667 12a8.334 8.334 0 004.697 7.5L4.388 8.607A8.3 8.3 0 003.667 12zm8.48.729l-2.501 7.265a8.337 8.337 0 005.121-.133.746.746 0 01-.06-.115l-2.56-7.017zm5.479-1.15a4.389 4.389 0 00-.687-2.298 3.903 3.903 0 01-.819-1.954 1.443 1.443 0 011.4-1.48c.037 0 .072.005.107.008a8.331 8.331 0 00-12.59 1.568c.196.006.38.01.537.01.871 0 2.22-.106 2.22-.106a.345.345 0 01.054.687s-.452.052-.954.079l3.035 9.026 1.824-5.47-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 01.053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 01.053.687s-.452.052-.953.079l3.011 8.958.86-2.725c.336-.88.54-1.806.606-2.746zm1.743-2.72a7.866 7.866 0 01-.634 2.985l-2.545 7.359a8.334 8.334 0 003.123-11.2c.038.283.056.57.056.856zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.659 18.662a9.388 9.388 0 01-8.914-.867 9.432 9.432 0 01-3.407-4.136 9.386 9.386 0 01.867-8.914 9.427 9.427 0 014.136-3.406 9.388 9.388 0 018.914.866 9.432 9.432 0 013.407 4.136 9.386 9.386 0 01-.867 8.914 9.427 9.427 0 01-4.136 3.407z" />
            </svg>
            <div className="dark:text-white text-lg font-medium">Wordpress</div>
        </div>
    </div>
</div>
)
}
