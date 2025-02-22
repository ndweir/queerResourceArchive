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
            <div className="sidebarlinks" >
                <ul style={{
                    fontWeight: 700,
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'


                }}>
                    <li onClick={() => handleApiCheck('hrtCafe.net')}>hrtCafe.net</li>
                    <li onClick={() => handleApiCheck('trevorProject.org')}>trevorProject.org</li>
                    <li onClick={() => handleApiCheck('hrc.org')}>hrc.org</li>
                    <li onClick={() => handleApiCheck('altgo.us/pages/local-resources.html')}>altgo.us/pages/local-resources.html</li>

                </ul>
            </div>
            <div style={{
                textAlign: 'center',
            }}>
                {waybackData &&
                    <div>
                        <h3>{waybackData.url}</h3>
                        <h4>{formatTimestamp(waybackData.archived_snapshots.closest.timestamp)} </h4>
                        <h5>
                            <a style={{
                                cursor: 'pointer',
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