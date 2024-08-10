import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Guest {
  name: string;
  age: number;
}

interface GuestState {
  guests: Guest[];
  tickets: any[];
}

const initialState: GuestState = {
  guests: [],
  tickets: [],
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    addGuest: (state, action: PayloadAction<Guest>) => {
      state.guests.push(action.payload);
    },
    clearGuests: (state) => {
      state.guests = [];
    },
    calculateTotalAmount: (state) => {
      const total = state.guests.reduce((sum, guest) => {
        if (guest.age <= 2) return sum;
        if (guest.age > 2 && guest.age < 18) return sum + 100;
        if (guest.age >= 18 && guest.age < 60) return sum + 500;
        if (guest.age >= 60) return sum + 300;
        return sum;
      }, 0);
      state.tickets.push({ id: state.tickets.length + 1, guests: state.guests, total });
    },
  },
});

export const { addGuest, clearGuests, calculateTotalAmount } = guestSlice.actions;
export default guestSlice.reducer;
