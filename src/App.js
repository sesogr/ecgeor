import React from 'react';
import './App.css';
import {connect} from "react-redux";
import TypeEditor from "./TypeEditor";
import {addType} from "./actionCreators";

function App({types, addType}) {
    const exclude = types.map(t => t.name);
    const createTypeEditor = e => {
        if (exclude.indexOf(e.target.value) < 0) {
            addType(e.target.value);
            e.target.value = '';
        }
    };
    return (
        <table id="d486574ef229">
            <tbody>
            {types.map((type, index) => <TypeEditor key={index + type.name} typeIndex={index} exclude={exclude}/>)}
            <tr>
                <td className="type new">
                    <input placeholder="neuer Typ" type="text" onChange={createTypeEditor}/>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default connect(
    state => ({types: state.types}),
    {addType}
)(App);
