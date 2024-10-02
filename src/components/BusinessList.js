import React from "react";
import Business from './Business';
import { businessData } from "./BusinessData";

function BusinessList() {
    return (
        <div className="business-list">
            {businessData.map((business) => (
            <Business key={business.id} business={business} />
            ))}
        </div>
  );
}

export default BusinessList;