"use client"

export default function PlansSection() {
return (
<section id="plans" className="py-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Plan 3: Accompagnement Mobile */}
        <div
            className="dark:bg-[#161D1F] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
                <h3 className="text-2xl font-semibold dark:text-white mb-4">Accompagnement Mobile</h3>
                <p className="text-lg dark:text-white mb-6">
                    Boostez votre carrière de développeur mobile avec un accompagnement complet pour maîtriser les
                    technologies mobiles les plus demandées.
                </p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold dark:text-white">10$ / h</span>
                </div>
            </div>
        </div>

        {/* Plan 1: Accompagnement Reconversion */}
        <div
            className="dark:bg-[#161D1F] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
                <h3 className="text-2xl font-semibold dark:text-white mb-4">Initiation ou Reconversion</h3>
                <p className="text-lg dark:text-white mb-6">
                    Initiation ou reconversion dans le développement. Je vous guide pas à pas dans chaque étape pour
                    réussir votre changement de carrière.
                </p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold dark:text-white">20$ / h</span>
                </div>
            </div>
        </div>

        {/* Plan 2: Accompagnement Web */}
        <div
            className="dark:bg-[#161D1F] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
                <h3 className="text-2xl font-semibold dark:text-white mb-4">Accompagnement Web</h3>
                <p className="text-lg dark:text-white mb-6">
                    Accompagnement complet pour les développeurs web : des bases aux technologies avancées, je vous aide
                    à exceller dans le développement web.
                </p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold dark:text-white">10$ / h</span>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
