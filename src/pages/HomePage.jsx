import React, { Component } from "react";
import  Axios  from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



class HomePage extends Component {

    constructor()
    {
        super();

        this.state = ({
            "title": "", 
            "author": "", 
            "publishedDate": "", 
            "publisher": "", 
            "overview": ""
        })
    }
    

    saveForm = async (e) =>{
        e.preventDefault();
            
        const { title, author, publishedDate, publisher, overview } = this.state;
        if (!title || !author || !publishedDate || !publisher || !overview) {
            toast.error("All fields are required!");
            return;
        }

        toast.success("Book Added Successfully");
        console.log(this.state);
        this.props.navigate("/books");  

        try {
            await Axios.post('http://localhost:3000/books', this.state);

            this.setState({
                title: "", 
                author: "", 
                publishedDate: "", 
                publisher: "", 
                overview: ""
              }); 
        } catch (error) {
            toast.error(error);
        }
        

        
    }



    render(){
    return (
        <>
            <h2 className="text-center fw-bold">Home Page</h2>
        <form action="" onSubmit={(e)=>this.saveForm(e)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Title Of Book:</label>
                            <input type="text" name="" className="form-control" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} placeholder="Please enter title" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Author:</label>
                            <input type="text" name="" className="form-control" value={this.state.author} onChange={(e)=>this.setState({author:e.target.value})} placeholder="Please Enter Author Name" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Published Year:</label>
                            <input type="number" name="" className="form-control" value={this.state.publishedDate} onChange={(e)=>this.setState({publishedDate:e.target.value})} placeholder="Please Enter Year" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Publisher:</label>
                            <input type="text" name="" className="form-control" value={this.state.publisher} onChange={(e)=>this.setState({publisher:e.target.value})} placeholder="Please Enter Publisher" />
                        </div>
                    </div>
                    
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label htmlFor="" className="fw-bold">Overview:</label>
                            <textarea name="" id="" cols="10" rows="5" className="form-control" value={this.state.overview} onChange={(e)=>this.setState({overview:e.target.value})} placeholder="Please Enter an Overview"></textarea>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button className="btn btn-danger fw-bold px-4">Add Book</button>
                    </div>
                    
                </div>

            </div>
        </form>
        </>
    )
    }
};

export default function WithNavigate(props) {
    const navigate = useNavigate();
    return <HomePage {...props} navigate={navigate} />;
}