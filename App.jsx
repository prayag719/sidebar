import React, { useState } from 'react';

const Sidebar = () => {
  const sections = [
    {
      title: 'Section 1',
      subsections: ['Subsection 1.1', 'Subsection 1.2', 'Subsection 1.3'],
    },
    {
      title: 'Section 2',
      subsections: ['Subsection 2.1', 'Subsection 2.2', 'Subsection 2.3'],
    },
    {
      title: 'Section 3',
      subsections: ['Subsection 3.1', 'Subsection 3.2', 'Subsection 3.3'],
    },
    // Add more sections and subsections as needed
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (sectionIndex) => {
    setActiveSection((prevActiveSection) =>
      prevActiveSection === sectionIndex ? null : sectionIndex
    );
  };

  const toggleSubsection = (subsectionIndex) => {
    setActiveSubsection((prevActiveSubsection) =>
      prevActiveSubsection === subsectionIndex ? null : subsectionIndex
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sandwich Button */}
      <div className="sm:hidden">
        <button className="p-4 focus:outline-none" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-black text-white overflow-y-auto ${
          sidebarOpen ? 'block' : 'hidden sm:block'
        }`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Sidebar</h1>
          <ul className="space-y-4">
            {sections.map((section, index) => (
              <li key={index}>
                {index > 0 && (
                  <div className="border-t border-white mt-4 mb-4"></div>
                )}
                <button
                  className={`flex items-center w-full focus:outline-none ${
                    activeSection === index ? 'text-blue-500' : 'text-white'
                  }`}
                  onClick={() => toggleSection(index)}
                >
                  <span className="flex-grow">{section.title}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeSection === index ? 'rotate-0' : 'rotate-180'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {activeSection === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {section.subsections.map((subsection, subIndex) => (
                      <li key={subIndex}>
                        <button
                          className={`block pl-2 w-full text-left ${
                            activeSubsection === subIndex
                              ? 'text-blue-500'
                              : 'text-white'
                          }`}
                          onClick={() => toggleSubsection(subIndex)}
                        >
                          {subsection}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        <h2 className="text-lg font-bold mb-2">Main Content</h2>
        <p>Put your main content here...</p>
      </div>
    </div>
  );
};

export default Sidebar;
