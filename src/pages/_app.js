import { useEffect, useState } from "react";

// Client-only render flag
export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Update once the component has mounted
  }, []);

  if (!isClient) {
    return null; // Prevent rendering before the component is mounted
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
