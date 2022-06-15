export const getFromLocal = (key) => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(key))
} 

export const saveToLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
