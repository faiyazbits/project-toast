import React from "react";

export default function(cb){

    React.useEffect(() => {
        function handleEscapeKeyPress(e) {
          if (e.key === "Escape") {
            cb()
          }
        }
        window.addEventListener("keydown", handleEscapeKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleEscapeKeyPress)
        }
      }, [cb])
}