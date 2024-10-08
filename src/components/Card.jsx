export default function Card(props) {
    const {item: {imageUrl, title, googleMapsUrl, startDate, endDate, description}} = props;
    return (
        <div className="cardContainer">
            <img className="cardImage" src={imageUrl} />
            <div className="cardInfo">
                <h3 className="cardLocation">JAPAN <a classname="cardMaps" href={googleMapsUrl} target="_blank">View on Google Maps</a></h3>
                <h2 className="cardTitle">{title}</h2>
                <p className="cardText"><span className="bold">{startDate} - {endDate}</span></p>
                <p className="cardText">{description}</p>
            </div>
        </div>  
    )
}