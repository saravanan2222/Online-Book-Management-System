import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import "./ShowBook.css";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="topdiv-show">
      <BackButton />
      <h1 className="h1class-show">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="div1-show">
          <div className="extra">
            <div className="div2-show">
              <div className="divclass-show">Id</div>
              <div className="data">{book._id}</div>
            </div>
            <div className="div2-show">
              <div className="divclass-show">Title</div>
              <div className="data">{book.title}</div>
            </div>
            <div className="div2-show">
              <div className="divclass-show">Author</div>
              <div className="data">{book.author}</div>
            </div>
            <div className="div2-show">
              <div className="divclass-show">Publish Year</div>
              <div className="data">{book.publishYear}</div>
            </div>
            <div className="div2-show">
              <div className="divclass-show">Create Time</div>
              <div className="data">{new Date(book.createdAt).toString()}</div>
            </div>
            <div className="div2-show">
              <div className="divclass-show">Last Update Time</div>
              <div className="data">{new Date(book.updatedAt).toString()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
