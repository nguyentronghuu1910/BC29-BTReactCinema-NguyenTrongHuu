import React, { Component } from 'react';
import style from "./style.module.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import dataDanhSachGhe from "../../data/danhSachGhe.json"
import HangGhe from './HangGhe';

export default class DatVePhim extends Component {
   renderHangGhe = () => {
      return dataDanhSachGhe.map((ele, idx) => {
         return (
            <div key={idx}>
               <HangGhe hangGhe={ele} soHangGhe={idx} />
            </div>
         );
      });
   };
   render() {
      return (
         <div className={`${style.bookingMovie} w-100 h-100 `} >
            <div className={`${style.overLay}`}>
               <div className='container-fluid'>
                  <div className="row">
                     <div className="col-8 text-center">
                        <h1 className='text-danger display-4 mb-0'>BOOKING MOVIES</h1>
                        <div className={`d-flex justify-content-center`}>
                           <div className={`${style.screen} mt-5`}></div>
                        </div>
                        <div className={`d-flex flex-column align-items-center text-left ${style.hangGheStyle}`}>
                           {this.renderHangGhe()}
                        </div>
                     </div>
                     <div className="col-4 text-center">
                        <h1 className='text-danger display-4'>ORDER LIST</h1>
                        <ThongTinDatGhe />
                     </div>
                  </div>
               </div>
            </div>
         </div >
      );
   }
}
