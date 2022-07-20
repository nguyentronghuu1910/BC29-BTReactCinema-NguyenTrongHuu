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
                     this.props.huyGhe(ele)
                  }}
                     className="btn btn-danger">Hủy</button>
               </th>
            </tr>
         )
      })
   };

   render() {
      return (
         <div>
            <div className={`d-flex flex-column`}>
               <div>
                  <button className={`${style.gheDuocChon}`} ></button>
                  <span className='text-white pl-2'>Ghế Đã Được Chọn</span>
               </div>
               <div>
                  <button className={`${style.gheDangChon} mt-3`} ></button>
                  <span className='text-white pl-2'>Ghế Đang Chọn</span>
               </div>
               <div>
                  <button className={`${style.ghe} mt-3`} ></button>
                  <span className='text-white pl-2'>Ghế Chưa Chọn</span>
               </div>
            </div>
            <div className='mt-5'>
               <table className="table text-white" border={2}>
                  <thead>
                     <tr>
                        <th className='text-primary'>Số Ghế</th>
                        <th className='text-info'>Giá</th>
                        <th className='text-danger'>Hủy</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.renderThongTin()}
                  </tbody>
                  <tfoot>
                     <tr>
                        {/* <td></td> */}
                        <td>Tổng Tiền</td>
                        <td>{this.props.dsGheDangDat.reduce((tongTien, ele) => {
                           return tongTien += ele.gia
                        }, 0).toLocaleString()}</td>
                     </tr>
                  </tfoot>
               </table>
            </div>
         </div>
      )
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