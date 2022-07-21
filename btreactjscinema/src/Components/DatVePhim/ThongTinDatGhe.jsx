import React, { Component } from 'react';
import style from "./style.module.css";
import { connect } from 'react-redux';
import { huyVeAction } from '../../Store/Reducers/action/DatVeAction';

class ThongTinDatGhe extends Component {
   renderThongTin = () => {
      return this.props.dsGheDangDat.map((ele, idx) => {
         return (
            <tr key={idx}>
               <th>{ele.soGhe}</th>
               <th>{ele.gia.toLocaleString()}</th>
               <th>
                  <button onClick={() => {
                     this.props.huyGhe(ele);
                  }}
                     className="btn btn-outline-danger">CANCEL</button>
               </th>
            </tr>
         );
      });
   };

   render() {
      return (
         <div>
            <div className={`d-flex flex-column`}>
               <div className={`${style.noteSpan}`}>
                  <button style={{ cursor: 'default' }} className={`${style.booked_seats} mt-3`} ></button>
                  <span className='text-white pl-2'>Booked Seat.</span>
               </div>
               <div className={`${style.noteSpan}`}>
                  <button style={{ cursor: 'default' }} className={`${style.booking_seats} mt-3`} ></button>
                  <span className='text-white pl-2'>Selecting Seat.</span>
               </div>
               <div className={`${style.noteSpan}`}>
                  <button style={{ cursor: 'default', marginLeft: 'none' }} className={`${style.ghe} mt-3`} ></button>
                  <span className='text-white pl-2'>Available Seats.</span>
               </div>
            </div>
            <div className='mt-5'>
               <table className="table text-white" border={2}>
                  <thead>
                     <tr>
                        <th className='text-success'>Seat No.</th>
                        <th className='text-warning'>Price</th>
                        <th className='text-info'>Cancel</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.renderThongTin()}
                  </tbody>
                  <tfoot>
                     <tr>
                        <td>Totals</td>
                        <td>{this.props.dsGheDangDat.reduce((tongTien, ele) => {
                           return tongTien += ele.gia;
                        }, 0).toLocaleString()}</td>
                     </tr>
                  </tfoot>
               </table>
            </div>
         </div >
      );
   }
}

const mapStateToProps = (state) => {
   return {
      ...state.DatVeReducers
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      huyGhe: (ghe) => {
         dispatch(huyVeAction(ghe))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);