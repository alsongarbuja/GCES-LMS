import Cookies from 'universal-cookie'

const cookies = new Cookies();

/**
 * interface for the cookie payload
 */
interface Payload{
    id: string,
    name: string,
    email: string,
    batch?: string,
    regNo?: string,
    phone?: string,
    semester?: string,
    faculty?: string,
    accessToken: string,
}

/**
 * 
 * @param payload 
 */
// set cookies for the user data while logging in
export const setUserData = (payload : Payload) => {
    let date: Date | string = new Date(Date.now() + 2.592e9)
    cookies.set('gces-lms-user', JSON.stringify(payload), { expires: date });
}

// remove the user data cookie while logging out
export const removeUserData = () => {
    cookies.remove('gces-lms-user');
}

// get the user data cookie
export const getUserData = () => JSON.parse(decodeURIComponent(cookies.get('gces-lms-user', { doNotParse: true })))

// get the access token from cookie 
export const getAccessToken = () => {
    const  {accessToken} = JSON.parse(decodeURIComponent(cookies.get('gces-lms-user', { doNotParse: true })));
    return accessToken;
}

// get the id from cookie
export const getUserId = () => {
    const {id} = JSON.parse(decodeURIComponent(cookies.get('gces-lms-user', { doNotParse: true })));
    return id;
}