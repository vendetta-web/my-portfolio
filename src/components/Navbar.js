import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Vendetta Web
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact ME
          </a>
        </nav>
        <div className="md:ml-auto">
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
    </header>
  )
}
