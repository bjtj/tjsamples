import { useThemeContext } from "./ThemeContext";

export default function Page2() {
    const { secondaryColor } = useThemeContext();
    return (
        <div>
            <h1>Page 2</h1>
            <p style={{ color: secondaryColor }}>This is a Page2</p>
        </div>
    )
}