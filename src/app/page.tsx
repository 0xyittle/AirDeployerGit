'use client'

//* compiler version 0.8.26
//* optimize 200

import React, { useState } from "react"
import { Button, Input, Typography } from "antd"
import { useEthersSigner } from "@/utils/ethers";
import { ethers } from 'ethers';

import { abi } from "@/contractdata/abi"; 
import { byteV826 } from "@/contractdata/bytecode/bytecode-v8-26";
import { byteV824 } from "@/contractdata/bytecode/bytecode-v8-24";

import { useAccount } from "wagmi";

/*
  * Note ABI + BYTE

  * == Normal Version ==
  * == byteV826

  * == byteV824 ==
  * - Bera Chain
  * 

*/

export default function Home() {

  const { Title } = Typography;
  const { chainId } = useAccount()
  console.log('chainId 1: ', chainId)

  const [name, setName] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [mintPrice, setMintPrice] = useState<number>(0)
  const [uri, setURI] = useState<string>('')
  const [startDate, setStartDate] = useState<number>(0)
  const [endDate, setEndDate] = useState<number>(0)
  const [maxSupply, setMaxSupply] = useState<number>(0)
  const [maxPerWallet, setMaxPerWallet] = useState<number>(0)

  const [isDeploy, setIsDeploy] = useState<boolean>(false)

  const [byteReal, setByte] = useState<any>(byteV826)

  const signer = useEthersSigner()

  async function ByteRouter() {

    // BeraTestnet = 80085
    if(chainId == 80085) {
      return byteV824 ;
    }
    else {
      return byteV826 ;
    }

  }

  const deployContract = async () => {
    console.log("name : ", name)
    console.log("token : ", token)
    console.log("mintPrice : ", mintPrice)
    console.log("uri : ", uri)
    console.log("startDate : ", startDate)
    console.log("endDate : ", endDate)
    console.log("maxSupply : ", maxSupply)
    console.log("maxPerWallet : ", maxPerWallet)

    try {

      setIsDeploy(true)
      // let json = {}

      let bytecode = await ByteRouter() ; 

      const factory = new ethers.ContractFactory(abi, bytecode, signer);
      const contract = await factory.deploy(name,token,mintPrice,uri,startDate,endDate,maxSupply,maxPerWallet);
      // const txReceipt = await deploy.deploymentTransaction().wait();

      // const tx = await factory.getDeployTransaction()

      // console.log("tx : ", tx)

    }catch (error) {
      console.log("error : ",error)

    }finally {
      setIsDeploy(false)
    }

  }

  return (
    <>
      
      <Title>AirDeployer</Title>

      <Title level={5} className="mt-3">Select Chain</Title>
      <w3m-button />

      <Title level={5} className="mt-3">Collection name</Title>
      <Input 
        placeholder='Collection name'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      <Title level={5} className="mt-3">Token $ABC</Title>
      <Input 
        placeholder='Token $ABC'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setToken(e.target.value)
        }}
      />

      <Title level={5} className="mt-3">MintPrice wei</Title>
      <Input 
        placeholder='MintPrice wei'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setMintPrice(Number(e.target.value))
        }}
      />

      <Title level={5} className="mt-3">BaseURI</Title>
      <Input 
        placeholder='BaseURI'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setURI(e.target.value)
        }}
      />

      <Title level={5} className="mt-3">StartDate UnixTimeStamp (0 = Start Now) </Title>
      <Input 
        placeholder='StartDate UnixTimeStamp'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setStartDate(Number(e.target.value))
        }}
      />

      <Title level={5} className="mt-3">EndDate UnixTimeStamp (0 = infinity)</Title>
      <Input 
        placeholder='EndDate UnixTimeStamp'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setEndDate(Number(e.target.value))
        }}
      />

      <Title level={5} className="mt-3">MaxSupply (0 = infinity)</Title>
      <Input 
        placeholder='MaxSupply (0 = infinity)'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setMaxSupply(Number(e.target.value))
        }}
      />

      <Title level={5} className="mt-3">MaxPerWallet (0 = infinity)</Title>
      <Input 
        placeholder='MaxPerWallet (0 = infinity)'
        className="margin-5"
        size='large'
        onChange={(e) => {
          setMaxPerWallet(Number(e.target.value))
        }}
      />

      <Button block className="mt-6 mb-10" onClick={()=> {deployContract()}}>Deploy Contract</Button>


    </>
)
}
