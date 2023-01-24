import "./Car.scss"
function Car({ brand, year }) {
    return (
        <div className="Car">
            <h3 className="Car__title">Car name: {brand}</h3>
            <p className="Car__content">Year: <strong>{year}</strong></p>
        </div>
    );
}

export default Car;