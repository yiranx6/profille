import React from 'react';
import Head from 'next/head';
const PDFViewer = () => {
  return (
    <div>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQJihgIZgQOYmzs8f4yyvbRh7UcXHjpehd127lLJuhLLhHoVVBrvGYXEl4_IMQ66DhlMAD-iyJ-OB-A/pub?embedded=true"
        title="PDF Viewer"
        height="100%"
        width="100%"
    />
    </div>
  );
};

export default PDFViewer;
