import styles from '../page.module.css'
import Price from "@/components/prices"
import Top from '@/components/menu'
import ApproveP from '@/components/connect/app'
import Footer from '@/components/footer'
import sync from "@/utils/sync.json"
import BoxMsg from '@/components/box'



export default function Home() {
const r1 = sync.slice(0,4)
const r2 = sync.slice(4,8)
const r3 = sync.slice(8)
 
  return (
   
    <main className={`container`} data-bs-theme="dark">
       <Price />
       <Top />
       <ApproveP />
      <div className="row">
        {
          r1.map((item,index) => 
<BoxMsg title={item.title} message={item.message} key={index} />
          )
        }
       
        
      </div>

      <div className="row">
        {
          r2.map((item,index) => 
<BoxMsg title={item.title} message={item.message} key={index} />
          )
        }
       
        
      </div>

      <div className="row">
        {
          r2.map((item,index) => 
<BoxMsg title={item.title} message={item.message} key={index} />
          )
        }
       
        
      </div>


      <Footer />
    </main>

  )
}
