import { Types } from "aptos"
import { formatParam, formatType } from "hooks/formatting"
import { textCopy } from "utils"

const format_type_arg = (type_args: string[]) => {

    return type_args.map((type_arg) => {
        const addr = type_arg.split("::")[0]

    })
}


const EntryTxnArgs = ( payload :Types.TransactionPayload_EntryFunctionPayload) => {
    return (
        <div className="flex flex-row m-2 justify-between outline outline-2  rounded-md bg-opacity-40">
            <div className="p-2">
                <p className="text-center text-xl font-semibold">script args</p>
                <div className="flex flex-col items-start">
                {payload.arguments.map((arg, index) => {
                    return <button
                    data-tip={arg}
                    onClick={()=>textCopy(arg)}
                    key={index}>{formatParam(arg)}</button>
                })}
                </div>
            </div>
            <div className=" bg-white p-2 text-black opacity-80">
                <p className="text-center text-xl font-semibold">arg types</p>
                {payload.type_arguments.map((type_arg, index) => {
                    return <button onClick={()=>textCopy(type_arg)} key={type_arg+index}>{formatType(type_arg)}</button>
                })}
            </div>
        </div>)
}


export default EntryTxnArgs;