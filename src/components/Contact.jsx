import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
FaGithub,
FaLinkedin,
FaFileDownload
} from "react-icons/fa";

function Contact() {

const form=useRef();

const [sent,setSent]=useState(false);

const sendEmail=(e)=>{

e.preventDefault();

emailjs.sendForm(

import.meta.env.VITE_SERVICE_ID,

import.meta.env.VITE_TEMPLATE_ID,

form.current,

import.meta.env.VITE_PUBLIC_KEY

)

.then(()=>{

setSent(true);

form.current.reset();

setTimeout(()=>{

setSent(false);

},3000)

})

.catch((error)=>{

console.log(error);

})

}

return(

<section
id="contact"
className="px-6 py-28"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12">
Contact Me
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* LEFT */}

<motion.div

initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
"
>

<h3 className="text-2xl font-bold mb-8">
Let's Connect 🚀
</h3>

<div className="flex flex-col gap-5">

<a
href="/resume.pdf"
download
className="
flex
items-center
gap-4
p-4
rounded-xl
bg-black/20
hover:translate-x-2
duration-300
"
>

<FaFileDownload/>

Resume

</a>

<a
href="https://github.com/Devvasanka123"
target="_blank"
className="
flex
items-center
gap-4
p-4
rounded-xl
bg-black/20
hover:translate-x-2
duration-300
"
>

<FaGithub/>

GitHub

</a>

<a
href="https://linkedin.com/in/dev-vasanka-bb6520369"
target="_blank"
className="
flex
items-center
gap-4
p-4
rounded-xl
bg-black/20
hover:translate-x-2
duration-300
"
>

<FaLinkedin/>

LinkedIn

</a>

</div>

</motion.div>

{/* RIGHT */}

<motion.form

ref={form}

onSubmit={sendEmail}

initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
space-y-5
"

>

<input

type="text"
name="from_name"
placeholder="Your Name"

required

className="
w-full
p-4
rounded-xl
bg-black/20
outline-none
"
/>

<input

type="email"
name="from_email"
placeholder="Your Email"

required

className="
w-full
p-4
rounded-xl
bg-black/20
outline-none
"
/>

<textarea

name="message"

placeholder="Your Message"

rows="5"

required

className="
w-full
p-4
rounded-xl
bg-black/20
outline-none
"
/>

<button

type="submit"

className="
w-full
py-4
rounded-xl
bg-linear-to-r
from-blue-500
to-purple-600
hover:scale-105
duration-300
"

>

Send Message

</button>

{sent && (

<p className="text-green-400">

Message sent successfully 🚀

</p>

)}

</motion.form>

</div>

</div>

</section>

)

}

export default Contact;