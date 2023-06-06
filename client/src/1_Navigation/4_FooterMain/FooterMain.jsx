import "./FooterMain.css";
import { LuCopyright } from "react-icons/lu";

export default function FooterMain() {
  return (
    <div className="FooterMain">
      <a
        className="AuteurFooterCenter"
        href="https://www.linkedin.com/in/akliyachir"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyright 2023
        <span className="copyrightFooter">
          <LuCopyright />
        </span>
        Akli Yachir
      </a>
    </div>
  );
}
