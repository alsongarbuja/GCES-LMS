import { FiGithub, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../styles/credit.css'

const Credit = () => {
  return (
    <div className="credit-main">
        <Link to="/"><img src="/gces-logo.png" alt="gces" className="logo-big" /></Link>
        <h1>GCES Library Management System</h1>
        <p><b>Credit to:</b></p>
        <div className="row">
            <CreditCard name="Alson Garbuja" email="magar33alson@gmail.com" imageUrl="https://avatars.dicebear.com/api/big-ears-neutral/alson-garbuja.svg" gitUrl="https://github.com/alson33" twitterUrl="https://twitter.com/alsongarbuja" />
            <CreditCard name="Salipa Gurung" email="salipagurung@gmail.com" imageUrl="https://avatars.dicebear.com/api/big-ears-neutral/salipa-gurung.svg" gitUrl="https://github.com/Salipa-Gurung" twitterUrl="https://twitter.com/salipagurung" />
            <CreditCard name="Alson Garbuja" email="magar33alson@gmail.com" imageUrl="" gitUrl="https://github.com/alson33" twitterUrl="https://twitter" />
            <CreditCard name="Alson Garbuja" email="magar33alson@gmail.com" imageUrl="" gitUrl="https://github.com/alson33" twitterUrl="https://twitter" />
            <CreditCard name="Alson Garbuja" email="magar33alson@gmail.com" imageUrl="" gitUrl="https://github.com/alson33" twitterUrl="https://twitter" />
        </div>
    </div>
  )
}

const CreditCard = ({ imageUrl, name, email, gitUrl, twitterUrl}: {
    imageUrl: string,
    name: string,
    email: string,
    gitUrl: string,
    twitterUrl: string,
}) => {
    return (
        <div className="col-6 credit-card flex">
            <img src={imageUrl} alt={name} className="credit-profile" />
            <div className="credit-details">
                <h3>{name}</h3>
                <p>
                    <a href={`mailto:${email}`}>
                        <i>{email}</i>
                    </a>
                </p>
                <a href={gitUrl} target="_blank" rel="noreferrer"><FiGithub className="icons" /></a>
                <a href={twitterUrl} target="_blank" rel="noreferrer"><FiTwitter className="icons" /></a>
            </div>
        </div>
    );
}

export default Credit