import React from "react";
import QRCode from "react-qr-code";


function App() {

  return (
    <div className='bg-red-300'>
      <h1>Buffalo project</h1>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value="https://www.youtube.com/watch?v=UUeJjFB3fw8"
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}

export default App
