import React, { useState } from 'react';
import '../assets/bookingcard.css';
import { Card, CardContent, Typography, CardActions, Button, Select, MenuItem } from '@mui/material';

const BookingCards = () => {
    const [bookings, setBookings] = useState([
        {
            bookingId: 1,
            organizerId: 101,
            userName: 'John Doe',
            submissionDate: '2024-07-01',
            eventDate: '2024-08-01',
            description: 'Annual Conference',
            bookingStatus: 'Pending',
            eventType: 'Conference',
            headCount: 150,
            amount: 5000
        },
        {
            bookingId: 2,
            organizerId: 102,
            userName: 'Jane Smith',
            submissionDate: '2024-07-05',
            eventDate: '2024-08-10',
            description: 'Workshop',
            bookingStatus: 'Verified',
            eventType: 'Workshop',
            headCount: 50,
            amount: 2000
        },
        {
            bookingId: 3,
            organizerId: 103,
            userName: 'Alice Johnson',
            submissionDate: '2024-07-10',
            eventDate: '2024-09-15',
            description: 'Music Festival',
            bookingStatus: 'Confirmed',
            eventType: 'Festival',
            headCount: 500,
            amount: 15000
        }
    ]);

    const [editId, setEditId] = useState(null);

    const handleStatusChange = (id, status) => {
        const updatedBookings = bookings.map(booking =>
            booking.bookingId === id ? { ...booking, bookingStatus: status } : booking
        );
        setBookings(updatedBookings);
    };

    const handleEditClick = (id) => {
        setEditId(id);
    };

    const handleSaveClick = () => {
        setEditId(null);
    };

    return (
        <div>
            <div className="aheader">
                <div className='anavbar-sub'>
                   
                    <a href="/homeadmin">All Events</a>
                    <a href="/addevent">Add Event</a>
                    <a href="/bookevent">All Bookings</a>
                </div>
                <div className="common">
                    <h1>Admin Dashboard~All Bookings</h1>
                </div>
            </div>
            <div className="cards">
                {bookings.map((booking) => (
                    <Card className="booking-card" key={booking.bookingId}>
                        <CardContent>
                            <Typography variant="body1" gutterBottom>
                                Booking ID: {booking.bookingId}
                            </Typography>
                            <Typography variant="body1">
                                Organizer ID: {booking.organizerId}
                            </Typography>
                            <Typography variant="body1">
                                User Name: {booking.userName}
                            </Typography>
                            <Typography variant="body1">
                                Submission Date: {booking.submissionDate}
                            </Typography>
                            <Typography variant="body1">
                                Event Date: {booking.eventDate}
                            </Typography>
                            <Typography variant="body1">
                                Description: {booking.description}
                            </Typography>
                            <Typography variant="body1">
                                Event Type: {booking.eventType}
                            </Typography>
                            <Typography variant="body1">
                                Head Count: {booking.headCount}
                            </Typography>
                            <Typography variant="body1">
                                Amount: Rs.{booking.amount}
                            </Typography>
                            <Typography variant="body1">
                                Booking Status:
                                {editId === booking.bookingId ? (
                                    <Select
                                        value={booking.bookingStatus}
                                        onChange={(e) => handleStatusChange(booking.bookingId, e.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        sx={{ marginLeft: '10px' }}
                                    >
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="Verified">Verified</MenuItem>
                                        <MenuItem value="Confirmed">Confirmed</MenuItem>
                                    </Select>
                                ) : (
                                    <span style={{ marginLeft: '10px' }}>{booking.bookingStatus}</span>
                                )}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {editId === booking.bookingId ? (
                                <Button size="small" onClick={handleSaveClick}>Save</Button>
                            ) : (
                                <Button size="small" onClick={() => handleEditClick(booking.bookingId)}>Edit</Button>
                            )}
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BookingCards;