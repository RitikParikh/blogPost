import React from 'react';
import "../css/footer.css";

function Footer({title, colorMode, inverseColorMode}) {
  return (
    <div className="border-top border-gray-200 dark:border-gray-600">
      <div className="container">
        <div className="container reletive row row-cols-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  )
}

export default Footer