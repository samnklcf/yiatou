import React from 'react';
import { ContentHeaderNotif, ItemNotifications } from '../components/Conposants';
import Header from '../components/Header';

const Notifications = () => {
    return (
        <div className='page rose page-notif'>
            <Header classPage="business">
                <ContentHeaderNotif texte="Notifications" bool={false} />
            </Header>
            <main className="body">
                <ItemNotifications texets="Felicitations ! Vous venez de gagner une livraison gratuite. cliquez pour en savoir plus." checked={true} />
                <ItemNotifications texets="Felicitations ! Vous venez de gagner une livraison gratuite. cliquez pour en savoir plus." />
                <ItemNotifications texets="Felicitations ! Vous venez de gagner une livraison gratuite. cliquez pour en savoir plus." checked={true} />
                <ItemNotifications texets="Felicitations ! Vous venez de gagner une livraison gratuite. cliquez pour en savoir plus." />
            </main>
        </div>
    );
};

export default Notifications;