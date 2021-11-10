import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentSection from '../AppointmentSection/AppointmentSection';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <AppointmentSection></AppointmentSection>
        </div>
    );
};

export default Home;