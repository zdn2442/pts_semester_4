import React from "react";
import Input from '../../module/input'
import Button from '../../module/button'
import {useNavigate} from 'react-router-dom'

export default function LoginSiswa() { 
  let navigate = useNavigate()

  const handleClick = () => {
    return navigate("/login-petugas", {replace:true})
  }

  return (
    <React.Fragment>
      <div className="drop-shadow-xl w-full h-screen pt-36 bg-gradient-to-l from-[#6B728E] via-[#6B728E] to-[#474E68]">
        <div className="flex ml-[38%]">
          <div className="w-20 h-[375px] bg-slate-300 rounded-l-md p-3 text-center">
            <h1 className="text-[#474E68] font-bold">Login</h1>
            <h1 className="text-[#474E68] font-bold">Sebagai</h1>
            
            <h3 className="text-[#474E68] mt-6 cursor-pointer" onClick={handleClick}>Petugas</h3>
            <h3 className="mt-3 bg-[#474E68] w-16 h-8 text-center py-1 rounded mr-2 text-slate-300">Siswa</h3>
          </div>
          <div className=" bg-[#474E68] w-[40%] h-4/5  rounded-r-md p-12">
            <h1 className="text-slate-300 text-xl font-bold">Pembayaran SPP</h1>
            <Input className="w-full h-8 mt-16 rounded bg-slate-300 p-2" placeholder="NISN" />
            <Input className="w-full h-8 mt-6 rounded bg-slate-300 p-2" type="password" placeholder="NIS" />
            <Button className="w-full h-8 rounded bg-slate-300 mt-[68px] text[#474E68]" title={"Login"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}