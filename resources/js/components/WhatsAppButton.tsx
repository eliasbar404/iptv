
import image from "../../../public/whatsapp.png";


export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace this with your WhatsApp number
    const phoneNumber = '1234567890';
    const message = 'Hello! I have a question about StreamHub.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50 flex items-center justify-center group animate-vibrate"
        aria-label="Contact on WhatsApp"
      >
        <img src={image} width={40} className="rounded-full absolute w-[200px]" alt="WhatsApp Icon" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with us
        </span>
      </button>

      {/* Styled JSX for the vibrate animation */}
      <style jsx global>{`
        @keyframes vibrate {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.3s infinite;
        }
      `}</style>
    </>
  );
}