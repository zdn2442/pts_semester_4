import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {

  return (
    <React.Fragment>
      <div className="">
        <div className="h-[100%] bg-[#404258] p-5 flex justify-between">
          <div className="h-10 w-52 bg-slate-400 text-center py-[5px] rounded">
            <p className="">Aplikasi Pembayaran SPP</p>
          </div>
          <div className="flex space-x-3">
            <div>
              <p>Nama User</p>
              <p className="text-xs">role</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-300"></div>
          </div>
        </div>
        <div className=" h-screen bg-[#50577A] px-32 py-7">
          <h1 className="text-[30px] font-bold text-slate-300">Dashboard</h1>
          <div className="w-52 h-32 bg-slate-400 rounded mt-3 p-3 cursor-pointer hover:shadow-md hover:shadow-neutral-300">
            <p className="text-xl font-bold text-[#404258] ">History</p>
          </div>
          <div className="h-9 bg-slate-300 mt-6 rounded "></div>
        </div>
      </div>
    </React.Fragment>
  );
}
