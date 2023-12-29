import { useThemeContext } from "./ThemeContext";

export default function Page1() {
    const { secondaryColor } = useThemeContext();
    return (
        <div>
            <h1>Page 1</h1>
            <p style={{ color: secondaryColor }}>This is a Page1</p>
        </div>
    )
}