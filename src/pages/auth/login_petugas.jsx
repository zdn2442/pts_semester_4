import React from "react";
import Input from "../../module/input";
import Button from "../../module/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { authLogin, authLoginPetugas } from "../../reducer/action/authAction";
import Swal from "sweetalert2";

export default function LoginPetugas() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorUsername, setErrorUsername] = React.useState("");
  const [payload, setPayload] = React.useState({
    nama: "",
    nis: "",
  });

  const handleClick = () => {
    return navigate("/login-siswa", { replace: true });
  };

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authLoginPetugas(payload));
      console.log(response);
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
        Swal.fire("Error!", "Anda Tidak Bisa Login, pastikan username dan password cocok", "error");
      }
      if (payload.password === "") {
        setErrorPassword("Password wajib diisi");
      } else if (payload.password.length < 8) {
        setErrorPassword("Password harus 8 karakter");
      }
      if (payload.username === "") {
        setErrorUsername("Username wajib diisi");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    setPayload(() => {
      return {
        nama: "",
        nis: "",
      };
    });
    console.log("running", payload);
  };

  return (
    <React.Fragment>
      <div className="drop-shadow-xl w-full h-screen pt-36 bg-gradient-to-l from-[#6B728E] via-[#6B728E] to-[#474E68]">
        <div className="flex ml-[38%]">
          <div className="w-20 h-[375px] bg-slate-300 rounded-l-md p-3 text-center">
            <h1 className="text-[#474E68] font-bold">Login</h1>
            <h1 className="text-[#474E68] font-bold">Sebagai</h1>
            <h3 className="mt-7 bg-[#474E68] w-16 h-8 text-center py-1 rounded mr-1 text-slate-300">Petugas</h3>
            <h3 className="text-[#474E68] mt-3 cursor-pointer" onClick={handleClick}>
              Siswa
            </h3>
          </div>
          <div className=" bg-[#474E68] w-[40%] h-4/5  rounded-r-md p-12">
            <h1 className="text-slate-300 text-xl font-bold">Pembayaran SPP</h1>
            <form onSubmit={handleSubmit}>
              <Input className="w-full h-8 mt-16 rounded bg-slate-300 p-2" placeholder="Username" name="username" onChange={handleChange} values={payload.name} />
              <p className="text-red-500">{errorUsername}</p>
              <Input className="w-full h-8 mt-6 rounded bg-slate-300 p-2" type="password" placeholder="Password" name="password" onChange={handleChange} values={payload.nis} />
              <p className="text-red-500">{errorPassword}</p>
              <h6 className="text-xs ml-[68%] mt-3 text-slate-200 cursor-pointer">Forgot Password</h6>
              <Button className="w-full h-8 rounded bg-slate-300 mt-10 text-[#474E68]" title={isLoading ? "Processing" : "Login"} />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
