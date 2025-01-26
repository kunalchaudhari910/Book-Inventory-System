import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios' ;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const EditDetails = () =>{


    const[title, Settitle] = useState('');
    const[author, Setauthor] = useState('');
    const[publishedDate, SetpublishedDate] = useState('');
    const[publisher, Setpublisher] = useState('');
    const[overview, Setoverview] = useState('');



    const data = useParams();
    console.log(data);

    const{id} = useParams();

    const nav = useNavigate();

    const getData = async () =>{
        var result = await Axios.get(`http://localhost:3000/books/${id}`);
        console.log(result.data);

        Settitle(result.data.title);
        Setauthor(result.data.author);
        SetpublishedDate(result.data.publishedDate);
        Setpublisher(result.data.publisher);
        Setoverview(result.data.overview);

    }

    useEffect(()=>{
        getData();
    },[])

    const UpdateData = async(e)=>{
        e.preventDefault();

        if (!title || !author || !publishedDate || !publisher || !overview) {
            toast.error("All fields are required!");
            return;
        }

        toast.success("Book Updated Successfully");

        try {
            await Axios.put(`http://localhost:3000/books/${id}`,{
                title : title,
                author : author,
                publishedDate : publishedDate,
                publisher : publisher,
                overview : overview
    
            })
    
            Settitle('');
            Setauthor('');
            SetpublishedDate('');
            Setpublisher('');
            Setoverview('');
    
            nav('/books');
        } catch (error) {
            toast.error(error);
        }

    }

    return (
        <>
            <h2 className='text-center fw-bold'>Edit Details</h2>
        <form action="" onSubmit={(e)=>UpdateData(e)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Title Of Book:</label>
                            <input type="text" name="" className="form-control" value={title} onChange={(e)=>{Settitle(e.target.value)}} placeholder="Please enter title" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Author:</label>
                            <input type="text" name="" className="form-control" value={author} onChange={(e)=>{Setauthor(e.target.value)}} placeholder="Please Enter Author Name" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Published Year:</label>
                            <input type="number" name="" className="form-control" value={publishedDate} onChange={(e)=>{SetpublishedDate(e.target.value)}} placeholder="Please Enter Year" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Publisher:</label>
                            <input type="text" name="" className="form-control" value={publisher} onChange={(e)=>{Setpublisher(e.target.value)}} placeholder="Please Enter Publisher" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Overview:</label>
                            <textarea name="" id="" cols="10" rows="5" className="form-control" value={overview} onChange={(e)=>{Setoverview(e.target.value)}} placeholder="Please Enter an Overview"></textarea>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button className="btn btn-danger fw-bold px-4">Update Details</button>
                    </div>
                    
                </div>

            </div>
        </form>
        </>
    )
}

export default EditDetails;