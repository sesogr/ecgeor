import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {addType} from "./actions";
import TypeEditor from "./TypeEditor";

function App({types, addType}) {
    const createTypeEditor = e => {
        addType(e.target.value);
        e.target.value = '';
    };
    return (
        <table id="d486574ef229">
            <tbody>
            {types.map((type, index) => <TypeEditor key={index} index={index}/>)}
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
