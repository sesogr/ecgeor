function types (state = [], {type, payload}) {
    switch (type) {
        case 'ADD_TYPE': return [
            ...state,
            {name: payload.name, levels: []}
        ];
        case 'RENAME_TYPE': return state.map((type, index) =>
            index === payload.index
                ? Object.assign({}, type, {name: payload.newName})
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
