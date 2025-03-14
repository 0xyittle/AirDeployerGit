"use client";

//* compiler version 0.8.26
//* optimize 200

import React, { useEffect, useState } from "react";
import { Button, Input, Typography } from "antd";
import { useEthersSigner } from "@/utils/ethers";
import { ethers } from "ethers";

import { abiVER3 } from "@/contractdata/abi-ver3";
import { byteV826VER3 } from "@/contractdata/bytecode/bytecode-v8-26-ver3";

import { useAccount } from "wagmi";

/*
  * Note ABI + BYTE

  * == Normal Version byteV826 (v.0.8.26)==
  * - ALL CHAIN Excluded below
  * 
  * RIGHT NOW CONTRACT IS VER 3

*/

export default function Home() {
  const { Title } = Typography;
  const { chainId, isConnected } = useAccount();

  const [walletChain, setWalletChain] = useState<number>(20);
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [mintPrice, setMintPrice] = useState<string>("0");
  const [uri, setURI] = useState<string>("");
  const [startDate, setStartDate] = useState<number>(0);
  const [endDate, setEndDate] = useState<number>(0);
  const [maxSupply, setMaxSupply] = useState<number>(0);
  const [maxPerWallet, setMaxPerWallet] = useState<number>(0);

  const [isDeploy, setIsDeploy] = useState<boolean>(false);

  const [byteReal, setByte] = useState<any>(byteV826VER3);

  const signer = useEthersSigner();

  useEffect(() => {
    if (chainId == undefined) {
      setWalletChain(20);
    } else {
      setWalletChain(chainId);
    }
  }, [chainId]);

  async function ByteRouter() {
    console.log("walletChain : ", walletChain);

    return byteV826VER3;
  }

  const deployContract = async () => {
    console.log("name : ", name);
    console.log("token : ", token);
    console.log("mintPrice : ", mintPrice);
    console.log("uri : ", uri);
    console.log("startDate : ", startDate);
    console.log("endDate : ", endDate);
    console.log("maxSupply : ", maxSupply);
    console.log("maxPerWallet : ", maxPerWallet);

    try {
      setIsDeploy(true);
      // let json = {}

      let bytecode = await ByteRouter();

      let weiMintPrice = Number(mintPrice) * 1000000000000000000;

      const factory = new ethers.ContractFactory(abiVER3, bytecode, signer);
      const contract = await factory.deploy(
        name,
        token,
        String(weiMintPrice),
        uri,
        startDate,
        endDate,
        maxSupply,
        maxPerWallet
      );
      // const txReceipt = await deploy.deploymentTransaction().wait();

      // const tx = await factory.getDeployTransaction()

      // console.log("tx : ", tx)
    } catch (error) {
      console.log("error : ", error);
    } finally {
      setIsDeploy(false);
    }
  };

  return (
    <>
      <Title>AirDeployer</Title>

      <Title level={5} className="mt-3">
        Select Chain
      </Title>
      <w3m-button />

      <Title level={5} className="mt-3">
        Collection name
      </Title>
      <Input
        placeholder="Collection name"
        className="margin-5"
        size="large"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Title level={5} className="mt-3">
        Token $ABC
      </Title>
      <Input
        placeholder="Token $ABC"
        className="margin-5"
        size="large"
        onChange={(e) => {
          setToken(e.target.value);
        }}
      />

      <Title level={5} className="mt-3">
        MintPrice (ETH)
      </Title>
      <Input
        placeholder="MintPrice (ETH)"
        className="margin-5"
        size="large"
        onChange={(e) => {
          setMintPrice(e.target.value);
        }}
      />

      <Title level={5} className="mt-3">
        BaseURI
      </Title>
      <Input
        placeholder="BaseURI"
        className="margin-5"
        size="large"
        onChange={(e) => {
          setURI(e.target.value);
        }}
      />

      <Title level={5} className="mt-3">
        StartDate UnixTimeStamp (0 = Start Now){" "}
      </Title>
      <Input
        placeholder="StartDate UnixTimeStamp"
        className="margin-5"
        size="large"
        type="number"
        onChange={(e) => {
          setStartDate(Number(e.target.value));
        }}
      />

      <Title level={5} className="mt-3">
        EndDate UnixTimeStamp (0 = infinity)
      </Title>
      <Input
        placeholder="EndDate UnixTimeStamp"
        className="margin-5"
        size="large"
        type="number"
        onChange={(e) => {
          setEndDate(Number(e.target.value));
        }}
      />

      <Title level={5} className="mt-3">
        MaxSupply (0 = infinity)
      </Title>
      <Input
        placeholder="MaxSupply (0 = infinity)"
        className="margin-5"
        size="large"
        type="number"
        onChange={(e) => {
          setMaxSupply(Number(e.target.value));
        }}
      />

      <Title level={5} className="mt-3">
        MaxPerWallet (0 = infinity)
      </Title>
      <Input
        placeholder="MaxPerWallet (0 = infinity)"
        className="margin-5"
        size="large"
        type="number"
        onChange={(e) => {
          setMaxPerWallet(Number(e.target.value));
        }}
      />

      <Button
        block
        className="mt-6 mb-10"
        onClick={() => {
          deployContract();
        }}
      >
        Deploy Contract
      </Button>
    </>
  );
}
