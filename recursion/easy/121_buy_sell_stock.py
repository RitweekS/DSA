def buy_sell(prices: list[int]) -> int:
    minPrice = float("inf")
    maxProfit = 0

    for price in prices:
        minPrice = min(price, minPrice)
        maxProfit = max(maxProfit, price - minPrice)

    return maxProfit


def buy_sell_recursion(prices: list[int],minPrice:int=float("inf"),maxProfit:int=0,index:int=0) -> int:
    if index == len(prices):
        return maxProfit

    price = prices[index]
    minPrice = min(price, minPrice)
    maxProfit = max(maxProfit,price - minPrice)

    return buy_sell_recursion(prices,minPrice,maxProfit,index+1)



prices = [7, 1, 5, 3, 6, 4]

print(buy_sell_recursion(prices))