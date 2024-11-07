import React, {useState} from 'react';

const GlosorInput = ({state, dispatch}) => {
    const glosa = state.current[0];

    return (
        <div className={"grow flex flex-col justify-center"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: 'nextQuestion'});
            }}>
                <div className={"flex-none text-center text-5xl p-3"}>
                    {glosa.question}
                </div>
                <div className={"flex-none text-center text-5xl"}>
                    {glosa.answer}
                </div>
                {state.answerWrong && <div className={"flex-none text-center text-red-300"}>
                    Answer was incorrect
                </div>}
                <div className={"flex-none text-center text-3xl"}>
                    <button type={"submit"} autoFocus>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GlosorInput;
