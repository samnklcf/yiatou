import React from 'react';
import { Carte, ContentHeaderBoutique, NavigationVendeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Boutique = () => {
    return (
        <div className='page page-boutique'>
            <Header classPage="boutique">
                <ContentHeaderBoutique />
            </Header>
            <main className="body">
                {/* --------------------------------- */}
                <Carte imgs={["nike.jpg"]} />
                <Carte imgs={["nike.jpg", "nike.jpg"]} />
                <Carte imgs={["nike.jpg", "nike.jpg", "nike.jpg"]} />
                <Carte />
                {/* ------------------------------------- */}
            </main>
            <Navigation menu="boutique">
                <NavigationVendeur active="demande" />
            </Navigation>
        </div>
    );
};

export default Boutique;