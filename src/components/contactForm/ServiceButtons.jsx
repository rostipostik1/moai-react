import React, { useState } from "react";

export const ServiceButtons = ({ services }) => {
  const [activeService, setActiveService] = useState("Web Application Development");
    console.log(services);
    
  return (
    <div className="services-button">
      {services.map((service, index) => (
        <button
          key={index}
          type="button"
          className={activeService === service ? "active" : ""}
          onClick={() => setActiveService(service)}
        >
          {service}
        </button>
      ))}
    </div>
  );
};
