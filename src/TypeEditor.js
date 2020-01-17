import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {deleteType, renameType} from "./actionCreators";
import LevelEditor from "./LevelEditor";

function TypeEditor({name, levels, revision = 0, typeIndex, renameType, deleteType}) {
    const onChange = e => renameType(typeIndex, e.target.value);
    return (
        <tr>
            <td className="type"><input autoFocus={true} type="text" value={name} onChange={onChange}/></td>
            {levels.map((level, index) => <LevelEditor key={revision + ':' + index} typeIndex={typeIndex} levelIndex={index}/>)}
            <td className="delete"><button onClick={() => deleteType(typeIndex)}>×</button></td>
        </tr>
    );
}

export default connect(
    (state, props) => state.types[props.typeIndex],
    {renameType, deleteType}
)(TypeEditor);
