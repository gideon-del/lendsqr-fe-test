"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import illustration from "@/assets/images/illustration.png";
import "./style.scss";
import React from "react";
const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="login__container">
      <section className="login__header">
        <figure>
          <Image src={logo} alt="Lendsqr" />
        </figure>
        <figure>
          <Image src={illustration} alt="illustration" />
        </figure>
      </section>
      <section className="login__main">
        <form onSubmit={handleSubmit}>
          <h1 className="login__title">Welcome!</h1>
          <p className="login__desc">Enter details to login.</p>
          <fieldset className="login__input--wrapper">
            <div className="login__input--container">
              <input
                type="email"
                className="login__input"
                placeholder="Email"
              />
            </div>
            <div className="login__input--container">
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
              <button className="show__btn" type="button">
                SHOW
              </button>
            </div>
          </fieldset>
          <button type="button" className="forgot__password__btn">
            Forgot PASSWORD?
          </button>
          <button type="submit" className="login__btn">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
