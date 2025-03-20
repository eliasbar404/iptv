// import React, { useState, useEffect } from 'react';
// import { X, User, Mail, MapPin } from 'lucide-react';
// import { useForm } from '@inertiajs/react';

// interface VisitorInfo {
//     full_name: string;
//     email: string;
//     phoneNumber: string;
//     gender: string;
//     country: string;
// }

// const VisitorInfoModal: React.FC = () => {
//   // Using useForm to manage form state and server errors
//     const { data, setData, post, processing, errors: inertiaErrors } = useForm<VisitorInfo>({
//         full_name: '',
//         email: '',
//         phoneNumber: '',
//         gender: '',
//         country: '',
//     });

//   // Local state for client-side validation errors (optional)
//   const [validationErrors, setValidationErrors] = useState<Partial<VisitorInfo>>({});
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Show modal when component mounts
//     setIsOpen(true);

//     // Set up interval to show modal every 5 minutes
//     const intervalId = setInterval(() => {
//       setIsOpen(true);
//     }, 5 * 60 * 1000);

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setData(name as keyof VisitorInfo, value);
//     // Clear the client-side error for the field when the user starts typing
//     if (validationErrors[name as keyof VisitorInfo]) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Partial<VisitorInfo> = {};
//     let isValid = true;

//     if (!data.full_name.trim()) {
//       newErrors.full_name = 'Full name is required';
//       isValid = false;
//     }
//     if (!data.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       newErrors.email = 'Email is invalid';
//       isValid = false;
//     }
//     if (!data.country.trim()) {
//       newErrors.country = 'Country is required';
//       isValid = false;
//     }

//     setValidationErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Submit data to "/user/information" using Inertia's post method
//       post(route('user.information'), {
//         onSuccess: () => {
//           // Optionally store visitor info locally
        
//           alert(data)
//           setIsOpen(false);
//         },
//       });

//     console.log(data)
//     }
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-slate-700 bg-opacity-50 opacity-95 flex items-center justify-center z-50 p-4">
//       <div className="bg-slate-900 text-white rounded-lg shadow-xl w-full max-w-md relative animate-fadeIn">
//         <button
//           onClick={closeModal}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//           aria-label="Close modal"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-3xl text-center font-bold text-white mb-1">Welcome!</h2>
//           <p className="text-white text-center mb-6">Please share your information with us</p>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               {/* Full Name */}
//               <div>
//                 <label htmlFor="full_name" className="block text-sm font-bold text-white mb-1">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User size={18} className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="full_name"
//                     name="full_name"
//                     value={data.full_name}
//                     onChange={handleChange}
//                     className={`pl-10 w-full py-2 border ${
//                       validationErrors.full_name || inertiaErrors.full_name ? 'border-red-500' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 {(validationErrors.full_name || inertiaErrors.full_name) && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {validationErrors.full_name || inertiaErrors.full_name}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail size={18} className="text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={data.email}
//                     onChange={handleChange}
//                     className={`pl-10 w-full py-2 border ${
//                       validationErrors.email || inertiaErrors.email ? 'border-red-500' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 {(validationErrors.email || inertiaErrors.email) && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {validationErrors.email || inertiaErrors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Country */}
//               <div>
//                 <label htmlFor="country" className="block text-sm font-bold text-white mb-1">
//                   Country*
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <MapPin size={18} className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="country"
//                     name="country"
//                     value={data.country}
//                     onChange={handleChange}
//                     className={`pl-10 w-full py-2 border ${
//                       validationErrors.country || inertiaErrors.country ? 'border-red-500' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//                     placeholder="United States"
//                   />
//                 </div>
//                 {(validationErrors.country || inertiaErrors.country) && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {validationErrors.country || inertiaErrors.country}
//                   </p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <div className="pt-2">
//                 <button
//                   type="submit"
//                   disabled={processing}
//                   className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   {processing ? 'Submitting...' : 'Submit'}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitorInfoModal;

import React, { useState, useEffect } from 'react';
import { X, User, Mail, MapPin } from 'lucide-react';
import { useForm } from '@inertiajs/react';

interface VisitorInfo {
  full_name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  country: string;
}

const VisitorInfoModal: React.FC = () => {
  // Use Inertia's useForm to manage form data and server errors
  const { data, setData, post, processing, errors: inertiaErrors } = useForm<VisitorInfo>({
    full_name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    country: '',
  });

  // Local client-side validation errors
  const [validationErrors, setValidationErrors] = useState<Partial<VisitorInfo>>({});
  const [isOpen, setIsOpen] = useState(true);
  // Alert state to show success or error messages
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    // Show modal when component mounts and every 5 minutes
    setIsOpen(true);
    const intervalId = setInterval(() => {
      setIsOpen(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(name as keyof VisitorInfo, value);
    // Clear the client-side error for the field when the user starts typing
    if (validationErrors[name as keyof VisitorInfo]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<VisitorInfo> = {};
    let isValid = true;

    if (!data.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
      isValid = false;
    }
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!data.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      post('/user/information', {
        onSuccess: () => {
          localStorage.setItem('visitorInfo', JSON.stringify(data));
          setAlert({ type: 'success', message: 'Information submitted successfully.' });
          // Delay closing modal so the success alert is visible
          setTimeout(() => {
            setIsOpen(false);
          }, 2000);
        },
        onError: (errors) => {
          // Concatenate error messages from the backend
          let errorMsg = '';
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Object.values(errors).forEach((msg: any) => {
            errorMsg += msg + ' ';
          });
          setAlert({ type: 'error', message: errorMsg.trim() || 'There were errors submitting your form.' });
        },
      });
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-50 opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 text-white rounded-lg shadow-xl w-full max-w-md relative animate-fadeIn">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <div className="p-6">
          <h2 className="text-3xl text-center font-bold text-white mb-1">Welcome!</h2>
          <p className="text-white text-center mb-6">Please share your information with us</p>

          {/* Alert Component */}
          {alert && (
            <div
              className={`mb-4 p-3 rounded border ${
                alert.type === 'success'
                  ? 'bg-green-100 border-green-400 text-green-800'
                  : 'bg-red-100 border-red-400 text-red-800'
              }`}
            >
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="full_name" className="block text-sm font-bold text-white mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={data.full_name}
                    onChange={handleChange}
                    className={`pl-10 w-full py-2 border ${
                      validationErrors.full_name || inertiaErrors.full_name ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="John Doe"
                  />
                </div>
                {(validationErrors.full_name || inertiaErrors.full_name) && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.full_name || inertiaErrors.full_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className={`pl-10 w-full py-2 border ${
                      validationErrors.email || inertiaErrors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="john@example.com"
                  />
                </div>
                {(validationErrors.email || inertiaErrors.email) && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.email || inertiaErrors.email}
                  </p>
                )}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-bold text-white mb-1">
                  Country*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={data.country}
                    onChange={handleChange}
                    className={`pl-10 w-full py-2 border ${
                      validationErrors.country || inertiaErrors.country ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="United States"
                  />
                </div>
                {(validationErrors.country || inertiaErrors.country) && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.country || inertiaErrors.country}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {processing ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisitorInfoModal;
