import { useHistory } from 'react-router-dom';
import { TextField, Container, Select, Button, Grid, InputLabel, FormControl, makeStyles } from '@material-ui/core';

function BeerListPage() {
    const history = useHistory();


    if ('geolocation' in navigator) {
        console.log('geolocation available')
        navigator.geolocation.getCurrentPosition(async position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude

            const data = { lat, lon }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/beer-list', options);
            const json = await response.json();
            console.log(json);
        })
    } else {
        console.log('geolocation not available')
    }




    const handleAdd = () => {
        console.log('Handle Submit');
        history.push('/beer-rating');
    }

    const handleSelect = () => {
        console.log('Handle Submit');
        history.push('/beer-rating');
    }

    return (
        <div>
            <h1>This will be my Beer List page</h1>
            <FormControl variant="outlined" className="formInput">
                <Select name="surly" id="brewLocations">
                    <Option value="Surly">Surly</Option>
                    <Option value="Indeed">Indeed</Option>
                </Select>
            </FormControl>
            
            <button onClick={handleSelect}>Add Brewery</button>

            <br />
            <br />
            <br />

            <input 
                type="text"
                placeholder="Add Your Own Brewery"
            />
            <button onClick={handleAdd}>Add Brewery</button>
        </div>
    )
}
export default BeerListPage;