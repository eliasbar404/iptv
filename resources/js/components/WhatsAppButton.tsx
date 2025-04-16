
import image from "../../../public/whatsapp.png";


// export default function WhatsAppButton() {
//   const handleWhatsAppClick = () => {
//     // Replace this with your WhatsApp number
//     const phoneNumber = '1234567890';
//     const message = 'Hello! I have a question about StreamHub.';
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <>
//       <button
//         onClick={handleWhatsAppClick}
//         className="fixed bottom-6 right-6 w-16 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50 flex items-center justify-center group animate-vibrate"
//         aria-label="Contact on WhatsApp"
//       >
//         <img src={image} width={40} className="rounded-full absolute w-[200px]" alt="WhatsApp Icon" />
//         <span className="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//           Chat with us
//         </span>
//       </button>

//       {/* Styled JSX for the vibrate animation */}
//       <style jsx global>{`
//         @keyframes vibrate {
//           0% { transform: translate(0); }
//           20% { transform: translate(-2px, 2px); }
//           40% { transform: translate(-2px, -2px); }
//           60% { transform: translate(2px, 2px); }
//           80% { transform: translate(2px, -2px); }
//           100% { transform: translate(0); }
//         }
//         .animate-vibrate {
//           animation: vibrate 0.3s infinite;
//         }
//       `}</style>
//     </>
//   );
// }






import { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showModal, setShowModal] = useState(false);
  
  const handleWhatsAppClick = () => {
    setShowModal(true);
  };

  const handleContinueToWhatsApp = () => {
    const phoneNumber = '1234567890';
    const message = 'Hello! I have a question about StreamHub.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50 flex items-center justify-center group animate-vibrate"
        aria-label="Contact on WhatsApp"
      >
        {/* <MessageCircle className="w-8 h-8" /> */}
        <img src={image} width={40} className="rounded-full absolute w-[200px]" alt="WhatsApp Icon" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with us
        </span>
      </button>

      {/* WhatsApp Chat Modal */}
      {showModal && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm z-50">
          <div className="bg-[#DCF8C6] rounded-2xl shadow-xl">
            {/* Modal Header */}
            <div className="bg-[#075E54] p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-white font-semibold">WhatsApp Chat</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              <div className="bg-white rounded-lg p-3 shadow max-w-[80%] ml-auto">
                <p className="text-sm">👋 Hello! How can we help you today?</p>
                <p className="text-xs text-gray-500 text-right mt-1">10:00 AM</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow max-w-[80%] ml-auto">
                <p className="text-sm">Click continue to chat with our support team on WhatsApp!</p>
                <p className="text-xs text-gray-500 text-right mt-1">10:00 AM</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-white rounded-b-2xl border-t">
              <button
                onClick={handleContinueToWhatsApp}
                className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#1ea952] transition-colors duration-200"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      <style >{`
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