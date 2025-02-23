import { useState } from "react";
import axios from "axios";

export const DemoThingy = ({ waybackData, setWaybackData, isLoading, setIsLoading }) => {

    const handleApiCheck = (url) => {
        console.log('handleApiCheck', url);
        setIsLoading(true);
        axios.get('http://localhost:3001/api/wayback/waybackAvailable', { params: { urlToCheck: url } })
            .then((response) => {
                console.log(response.data);
                setWaybackData(response.data);
                console.log(response.data.archived_snapshots.closest.url);
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
            })
    }


    return (
        <div style={{
            margin: '1rem',
            display: 'flex',
            flexGrow: 2,
            gap: '2rem',
        }}>
            <div className="sidebarLinks">
                <h3>Archived Sites</h3>
                <a onClick={() => handleApiCheck('hrtCafe.net')}>hrtCafe.net</a>
                <a onClick={() => handleApiCheck('https://www.lgbtmap.org/equality-maps')}>LGBTQ Map</a>
                <a onClick={() => handleApiCheck('https://queermed.com')}>Queer Med</a>
                <a onClick={() => handleApiCheck('altgo.us')}>altgo.us</a>
                <a onClick={() => handleApiCheck('https://www.mntransgenderhealth.org')}>www.mntransgenderhealth.org</a>


            </div>
        </div >
    )
}