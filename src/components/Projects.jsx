import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";

function Projects(){

return(

<section
id="projects"
className="min-h-screen px-6 py-20"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12">
Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

whileHover={{
scale:1.05
}}

transition={{
duration:0.4
}}

className="
relative
rounded-3xl
bg-white/5
backdrop-blur-lg
border
border-white/10
p-6
overflow-hidden
"

>

{project.featured && (

<div
className="
absolute
top-4
right-4
text-xs
bg-blue-500
px-3
py-1
rounded-full
"
>

Featured

</div>

)}

<h3 className="text-2xl font-bold mb-4">
{project.title}
</h3>

<p className="text-gray-400 mb-6">
{project.description}
</p>

<div className="flex flex-wrap gap-2 mb-6">

{project.tech.map((item,i)=>(

<span
key={i}
className="
px-3
py-1
rounded-full
bg-black/30
text-sm
"
>

{item}

</span>

))}

</div>

<a
href={project.github}
target="_blank"
className="
inline-flex
items-center
gap-2
text-blue-400
"
>

<FaGithub/>

GitHub

</a>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Projects;