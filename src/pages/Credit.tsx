import { FiArrowLeftCircle, FiGithub, FiTwitter } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import '../styles/credit.css'

const Credit = () => {
    const navigate = useNavigate()

  return (
    <div className="credit-main">
        <Link to="/"><img src="/gces-logo.png" alt="gces" className="logo-big" /></Link>
        <h1 className="flex justify-start">
            <FiArrowLeftCircle className="cursor-pointer" onClick={()=>navigate(-1)} />
            GCES Library Management System</h1>
        <p><b>Credit to:</b></p>
        <div className="row">
            <CreditCard name="Salipa Gurung" email="salipagurung@gmail.com" imageUrl="https://avatars.dicebear.com/api/initials/salipa-gurung.svg" gitUrl="https://github.com/Salipa-Gurung" twitterUrl="https://twitter.com/salipagurung" />
            <CreditCard name="Alson Garbuja" email="magar33alson@gmail.com" imageUrl="https://avatars.dicebear.com/api/initials/alson-garbuja.svg" gitUrl="https://github.com/alsongarbuja" twitterUrl="https://twitter.com/alsongarbuja" />
            <CreditCard name="Ujjwal Lamichhane" email="ujjwalnovel@gmail.com" imageUrl="https://avatars.dicebear.com/api/initials/ujjwal-lamichanne.svg" gitUrl="https://github.com/Uzzal644" twitterUrl="https://twitter.com/Uzzal496" />
            <CreditCard name="Yogesh Thapa" email="ythapa430@gmail.com" imageUrl="https://avatars.dicebear.com/api/initials/yogesh-thapa.svg" gitUrl="https://github.com/yogesh070" twitterUrl="https://twitter.com/ythapa070" />
            <CreditCard name="Sunil Paudel" email="mrsunilpaudel@gmail.com" imageUrl="https://avatars.dicebear.com/api/initials/sunil-paudel.svg" gitUrl="https://github.com/SunilPdl" twitterUrl="https://twitter.com/sunilpdl_" />
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