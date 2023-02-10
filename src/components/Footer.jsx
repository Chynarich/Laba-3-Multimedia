import React from 'react';

function footer(props)
{
    return(
        <div className=" d-flex flex-column align-items-left">
            <button className="footer__block-tilte">{props.title}</button>
                {props.blocks.map((value, k) => (
                    <button className="footer__names" key={k}>{value}</button>
                ))}
        </div>
    )
}

export default footer;