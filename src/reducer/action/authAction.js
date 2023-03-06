import Cookies from "js-cookie";
import {loginPetugas, loginSiswa} from '../../api/auth'

export const authLoginPetugas = (payload) => {
    return async (dispatch) => {
        try {
            let response = await loginPetugas(payload)
            let data = response.data
            console.log("ini data", data);
            dispatch({
                type: "login",
                nama: data?.data?.namaPetugas,
                nis: data?.data?.nis,
                isAuth: true
            })
            Cookies.set("myapps_token", data?.token)
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export const authLoginSiswa = (payload) => {
    return async (dispatch) => {
        try {
            let response = await loginSiswa(payload)
            let data = response.data
            console.log("ini data", data);
            dispatch({
                type: "login",
                nama: data?.data?.nama,
                nis: data?.data?.nis,
                isAuth: true
            })
            Cookies.set("myapps_token", data?.token)
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}