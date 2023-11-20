import styles from './page.module.css'
import Price from "../components/prices"
import Top from '@/components/menu'
import Connect from '@/components/connect'
import Footer from '@/components/footer'
import { useWeb3Modal,createWeb3Modal} from '@web3modal/wagmi/react'
import {chains, projectId, wagmiConfig} from "./providers"
import sync from "@/utils/sync.json"
import BoxMsg from '@/components/box'
//import {OpenModal} from "@/components/modals/openweb3m"


export default function Home() {

  const handleClick = () => {

    alert("Clicked")
  }
  return (
   
    <main className={`container`} data-bs-theme="dark">
       <Price />
       <Top />
       <Connect />
      <div className={styles.grid}>
        {
          sync.map((item,index) => 
<BoxMsg title={item.title} message={item.message} key={index} />
          )
        }
       
        
      </div>

      <Footer />
    </main>

  )
}
