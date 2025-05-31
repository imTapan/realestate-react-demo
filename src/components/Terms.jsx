function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined here.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Listings</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All property listings are subject to availability and price changes</li>
              <li>Images and descriptions are for illustrative purposes only</li>
              <li>We strive to maintain accurate information but cannot guarantee complete accuracy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when submitting inquiries</li>
              <li>Use the website for lawful purposes only</li>
              <li>Respect the intellectual property rights of the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p>We are not liable for any damages arising from the use or inability to use our website or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p>For any questions regarding these terms, please contact us at legal@realestate.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms