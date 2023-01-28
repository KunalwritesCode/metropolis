import healthRiskdata from "../../../json/HealthRisk";
import React from "react";

const HealthRisk = () => {
  return (
    <div className="row">
      {healthRiskdata.map((task) => (
        <div className="col-lg-4">
          
          <div className="  Healthrisk-container-inside">
            <div>
              <div className="Healthrisk-container-inside-card">
                <div>
                  <img src={task.img} />
                </div>
                <div>
                  <a href="/healthrisk/heart">
                    <h6>{task.title}</h6>
                  </a>
                  <p>Tests: {task.Testnumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthRisk;