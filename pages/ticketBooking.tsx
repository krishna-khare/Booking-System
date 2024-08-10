// pages/ticketBooking.tsx
import React from 'react';
import TicketBookingForm from '../components/TicketBookingForm';
import styles from '../styles/TicketBooking.module.css'; // Make sure to create this CSS file

const TicketBookingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Ticket Booking</h1>
      <TicketBookingForm />
    </div>
  );
};

export default TicketBookingPage;
