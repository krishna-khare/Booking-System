import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import TicketBookingForm from '../components/TicketBookingForm';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const router = useRouter();

  const handleDiscoverMore = () => {
    router.push('/ticketBooking');
  };

  return (
    <>
    <Header /> {/* Use Header component */}
    <div className={styles.container}>
      <LandingPage />
      <div id="ticketBookingSection" className={styles.ticketBookingSection}>
        <TicketBookingForm />
      </div>
    </div>
    </>
  );
};

export default Home;
