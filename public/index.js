async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    fetch('https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=2a3ff10c1b3744a8abc3654babd98e69', {
        header: {
            //Authorization="apikey 2a3ff10c1b3744a8abc3654babd98e69"
        }
    })

}

main()