import React from 'react';

const block1 = ["Kodak", "Fujifilm", "Fomapan"];


function footer ()
{
    return(
        <footer>
            <div className="container">

                    <div className="footer__block d-flex">
                        <div className="footer__block-1 d-flex flex-column align-items-left">
                            <button className="footer__block-tilte">Каталог</button>
                            {block1.map((value, i) => (
                                <button className="footer__names" key={i}>{value}</button>
                            ))}
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default footer;