import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';



export default function DashBoard() {

    const [movieData, setMovieData] = useState([])
    let count=1;

    async function getData() {
        let resp = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        console.log(resp.data);
        setMovieData(resp.data);

        sessionStorage.setItem('movieList',JSON.stringify(resp.data))

    }


    useEffect(() => {
        getData();
        
    }, [])

  


    return (
        <>

            <header>
                <h1>Movie Data App</h1>
            </header>

            <main>
                <table className="table  table-data ">
                    <thead>
                        <tr>
                            <th scope="col">Serial Number</th>
                            <th scope="col">Id No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gener</th>
                            <th scope="col">Premiered</th>
                            <th scope="col">Poster</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>

                    <tbody >

                        {
                            movieData.map((currentVal, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{count++} </td>
                                        <td>{currentVal.show.id}</td>
                                        <td>{currentVal.show.name}</td>
                                        <td>{currentVal.show.genres[0]}</td>
                                        <td>{currentVal.show.premiered}</td>
                                        <td><img src={currentVal.show.image.medium} alt=""  style={{width:"150px",height:"150px"}}  /></td>
                                        <td><NavLink exact to={`/view/${currentVal.show.id}`} type="button" className="btn btn-info" className="view-data" > View</NavLink></td>
                                       
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </main>

        </>
    )
}
