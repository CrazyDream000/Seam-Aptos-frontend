import { useState, useEffect } from "react";
// import { loadUbeSubPools } from '../../hooks/useGraph';
import TokenStack from "../TokenStack.js";
import SubSeam from "./SubSeam.js";
import { useQuery } from "@apollo/react-hooks";
import BarChart from "../graphs/BarChart.js";

function SeamPool(props: any) {
  const [collapse, setCollapse] = useState("1");
  const [returns, setReturns] = useState([]);
  const [tvl, setTVL] = useState("0");
  const [tokens, setTokens] = useState([]);
  const toggle = () => {
    if (collapse === "1") {
      setCollapse("0");
    } else {
      setCollapse("1");
    }
  };

  return (
    <div key={props.i} className="">
      <div className="rounded-xl border-dashed border-white border-4 m-6">
        <div className="collapse collapse-arrow rounded-box p-1 m-1">
          <div className="collapse-title ">
            <div className="flex flex-row justify-between" onClick={toggle}>
              <div>
                <h1 className="text-3xl">{props.name}</h1>
                <TokenStack tokens={props.all_assets} i={props.i} />
              </div>
              <div className="flex flex-row justify-end gap gap-4">
                <BarChart />
                <div className="stat place-items-center">
                  <div className="stat-value">{props.avg_apr_24h}</div>
                  <div className="stat-title">apr 24h.</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value">{props.avg_apr_7d}</div>
                  <div className="stat-title">apr 7d.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>TVL: </p>
              <p>Combined Pool TVL:{tvl} </p>
              <div className="flex flex-row gap-10 justify-end">
                <div className="text-xl font-bold">
                  <button
                    onClick={() => props.toggleStakeModal()}
                    className="px-3 py-1 button-2xl m-3 bg-black rounded-lg hover:bg-white hover:text-blac outline outline-dashed outline-2"
                  >
                    Stake
                  </button>
                  <button className="px-3 py-1 m-3 bg-black rounded-lg hover:bg-white hover:text-blac outline outline-dashed outline-2">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
          {collapse === "1" ? (
            <div className="flex flex-col gap-2">
              {props.pools.map((yp: any, index: number) => {
                return (
                  <SubSeam
                    key={index}
                    i={index}
                    setReturns={setReturns}
                    yp={yp}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SeamPool;
