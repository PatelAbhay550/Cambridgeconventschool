import React from "react";
import director from "/src/assets/images/director.png";
const Director = () => {
  return (
    <div className="directorvoice">
      <div className="leftd">
        <h2>Message From Our Director</h2>
        <p className="quoted">
          “उन्नत देश का सपना तभी पूरा हो सकता जब उस देश का हर एक नागरिक शिक्षित
          एबं संस्कारबान हो। ”
        </p>
        <p className="noted">
          प्रिय अभिभाभक, बड़े गौरव के साथ लिख रहा हूँ, जिस सपने को 16 वर्ष पूर्व
          मैंने कैंब्रिज कान्वेंट स्कूल पुवायां की नींब रखी थी वह सपना आज साकार
          हुआ है। जब कैंब्रिज स्कूल ने 2014-15 12th की सी बी एस ई बोर्डपरीक्षा
          में बरेली मंडल में प्रथम स्थान प्राप्त करके शिक्षा के क्षेत्र में
          स्वर्णिम इतिहास लिखकर शाहजहाँपुर जनपद का नाम गौरवान्वित किया है।
        </p>
        <button>Read Full Message</button>
      </div>
      <div className="rightd">
        <img src={director} alt="Vipin Kumar Agarwal" />
      </div>
    </div>
  );
};

export default Director;
