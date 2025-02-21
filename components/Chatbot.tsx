// "use client"
// import { useEffect, useState } from 'react';
// import { FaRobot } from 'react-icons/fa';
// import { useTheme } from 'next-themes';

// declare global {
//   interface Window {
//     project_id: string;
//     frame_type: string;
//   }
// }


// const Chatbot = () => {
// const {theme} = useTheme();
//   const [isChatbotVisible, setIsChatbotVisible] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && isChatbotVisible) {
//       // Create the div element
//       const divElement = document.createElement('div');
//       divElement.id = 'odin-chatbot';

//       // Append the div element to the body
//       document.body.appendChild(divElement);

//       // Set the global variables
//       window.project_id = "b6cee3ae4dff4db989f337";
//       window.frame_type = "window";

//       // Create the script element for the loader
//       const scriptElement = document.createElement('script');
//       scriptElement.src = "https://app.getodin.ai/loader.min.js";
//       scriptElement.setAttribute('project_id', "b6cee3ae4dff4db989f337");
//       scriptElement.setAttribute('frame_type', "window");
//       scriptElement.defer = true;

//       document.body.appendChild(scriptElement);

//       return () => {
//         document.body.removeChild(divElement);
//         document.body.removeChild(scriptElement);
//       };
//     }
//   }, [isChatbotVisible]); 

//   return (
//     <div>
//       <div
//         style={{
//           position: 'fixed',
//           bottom: '100px',
//           right: '25px',
//           cursor: 'pointer',
//           zIndex: 1000,
//         }}
//         onClick={() => setIsChatbotVisible(!isChatbotVisible)}
//       >
//         <FaRobot size={50} className={` ${theme === "dark" ? "text-white hover:text-[#e9590c]" : "hover:text-black text-[#e9590c]"} border-2 rounded-md p-2 bg-white`} />
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



"use client";
import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    project_id: string;
    frame_type: string;
  }
}

const Chatbot = () => {
  const { theme } = useTheme();
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && isChatbotVisible) {
      setIsLoading(true);

      // Create chatbot container
      const divElement = document.createElement("div");
      divElement.id = "odin-chatbot";
      divElement.style.position = "fixed";
      divElement.style.bottom = "80px";
      divElement.style.right = "20px";
      divElement.style.width = window.innerWidth <= 768 ? "90%" : "25%"; 
      divElement.style.height = "500px";
      divElement.style.borderRadius = "10px";
      divElement.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      divElement.style.overflow = "hidden";
      divElement.style.zIndex = "999";
      divElement.style.background = theme === "dark" ? "#1a1a1a" : "#fff";

      document.body.appendChild(divElement);

      // Set global variables
      window.project_id = "b6cee3ae4dff4db989f337";
      window.frame_type = "window";

      // Load chatbot script
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://app.getodin.ai/loader.min.js";
      scriptElement.setAttribute("project_id", "b6cee3ae4dff4db989f337");
      scriptElement.setAttribute("frame_type", "window");
      scriptElement.defer = true;

      scriptElement.onload = () => setIsLoading(false); 

      document.body.appendChild(scriptElement);

      return () => {
        document.body.removeChild(divElement);
        document.body.removeChild(scriptElement);
      };
    }
  }, [isChatbotVisible, theme]);

  return (
    <div>
      {/* Chatbot Icon */}
      <div
        style={{
          position: "fixed",
          bottom: "100px",
          right: "25px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
      >
        <FaRobot
          size={50}
          className={`${
            theme === "dark"
              ? "text-white hover:text-[#e9590c]"
              : "hover:text-black text-[#e9590c]"
          } border-2 rounded-md p-2 bg-white`}
        />
      </div>

      {/* Loading Indicator */}
      {isChatbotVisible && isLoading && (
        <div
          style={{
            position: "fixed",
            bottom: "120px",
            right: "50px",
            background: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            zIndex: 1001,
            fontSize: "14px",
          }}
        >
          Loading Chatbot...
        </div>
      )}
    </div>
  );
};

export default Chatbot;
