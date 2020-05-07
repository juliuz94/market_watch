import axios from 'axios';



export const fetchISMData = async () => {
    const ismURL = 'https://quandl1.p.rapidapi.com/datasets/ISM/MAN_PMI/data.json';
    const quandlHeaders = {
        headers: {
            'x-rapidapi-host': 'quandl1.p.rapidapi.com',
            'x-rapidapi-key': '14d0198a64msh33f12490d231e7ep1b0af4jsn31b4db35b4c9'
          }
    }

    try {
        const {data:{dataset_data}} = await axios.get(ismURL, quandlHeaders);
        return dataset_data.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchStockData = async (symbol) => {
    console.log(symbol);
    const ismURL = `https://alpha-vantage.p.rapidapi.com/query?outputsize=compact&datatype=json&function=TIME_SERIES_DAILY&symbol=${symbol}`;
    const quandlHeaders = {
        headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": "14d0198a64msh33f12490d231e7ep1b0af4jsn31b4db35b4c9"
        }
    }

    try {
        const data = await axios.get(ismURL, quandlHeaders);
        return data.data;
    } catch (error) {
        console.error(error);
    }
}