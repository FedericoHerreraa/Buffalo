import QRCode from "react-qr-code";
import { useNightMode } from "../../context/NightModeContext";


// This function will take the user info and render it + QR code
export function UserCard() {
  const { isNightMode } = useNightMode()

  return (
    <div className={`flex items-center gap-10 mt-14 flex-col ${isNightMode ? 'text-zinc-300' : ''}`}>
      <div>
        <h1 className={`text-2xl font-bold ${isNightMode ? 'text-white' : ''}`}>Esta es tu Card Personal</h1>
        <p>Email de la Persona: </p>
        <p>Nombre de Usuario: </p>
      </div>
      <QRCode 
        className={`mt-10 p-1 ${isNightMode ? 'bg-zinc-400' : ''}`}
        value="https://www.google.com" 
      />
    </div>
  );
}