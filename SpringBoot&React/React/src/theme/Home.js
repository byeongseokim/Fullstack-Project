import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Home({ isDarkMode, toggleDarkMode }) {
    return (
        <>
            <header>
                <button color="#1976d2;" type="button" onClick={toggleDarkMode}>
                    {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
            </header>
            <article>
                <p>Dark Mode/Light Mode</p>
            </article>
        </>
    );
}

export default Home;
