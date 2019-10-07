export let people = [
    {
        id: 0,
        name: "Chan",
    },
    {
        id: 1,
        name: "Chan2",
    },
    {
        id: 2,
        name: "Chan3",
    },
];

export const getById = id => {
    const filteredPerson = people.filter(person => id === person.id);
    return filteredPerson[0];
}

export const addPerson = name => {
    const newPerson = { id: people.length, name };
    people.push(newPerson);
    return newPerson;
}

export const deletePerson = id => {
    try {
        people = people.filter(person => id !== person.id);
        return true;
    } catch(err) {
        console.error(err);
        return false;
    }
}