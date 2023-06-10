import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";

import "./NewsLetter.scss";

const NewsLetter = () => {
    return (
        <div className="newsLetter">
            <div className="container">
                <div className="heading">
                    <h3>GET IN TOUCH WITH US:</h3>
                </div>

                <div className="mail">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>Subscribe</button>
                </div>

                <div className="social">
                    <InstagramIcon className="icon" />
                    <FacebookIcon className="icon" />
                    <TwitterIcon className="icon" />
                    <PinterestIcon className="icon" />
                    <GoogleIcon className="icon" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
