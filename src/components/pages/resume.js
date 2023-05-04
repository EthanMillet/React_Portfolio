import React from 'react';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Resume from '../../assets/Resume.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Home() {



  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <Document file={Resume}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>

        <button type="button" class="btn btn-primary text-nowrap" style={{width:"12rem", height: "4rem", marginTop: "15%"}}><a href ={Resume} attributes-list download style={{color: "white"}}> Dowload the Resume </a> </button>   
    </div>
  );
}
