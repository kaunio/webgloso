import './index.css'
import {initData, reducer} from "./engine.js";
import {useReducer} from "react";
import GlosorInput from "./GlosorInput.jsx";
import GlosorShow from "./GlosorShow.jsx";
import Header from "./Header.jsx";
import GlosorDone from "./GlosorDone.jsx";

function App({glosor}) {
    const [state, dispatch] = useReducer(reducer, glosor, initData)
    const mode = state.mode;

    return (
        <div className={"flex flex-col h-full"}>
            <Header state={state} />
            {mode === 'input' && (<GlosorInput state={state} dispatch={dispatch} />)}
            {mode === 'show' && (<GlosorShow state={state} dispatch={dispatch} />)}
            {mode === 'show' && (<GlosorDone state={state} dispatch={dispatch} />)}
        </div>
    )
}

export default App
