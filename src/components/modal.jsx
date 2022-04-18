import { Button, Table, Card, Row, } from "react-bootstrap";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ModalShow = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >

        <div className='modalRight'>
          <div className='content' style={{color:'black'}}>
            <h3 style={{margin:'0px', color:'black'}}>Delete Data</h3>
            <p style={{color:'black'}}>Are you sure want to delete this data?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>
            </button>
            <button className='btnOutline'  onClick={onClose}>
              <span className='bold'>NO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


