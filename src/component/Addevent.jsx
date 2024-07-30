import React, { useState } from "react";
import '../assets/addevent.css';
import { Button } from "@mui/material";
const Addevent = () => {
    const [data,setdata]=useState({
        eventType:"",
        desc:"",
        package:"",
        count:"",
        charges:""
    })
    const [error,setError]=useState();
    const handleType = (e) =>{
        setdata({...data,eventType:e.target.value});
    }
    const handledesc = (e) =>{
        setdata({...data,desc:e.target.value});
    }
    const handlepackage = (e) =>{
        setdata({...data,package:e.target.value});
    }
    const handlecount = (e) =>{
        setdata({...data,count:e.target.value});
    }
    const handlecharges = (e) =>{
        setdata({...data,charges:e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (validate(data)) {
            alert("Event added to event list");
            setError("");
        }
    }
    const validate = (e) => {
        let isValid = true;
        let errormsg = "";
        if (!e.eventType) {
            isValid = false;
            errormsg = "Event Type is required";
        } else if (!e.desc) {
            isValid = false;
            errormsg = "Event Description is required";
        } else if (!e.package) {
            isValid = false;
            errormsg = "Total Package is required";
        } else if (!e.count) {
            isValid = false;
            errormsg = "Participant Count is required";
        } else if (!e.charges) {
            isValid = false;
            errormsg = "Charges is required";
        }
        setError(errormsg);
        return isValid;
    }
    return(
        <div>
            <div className="aheader">
                <div className='anavbar-sub'>
                   
                    <a href="/homeadmin">All Events</a>
                    <a href="/addevent">Add Event</a>
                    <a href="/bookevent">All Bookings</a>
                </div>
                <div className="common">
                    <h1>Admin Dashboard~Add Event</h1>
                </div>
            </div>
            <div className="eventform">
                <form type="submit" className="addeveform" onSubmit={handleSubmit}>
                    <h2>Add Event</h2>
                    <div className="type">
                        <label htmlFor="type">Event Type</label>
                        <input type="text" id="type" onChange={handleType}></input>
                    </div>
                    <div className="desc">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" onChange={handledesc}></textarea>
                    </div>
                    <div className="package">
                        <label htmlFor="package">Total Package</label>
                        <input type="number" id="package" onChange={handlepackage}></input>
                    </div>
                    <div className="count">
                        <label htmlFor="count">Participants Count</label>
                        <input type="number" id="count" onChange={handlecount}></input>
                    </div>
                    <div className="charges">
                        <label htmlFor="charges">Charges</label>
                        <input type="number" id="charges" onChange={handlecharges}></input>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <Button type="submit">Add Event</Button>
                </form>
            </div>
        </div>
    )
}
export default Addevent;