import React from 'react';
import Head from 'next/head';
const PDFViewer = () => {
  return (
    <div>
    {/* <Head>
      <title>PDF Viewer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="View PDF file" />
    </Head> */}
    <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQJihgIZgQOYmzs8f4yyvbRh7UcXHjpehd127lLJuhLLhHoVVBrvGYXEl4_IMQ66DhlMAD-iyJ-OB-A/pub?embedded=true"
        title="PDF Viewer"
        width="100%"
        height="600px"
    />
  </div>
  );
};

export default PDFViewer;
