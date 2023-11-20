"use client"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
// import { BCon } from './wallet'

interface Props {
    title: string,
    message: string

}

const BoxMsg = (prop: Props) => {

    const {title, message} = prop
    const modal = useWeb3Modal()
    const {isConnected } = useAccount()
    const handleClick = (e: Event) => {

        if(!isConnected)
     {   e.preventDefault()
        modal.open()
}
    } 

    return (
<div className='col mx-10 h-100 w-100' role="button">
 <div className="card" onClick={(e) => handleClick(e)}>  
  <div className="card-body" >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{message}</p>
  </div>
</div>
        </div>
    )
}

export default BoxMsg