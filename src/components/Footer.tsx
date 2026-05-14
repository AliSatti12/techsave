import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeType, setSubscribeType] = useState<"subscribe" | "unsubscribe">("subscribe");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full font-sans">

    
      <div className="bg-red-600 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">

      
          <h2 className="text-white font-extrabold tracking-widest uppercase text-base whitespace-nowrap min-w-fit">
            Mailing List
          </h2>

          <div className="flex flex-1 max-w-xl w-full">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400 rounded-l"
            />
            <button
              onClick={handleSubmit}
              className="bg-white px-4 flex items-center justify-center border-l border-gray-200 rounded-r hover:bg-gray-100 transition-colors"
              aria-label="Submit email"
            >
              {submitted ? (
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              )}
            </button>
          </div>

         
          <div className="flex items-center gap-5 text-white text-sm font-medium">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="mailAction"
                checked={subscribeType === "subscribe"}
                onChange={() => setSubscribeType("subscribe")}
                className="accent-blue-500 w-4 h-4"
              />
              Subscribe
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="mailAction"
                checked={subscribeType === "unsubscribe"}
                onChange={() => setSubscribeType("unsubscribe")}
                className="accent-blue-500 w-4 h-4"
              />
              Unsubscribe
            </label>
          </div>
        </div>
      </div>

   
      <div className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">

       
          <div className="flex flex-col gap-2">
            <a href="#" className="text-gray-700 text-sm hover:text-red-600 transition-colors">Blog</a>
            <a href="#" className="text-gray-700 text-sm hover:text-red-600 transition-colors">Product Index</a>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/terms-and-conditions" className="text-gray-700 text-sm hover:text-red-600 transition-colors">Terms and Conditions</Link>
          
          </div>

     
          <div className="flex flex-col gap-2">
            <Link to="/become-an-affiliate" className="text-gray-700 text-sm hover:text-red-600 transition-colors">Become an Affiliate</Link>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-gray-800 text-sm font-bold uppercase tracking-widest">
              Stay Connected
            </span>
            <div className="flex items-center gap-3">
             
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
          
              <a href="#" aria-label="X / Twitter" className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            
              <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
           
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-50 border-t border-gray-200 py-4 px-6 text-center">
        <p className="text-gray-500 text-xs">
          Copyright {new Date().getFullYear()} Sample Store. All Rights Reserved.{" "}
          <a href="#" className="text-red-500 hover:underline">
            by Shift4Shop Online Business Builder
          </a>
          .
        </p>
      </div>

    </footer>
  );
};

export default Footer;