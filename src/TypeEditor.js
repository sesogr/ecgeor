import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeDefaultStateOfType, deleteType, renameType} from "./actionCreators";
import LevelEditor from "./LevelEditor";

function TypeEditor({name, defaultActive, levels, revision = 0, typeIndex, renameType, deleteType, changeDefaultStateOfType, exclude}) {
    return (
        <tr>
            <td className="type"><input autoFocus={true} type="text" value={name} onChange={e => renameType(typeIndex, e.target.value)}/></td>
            <td className="flag">
                <label title="Standardmäßig aktiv?">
                    aktiv?<br/>
                    <input type="checkbox" defaultChecked={defaultActive} onChange={e => changeDefaultStateOfType(typeIndex, e.target.checked)}/>
                </label>
            </td>
            {levels.map((level, index) => <LevelEditor key={revision + ':' + index} exclude={levels.map(l => l.max)} typeIndex={typeIndex} levelIndex={index}/>)}
            <td className="delete"><button onClick={() => deleteType(typeIndex)} tabIndex={-1}>×</button></td>
        </tr>
    );
}

export default connect(
    (state, props) => state.types[props.typeIndex],
    {renameType, deleteType, changeDefaultStateOfType}
)(TypeEditor);
