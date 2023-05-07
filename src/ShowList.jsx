import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShowList.css"

const ShowList = () => {
    const [showList, setShowList] = useState([]);
  
    useEffect(() => {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => setShowList(data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <div>
        <h2>Tv Shows</h2>
        <div className="grid-container">
          {showList.map((show) => (
            <div className="column" key={show.id}>
              <div className="container">
                <h3>{show.name}</h3>
                <img src={show.image.medium} alt={show.name} />
                <h6>Language: {show.language}</h6>
                <h6>Genres: {show.genres.join(", ")}</h6>
                <h6>Status: {show.status}</h6>
                <Link to={`/shows/${show.id}`}>
                  <button>View Summary</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ShowList;