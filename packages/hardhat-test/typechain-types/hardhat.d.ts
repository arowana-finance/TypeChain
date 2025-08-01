/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "StructsInConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.StructsInConstructor__factory>;
    getContractFactory(
      name: "Hello",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Hello__factory>;
    getContractFactory(
      name: "Demo",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Demo__factory>;
    getContractFactory(
      name: "Counter",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Counter__factory>;

    getContractAt(
      name: "StructsInConstructor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.StructsInConstructor>;
    getContractAt(
      name: "Hello",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Hello>;
    getContractAt(
      name: "Demo",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Demo>;
    getContractAt(
      name: "Counter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Counter>;

    deployContract(
      name: "StructsInConstructor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.StructsInConstructor>;
    deployContract(
      name: "Hello",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Hello>;
    deployContract(
      name: "Demo",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Demo>;
    deployContract(
      name: "Counter",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Counter>;

    deployContract(
      name: "StructsInConstructor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.StructsInConstructor>;
    deployContract(
      name: "Hello",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Hello>;
    deployContract(
      name: "Demo",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Demo>;
    deployContract(
      name: "Counter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Counter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
  }
}
