function manageLocalStorage() {

    const getKeys = () => Object.keys(localStorage);
    const getKeyValueString = (key) => localStorage.getItem(key);
    const getKeyValueJSON = (key) => JSON.parse(localStorage.getItem(key));
    const storeDataAtKey = (key, value) => localStorage.setItem(key, value)

    return {getKeys, getKeyValueString, getKeyValueJSON, storeDataAtKey}
}

export {manageLocalStorage}