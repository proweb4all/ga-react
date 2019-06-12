import employersNames from './employers';
import { sponsors, money } from './sponsors';

class MakeBusiness {
    constructor(owner, director, cash, emp) {
        this.owner = owner;
        this.director = director || 'Victor';
        this.cash = cash;
        this.emp = emp;
    }
    outputInfo() {
        const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log.apply(null, sumSponsors);
        console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusiness('Sam', null, money, employersNames);
makeBusiness.outputInfo();