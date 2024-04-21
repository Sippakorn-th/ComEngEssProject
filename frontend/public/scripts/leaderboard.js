import { getScores } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");

    getScores().then((scores) => {
        scores.sort((a, b) => {
            if (a.average_guess !== b.average_guess) {
                return a.average_guess - b.average_guess;
            } else {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            }
        });
        const topScores = scores.slice(0, 10);
        topScores.forEach((score, index) => {
            const row = table.insertRow(-1);

            const firstcell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const scoreCell = row.insertCell(2);
            const dateCell = row.insertCell(3);

            firstcell.textContent = index + 1;
            nameCell.textContent = score.name;
            scoreCell.textContent = score.average_guess;


            const formattedDate = formatDate(score.date);
            dateCell.textContent = formattedDate;
        });
    })
        .catch((err) => {
            console.error(err);
        });

    function formatDate(dateString) {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
});
