import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGuest, calculateTotalAmount, clearGuests } from '../store/guestSlice';
import TicketCard from './TicketCard';
import styles from './TicketBookingForm.module.css';

const TicketBookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(0);
  const dispatch = useDispatch();
  const guests = useSelector((state: any) => state.guest.guests);
  const tickets = useSelector((state: any) => state.guest.tickets);

  const handleAddGuest = () => {
    if (name.trim() && age >= 0) {
      dispatch(addGuest({ name, age }));
      setName('');
      setAge(0);
    }
  };

  const handleGetTickets = () => {
    dispatch(calculateTotalAmount());
    dispatch(clearGuests());
  };

  return (
    <div className={styles.ticketBookingContainer}>
      <div className={styles.formTitle}>Book Your Ticket</div>
      <div className={styles.formField}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.label}>Age</label>
        <input
          type="number"
          className={styles.input}
          value={age !==undefined ? age: ' '}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleAddGuest}>Add Guest</button>
        <br>
        </br>
        <br></br>
        <button className={styles.button} onClick={handleGetTickets}>Get Tickets</button>
      </div>
      <div className={styles.ticketSection}>
        {tickets.map((ticket, index) => (
          <TicketCard ticket={ticket} showGuests={false} />
        ))}
      </div>
    </div>
  );
};

export default TicketBookingForm;
