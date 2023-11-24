"use client"
import { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import styles from './page.module.css'
import PDFViewer from '@/src/components/PDFViewer';

// import ReactPDF from '@react-pdf/renderer';
// import {useEffect, useRef} from 'react';


const Research = () => {

  // const viewer = useRef(null);

  // useEffect(() => {
  //   import('@pdftron/webviewer').then(() => {
  //     WebViewer(
  //       {
  //         path: '/lib',
  //         initialDoc: '/research/ResilienceProject.pdf',
  //       },
  //       viewer.current,
  //     ).then((instance) => {
  //         const { docViewer } = instance;
  //         // you can now call WebViewer APIs here...
  //       });
  //     })
  //   }, []);

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    //   }

  return (
    <div className={styles.doc_container}>

        {/* <iframe src="research/ResilienceProject.pdf" width="100%" className={`${styles.pdf_viewer}`} style={{ border: 'none' }} /> */}
        <iframe src="research/Training Modules on Rio Conventions.pdf" width="100%" className={`${styles.pdf_viewer}`} style={{ border: 'none' }} />

        {/* <PDFViewer fileSrc={'research/ResilienceProject.pdf'}/> */}
        {/* <PDFViewer fileSrc={'research/Training Modules on Rio Conventions.pdf'}/> */}



        {/* <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div> */}



    </div>
  )
}

export default Research