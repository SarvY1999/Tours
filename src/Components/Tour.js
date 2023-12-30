import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    const { id, image, name, info, price } = tour
    return <>
        <div className="single-tour">
            <img src={image} alt={name} className="img"></img>
            <h4 className="tour-price"> ${price}</h4>

            <div className="tour-info">{name}
                <p className="tour-info">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="info-btn" onClick={() => (setReadMore(!readMore))}>{readMore ? 'Read Less' : 'Read More'}</button>
                </p>
                <button className="delete-btn btn-block btn" onClick={() => { removeTour(id) }}>Not Interested</button>
            </div>
        </div>
    </>
}

export default Tour;