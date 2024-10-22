//get superheros with 1-10 chance of failing
function getSuperHeroes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //random number to simulate failure
            const randomNum = Math.floor(Math.random() * 10) + 1;
            if (randomNum == 1) {
                reject("The world is currently unsafe. No superheroes!!");
            } else {
                //superhero array 
                const superheroes = [
                    { name: 'Superman', power: 100, universe: 'DC' },
                    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
                    { name: 'Batman', power: 75, universe: 'DC' },
                    { name: 'BlackWidow', power: 78, universe: 'Marvel' },
                    { name: 'DrStrange', power: 91, universe: 'Marvel' },
                    { name: 'Spiderman', power: 90, universe: 'Marvel' },
                    { name: 'Ironman', power: 88, universe: 'Marvel' },
                    { name: 'WonderWoman', power: 92, universe: 'DC' },
                    { name: 'BlackPanther', power: 87, universe: 'Marvel' },
                    { name: 'Flash', power: 80, universe: 'DC' },
                    { name: 'Hulk', power: 83, universe: 'Marvel' },
                    { name: 'Thor', power: 95, universe: 'Marvel' }
                ]; // superheros
                resolve(superheroes);
            } //if
        }, 2500); //timeout delsay 2500 ms
    }); //Promis
} //getSuperheros

getSuperHeroes()
    .then(superheroes => {
        //step1
        superheroes.forEach(hero => {
            hero.team = hero.universe === 'DC' ? 'Justice League' : 'Avengers';
        }); //foreach
        console.log("heros with teams", superheroes);

        //step2
        const ranked = superheroes.map(hero => ({
            ...hero,
            rank: hero.power > 90 ? 'Top Tier' : 'Second Tier'
        }));//map
        console.log("heros ranked by their power", ranked);

        //step3
        const marvel = ranked.filter(hero => hero.universe === 'Marvel');
        console.log("marvel heros", marvel);

        //step4
        const marvelRanked = marvel.sort((a, b) => b.power - a.power);
        console.log("marvel heros ranked by their power", marvelRanked);
    })
    .catch(error => {
        console.error("Error: ", error);
    });//catch
