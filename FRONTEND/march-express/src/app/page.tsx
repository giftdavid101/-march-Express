"use client"
import HomePage from "./home/page";

function MyApp({pageProps }) {

    return (
      <>
          <HomePage  {...pageProps} />
      </>
    );
}

export default MyApp;