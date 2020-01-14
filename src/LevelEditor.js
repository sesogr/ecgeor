import React from 'react';
import './App.css';
import {connect} from "react-redux";

function LevelEditor({max, price, typeIndex, levelIndex}) {
    const format = (n, p) => {
        const [, head, tail] = Math.trunc(n).toString().match(/^(\d+?)((?:\d{3})*)$/);
        const result = parseInt(head) ? head + tail.replace(/(...)/g, '.$1') + ',' + (n * parseFloat('10e+' + p)).toString().substr(-p - 1, p) : '';
        console.log(n, p, head, tail, result);
        return result;
    };
    return (
        <td className="level">
            <button tabIndex={-1}>×</button>
            <div className="max">
                <input type="text" placeholder={'unbegrenzt'} pattern={'^\\d{1,3}((\\.\\d{3})*|(\\d{3})*)(,\\d{1,3})?$'} value={format(max, 1)}/>
                <div className="unit">kWh</div>
            </div>
            <div className="price">
                <input type="text" placeholder={'0'} pattern={'^\\d{1,3}((\\.\\d{3})*|(\\d{3})*)(,\\d{1,3})?$'} value={format(price, 3)}/>
                <div className="unit">¢/kWh</div>
            </div>
        </td>
    );
}

export default connect(
    (state, props) => state.types[props.typeIndex].levels[props.levelIndex],
    {}
)(LevelEditor);
