import styles from '@/app/page.module.css'
import Image from 'next/image'
import IG from "../../public/images/ig.png"
import FB from "../../public/images/fb.png"
import twit from "../../public/images/twit.png"
const Footer = () => {

const handleClick = () => {


}

    return (

 <div className='mt-10'>
    <div className={`float-start`}>
<span> Privacy Policy</span>
<br />
<span>Term & Conditions </span>
<div className='mt-4'>Copyright 2023, Decentralised App </div>
</div>
<br />
<div className="float-end">
    <span className='mx-4'><Image role="button" src={FB} alt='Facebook' height={20} width={20} className='img-c' /></span>
    <span className='mx-4'> <Image role="button" src={IG} alt='Instagram Icon' height={20} width={20} className='img-c'  /></span>
    <span className='mx-4'><Image role="button" src={twit} alt='Twitter' height={20} width={20} className='img-c'  /></span>
</div>
<br/>
 </div>
    )
}

export default Footer