import { motion } from "framer-motion";

const focusItems=[

{
title:"Currently Building ⚡",
main:"Machine Learning",
sub:"Python • Scikit-learn • Data Processing"
},

{
title:"Learning 📚",
main:"AI Fundamentals",
sub:"Model Training • Data Cleaning"
},

{
title:"Next Goal 🎯",
main:"ML Projects",
sub:"Recommendation Systems • Prediction Models"
},

{
title:"Status 🔥",
main:"Active Learning Mode",
sub:"Building + Experimenting"
}

]

function MLJourney(){

return(

<section
id="journey"
className="px-6 py-28"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12">
Current Focus
</h2>

<div className="grid md:grid-cols-2 gap-8">

{focusItems.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

whileHover={{
y:-10
}}

transition={{
duration:0.5
}}

viewport={{
once:true
}}

className="
relative
overflow-hidden
rounded-3xl
p-8
bg-white/5
backdrop-blur-xl
border
border-white/10
shadow-2xl
"

>

<div
className="
absolute
top-0
right-0
w-40
h-40
bg-blue-500/10
rounded-full
blur-3xl
"
/>

<p className="text-blue-400 mb-4">
{item.title}
</p>

<h3
className="
text-3xl
font-bold
mb-4
"
>
{item.main}
</h3>

<p className="text-gray-400">
{item.sub}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default MLJourney;