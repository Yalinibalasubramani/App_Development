import React from 'react';
import '../assets/admin.css';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
const Admin = () => {
    return (
        <div>
            <div className="aheader">
                <div className='anavbar-sub'>
                    {/* <img id="image-57-6" alt="logo" src="https://eliteevents.in/wp-content/uploads/2023/12/logo3.png" class="ct-image" /> */}
                    <a href="/homeadmin">All Events</a>
                    <a href="/addevent">Add Event</a>
                    <a href="/bookevent">All Bookings</a>
                </div>
                <div className="common">
                    <h1>Admin Dashboard~All Events</h1>
                </div>
            </div>
            <div className='eventlist'>
                <div>
                    <h3>Event Lists</h3>
                </div>
                <div className='cards'>
                    <Card className="event-card">
                        <CardContent>
                            <Typography variant="body1" gutterBottom>
                                Event ID: 1
                            </Typography>
                            <Typography variant="body1" component="div">
                                Event Type: Demo1
                            </Typography>
                            <Typography variant="body1">
                                Description: xyz
                            </Typography>
                            <Typography variant="body1">
                                Total Packages: Rs.10,0000
                                <br />
                                Participation Count: 75
                                <br />
                                Charges: Rs.3000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                    <Card className="event-card">
                        <CardContent>
                            <Typography variant="body1" gutterBottom>
                                Event ID: 2
                            </Typography>
                            <Typography variant="body1" component="div">
                                Event Type: Demo2
                            </Typography>
                            <Typography variant="body1">
                                Description: abc
                            </Typography>
                            <Typography variant="body1">
                                Total Packages: Rs.10,0000
                                <br />
                                Participation Count: 50
                                <br />
                                Charges: Rs.2000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                    <Card className="event-card">
                        <CardContent>
                            <Typography variant="body1" gutterBottom>
                                Event ID: 3
                            </Typography>
                            <Typography variant="body1" component="div">
                                Event Type: Demo3
                            </Typography>
                            <Typography variant="body1">
                                Description: pqr
                            </Typography>
                            <Typography variant="body1">
                                Total Packages: Rs.20,0000
                                <br />
                                Participation Count: 200
                                <br />
                                Charges: Rs.5000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Admin;
