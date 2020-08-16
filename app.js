import apiUtils from './utils.js';

const app = apiUtils.initExpressApp();

/** 
 * gets my twitter name, handle, and id
 */
app.get('/', (req, res) => {
    const request = apiUtils.createRequest();

    request.get(`/2/users/by?usernames=DevonEilers`)
    .then((twitterResponse) => {
        res.send(twitterResponse.data);
    })
    .catch((err) => {
        console.error(err);
    });
});