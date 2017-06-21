import 'rxjs/add/operator/map';

export const partyModel = () => {
    return obs =>
        obs.map(([people, filter]) => {
            return {
                total: people.length,
                people: people.filter(filter),
                attending: people.filter(person => person.attending).length,
                guests: people.reduce((acc, curr) => acc + curr.guests, 0)
            };
        });
};

