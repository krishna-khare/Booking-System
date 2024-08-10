import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styles from './TicketCard.module.css';

interface TicketCardProps {
  ticket: {
    id: number;
    guests: { name: string; age: number }[];
    total: number;
  };
  showGuests: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, showGuests }) => {
    const {guests = [], total} = ticket;
  const [show, setShow] = useState(showGuests);

  const generateQRCodeData = () => {
    const guestDetails = (guests || []).map(
      (guest) => `${guest.name}, Age: ${guest.age}`
    ).join(' | ');

    return `Guest Details: ${guestDetails}\nTotal Amount: INR ${total}`;
  };


  return (
    <div className={styles.ticketCard}>
      <h1 className={styles.ticketTitle}>Ticket #{ticket.id}</h1>
      <p className={styles.ticketTotal}>Total Guests: {ticket.guests.length}</p>
      <p className={styles.ticketTotal}>Total Amount: INR {ticket.total}</p>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Guests' : 'Show Guests'}
      </button>
      {show && (
        <div className={styles.guestList}>
          {ticket.guests.map((guest, index) => (
            <p key={index}>
              {guest.name}, Age: {guest.age}
            </p>
          ))}
        </div>
      )}
    <div className={styles.qrCode}>
    <QRCode value={generateQRCodeData()} />
  </div>
  <p>Total Amount: INR {total}</p>
</div>
  );
};

export default TicketCard;
