async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

   //const {GME, MSFT, DIS, BTNX} = result 

    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];

    stocks.forEach( stock => stock.values.reverse())

//Using 'mockData' as source while building this code as it timeouts the online API after several checking by console log. 

    //fetch('https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=2a3ff10c1b3744a8abc3654babd98e69')

    //console.log(chart)
    
    console.log(stocks[0].values)      
    
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });

    new Chart(highestPriceChartCanvas.getContext('2d'), { 
        type: 'bar',
        data: {
            labels: ['GME', 'MSFT', 'DIS', 'BNTX'],
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data:  [50, 100, 150, 200, 250, 300, 350],//stock.values.map(value => parseFloat(value.high)),
                //backgroundColor:  ['purple', 'yellow', 'orange', 'silver'],
                //borderColor: ['red', 'green', 'blue', 'violet'],
                /*
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],*/
                  borderWidth: 1 
            //}])          
        }))
                
        }
    });
/*
    new Chart(highestPriceChartCanvas,getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['GME', 'MSFT', 'DIS', 'BNTX'],
            datasets: [{
                label: stock.meta.symbol,
                data: [50, 100, 150, 200, 250, 300, 350],
                backgroundColor:  ['purple', 'yellow', 'orange', 'silver'],
                borderColor: ['red', 'green', 'blue', 'violet'],
                borderWidth: 1
            }]
        }
    });
*/
    
    
    function getColor(stock){
        if(stock === "GME"){
            return 'rgba(61, 161, 61, 0.7)'
        }
        if(stock === "MSFT"){
            return 'rgba(209, 4, 25, 0.7)'
        }
        if(stock === "DIS"){
            return 'rgba(18, 4, 209, 0.7)'
        }
        if(stock === "BNTX"){
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
/*
    function getBarColor(stock){
        if(stock === "GME"){
            return 'rgba(61, 161, 61, 0.7)'
        }
        if(stock === "MSFT"){
            return 'rgba(209, 4, 25, 0.7)'
        }
        if(stock === "DIS"){
            return 'rgba(18, 4, 209, 0.7)'
        }
        if(stock === "BNTX"){
            return 'rgba(166, 43, 158, 0.7)'
        }
        
    }
*/   
}
main() 

//Apologies for the messy code and left over psudo codes.