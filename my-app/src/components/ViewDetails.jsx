import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import '../App.css';


// debugger;
export default function ViewDetails() {

    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');


    const [tickets, setTickets] = useState(1)
    let id = useParams();
    console.log(id);

    const [movieDetails] = useState(() => {
        var arrayNew = sessionStorage.getItem('movieList')
        return JSON.parse(arrayNew).find((temp) => {
            return id.id == temp.show.id;
        });
    });

    function incrTickets() {
        setTickets(tickets + 1)
    }

    function decTickets() {
        if (tickets > 0) {
            setTickets(tickets - 1)
        }
        else {
            alert("Oops, Tickets can't be below 0 ")
        }
    }

    function formSubmited() {
        alert(`Are you Sure you want to Book tickets for ${tickets} on ${startDate} at ${value}`)
    }
    console.log(movieDetails);

    return (
        <>
            <header>
                <h1>Movie Details</h1>

            </header>

            <div className="details-div">
                <h5>Movie Name : {movieDetails.show.name}</h5>
                <br />
                <h5>Summary :{movieDetails.show.summary}
                </h5> <br />

                <h5>Premiered on: {movieDetails.show.premiered}</h5> <br />
                <img src={movieDetails.show.image.medium} alt="" style={{ width: "250px", height: "350px" }} />
            </div>

            <div className="second-div">
                <br />
                <button type="button" className="btn btn-primary book-ticket" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Tickets</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content modal-color">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Book Your Tickets</h5>
                                <button type="button" className="btn-close  date" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Movie Name</label>
                                        <input type="text" className="form-control " id="recipient-name" value={movieDetails.show.name} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Movie Run Time</label>
                                        <div >{movieDetails.show.runtime} min   </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Movie Current Status</label>
                                        <div >{movieDetails.show.status}  </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Number Of Tickets</label>
                                        &nbsp; &nbsp; &nbsp;
                                        <label >{tickets} </label> &nbsp;  &nbsp;

                                        <button type="button" className="btn btn-success counter-btn" onClick={incrTickets} >+</button>
                                        &nbsp; &nbsp; &nbsp;
                                        <button type="button" className="btn btn-danger counter-btn" onClick={decTickets}>-</button>

                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Select Movie Date</label>
                                        &nbsp; &nbsp; &nbsp;
                                        <label htmlFor="">
                                            <DatePicker  className="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Select Movie Time</label>
                                        &nbsp; &nbsp; &nbsp;
                                        <TimePicker onChange={onChange} className="date" value={value} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={formSubmited}>Confirm Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
