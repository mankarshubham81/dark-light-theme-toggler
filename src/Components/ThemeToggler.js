import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import HeroSection from "./HeroSection";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    const themeSwitch = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light")
    }

    return (
        <div onClick={themeSwitch}>
            <span>{themeMode === "dark" ? "Turn Off" : "Lights On"}</span>
            <HeroSection themeSwitch={themeSwitch}/>
        </div>
    )
};

export default ThemeToggler;