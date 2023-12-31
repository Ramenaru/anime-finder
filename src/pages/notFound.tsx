import React from "react";
import { useNavigate } from "react-router-dom";
import catLogo from "../assets/icons/cat.svg";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mt-2 mb-2">
            But dont worry, you can find plenty of other things on my homepage. Dont forget to report, if you have a problem.
          </p>
          <a href="https://github.com/ramenaru/anime-finder" target="_blank"><p className="underline md:no-underline md:hover:underline mt-2 text-sm mb-8">
            Report Here !
          </p></a>
          <button
            onClick={navigateHome}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </button>
          <a
            href="https://github.com/ramenaru"
            target="_blank"
          >
          </a>
        </div>
        <div className="max-w-lg">
          <img src={catLogo} className="cat logo" alt="Cat Logo" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
