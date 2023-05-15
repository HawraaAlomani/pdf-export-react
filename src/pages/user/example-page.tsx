import React from 'react';
import ExportPDFImgContainer from 'src/containers/user/exportPdfAsImgContainer';
import ExportPDFContainer from 'src/containers/user/exportPdfContainer';

export default function ExamplePage(){
  return (
    <div className='flex flex-row gap-3 justify-center'>
      <ExportPDFContainer />
      <ExportPDFImgContainer/>
    </div>
  );
}