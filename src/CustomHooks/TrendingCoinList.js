import axios from 'axios';
import { useState, useEffect } from 'react';

const useTrendingCoinList = (Url) => {
    const [apiData, setapiData] = useState({
        Data:null,
        error:null
    });
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get(`${Url}`);
                    if (response.status === 200) {
                        console.log(response?.data?.coins);
                        setapiData({...apiData,Data:response?.data?.coins});
                    }
                    else {
                        console.log(response);
                        throw new Error("Some Error Occured. Try again after some time");
                    }
                } catch (error) {
                   setapiData({...apiData,error:error});
                }
            }
        )()
        // eslint-disable-next-line
    }, [Url]);

    return apiData;
}

export default useTrendingCoinList;