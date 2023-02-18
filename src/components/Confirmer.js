import React from 'react';
import { ConfirmeArticle } from './Conposants';
// import { Link } from 'react-router-dom';
// import img from '../image/nike.jpg';

const Confirmer = () => {
    return (
        <div className='confirmer'>
            <ConfirmeArticle img='nike.jpg' />
            <ConfirmeArticle prix={120000} />
            <ConfirmeArticle nom='Nike All stars' />
        </div>
    );
};

export default Confirmer;