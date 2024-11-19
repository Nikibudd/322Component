import { useState } from "react";

export default function TelephoneNumberSelector() {

    const [countryCode, setCountryCode] = useState('41');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const formatPhoneNumber = (value) => {
      const digits = value.replace(/\D/g, '');
      if (digits.length <= 2) return digits;
      if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
      if (digits.length <= 7) return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
      return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`;
    };
  
    const handleCountryChange = (e) => {
      const value = e.target.value.replace(/\D/g, '');
      setCountryCode(value);
    };
  
    const handlePhoneChange = (e) => {
      const value = e.target.value;
      const formattedNumber = formatPhoneNumber(value);
      if (formattedNumber.replace(/\D/g, '').length <= 9) {
        setPhoneNumber(formattedNumber);
      }
    };
  
    return (
      <div className="bg-gray-900 p-3 rounded-lg w-64">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-1">
            <span className="text-gray-400">+</span>
            <input
              type="tel"
              value={countryCode}
              onChange={handleCountryChange}
              className="w-8 bg-transparent text-gray-200 focus:outline-none"
              maxLength="3"
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="XX XXX XX XX"
              className="flex-1 bg-transparent text-gray-200 focus:outline-none"
              maxLength="12"
            />
          </div>
 
        </div>
      </div>
    );
}