import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const lenOfPeople = people.length - 1;

  const checkNumber = (number) => {
    if (number > lenOfPeople) {
      return 0;
    }
    if (number < 0) {
      return lenOfPeople;
    }
    return number;
  };

  const chooseRandomPerson = (max) => {
    let randomIndex = Math.round(Math.random() * max);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="review image" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => chooseRandomPerson(lenOfPeople)}
      >
        Suprise me
      </button>
    </article>
  );
};

export default Review;
