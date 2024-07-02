import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DeleteBook.css'
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();


  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Sucessfully", { variant: "success" });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error); 
      })
  }
  return (
    <div className='topdiv-del'>
      <BackButton />
      <h1 className='h1class-del'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='div1-del'>
        <h3 className='h3class-del'>Are you sure you want to delete this book?</h3>
        <button className='buttonclass-del' onClick={handleDeleteBook}>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default DeleteBook