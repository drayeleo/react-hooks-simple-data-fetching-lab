// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setUrl(data.message));
    }, [])

    if (!url) return <p>Loading...</p>;
    //console.log(url);

    return (
        <div>
            <img src={url} alt="A Random Dog"/>
        </div>
    )
};

export default App;