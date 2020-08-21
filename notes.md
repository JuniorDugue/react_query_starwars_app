## react query notes

<!--  -->

- npm i --save react-query
- import {useQuery} from 'react-query';
- inside of the useQuery() we'd need 2 arguments, (key, async function to go grab the data) e.g. ('planets', fetchPlanets);
- we'll create a function to go fetch the data
- add the endpoint as a string
- return the json 



<!--  -->
- data is the res.json(), and status is whether it's loading, failing, etc