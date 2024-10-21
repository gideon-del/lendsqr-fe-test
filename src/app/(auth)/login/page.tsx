"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import illustration from "@/assets/images/illustration.png";
import "./style.scss";
import React, { useState } from "react";
import { useValidator } from "@/hooks/use-validate";
import { validateEmail, validatePassword } from "@/utils/validators";

const LoginPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    error: emailError,
    value: email,
    changeValue: changeEmail,
  } = useValidator(validateEmail);
  const {
    changeValue: changePassword,
    value: password,
    error: passwordError,
  } = useValidator(validatePassword);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitted) {
      setSubmitted(true);
    }
    if (passwordError || emailError) return;
  };
  return (
    <main className="login__container">
      <section className="login__header">
        <figure>
          <Image src={logo} alt="Lendsqr" />
        </figure>
        <figure className="illustration">
          <Image src={illustration} alt="illustration" />
        </figure>
      </section>
      <section className="login__main">
        <form onSubmit={handleSubmit}>
          <h1 className="login__title">Welcome!</h1>
          <p className="login__desc">Enter details to login.</p>
          <fieldset className="login__input--wrapper">
            <div>
              <div
                className={`login__input--container ${
                  submitted && emailError && "error"
                } `}
                tabIndex={0}
              >
                <input
                  type="email"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    changeEmail(e.target.value);
                  }}
                />
              </div>
              {submitted && emailError && (
                <span className="input__error">{emailError.message}</span>
              )}
            </div>
            <div>
              <div
                className={`login__input--container ${
                  submitted && passwordError && "error"
                } `}
                tabIndex={0}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="login__input"
                  placeholder="Password"
                  onChange={(e) => changePassword(e.target.value)}
                  value={password}
                />
                <button
                  className="show__btn"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  SHOW
                </button>
              </div>
              {submitted && passwordError && (
                <span className="input__error">{passwordError.message}</span>
              )}
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
