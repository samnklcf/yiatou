import React from 'react';
import { ContentHeaderNotif, linkImg, NavigationDemandeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Compte = () => {
    // const { compte } = useParams();
    return (
        <div className='page page-compte'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Mon compte" link="#" />
            </Header>
            <main className="body">
                <div className="user-contente">
                    <div className="fond-compte-user">
                        <div className="user">
                            <img src={linkImg + "assets/image/f-compte.jpg"} alt="fond compte" />
                            <div className="form-user">
                                <img src={linkImg + "assets/image/dave.jpg"} alt="user" />
                            </div>
                        </div>
                        <div className="data-user">
                            <p className="nom">Dave Anguilet Walker</p>
                            <p className="mail">dave@gmail.com</p>
                            <Link to="/user/demandeur">Mes cordonnees</Link>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <Link to="#">Aide</Link>
                    <Link to="#">A propos</Link>
                    <Link to="/business">Espace Business</Link>
                    <Link to="#">Conditions de vente</Link>
                    <Link to="#">Conditions d'utilisation</Link>
                    <Link to="#">Politique de vente du site</Link>
                    <Link to="#">Politique de confidentialité</Link>
                </div>
            </main>
            <Navigation menu="home">
                <NavigationDemandeur active="compte" />
            </Navigation>
        </div>

    );
};

export default Compte;