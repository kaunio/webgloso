import React from 'react';

const FileSelector = ({setGlosor}) => {
    return (
        <div className={"flex flex-col h-full justify-center"}>
            <div className={"flex-none text-center"}>
                Select your file
            </div>
            <div className={"flex-none text-center"}>
                <input type={"file"} onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            setGlosor(JSON.parse(e.target.result));
                        } catch (e) {
                            alert("Failed to read file: " + e.message)
                        }
                    };
                    reader.readAsText(file);
                }}/>
            </div>
        </div>
    );
};

export default FileSelector;
