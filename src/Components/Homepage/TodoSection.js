import React, { useEffect } from "react";
import MiniCard from "../Reusables/MiniCard";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import axios from "axios";
import { fetchService } from "../../Controller/controller";
import {servicesList} from "../Reusables/Amount"

function TodoSection() {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  useEffect(() => {
    fetchService()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user !== null]);
  return (
    <>
      <Element id="todoSection" name="todoSection">
        <section className="todo-section d-flex justify-content-center align-items-center flex-column">
          <h4 className="text-center mb-5 todo-title">
            What will you like to do today?
          </h4>
          <div className="mini-card-wrapper container">
            {servicesList.map((service)=> (

            <Link to={service.route} className="mini-card" key={service.id}>
              <MiniCard
                miniTitle={service.title}
                miniLogo={service.logo}
              />
            </Link>
            ))}

          </div>
        </section>
      </Element>
    </>
  );
}

export default TodoSection;
