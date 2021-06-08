import React from 'react';
import './LetsMake.css'

const LetsMake = () => {
    return (
      <div className="d-flex justify-content-center mb-5 lets-make p-5 text-center text-warning">
        <div style={{ width: "900px", fontFamily: "Georgia" }} className="">
          <h1 className="text-center orange-color">
            Let's Make Awesome Things Together!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            assumenda soluta sapiente doloribus, expedita recusandae quos
            eligendi esse ex neque? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Inventore ducimus, officiis quibusdam sapiente
            esse explicabo, sequi rerum tenetur aliquam quo sed, magni eveniet
            nesciunt voluptate error soluta nemo vel repellat.
          </p>
          <h5 className="orange-color">Here Are My Skills</h5>
          <div>
            <span className="orange-color">Expertise:</span> HTML, CSS,
            Bootstrap, JavaScript, ES6, React JS, Rest API, Material UI, React
            Bootstrap, JWT Token, React Router, Firebase, Node, Express, MongoDB
            <br />
            <br />
            <span className="orange-color">Familiar:</span> Redux, React
            Native, Stripe, Tailwind CSS, TypeScript, Next JS, SASS, JQuery,
            PHP, MySQL
            <br />
            <br />
            <span className="orange-color">Tools and Hostings:</span> VS Code, npm, git,
            GitHub, Netlify, Firebase, Heroku, Jira
          </div>
        </div>
      </div>
    );
};

export default LetsMake;