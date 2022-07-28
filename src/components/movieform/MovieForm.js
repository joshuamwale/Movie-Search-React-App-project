import React, { useState } from "react";

function MovieForm() {
    const [, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");


//a function to handle submissions

function handleSubmit(e) {
    e.preventDefault();
    const movieData = {
        title: title,
        img: img,
        description: description,
    };

    //console-logging(movieData)

    fetch("http://localhost:8000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
     })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));    
}
//form to call the handleSubmit event handler
  return (
    <form className="movie-form" onSubmit={handleSubmit}>
        <label>
            Title:
            <input
                type="text"
                title="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
            img
            <input
            type="href link"
            img="img"
            value={img}
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}/>
        </label>
        <label>
            Description
            <textarea
                  type="text"
                  description="description"
                  value={description}
                  placeholder="Describe your favorite movie here..." rows={5}
                  onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <input type="submit" value="Describe your favorite movie" />
    </form>
  );
}

export default MovieForm;