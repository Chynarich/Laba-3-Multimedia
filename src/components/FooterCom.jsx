import React from 'react';
import Footer from './Footer.jsx';
import staticFooter from '../img/footer.json';

function FooterCom()
{
    return(
        <footer>
        <div className="container">
          <div className="footer__block d-flex justify-content-between">
                {staticFooter.map((obj) => (
                        <Footer key={obj.id} {...obj}/>
                ))}
          </div>
          <div className='footer-line'></div>
          <p className='footer-date'>2019-2022</p>
        </div>
      </footer>   
    )
}

export default FooterCom;