import React from 'react';
import CompanyComponent from './Company.jsx';
import companyBd from '../img/company.json';

function CompanyCom(){
    return(
        <div className='company__bg'>
            <div className='container'>
                <div className='d-flex'>
                    {companyBd.map((obj) => (
                        <CompanyComponent key={obj.id} {...obj} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompanyCom;