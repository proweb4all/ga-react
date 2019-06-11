const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own, everyCash) => {
    let total = own || 0;
    return everyCash.reduce((total, item) => total + item, total)
}

const money = calcCash(null, sponsors.cash);

export {sponsors, money};