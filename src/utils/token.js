

const setToken = (token) => {
    return window.localStorage.setItem('token', token)
}

const getToken = () => {
    return window.localStorage.getItem('token')
}

const delToken = () => {
    return window.localStorage.removeItem('token')
}

export {
    setToken,
    getToken,
    delToken
}