import { addManyCustomerAction } from './../customerReducer';
import axios from 'axios'
export const fetchCustomers = () => {
    const page = 1;
    const size = 100;
    const game = '2000';
    return function (dispatch) {
        axios.get('https://api.rawg.io/api/games', {
            params: { 'key': 'bf814dbf6dd44857be7ed2c3dcb31e70', 'search': `${game}`, 'page_size': `${size}`, 'page': `${page}` },


        })
            .then((response) => { dispatch(addManyCustomerAction(response.data.results)); })
            .catch((error) => { console.log(error); })




        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => dispatch(addManyCustomerAction(json)))
        console.log(page)
        return page + 10;
    }
}