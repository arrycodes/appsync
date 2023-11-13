import styles from './page.module.css'
import Price from "../components/prices"
import Top from '@/components/menu'
import Connect from '@/components/connect'
import Footer from '@/components/footer'
import {
  useWeb3Modal,createWeb3Modal
} from '@web3modal/wagmi/react'
import {chains, projectId, wagmiConfig} from "./providers"
//import {OpenModal} from "@/components/modals/openweb3m"


export default function Home() {



  return (
   
    <main className={styles.main}>
       <Price />
       <Top />
     
       <Connect />
     
      <div className={styles.grid}>
        <a
          href="*"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
         
        >
          <h2>
           Migration <span>-&gt;</span>
          </h2>
          <p>Find in-depth information Migration Info Click Here.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
       
        >
          <h2>
            Rectification <span>-&gt;</span>
          </h2>
          <p>Find in-depth information Migration Info Click Here.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        
        >
          <h2>
            Slippage<span>-&gt;</span>
          </h2>
          <p>Find All Slippage Error Here</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Contract Deployment Setup
          </p>
        </a>
      </div>

      <Footer />
    </main>

  )
}
