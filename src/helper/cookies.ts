import Cookies from 'universal-cookie'

const cookies = new Cookies();

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

export const setUserData = (payload : Payload) => {
    cookies.set('gces-lms-user', JSON.stringify(payload));
}
export const removeUserData = () => {
    cookies.remove('gces-lms-user');
}
export const getUserData = () => JSON.parse(cookies.get('gces-lms-user'));

export const getAccessToken = () => {
    const  {accessToken} = JSON.parse(cookies.get('gces-lms-user'));
    return accessToken;
}
export const getUserId = () => {
    const {id} = JSON.parse(cookies.get('gces-lms-user'));
    return id;
}