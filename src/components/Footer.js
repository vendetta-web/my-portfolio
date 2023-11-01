import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
    <div className="container mx-auto flex justify-center items-center">
      <p>&copy; {currentYear} Vendetta-Web. All rights reserved.</p>
      <div className="ml-4">
        <a href="https://www.salesforce.com/trailblazer/saurabhdixit2303" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-salesforce text-gray-300 text-2xl mx-2 hover:text-blue-500"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube text-gray-300 text-2xl mx-2 hover:text-red-700"></i>
        </a>
        <a href="https://github.com/vendetta-web" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github text-gray-300 text-2xl mx-2 hover:text-white"></i>
        </a>
        <a href="https://linkedin.com/saurabhdixit2303" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin text-gray-300 text-2xl mx-2 hover:text-blue-400"></i>
        </a>
        <a href="https://instagram.com/imdixitsaurabh" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-gray-300 text-2xl mx-2 hover:text-pink-500"></i>
          </a>
      </div>
    </div>
  </footer>
  )
}
