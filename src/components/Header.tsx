import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="w-full max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8"
      id="HeaderContainer"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-2 gap-2">
        <h1 className="text-lg sm:text-xl font-bold" id="Title">
          Average Calculator
        </h1>
        <p className="text-base sm:text-lg my-auto" id="MadeBy">
          Made by : Zhike Esguerra
        </p>
      </div>
    </div>
  );
};

export default Header;
