import Image from "next/image"
import loader from "../public/images/loader.gif"
export default function Loading() {
   
    return <div className="text-center" data-bs-theme="dark"> 
<Image src={loader} width={100} height={100} 
className="rounded mx-auto d-block" alt="Image loader" />
    </div>
  }