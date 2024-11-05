const FORM = document.getElementById("exercise-form");

const startExercise = (moveType, amountRep, restTime) => {
    return new Promise((resolve, reject) => {
        const output = document.getElementById("output");

        if (!moveType || isNaN(amountRep) || isNaN(restTime) || restTime <= 0) {
            reject("Invalid input! Check all fields.");
            return;
        }

        const message = document.createElement("p");
        message.textContent = `Begin Exercise: ${moveType}, Reps: ${amountRep}, Time: ${restTime} min.`;
        output.appendChild(message);

        setTimeout(() => {
            const stopMessage = document.createElement("p");
            stopMessage.textContent = `Stop ${moveType}`;
            output.appendChild(stopMessage);
            resolve(`Exercise completed: ${moveType}`);
        }, restTime * 60000);
    });
};

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const moveType = FORM.exerciseType.value;
    const amountRep = parseInt(FORM.targetReps.value);
    const restTime = parseFloat(FORM.exerciseTime.value);

    startExercise(moveType, amountRep, restTime)
        .then((message) => console.log(message))
        .catch((error) => {
            const errorMessage = document.createElement("p");
            errorMessage.style.color = "red";
            errorMessage.textContent = `Error: ${error}`;
            document.getElementById("output").appendChild(errorMessage);
        });

    FORM.reset();
});
