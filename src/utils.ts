import copy from "copy-to-clipboard";
export const truncateAddress = (address: string) => {
    if (!address) return "No Account";
    const match = address.match(
      /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };
  
  export const toHex = (num: number) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };

  export const textCopy= (txt: string) =>{
    copy(txt.toString());
  }
  