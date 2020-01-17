import {
    ADD_LEVEL,
    ADD_TYPE,
    CHANGE_DEFAULT_STATE_OF_TYPE,
    DELETE_LEVEL,
    DELETE_TYPE,
    RENAME_TYPE,
    REPRICE_LEVEL,
    SHIFT_LEVEL
} from "./actionTypes";

export function addType(name) {
    return {
        type: ADD_TYPE,
        payload: {name}
    };
}

export function changeDefaultStateOfType(typeIndex, newDefaultActive) {
    return {
        type: CHANGE_DEFAULT_STATE_OF_TYPE,
        payload: {typeIndex, newDefaultActive}
    };
}

export function renameType(typeIndex, newName) {
    return {
        type: RENAME_TYPE,
        payload: {typeIndex, newName}
    };
}

export function deleteType(typeIndex) {
    return {
        type: DELETE_TYPE,
        payload: {typeIndex}
    };
}

export function addLevel(typeIndex, previousLevelIndex, min) {
    return {
        type: ADD_LEVEL,
        payload: {typeIndex, previousLevelIndex, min}
    };
}

export function shiftLevel(typeIndex, levelIndex, newMax) {
    return {
        type: SHIFT_LEVEL,
        payload: {typeIndex, levelIndex, newMax}
    };
}

export function repriceLevel(typeIndex, levelIndex, newPrice) {
    return {
        type: REPRICE_LEVEL,
        payload: {typeIndex, levelIndex, newPrice}
    };
}

export function deleteLevel(typeIndex, levelIndex) {
    return {
        type: DELETE_LEVEL,
        payload: {typeIndex, levelIndex}
    };
}
