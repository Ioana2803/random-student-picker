console.log('main.js loaded');


let students = [
    {
        name: "Adi",
        avatar: "https://avatars.dicebear.com/api/bottts/adi.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 12,
            answers: 19,
            skipped: 5
        }
    },
    {
        name: "Ioana",
        avatar: "https://avatars.dicebear.com/api/bottts/ioana.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Alex",
        avatar: "https://avatars.dicebear.com/api/bottts/alex.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Tudor",
        avatar: "https://avatars.dicebear.com/api/bottts/tudor.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Maria",
        avatar: "https://avatars.dicebear.com/api/bottts/maria.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Iris",
        avatar: "https://avatars.dicebear.com/api/bottts/iris.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Teo",
        avatar: "https://avatars.dicebear.com/api/bottts/teo.svg",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
];



const cardsContainer = document.querySelector(".cards-container");

for (let i = 0; i < students.length; i++) {
    createCard(cardsContainer, students[i]);
}