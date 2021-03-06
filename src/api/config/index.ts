import axios from 'axios'

export const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	withCredentials: true,
})

export const instanceHeroku = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true,
})
