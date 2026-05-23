import { motion } from "framer-motion";

import {
FaPython,
FaNodeJs,
FaGitAlt,
FaGithub,
FaHtml5,
FaCss3Alt,
FaJs,
} from "react-icons/fa";

import {
SiMongodb,
SiCplusplus,
SiTailwindcss,
SiMysql,
SiScikitlearn
} from "react-icons/si";

const techStack=[

{
name:"Python",
icon:<FaPython size={28}/>
},

{
name:"C++",
icon:<SiCplusplus size={28}/>
},

{
name:"HTML",
icon:<FaHtml5 size={28}/>
},

{
name:"CSS",
icon:<FaCss3Alt size={28}/>
},

{
name:"JavaScript",
icon:<FaJs size={28}/>
},

{
name:"Node.js",
icon:<FaNodeJs size={28}/>
},

{
name:"MongoDB",
icon:<SiMongodb size={28}/>
},

{
name:"MySQL",
icon:<SiMysql size={28}/>
},

{
name:"Tailwind",
icon:<SiTailwindcss size={28}/>
},

{
name:"Git",
icon:<FaGitAlt size={28}/>
},

{
name:"GitHub",
icon:<FaGithub size={28}/>
},

{
name:"ML",
icon:<SiScikitlearn size={28}/>
}

];

function Skills(){

return(

<section
id="skills"
className="min-h-screen px-6 py-20"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12">
Skills
</h2>

<div className="flex flex-wrap justify-center gap-8">

{techStack.map((tech,index)=>(

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
scale:1.1,
rotate:5
}}

transition={{
duration:0.4
}}

className="
w-36
h-36
rounded-3xl
bg-white/5
backdrop-blur-lg
border
border-white/10
shadow-xl
flex
flex-col
justify-center
items-center
gap-4
cursor-pointer
hover:bg-blue-500/10
"

>

<div>
{tech.icon}
</div>

<p>
{tech.name}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Skills;