import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

function Loader(){

const [loading,setLoading]=useState(true);

useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},2500)

return ()=>clearTimeout(timer)

},[])

if(loading){

return(

<div
className="
fixed
inset-0
bg-[#0F172A]
flex
justify-center
items-center
z-999
"
>

<HashLoader size={70}/>

</div>

)

}

return null;

}

export default Loader;