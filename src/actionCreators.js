import {ADD_TYPE, RENAME_TYPE} from "./actionTypes";

export function addType(name) {
    return {
        type: ADD_TYPE,
        payload: {name}
    };
}
export function renameType(typeIndex, newName) {
    return {
        type: RENAME_TYPE,
        payload: {typeIndex, newName}
    };
}
