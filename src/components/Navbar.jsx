import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-gray-800">Real Estate</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar