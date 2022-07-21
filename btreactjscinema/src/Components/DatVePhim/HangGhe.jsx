import React, { Component } from 'react';
import style from "./style.module.css";
import { connect } from 'react-redux';
import { datVeAction } from '../../Store/Reducers/action/DatVeAction';

class HangGhe extends Component {
   renderGhe = () => {
      return this.props.hangGhe.danhSachGhe.map((ele, idx) => {
         let bookedSeatsCSS = "";
         let disabled = false;
         // Trạng thái ghế đã đặt.
         if (ele.daDat) {
            bookedSeatsCSS = "booked_seats";
            disabled = true;
         };
         // Trạng thái ghế đang đặt.
         let bookingSeatsCSS = "";
         let indexGheDangDat = this.props.dsGheDangDat.findIndex((element) => element.soGhe === ele.soGhe);

         if (indexGheDangDat !== -1) {
            bookingSeatsCSS = "booking_seats";
         }

         return (
            <button
               onClick={() => {
                  this.props.datGhe(ele);
               }}
               className={`${style.ghe} ml-2 ${style[bookedSeatsCSS]} ${style[bookingSeatsCSS]}`}
               disabled={disabled} key={idx}>
               {ele.soGhe}
            </button>
         );
      });
   };

   renderSoHang = () => {
      return this.props.hangGhe.danhSachGhe.map((ele, idx) => {
         return (
            <button key={idx} className={`${style.rowNumber}`}>{ele.soGhe}</button>
         );
      });
   };

   renderHangGhe = () => {
      if (this.props.soHangGhe === 0) {
         return (
            <div>
               {this.props.hangGhe.hang}
               {this.renderSoHang()}
            </div>
         );
      }
      else {
         return (
            <div>
               {this.props.hangGhe.hang}
               {this.renderGhe()}
            </div>
         );

      }
   };
   render() {
      return (
         <div className={style.hangGheStyle}>
            {this.renderHangGhe()}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      dsGheDangDat: state.DatVeReducers.dsGheDangDat,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      datGhe: (ghe) => {
         dispatch(datVeAction(ghe))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
