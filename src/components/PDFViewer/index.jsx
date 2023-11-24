
"use client"
import { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import styles from './index.module.css'





const PDFViewer = ({fileSrc}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(fileSrc);
    

    function onDocumentLoadSuccess(e) {
        const {numPages: page_number} = e
        console.log(e)
        setNumPages(page_number);
        
      }
  
    // function onFileChange(event) {
    //   setFile(event.target.files[0]);
    // }
  
    // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    //   setNumPages(nextNumPages);
    // }


    return (
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <div className={`${styles.pdf_pages_wrapper}`}>
            {[...Array(numPages)].map((_, index) => (
                <Page className={styles.page} key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </div>            
        </Document>
      );
}

export default PDFViewer