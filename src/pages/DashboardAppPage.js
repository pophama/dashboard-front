import {Helmet} from 'react-helmet-async';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";

import {useTheme} from '@mui/material/styles';
import {Grid, Container} from '@mui/material';
import {
    AppCurrentVisits,
    AppWebsiteVisits,
    AppWidgetSummary,
} from '../sections/@dashboard/app';

import {getBrandDetails} from "../actions/brandActions";
import BasicTable from '../components/table';

export default function DashboardAppPage() {
    const theme = useTheme();

    const keyword = 23;

    const dispatch = useDispatch();

    const {
        salesNumber,
        influencersCount,
        totalAmounts,
        totalCommissions,
        totalCommissionsAffiliate,
        topInfluencers
    } = useSelector((state) => state.brandDetails);

    const tableConfig = ['influencer', 'amount', 'occurrence'];

    const tableHead = ['Top 5 influencers', 'Sales', 'Sales Number'];

    useEffect(() => {
        dispatch(getBrandDetails(keyword));
    }, [dispatch, keyword]);

    return (
        <>
            <Helmet>
                <title> Shop my influence </title>
            </Helmet>

            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Sales" total={totalAmounts} icon={'ant-design:euro-circle-outlined'}
                                          currency={'€'}/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Sales Number" total={salesNumber} color="info"
                                          icon={'ant-design:shopping-outlined'}/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Influencers" total={influencersCount} color="info"
                                          icon={'ant-design:team-outlined'}/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Commission" total={totalCommissions} currency={'€'} color="info"
                                          icon={'ant-design:dollar-outlined'}/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Influencers commission" total={totalCommissionsAffiliate}
                                          currency={'€'} color="info"
                                          icon={'ant-design:dashboard-outlined'}/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <AppWidgetSummary title="Sold products number" total={234} color="info"
                                          icon={'ant-design:tag-outlined'}/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits
                            title="Sales statistics"
                            subheader=""
                            chartLabels={[
                                '01/01/2003',
                                '02/01/2003',
                                '03/01/2003',
                                '04/01/2003',
                                '05/01/2003',
                                '06/01/2003',
                                '07/01/2003',
                                '08/01/2003',
                                '09/01/2003',
                                '10/01/2003',
                                '11/01/2003',
                            ]}
                            chartData={[
                                {
                                    name: 'Team A',
                                    type: 'column',
                                    fill: 'solid',
                                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                    name: 'Team B',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                                },
                                {
                                    name: 'Team C',
                                    type: 'line',
                                    fill: 'solid',
                                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits
                            title="Top 10 products sold"
                            chartData={[
                                {label: 'America', value: 4344},
                                {label: 'Asia', value: 5435},
                                {label: 'Europe', value: 1443},
                                {label: 'Africa', value: 4443},
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <BasicTable rows={topInfluencers} tableConfig={tableConfig} tableHead={tableHead}/>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}
