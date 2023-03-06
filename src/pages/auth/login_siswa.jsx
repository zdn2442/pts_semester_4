import React from "react";
import Input from "../../module/input";
import Button from "../../module/button";
import Select from "../../module/select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, useFormik } from "formik";
import Swal from "sweetalert2";
import { authLoginSiswa } from "../../reducer/action/authAction";

export default function LoginSiswa() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorNis, setErrorNis] = React.useState("");
  const [errorNisn, setErrorNisn] = React.useState("");
  const handleClick = () => {
    return navigate("/login-petugas", { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      nama: "",
      nis: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await dispatch(authLoginSiswa(values));
        console.log(response);
        console.log("nis nya", values.nis);
        console.log("nisn nya", values.nama);
        if (response.status === "Success") {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Berhasil Login",
          });
          return navigate("/dashboard", { replace: true });
        } else {
          Swal.fire("Error!", "Anda Tidak Bisa Login, pastikan Nama dan NIS cocok", "error");
        }
        if (!values.nis) {
          setErrorNis("Nis wajib diisi");
        } else if (values.nis.length < 10) {
          setErrorNis("Nis harus 10 karakter");
        }
        if (!values.nama) {
          setErrorNisn("Nama wajib diisi");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      // console.log(values);
    },
  });

  return (
    <React.Fragment>
      <div className="drop-shadow-xl w-full h-screen pt-36 bg-gradient-to-l from-[#6B728E] via-[#6B728E] to-[#474E68]">
        <div className="flex ml-[38%]">
          <div className="w-20 h-[375px] bg-slate-300 rounded-l-md p-3 text-center">
            <h1 className="text-[#474E68] font-bold">Login</h1>
            <h1 className="text-[#474E68] font-bold">Sebagai</h1>

            <h3 className="text-[#474E68] mt-6 cursor-pointer" onClick={handleClick}>
              Petugas
            </h3>
            <h3 className="mt-3 bg-[#474E68] w-16 h-8 text-center py-1 rounded mr-2 text-slate-300">Siswa</h3>
          </div>
          <div className=" bg-[#474E68] w-[40%] h-4/5  rounded-r-md p-12">
            <h1 className="text-slate-300 text-xl font-bold">Pembayaran SPP</h1>
            <form onSubmit={formik.handleSubmit}>
              <Input className="w-full h-8 mt-16 rounded bg-slate-300 p-2" placeholder="Nama" onChange={formik.handleChange} value={formik.values.nama} name={"nama"}/>
              <p className="text-red-500">{errorNisn}</p>
              <Input className="w-full h-8 mt-6 rounded bg-slate-300 p-2" placeholder="NIS" onChange={formik.handleChange} value={formik.values.nis} name={"nis"}/>
              <p className="text-red-500">{errorNis}</p>
              {/* <Select className="w-full h-8 mt-6 rounded bg-slate-300 p-2">
                <option>Select your role</option>
                <option value="admin">Administrator</option>
                <option value="petugas">Petugas</option>
                <option value="siswa">Siswa</option>
              </Select> */}
              <Button className="w-full h-8 rounded bg-slate-300 mt-[68px] text-[#474E68]" title={"Login"} type={"submit"}/>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
