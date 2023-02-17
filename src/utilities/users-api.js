import { getToken } from './users-services'
const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function logIn(credentials) {
    return sendRequest(BASE_URL + '/login', 'POST', credentials)

}

export default async function sendRequest(url, method = 'GET', payload = null) {
	const options = { method }
	if (payload) {
		// set headers for content if there's a payload
		options.headers = { 'Content-Type': 'application/json' }
		options.body = JSON.stringify(payload)
	}
    // if there's a token include it in the request
const token = getToken()
if (token) {
    // make sure we have headers on our options
    options.headers = options.headers || {}
    // add in our token with an authorization header
    options.headers.Authorization = `Bearer ${token}`
    // Make sure to capitalize Authorization
}

    const res = await fetch(url, options)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Bad Request')
    }
}

export async function checkToken() {
    return sendRequest(BASE_URL + '/check-token')
}
