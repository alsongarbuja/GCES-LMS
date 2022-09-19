// import Cookies from 'universal-cookie'

// const cookies = new Cookies();

/**
 * interface for the cookie payload
 */
// interface Payload{
//     id: string,
//     name: string,
//     email: string,
//     batch?: string,
//     regNo?: string,
//     phone?: string,
//     semester?: string,
//     faculty?: string,
//     accessToken: string,
//     role: 'SYSTEM_ADMIN' | 'USER',
// }

/**
 * 
 * @param payload 
 */
// set cookies for the user data while logging in
export const setUserData = (payload) => {
    // let date: Date | string = new Date(Date.now() + 2.592e9)
    // cookies.set('gces-lms-user', JSON.stringify(payload), { expires: date });
    localStorage.setItem('gces-lms-user', JSON.stringify(payload))
}

// remove the user data cookie while logging out
export const removeUserData = () => {
    // cookies.remove('gces-lms-user');
    localStorage.removeItem('gces-lms-user')
}

// get the user data cookie
export const getUserData = () => {
    // JSON.parse(decodeURIComponent(cookies.get('gces-lms-user', { doNotParse: true })))
    return JSON.parse(localStorage.getItem('gces-lms-user'))
}

// get the access token from cookie 
export const getAccessToken = () => {
    // const cookie = cookies.get('gces-lms-user', { doNotParse: true })
    // if(cookie){
    //     const { accessToken } = JSON.parse(decodeURIComponent(cookie));
    //     return accessToken
    // }
    const data = localStorage.getItem('gces-lms-user')

    if(data){
        const { accessToken } = JSON.parse(data)
        return accessToken;
    }
    
    return null
}

// get the id from cookie
export const getUserId = () => {
    // const cookie = cookies.get('gces-lms-user', { doNotParse: true })
    // if(cookie){
    //     const { id } = JSON.parse(decodeURIComponent(cookie));
    //     return id;
    // }

    const data = localStorage.getItem('gces-lms-user')

    if(data){
        const { id } = JSON.parse(data)
        return id;
    }
    return null;
}

// get the name from cookie
export const getUserName = () => {
    // const cookie = cookies.get('gces-lms-user', { doNotParse: true })
    // if(cookie){
    //     const { name } = JSON.parse(decodeURIComponent(cookie));
    //     return name;
    // }

    const data = localStorage.getItem('gces-lms-user')

    if(data){
        const { name } = JSON.parse(data)
        return name;
    }

    return null;
}

// get the semester/level from the cookie
export const getUserLevel = () => {
    // const cookie = cookies.get('gces-lms-user', { doNotParse: true })
    // if(cookie){
    //     const { semester } = JSON.parse(decodeURIComponent(cookie));
    //     return semester;
    // }

    const data = localStorage.getItem('gces-lms-user')

    if(data){
        const { semester } = JSON.parse(data)
        return semester;
    }

    return null;
}

// get the role from the cookie
export const getUserRole = () => {
    // const cookie = cookies.get('gces-lms-user', { doNotParse: true })
    // if(cookie){
    //     const { role } = JSON.parse(decodeURIComponent(cookie));
    //     return role;
    // }

    const data = localStorage.getItem('gces-lms-user')

    if(data){
        const { role } = JSON.parse(data)
        return role;
    }

    return null;
}