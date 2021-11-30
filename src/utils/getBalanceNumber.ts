const getBalanceNumber = (balance: number): number => {
  return Number((balance / 1e18).toFixed(5))
}

export default getBalanceNumber
