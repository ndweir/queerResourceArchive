import { useState } from "react";
import axios from "axios";

import { formatTimestamp } from '../modules/formatTimeStamp';

export const DemoThingy = () => {
    const [waybackData, setWaybackData] = useState(null);

    const handleApiCheck = (url) => {
        console.log('handleApiCheck', url);
        axios.get('http://localhost:3001/api/wayback/waybackAvailable', { params: { urlToCheck: url } })
            .then((response) => {
                console.log(response.data);
                setWaybackData(response.data);
                console.log(response.data.archived_snapshots.closest.url);
                // console.log(response.data.data.archived_snapshots);
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
            <div className="sidebarLinks" >

                <a onClick={() => handleApiCheck('hrtCafe.net')}>hrtCafe.net</a>
                <a onClick={() => handleApiCheck('trevorproject.org')}>trevorproject.org</a>
                <a onClick={() => handleApiCheck('hrc.org')}>hrc.org</a>
                <a onClick={() => handleApiCheck('altgo.us')}>altgo.us</a>


            </div>
            <div style={{
                textAlign: 'center',
            }}>
                {waybackData &&
                    <div>
                        <h3><b>Site:</b> {waybackData.url}</h3>
                        <h4><b>Archived Date:</b> {formatTimestamp(waybackData.archived_snapshots.closest.timestamp)} </h4>
                        <h5><b>Link:</b>
                            <a style={{
                                cursor: 'pointer',
                                border: '1px solid blue',
                                borderRadius: '25px',
                                paddingLeft: '5px',
                                paddingRight: '5px'
                            }}
                                href={waybackData.archived_snapshots.closest.url} target="_blank">
                                {waybackData.archived_snapshots.closest.url}
                            </a>
                        </h5>
                    </div>
                }
            </div>
        </div >
    )
}