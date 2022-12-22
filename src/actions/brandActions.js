import axios from 'axios'
import {
    BRAND_DETAILS_FAIL,
    BRAND_DETAILS_REQUEST,
    BRAND_DETAILS_SUCCESS,
} from '../constants/brandConstants'
import {getSumByKey} from "../utils/object";


export const getBrandDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: BRAND_DETAILS_REQUEST,
        });

        const {data}= await axios.get(`http://localhost:5000/api/brand/${id}`);

        const influencersCount = [...new Set( data.map(obj => obj.influencer)) ].length;

        let totalAmounts = 0;
        let totalCommissions = 0;
        let totalCommissionsAffiliate = 0;

        data.forEach(item => {
            totalAmounts += item.amount;
            totalCommissions += Math.floor(item.commission);
            totalCommissionsAffiliate += Math.floor(item.commissionAffiliate);
        });

        const topInfluencers = getSumByKey(data, 'influencer').sort((a,b) => b.amount - a.amount).slice(0, 5);

        dispatch({
            type: BRAND_DETAILS_SUCCESS,
            payload: {
                brand: data,
                influencersCount,
                totalAmounts: totalAmounts.toFixed(2),
                totalCommissions,
                totalCommissionsAffiliate,
                topInfluencers
            },
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: BRAND_DETAILS_FAIL,
            payload: message,
        })
    }
};

