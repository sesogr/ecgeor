import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {renameType} from "./actions";

function TypeEditor({name, levels, index, renameType}) {
    const onChange = e => renameType(index, e.target.value);
    return (
        <tr>
            <td className="type"><input autoFocus={true} type="text" value={name} onChange={onChange}/></td>
            <td className="delete"><button tabIndex={-1}>×</button></td>
        </tr>
    );
}

export default connect(
    (state, props) => state.types[props.index],
    {renameType}
)(TypeEditor);
