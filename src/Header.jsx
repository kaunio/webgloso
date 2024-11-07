import React from 'react';

const Header = ({state}) => {
    return (
        <div className={"flex-none bg-red-400 text-right"}>
            {state.current.length}/{state.all.length} remaining
        </div>
    );
};

export default Header;
