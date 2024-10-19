import Image from "next/image";
import logo from "@/assets/images/logo.svg";

const LoginPage = () => {
  return (
    <main className="login__container">
      <header>
        <figure>
          <Image src={logo} alt="Lendsqr" />
        </figure>
      </header>
    </main>
  );
};

export default LoginPage;
