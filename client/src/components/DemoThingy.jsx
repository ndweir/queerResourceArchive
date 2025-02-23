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
                <a onClick={() => handleApiCheck('hrtCafe.net')}>HRT Cafe</a>
                <a onClick={() => handleApiCheck('https://www.lgbtmap.org/equality-maps')}>LGBTQ Map</a>
                <a onClick={() => handleApiCheck('https://queermed.com')}>Queer Med</a>
                <a onClick={() => handleApiCheck('altgo.us')}>Altgo</a>
                <a onClick={() => handleApiCheck('https://www.mntransgenderhealth.org')}>Minnesota Trans Health</a>
                <a onClick={() => handleApiCheck('https://www.silversprocket.net/2021/09/13/a-self-defense-study-guide-for-trans-women-and-gender-non-conforming-nonbinary-amab-folks/')}>Self Defense Study Guide</a>


            </div>
        </div >
    )
}