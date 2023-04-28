import "./AmplopDigital.css";
import logoBsi from "../../../images/logo-bsi.png";
import logoHadiah from "../../../images/logo-kirim-hadiah.png";
import React, { useState } from "react";
import TabSatu from "./tabSatu/TabSatu";
import TabDua from "./tabDua/TabDua";

function AmplopDigital(props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const { closeModal } = props;

  function handleTabClick(event) {
    const tab = event.currentTarget.dataset.tab;
    setActiveTab(tab);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <ul className="modal-tabs">
          <li>
            <button
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTabClick}
              data-tab="tab1"
            >
              {" "}
              <img src={logoBsi} alt={logoBsi} />
              {/* tab1 */}
            </button>
          </li>
          <li>
            <button
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTabClick}
              data-tab="tab2"
            >
              <img src={logoHadiah} alt={logoHadiah} />
              {/* tab2 */}
            </button>
          </li>
        </ul>
        <div className="modal-tab-content">
          {activeTab === "tab1" && <TabSatu />}
          {activeTab === "tab2" && <TabDua />}
        </div>
      </div>
    </div>
  );
}

export default AmplopDigital;
