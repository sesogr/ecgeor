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

function types (state = [], {type, payload}) {
    switch (type) {
        case ADD_TYPE:
            return state.concat([{
                name: payload.name,
                levels: [{max: null, price: 0}],
                defaultActive: true,
                revision: 0
            }]);
        case RENAME_TYPE: return state.map((type, index) =>
            index === payload.typeIndex
                ? Object.assign({}, type, {name: payload.newName})
                : type
        );
        case CHANGE_DEFAULT_STATE_OF_TYPE:
            return state.map((type, index) =>
                index === payload.typeIndex
                    ? Object.assign({}, type, {defaultActive: payload.newDefaultActive})
                    : type
            );
        case DELETE_TYPE: return state.filter((type, index) => index !== payload.typeIndex);
        case ADD_LEVEL: return state.map((type, index) =>
            index === payload.typeIndex
                ? Object.assign(
                    {},
                    type,
                    {
                        levels: type.levels.map((level, index) =>
                            index === payload.previousLevelIndex
                                ? Object.assign({}, level, {max: payload.min})
                                : level
                        ).concat([{max: null, price: 0}])
                    }
                )
                : type
        );
        case SHIFT_LEVEL: return state.map((type, index) =>
            index === payload.typeIndex
                ? Object.assign(
                    {},
                    type,
                    {
                        levels: type.levels.slice(0, payload.levelIndex).concat(
                            Object.assign({}, type.levels[payload.levelIndex], {max: payload.newMax}),
                            payload.newMax !== null
                                ? type.levels.slice(payload.levelIndex + 1).concat(
                                    type.levels[payload.levelIndex].max === null
                                        ? [{max: null, price: 0}]
                                        : []
                                )
                                : []
                        )
                    }
                )
                : type
        );
        case REPRICE_LEVEL: return state.map((type, index) =>
            index === payload.typeIndex
                ? Object.assign(
                    {},
                    type,
                    {
                        levels: type.levels.map((level, index) =>
                            index === payload.levelIndex
                                ? Object.assign({}, level, {price: payload.newPrice})
                                : level
                        )
                    }
                )
                : type
        );
        case DELETE_LEVEL: return state.map((type, index) =>
            index === payload.typeIndex
                ? Object.assign(
                    {},
                    type,
                    {
                        levels: type.levels.length > 1
                            ? type.levels.slice(0, payload.levelIndex)
                                .concat(type.levels.slice(payload.levelIndex + 1))
                                .map((level, index, levels) => index === levels.length - 1
                                    ? Object.assign({}, level, {max: null})
                                    : level
                                )
                            : [{max: null, price: 0}],
                        revision: (type.revision || 0) + 1
                    }
                )
                : type
        );
        default: return state;
    }
}

export default function calcGauApp(state = {}, action) {
    return {
        types: types(state.types, action)
    };
}
