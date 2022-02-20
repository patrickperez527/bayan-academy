const animes = [
    {
        title: "Naruto",
        score: 100
    },
    {
        title: "Capeta",
        score: 98
    },
    {
        title: "Hunter X Hunter",
        score: 95
    },
    {
        title: "Flame of Recca",
        score: 90
    }
];

const highestScore = animes.reduce((max, min) => {
    if (max > min) {
        return animes;
    }
    return max; // 2.5
})