"use client";
import { useState } from "react";
export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    let dog = { name, breed, age };
    console.log(dog);
  };
  const handelNameChange = (e) => {
    newName = e.target.value;
    if (newName > 0) {
      setName(newName);
    }
  };
  const handelBreedChange = (e) => {
    newBreed = e.target.value;
    if (newBreed > 0) {
      setBreed(newBreed);
    }
  };
  const handelAgeChange = (e) => {
    newAge = e.target.value;
    let newAgeNum = parseInt
    if (newAge >= 0) {
      setAge(newAge);
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handelNameChange}
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => handelBreedChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => handelAgeChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {name.length === 10 && (
            <p>Name must be exactly 10 characters or less</p>
        )}
        {name.length > 0 && <p>The Dogs name is </p>}
      </div>
    </div>
  );
}
