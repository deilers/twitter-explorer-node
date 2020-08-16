import express from 'express';
import axios from 'axios';
import environment from './const.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * initialize and return Express application object
 */
function initExpressApp() {

    const port = process.env.PORT || 3001;

    if (isDev()) {
        dotenv.config();
    }

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });

    return app;
}

/**
 * Creates a simple GET request object using Axios.
 */
function createRequest() {
    return axios.create({
        baseURL: `${environment.BASE_URL}`,
        headers: getBearerTokenHeader()
    });
}

/**
 * indicates if app is running in dev mode
 */
function isDev() {
    return process.env.NODE_ENV === 'development' ||
           process.env.NODE_ENV === 'test';
}

/**
 * returns JSON object containing the twitter bearer token auth header
 */
function getBearerTokenHeader() {
    return {
        'authorization': `Bearer ${process.env.BEARER_TOKEN}`
    };
}

const apiUtils = {
    initExpressApp,
    createRequest
};

export default apiUtils;