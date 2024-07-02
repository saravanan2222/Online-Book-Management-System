import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        console.log(res.data.data); 
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <div className="cont">
        <h1 className="h1Class">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="add" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="tabledec">
          <thead>
            <tr>
              <th className="th1">No</th>
              <th className="th1">Title</th>
              <th className="th1 max-md-hidden">Author</th>
              <th className="th1 max-md-hidden">Pusblish Year</th>
              <th className="th1">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="tr1">
                <td className="td1">{index + 1}</td>
                <td className="td1">{book.title}</td>
                <td className="td1 max-md-hidden">{book.author}</td>
                <td className="td1 max-md-hidden">{book.publishYear}</td>
                <td className="td1">
                  <div className="linkclass">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="bs-circle text1" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="ai text1" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="md text1" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;

