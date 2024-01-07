import React from 'react'

function NavigationToggler() {
  return (
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            {/* Add the SVG icon here */}
          </button>
  )
}

export default NavigationToggler