import Cookies from "js-cookie";
import axios, { syncToken } from "./base_url";

export function loginPetugas(payload) {
  return axios.post(`/login-petugas`, payload);
}

export function loginSiswa(payload) {
  return axios.post(`/login-siswa`, payload);
}

export function authMeProses() {
    syncToken();
    return axios.get("/authme");
  }