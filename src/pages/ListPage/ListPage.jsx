import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListPage = () => {

  const [state, setState] = useState([]);

  const { id } = useParams();

  useEffect( () => {
axios.get(`https://acb-api.algoritmika.org/api/movies/list/${id}`).then(res=>setState(res.data.movies))
  }, [id]);
  return (
    <div className="list-page">
      {state?.map((item) => {
        return (
          
          <button className="animated-button">
            <a href={`https://www.imdb.com/title/${item.id}`} target='_blank'>
           
            <span className="text">{item.title} ({item.year})</span>
            <span className="circle"></span>
            <div>MMMMMMMMM</div>
            
            </a>
          </button>
        );
      })}
    </div>
  );
};

export default ListPage;
