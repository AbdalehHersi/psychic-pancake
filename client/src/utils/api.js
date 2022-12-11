import axios from "axios";

export default function apiCall() {
    axios.request({
        method: "GET",
        url: "https://api.unsplash.com/photos/random?count=3&client_id=TWqgIv9oBj0hkz3xdeVyUKCsZAuZQL_1mtUlDpt7rpA",
    })
        .then((response) => {
            const { data } = response;
            console.log(data)
        })
}