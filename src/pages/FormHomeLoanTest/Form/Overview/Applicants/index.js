/** @format */

import React from "react";

const Applicants = ({
  nameKey="1",
  listData
}:Props) => {
  return (
    <div className="applicants-wrap w-100">
        <div className="table-cell">
            <div className="table-header d-flex">
                <div className="table-label">
                  <p>Applicant {nameKey}</p>
                </div>
                <div className="table-content"/>
            </div>
              {listData?.map( item => 
                <div key={item.id} className={`table-body d-flex ${(item.content ==="N/A" || !item.content?.trim() || item.content ==="No") ? 'disable' :''}`}>
                  <div className="table-label">
                    <p>{item.name}</p>
                  </div>
                  <div className="table-content">
                    <p>{item.content}</p>
                  </div>
              </div>
            )}
        </div>
    </div>
  );
};

export default Applicants;
