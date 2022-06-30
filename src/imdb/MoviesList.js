import * as imdb from 'imdb-api'

const async test = () => {
    try {
        const results = await imdb.get({name: 'Toxic Avenger'}, {apiKey: 'use your api key here', baseURL: "http://localhost:3000"});
        console.log('hola', results);
    } catch (e) {
        console.log("error", e)
    }
}

const MoviesList = () => {
    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
}
 
export default MoviesList;