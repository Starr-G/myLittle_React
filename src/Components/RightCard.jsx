import Logo2 from '../assets/Logo2.svg';

const RightCard = ({darkmode}) => {
    return (
        <div className={`right-card ${darkmode ? 'dark' : 'light'}`}>
            <div className="right-card-text">
                <div>
                    <img className="logo2" src={Logo2} alt="Qore Logo" />
                </div> 
                <h1>Africa's first</h1>
                <h2>Banking as a Service</h2>
                <p>Digital Core Banking platform built in Africa by Africans</p> 
            </div>
        </div>
    )
}

export default RightCard;