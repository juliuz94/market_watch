import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import TopNavigation from './components/TopNavigation/TopNavigation';
import SideMenu from './components/SideMenu/SideMenu';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import PMI from './components/PMI/PMI';
import HistoricalPrices from './components/HistoricalPrices/HistoricalPrices';

export default function App() {


    return (
        <>
            <TopNavigation />
            <SideMenu />
            <ContentWrapper> 
                <Router>
                    <Switch>
                        <Route exact path="/pmi" component={PMI} />
                    </Switch>
                    <Switch>
                        <Route exact path="/historical-prices" component={HistoricalPrices} />
                    </Switch>
                </Router>
            </ContentWrapper>
        </>
    )
}
