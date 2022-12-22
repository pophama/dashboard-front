import {
    BRAND_DETAILS_FAIL,
    BRAND_DETAILS_REQUEST,
    BRAND_DETAILS_RESET,
    BRAND_DETAILS_SUCCESS,
} from '../constants/brandConstants'

const initState = {
    brand: {},
    salesNumber: 0,
    influencersCount: 0,
    totalAmounts: 0,
    totalCommissions: 0,
    totalCommissionsAffiliate: 0,
    topInfluencers: []
};

export const brandDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case BRAND_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case BRAND_DETAILS_SUCCESS:
            const {brand, influencersCount, totalAmounts, totalCommissions, totalCommissionsAffiliate, topInfluencers} = action.payload;
            return {
                loading: false,
                brand,
                influencersCount,
                salesNumber: brand.length,
                totalAmounts,
                totalCommissions,
                totalCommissionsAffiliate,
                topInfluencers
            };
        case BRAND_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case BRAND_DETAILS_RESET:
            return {
                brand: {}
            };
        default:
            return state
    }
}
