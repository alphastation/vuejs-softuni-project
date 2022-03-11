export const getItem = (key) => {

    try {
        JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error('Error in getting data from storage!', err)
        return null
    }
}
export const setItem = (key, data) => {

    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
        console.error('Error in setting data to localStorage!', err)

    }
}