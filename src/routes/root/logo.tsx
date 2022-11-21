import { open } from "@tauri-apps/api/shell";
import "./logo.scss";

const Logo = () => {
    return (
        <div
            className="logo"
            onClick={() => void open("https://pcrab.xyz", "safari")}
        >
            <img src="/public/logo.png" alt="Logo" />
        </div>
    );
};
export default Logo;
