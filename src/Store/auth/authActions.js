import { LOGIN, LOGOUT } from "./authTypes";


export const loginReq = () => ({type : LOGIN })
export const logoutReq = () => ({type : LOGOUT })