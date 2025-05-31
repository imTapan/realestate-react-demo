import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <img src="/favicon.ico" alt="Logo" className="w-16 h-16" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-6">About Us</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We are a leading real estate agency committed to helping you find your perfect property.
              With years of experience in the market, we provide exceptional service and expertise.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team of professionals is dedicated to making your real estate journey smooth and successful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                <strong className="block text-white">Address:</strong>
                123 Real Estate Street<br />
                Beverly Hills, CA 90210
              </p>
              <p>
                <strong className="block text-white">Phone:</strong>
                (555) 123-4567
              </p>
              <p>
                <strong className="block text-white">Email:</strong>
                info@realestate.com
              </p>
              <p>
                <strong className="block text-white">Hours:</strong>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-white text-2xl">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl">LinkedIn</a>
          </div>
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer