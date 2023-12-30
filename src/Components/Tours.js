import { useState, useEffect } from "react";
import Tour from "./Tour";
import Loading from "./Loading";
const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json();
            setTours(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const removeTour = (id) => {
        const newTour = tours.filter((tour) => tour.id !== id);
        setTours(newTour)
    }

    if (loading) {
        return <main>
            <Loading />
        </main>
    }

    return <>
        <main>
            <h4 className="title">Our Tours</h4>
            <div className="title-underline"></div>
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
                })}
            </div>
            {/* Refresh when no tours are there */}
            {tours.length < 1 ? <button className="info-btn btn" onClick={fetchData}>Refresh</button> : null}
        </main>
    </>
}

export default Tours