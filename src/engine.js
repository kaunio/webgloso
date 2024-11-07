
const MAX_ATTEMPTS = 3;
const NEEDED_CORRECT = 3;

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function createCurrent(glosor) {
    const all = [];

    glosor.glosor.forEach((glosa) => {
        all.push({
            question: glosa.g1,
            answer: glosa.g2,
            g1: true,
            remaining: NEEDED_CORRECT,
            attempts: 0
        }
        );
        all.push({
                question: glosa.g2,
                answer: glosa.g1,
                g1: false,
                remaining: NEEDED_CORRECT,
                attempts: 0
            }
        );
    });

    return shuffleArray(all);
}

export function initData(glosor) {
    let current = createCurrent(glosor);
    return {
        glosor: glosor,
        current: current,
        all: current,
        answerWrong: false,
        currentAttempt: 0,
        mode: 'input', // Can be input, show, done
    };
}

export function reducer(state, action) {
    console.log("+++ action", action);
    switch (action.type) {
        case 'answer':
            if (state.current[0].answer.toLowerCase() === action.answer.toLowerCase()) {
                // Answer was correct
                const newCurrent = [...state.current];
                const glosa = {...newCurrent[0]};
                newCurrent[0] = glosa;

                glosa.remaining--;
                if (glosa.remaining === 0) {
                    newCurrent.shift();
                    if (newCurrent.length === 0) {
                        return {...state, current: newCurrent, mode: 'done'};
                    }
                }
                shuffleArray(newCurrent);
                return {...state, answerWrong: false, currentAttempt: 0, current: newCurrent};
            } else {
                // Answer was incorrect
                const attempt = state.currentAttempt + 1;

                const newCurrent = [...state.current];
                const glosa = {...newCurrent[0]};
                glosa.remaining = NEEDED_CORRECT;

                if (attempt === MAX_ATTEMPTS) {
                    return {...state, current: newCurrent, mode: 'show'};
                }
                return {...state, current: newCurrent, answerWrong: true, currentAttempt: state.currentAttempt + 1};
            }
        case 'nextQuestion': {
            const newCurrent = [...state.current];
            shuffleArray(newCurrent);

            return {...state, mode: 'input', answerWrong: false, currentAttempt: 0, current: newCurrent};
        }
        default:
            return state;
    }
}