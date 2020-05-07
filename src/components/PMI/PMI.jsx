import React, { useState, useEffect } from 'react';
import { fetchISMData } from '../../api/apiFunctions';
import { Line } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form'

function PMI() {

    const [lineChartData, setLineChartData] = useState({
        dates: [],
        values: []
    })

    const [monthCount, setMonthCount] = useState(24);

    useEffect(() => {

        async function getData() {
            const data = await fetchISMData();
            const dates = data.map(item => {
                return item[0];
            });
            const values = data.map(item => {
                return item[1];
            });
            setLineChartData({
                dates: dates,
                values: values
            });
        }

        getData();

    }, []);

    const lineChart = (
        <Line
            data={{
                labels: lineChartData.dates.slice(0, monthCount).reverse(),
                datasets: [{
                    label: 'PMI',
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgb(0, 123, 255)',
                    data: lineChartData.values.slice(0, monthCount).reverse()
                }]
            }} />
    );

    function handleMonthChange(e) {
        const value = e.target.value;
        setMonthCount(value);
    }

    const monthRange = (
        <Form>
            <Form.Group controlId="month selection">
                <Form.Label>How Many Months</Form.Label>
                <Form.Control as="select" value={monthCount} custom onChange={handleMonthChange}>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )

    return (
        <div>
            <h1>PMI</h1>
            <div>
                {monthRange}
                {lineChart}
            </div>
        </div>
    )
}

export default PMI


