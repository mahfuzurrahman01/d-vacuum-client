import { useEffect } from "react";

function Example (title) {
    useEffect(() => {
      document.title = title;
    });
  }

  export default Example;