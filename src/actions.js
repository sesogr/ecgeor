export function addType(name) {
    return {
        type: 'ADD_TYPE',
        payload: {name}
    };
}
export function renameType(index, newName) {
    return {
        type: 'RENAME_TYPE',
        payload: {index, newName}
    };
}
