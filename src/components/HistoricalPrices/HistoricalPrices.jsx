import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Line } from 'react-chartjs-2';


import { fetchStockData } from '../../api/apiFunctions';

function HistoricalPrices() {

    const [consultedAPI, setConsultedAPI] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [historicalData, setHistoricalData] = useState({
        dates: [],
        open: [],
        high: [],
        low: [],
        close: []
    });

    function handleClick(event) {
        
        async function getData() {
            const data = await fetchStockData(symbol);
            const entries = Object.entries(data)[1][1];

            let listData = {
                dates: [],
                open: [],
                high: [],
                low: [],
                close: []
            }

            Object.keys(entries).forEach(entry => {
                listData.dates.push(entry);
                listData.open.push(entries[entry]['1. open']);
                listData.high.push(entries[entry]['2. high']);
                listData.low.push(entries[entry]['3. low']);
                listData.close.push(entries[entry]['4. close']);
            });

            setHistoricalData({
                ...listData
            });
        };
        getData();
        setConsultedAPI(true);
        event.preventDefault();
    }

    function handleChange (event) {
        const value = event.target.value;
        setSymbol(value);
    }

    const form = (
        <Form onSubmit={handleClick}>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Symbol"  value={symbol} onChange={handleChange} />
                </Col>
                <Col>
                    <Button type="submit">Get Data</Button>
                </Col>
            </Form.Row>
        </Form>
    )

    const chart = (

            consultedAPI ? (<Line
            data={{
                labels: historicalData.dates,
                datasets: [{
                    label: "open",
                    backgroundColor: 'rgba(0, 0, 255, 0.05)',
                    borderColor: 'rgb(0, 0, 255)',
                    data: historicalData.open
                },{
                    label: "high",
                    backgroundColor: 'rgba(0, 123, 25, 0.05)',
                    borderColor: 'rgb(0, 123, 25)',
                    data: historicalData.high
                },{
                    label: "low",
                    backgroundColor: 'rgba(255, 0, 0, 0.05)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: historicalData.low
                },{
                    label: "close",
                    backgroundColor: 'rgba(200, 0, 255, 0.05)',
                    borderColor: 'rgb(100, 50, 255)',
                    data: historicalData.close
                }]
            }} />) : null

    )

    return (
        <div>
            <h3>Historical Prices</h3>
            {form}
            {chart}
        </div>
    )
}

export default HistoricalPrices
