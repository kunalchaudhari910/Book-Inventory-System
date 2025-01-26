import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BookDetailsPage = () => {
    const [data, setdata] = useState([]);

    const FetchData = async() => {
        try {
            const result = await Axios.get('http://localhost:3000/books');
            // console.log(result.data);
            setdata(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        FetchData();
        
    }, []);

    const DeleteData= async (id) =>{
        toast.success(`Book Deleted successfully`);

        try {
            var res = data.filter(val=>val.id!==id)
            setdata(res);
    
            await Axios.delete(`http://localhost:3000/books/${id}`);
        } catch (error) {
            toast.error(error);
        } 
    }

    return (

        <>
            <h3 className="text-center my-2 fw-bold">Book Inventory</h3>
            <table className="table table-bordered border-0 table-hover table-striped table-responsive-sm text-center">
                <thead className="fw-bold">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Date</th>
                        <th>Publisher</th>
                        <th>Overview</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.author}</td>
                                        <td>{val.publishedDate}</td>
                                        <td>{val.publisher}</td>
                                        <td>{val.overview}</td>
                                        <td><i className="fa fa-trash fw-bold text-danger" onClick={()=>DeleteData(val.id)}></i></td>
                                        <td><NavLink to={`/EditDetails/${val.id}`}><i className="fa fa-edit fw-bold text-success"></i></NavLink></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
};

export default BookDetailsPage;
