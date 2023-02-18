import React from 'react';
import { ActueleArticle } from './Conposants';

const Actuelle = () => {
    return (
        <div className='actuelle'>
            <ActueleArticle reaction={10} />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle nom='Add Pro' />
            <ActueleArticle prix={180000} reaction={20} />
        </div>
    );
};

export default Actuelle;