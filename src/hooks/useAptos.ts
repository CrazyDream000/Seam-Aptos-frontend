import { AptosClient, AptosAccount, FaucetClient, BCS, Types, TxnBuilderTypes, HexString, TokenClient,CoinClient } from "aptos";
import { coins } from "data/coins/coin_data";

import { BaseContract } from "ethers";
import { type } from "os";
import { aSwap } from "./useAnime";
import { aptinSupplyPayload } from "./useAptin";
const DEV_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const TEST_NODE_URL = "https://fullnode.testnet.aptoslabs.com";
const MAINNET_NODE_URL = "https://fullnode.mainnet.aptoslabs.com";

const urls = {
    dev: DEV_NODE_URL,
    test: TEST_NODE_URL,
    mainnet: MAINNET_NODE_URL,

};

const tClient = new AptosClient(TEST_NODE_URL);
const dClient = new AptosClient(DEV_NODE_URL);
const mClient = new AptosClient(MAINNET_NODE_URL);
// const faucetClient = new FaucetClient(DEV_NODE_URL, FAUCET_URL);
const tokenClient = new TokenClient(mClient);
const clients = {
    "Mainnet":mClient,
    "Testnet":tClient,
    "Devnet":dClient
}
export const aptStats =async (client=mClient) => {
    const coin = (await client.getAccountResource(new HexString("0x1"),"aptos_coin::AptosCoin"))
    console.log("COIN", coin)
    const supply_handle = (coin as any).supply as any
    console.log("SUPPLY HANDLE", supply_handle)
    return coin

    
}


export const useClient = (nodeUrl:string=MAINNET_NODE_URL)=>{
    if(nodeUrl==TEST_NODE_URL){
        return tClient;
    }
    if(nodeUrl==MAINNET_NODE_URL){
        return mClient;
    }
    if(nodeUrl==DEV_NODE_URL){
        return dClient;
    }
    return mClient;
}

export function getClient(network:string)  {
    if (network == "Mainnet") {
        return mClient;
    }
    if (network == "Testnet") {
        return tClient;
    }
    if (network == "Devnet") {
        return dClient;
    }
    
}

export const useTokenClient = (client:AptosClient=mClient)=>{
    return new TokenClient(client);
}

export const useCoinClient = (client:AptosClient=mClient)=>{
    return new CoinClient(client);
}

// export const loadTokens = async (client:AptosClient=mClient)=>{
//     const tokenClient = useTokenClient(client);
//     const tokens = await tokenClient;
//     return tokens;
// }

export const loadCoins = async (client:AptosClient=mClient)=>{
    // const coinClient = useCoinClient(client);
    const coin_data = coins.map(async (coin) => {
        const addr = coin.type.split("::")[0];
        const module = coin.type.split("::")[1];
        const c_name = coin.type.split("::")[2];
        const cd = await client.getAccountResource(new HexString(addr), module + "::" + c_name);
        return { addr, module, c_name, cd, coin };
    });
    return  coin_data;

}



export const loadValidators =async (client=mClient) => {
    const validatorInfo = (await client.getAccountResource(new HexString("0x1"),"0x1::stake::ValidatorPerformance"))
    const validatorSet = (await client.getAccountResource(new HexString("0x1"),"0x1::stake::ValidatorSet"))
    const defaultConfig = (await client.getAccountResource(new HexString("0x1"), "0x1::staking_config::StakingConfig"))
    console.log("Validator info",validatorInfo)
    console.log("Validator Set",validatorSet)


    return {validatorInfo,validatorSet,defaultConfig}
}
export const loadCoin = async (coin:any,client=mClient) => {
    // const coinType = coin.address + "::" + coin.module + "::" + coin.types[0];
    const coinType = "0x1::aptos_coin::AptosCoin";
    const coin_info_type = "0x1::coin::CoinStore<" + coin.address + "::" + coin.module + "::" + coin.types[0] + ">"; 
    console.log("Loading coin: ", coinType)
    const coinInfo = (await client.getAccountResource(new HexString(coin.address), coin_info_type)) as Types.MoveResource
    console.log(coinInfo)
    return coinInfo
}

// export const loadCoinList = async (coin_list:any[]) => {
//     let coin_list_data = [];
//     for (let i = 0; i < coin_list.length; i++) {
//         const coin = coin_list[i];
//         const coin_data = await loadCoin(coin);
//         coin_list_data.push(coin_data)
//     }
//     return coin_list_data
    
// }



export const mintCollection = async () => {}


// export const mintWagmi = async (account: AptosAccount) => {
//     const payload = {
//         type: "script_function_payload",
//         function: `${WAGGY_ADDY}`,
//     }
// }

export const loadPool = (pool:any) =>{
    if(pool.platform==="liquidSwap"){
        console.log("Start Loading pontem");
        // const pont =
    }

    if(pool.platform==="Anime.swap"){
        console.log("Start Loading anime");
        // const a = aSwap( 
        // const animePool = 

    }

    // for deployments of econia orderbooks
    if(pool.platform==="Econia"){
        console.log("Start Loading econia");
    }

    if(pool.platform==="Aptin"){
        console.log("Start Loading Aptin");
    }

    if(pool.platform==="Hippo"){
        console.log("Start Loading Hippo");
    }
}


export const sendTransaction = async (
    toAddr:string,
    sender:string,
    mod:string,
    func:string,
    generic_type_params: string[],
    args: any[]
    ) =>{
// Generate a transaction
const account = await window.martian.connect();
const f = `${toAddr}::${mod}::${func}`
// const func = 
// const sender = response.address;
const payload = {
    type: "entry_function_payload",
    function: f,
    type_arguments: generic_type_params,
    arguments: args,
};
const default_options = {
    sender: sender,
    sequence_number: account.sequence_number,
    max_gas_amount: "6000",
    // gas_unit_price: "1",
    // gas_currency_code: "XUS",
    // Unix timestamp, in seconds + 10 seconds
    expiration_timestamp_secs: (Math.floor(Date.now() / 1000) + 10).toString(),
  }

console.log("OPTIONS",default_options);

const transactionRequest = await window.martian.generateTransaction(sender, payload,default_options);
const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
// console.log(transactionRequest);
// console.log(txnHash);
};

export const sendPayload = async () => {}
//     sender:string,
//     payload:Types.EntryFunctionPayload
//     ) =>{
//         console.log("start send payload", payload,sender)
    
// // Generate a transaction
// const account =- await window.martian.connect();
// // const func = 
// // const sender = response.address;


// const default_options = {
//     sender: sender,
//     sequence_number: account.sequence_number,
//     max_gas_amount: "6000",
//     // gas_unit_price: "1",
//     // gas_currency_code: "XUS",
//     // Unix timestamp, in seconds + 10 seconds
//     expiration_timestamp_secs: (Math.floor(Date.now() / 1000) + 10).toString(),
//   }

// console.log("OPTIONS",default_options);

// const transactionRequest = await window.martian.generateTransaction(sender, payload,default_options);
// const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
// console.log(transactionRequest);
// console.log(txnHash);
// };



export const stringToHex= (text: string) => {
    const encoder = new TextEncoder();
    const encoded = encoder.encode(text);
    return Array.from(encoded, (i) => i.toString(16).padStart(2, "0")).join("");
  }

export const loadModules = async (address: string,client=mClient) => {
    const modules = await client.getAccountModules(new HexString(address)) as Types.MoveModuleBytecode[];
    return modules;
}

export const loadResources = async (address: string,client=mClient) => {
    const modules = await client.getAccountResources(new HexString(address)) as Types.MoveResource[];
    return modules;

}
