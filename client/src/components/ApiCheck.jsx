import { useState } from 'react';
import axios from 'axios';

export const ApiCheck = () => {
    const [urlToCheck, setUrlToCheck] = useState();

    const handleApiCheck = () => {
        axios.get('http://localhost:3001/api/wayback/waybackAvailable', { params: { urlToCheck } })
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <h2>Wayback Api Check</h2>
            <div>
                <span>Enter a URl to check</span>
                <input value={urlToCheck} onChange={() => setUrlToCheck(e.target.value)} placeholder='Wayback URL' />
            </div>
            <button onClick={handleApiCheck}>Press Me!</button>
        </div>
    )
}