import "./SocialCluster.css";
import { SocialClusterList } from "../../../3_ListsVariables/SocialClusterList.jsx";

export default function SocialCluster() {
  return (
    <div className="SocialCluster">
      {SocialClusterList.map((item) => {
        const {
          SocialClusterList_id,
          SocialClusterList_logo,
          SocialClusterList_link,
        } = item;
        return (
          <div key={SocialClusterList_id}>
            <a
              href={SocialClusterList_link}
              target="_blank"
              rel="noopener noreferrer"
              className="SocialClusterList_logo"
            >
              {SocialClusterList_logo}
            </a>
          </div>
        );
      })}
    </div>
  );
}

/* 
SocialClusterList_id
SocialClusterList_name
SocialClusterList_logo
SocialClusterList_link
*/
