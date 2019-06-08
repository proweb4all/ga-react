const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    return (name.length > 0 && name.length != '')
})

employersNames = employersNames.map((item) => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (total = 0, everyCash = []) => everyCash.reduce((total, item) => total + item);

const money = calcCash(null, sponsors.cash);

// function makeBusiness(...[owner, director = 'Victor', cash, emp]) {
function makeBusiness(owner, director = 'Victor', cash, emp) {
    director = director || 'Victor';
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
//    console.log.apply(null, sumSponsors);
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}

//makeBusiness.apply(null, ['Sam', null, money, employersNames]);
makeBusiness('Sam', null, money, employersNames);