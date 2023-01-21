import "./App.css";
import logo from "./logo.svg";
import illustration from "./illustration.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  return (
    <div className="main-div mx-auto my-0">
      <div className="pt-4">
        <img src={logo} width="20%" alt="logo"></img>
      </div>
      <div className="row row-div">
        <div className="col-7 pe-4">
          <img src={illustration} width="100%" alt="illustration"></img>
        </div>
        <div className="col ps-4">
          <h1 className="mt-5">Build The Community Your Fans Will Love</h1>
          <p className="mb-0 mt-4">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does vour audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="rounded-pill mt-4 reg-btn">Register</button>
        </div>
      </div>
      <div className="icon-div mt-4 mb-0">
        <div className="row icon-row">
          <div className="col-4">
            <button className="facebook rounded-circle">
              <FacebookOutlinedIcon />
            </button>
          </div>
          <div className="col-4">
            <button className="twitter rounded-circle">
              <TwitterIcon />
            </button>
          </div>
          <div className="col-4">
            <button className="instagram rounded-circle">
              <InstagramIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
