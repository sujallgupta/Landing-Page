import React, { useEffect, useState } from "react";

const countryCodes = [
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
];

const ConsultationPopup: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // default India
  const [captchaChecked, setCaptchaChecked] = useState(false);

  // Show popup when page loads
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !contact || !captchaChecked) {
      alert("Please fill all fields and verify captcha!");
      return;
    }

    alert(
      `Appointment booked for ${name}, Contact: ${countryCode} ${contact}`
    );
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-2xl shadow-lg relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Your Consultation
        </h2>
        <hr className="my-4 border-t border-gray-300"></hr>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Contact with Country Code (Responsive) */}
          <div>
            <label className="block text-sm font-medium">Contact</label>
            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-1/3"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.country})
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none flex-1"
                required
              />
            </div>
          </div>

          {/* Captcha */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="captcha"
              checked={captchaChecked}
              onChange={(e) => setCaptchaChecked(e.target.checked)}
              className="h-4 w-4"
              required
            />
            <label htmlFor="captcha" className="text-sm">
              I am not a robot
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
