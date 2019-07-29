import React from 'react'

//presentation componentn
export default function Counter(props) {
    return (
        <div className="container">
            Count:{props.count}
            <button className="btn btn-primary btn-5m" onClick={props.increment}>+</button>
            <button className="btn btn-danger btn-5m" onClick={props.decrement}>-</button>
        </div>

    );
}