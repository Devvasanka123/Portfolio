import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {

const [dark,setDark]=useState(() => {
  if (typeof window === "undefined") return true;
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" ? false : true;
});

useEffect(()=>{
  if(dark){
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
  else{
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");
  }
},[dark]);

return(

<button

onClick={()=>setDark(!dark)}

className="
fixed
bottom-6
right-6
z-50
p-4
rounded-full
bg-white/80 dark:bg-white/10
backdrop-blur-xl
border
border-gray-200 dark:border-white/20
text-gray-800 dark:text-gray-200
shadow-xl hover:scale-110 active:scale-95
transition-all duration-300
"

>

{dark ? <FaSun/> : <FaMoon/>}

</button>

)

}

export default ThemeToggle;