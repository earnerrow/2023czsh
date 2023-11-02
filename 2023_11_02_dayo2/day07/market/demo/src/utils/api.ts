import type { AxiosRequestConfig } from 'axios'
import http from './http'
export const getregisterapi=(params: any)=> http.post('/user/m/register',params) 
export const getloginapi=(params: any)=> http.post('/user/m/login',params)
export const getcodeapi=(params: any)=>http.get('/verification/sms/get',{params}) 
// 
export const getmyinfoapi=(params: any)=>http.get('/user/detail',{params})
export const getimagecodeapi=(params: any)=>http.get('/verification/pic/gett',{params})
export const getbannerapi=(params: AxiosRequestConfig<any> | undefined)=>http.get('/banner/list',params) 

export const getlistapi=(params: any)=>http.post('/shop/goods/list/v2',params) 
//  shop/goods/reputation/v2

export const getdetailapi=(params: any)=>http.post('/shop/goods/reputation/v2',params)
//  
export const getuserapi=(params: any)=>http.get('/user/detail',params)
// /shop/goods/category/all
export const getcateapi=(params: any)=>http.get('/shop/goods/category/all',params)
//  /shop/goods/list/v2
export const getcatesapi=(params: any)=>http.post('/shop/goods/list/v2',params) 
//  /shopping-cart/info
export const getshopapi=(params: any)=>http.get('/shopping-cart/info',{params})
//  shopping-cart/add
export const getaddshopapi=(params: any)=>http.post('shopping-cart/add',params)
//  
export const getdeleteapi=(params: any)=>http.post('/shopping-cart/remove',params)