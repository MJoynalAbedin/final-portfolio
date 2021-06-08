import React from "react";
import ModernEdu from "../../../images/modernEdu.png";
import HealthyGrocery from "../../../images/healthyGrocery.png";
import MealDB from "../../../images/chicken.png";
import Friend from "../../../images/friendMakarDemo.jpg";
import "./FirstTwo.css";

const FirstTwo = () => {
  return (
    <section className="container-fluid tech-edu">
      <div className="row">
        <div className="col-md-6 education-text">
          <div className="container">
            <h1>Modern Edu BD</h1>
            <p>
              This is a modern educational website I have developed using MERN
              <br /> <br /> i) Admin <br /> ● Admin can add or delete courses{" "}
              <br />● Can see the list of all the placed orders
              <br /> ● Can make someone admin
              <br />
              <br /> ii) User
              <br /> ● Can place orders and see the list of the orders he placed
              before <br />● Can write a review, it will be dynamically visible
              at the bottom of the home page <br />● Can pay with a credit card
            </p>
            <p>
              <span className="text-warning">Technologies:</span> HTML, CSS,
              Bootstrap, React, Firebase, API, Private Route, Stripe, Node,
              Express, ImgBB, and MongoDB
            </p>
            <a
              href="https://modernedu-499b6.web.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-primary"
            >
              Live Site
            </a>{" "}
            <a
              href="https://github.com/MJoynalAbedin/modernEduBD-client"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-warning mr-1"
            >
              Client
            </a>
            <a
              href="https://github.com/MJoynalAbedin/modernEduBD-Server"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-danger"
            >
              Server
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="education">
            <img src={ModernEdu} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tech-img">
            <img src={HealthyGrocery} alt="" />
          </div>
        </div>
        <div className="col-md-6 tech-text">
          <div className="mt-5 container">
            <h1>Healthy Groceries</h1>
            <p>
              This is an e-commerce website I have developed using MERN <br />
              <br /> <span className="text-warning">Summary:</span> One can add,
              delete, or order any product if he is logged in,
              <br />
              <br /> ● The private route will redirect him to the login page{" "}
              <br />● Log in with Google <br />● User can place orders
              <br /> ● Can see the list of previous orders of him
            </p>
            <p>
              <span className="text-warning">Technologies: </span>HTML, CSS,
              Bootstrap, React, Firebase, Private Route, Node, Express, ImgBB,
              and MongoDB
            </p>
            <a
              href="https://healthy-grocery-ced4f.web.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-primary"
            >
              Live Site
            </a>{" "}
            <a
              href="https://github.com/MJoynalAbedin/healthyGroceries-Client"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-warning mr-1"
            >
              Client
            </a>
            <a
              href="https://github.com/MJoynalAbedin/healthyGroceries-Server"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-danger"
            >
              Server
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 education-text">
          <div className="container">
            <h1>Cooking Master</h1>
            <p>
              One can search any type of food in this website. <br />
              <br /> ● He will get the food list related to his search
              <br />● Can see food ingredients by clicking on the food
              <br /> ● If nothing is there he will get a message
            </p>
            <p>
              <span className="text-warning">Technologies: </span>HTML, CSS,
              Bootstrap, JavaScript, MealDB API
            </p>
            <a
              href="https://mjoynalabedin.github.io/assignment-five/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-primary"
            >
              Live Site
            </a>{" "}
            <a
              href="https://github.com/MJoynalAbedin/assignment-five"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-warning mr-1"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="education">
            <img src={MealDB} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tech-img">
            <img style={{ width: "50%" }} src={Friend} alt="" />
          </div>
        </div>
        <div className="col-md-6 tech-text">
          <div className="mt-5 container">
            <h1>Friend Maker Mobile App</h1>
            <p>
              <span className="text-warning">Features:</span> A mobile
              application to make friends globally. Was a group project (2
              Members) <br />
              <br /> ● Rendered images of people <br /> ● Swipable images (right
              or left)
              <br /> ● Like or dislike features for an image
              <br /> ● User details at the bottom
            </p>
            <p>
              <span className="text-warning">Technologies:</span> React Native
              Core Components, CSS, Font Awesome, Expo CLI, React Native Gesture
              Handler
            </p>
            <a
              href="https://drive.google.com/file/d/1SDs1SUSumhuGQpLZYYGOdnBqsUacbgRH/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-primary"
            >
              Demo
            </a>
            <a
              href="https://github.com/MJoynalAbedin/friend-maker"
              rel="noreferrer"
              target="_blank"
              className="btn ml-2 btn-outline-warning mr-1"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTwo;
