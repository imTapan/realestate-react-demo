import { useState } from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = ['all', ...new Set(properties.map(property => property.category))]
  
  const filteredProperties = selectedCategory === 'all'
    ? properties
    : properties.filter(property => property.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <Link to={`/property/${property.id}`} key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm font-semibold text-blue-500">{property.category}</span>
              <h2 className="text-xl font-bold text-gray-800 mt-2">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">
                  ${property.price.toLocaleString()}
                </span>
                {property.category === 'Residential' && (
                  <span className="text-gray-600">
                    {property.bedrooms} beds • {property.bathrooms} baths
                  </span>
                )}
              </div>
              <div className="mt-2 text-gray-600">
                {property.area.toLocaleString()} sq ft
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home