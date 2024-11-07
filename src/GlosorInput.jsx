import React, {useState} from 'react';

const GlosorInput = ({state, dispatch}) => {
    const [input, setInput] = useState("")

    const glosa = state.current[0];

    return (
        <div className={"grow flex flex-col justify-center"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: 'answer', answer: input});
                setInput("");
            }}>
                <div className={"flex-none text-center text-5xl p-3"}>
                    {glosa.question}
                </div>
                <div className={"flex-none text-center text-5xl"}>
                    <input value={input}
                           autoFocus
                           className={"text-center"}
                           onChange={e => setInput(e.target.value)}/>
                </div>
                {state.answerWrong && <div className={"flex-none text-center text-red-300"}>
                    Answer was incorrect
                </div>}
                <div className={"flex-none text-center text-3xl"}>
                    <button>Answer</button>
                </div>
            </form>
        </div>
    );
};

export default GlosorInput;
