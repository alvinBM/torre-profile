/* eslint-disable no-unused-vars */
/*** API/profile.js */

import axios from 'axios';

const API_URL = "https://bio.torre.co/api/bios/$username"; //API base url

export function getProfileByUsername(username) {

    let url = `${API_URL}` ;

    return axios
    .get(url, { 
        headers: {
            'Content-Type': 'application/json', 
            "Access-Control-Allow-Origin": "*",
            "withCredentials": false
        },
        // mode: "no-cors"
     })
    .then(result => {
        console.log("Result API", result);
    })
    .catch(err => {
        const response = {
            "status": 401,
            "data": err
        }
        return response;
    });

}

