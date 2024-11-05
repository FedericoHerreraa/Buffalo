import QRCode from "react-qr-code";



// This function will take the user info and render it + QR code
export function UserCard() {
  return (
    <div className="flex items-center gap-10 mt-7 flex-col">
      <div>
        <h1 className="text-2xl font-bold">Esta es tu Card Personal!</h1>
        <p>Email de la Persona: </p>
        <p>Nombre de Usuario: </p>
      </div>
      <QRCode 
        className="mt-10"
        value="https://www.google.com" 
      />
    </div>
  );
}