import { useContext } from "react";
import "./HauteurAjustementSousHeader.css";
import { PageWidthContext } from "../../Context/PageWidthContext";

export default function HauteurAjustementSousHeader() {
  const { PageWidth } = useContext(PageWidthContext);

  return (
    <div className="HauteurAjustementSousHeader">
      {" "}
      {PageWidth < 650 ? (
        <div className="HauteurAjustementSousHeader_level_one"></div>
      ) : (
        <div className="HauteurAjustementSousHeader_level_two"></div>
      )}
    </div>
  );
}
