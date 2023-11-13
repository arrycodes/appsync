import { useWeb3Modal } from '@web3modal/wagmi/react'

export  function OpenModal() {

const { open, close } = useWeb3Modal()

open()

}