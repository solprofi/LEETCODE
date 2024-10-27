/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let buy = 0;
    let sell = 1;
    let res = 0;

    while (sell < prices.length) {
        const currentProfit = prices[sell] - prices[buy];

        if (currentProfit > 0) {
            res = Math.max(res, currentProfit);
        } else {
            buy = sell;
        }

        sell++;
    }

    return res;
}