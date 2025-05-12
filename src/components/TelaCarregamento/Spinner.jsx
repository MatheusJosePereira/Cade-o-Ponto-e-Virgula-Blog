import logo from "../../../public/LogoFavicon.png"

function Spinner() {
  return (
    <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
            <img className="w-64 h-64 rounded-full animate-spin" src={logo} alt="Logo" />
        </div>

    </div>

  );
}

export default Spinner;
