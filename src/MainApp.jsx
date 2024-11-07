import './index.css'
import {useState} from "react";
import App from "./App.jsx";
import FileSelector from "./FileSelector.jsx";

function MainApp() {
    const [glosor, setGlosor] = useState(null);

    if (!glosor) {
        return <FileSelector setGlosor={setGlosor} />
    } else {
        return <App glosor={glosor} />
    }
}

export default MainApp
