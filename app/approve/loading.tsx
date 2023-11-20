import Image from "next/image"

export default function Loading() {
   
    return <div className="text-center" data-bs-theme="dark"> 
<Image src="https://images.app.goo.gl/gV3rUjzqoGaChvq17" width={100} height={100} 
className="rounded mx-auto d-block" alt="Image loader" />
    </div>
  }