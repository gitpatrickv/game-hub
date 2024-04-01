import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'acdc5ee5ddf34f72b7360a2db2bf37bb'
    }
})