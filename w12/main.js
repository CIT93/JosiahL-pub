const FORM = document.getElementById("exercise-form");

const startExercise = (moveType, amountRep, restTime) => {
    const output = document.getElementById("output");
    const message = document.createElement("p");
    message.textContent = `Begin the Exercise: ${moveType}. Your amount of reps to complete is ${amountRep}, in this amount of time: ${restTime} minute(s).`;
    output.appendChild(message);
    setTimeout(() => {
        const stopMessage = document.createElement("p");
        stopMessage.textContent = `Stop ${moveType}`;
        output.appendChild(stopMessage);
    }, restTime * 60000);
};

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const moveType = FORM.exerciseType.value;
    const amountRep = FORM.targetReps.value;
    const restTime = FORM.exerciseTime.value;
    startExercise(moveType, amountRep, restTime);
    FORM.reset();
});