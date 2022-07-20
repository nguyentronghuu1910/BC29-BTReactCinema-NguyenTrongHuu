import { DAT_GHE, HUY_GHE } from "../type/datVeType";

const DEFAULT_STATE = {
   dsGheDangDat: [],
}

export const DatVeReducers = (state = DEFAULT_STATE, { type, payload }) => {
   switch (type) {
      case DAT_GHE:
         let dsUpdate = [...state.dsGheDangDat];
         let index = dsUpdate.findIndex(ele => ele.soGhe === payload.soGhe)
         state.dsGheDangDat = dsUpdate;
         if (index !== -1) {
            dsUpdate.splice(index, 1)
         } else {
            dsUpdate = [...state.dsGheDangDat, payload]
         }
         state.dsGheDangDat = dsUpdate;
         return { ...state }
      case HUY_GHE:
         let dsGheUpdate = [...state.dsGheDangDat];
         let idx = dsGheUpdate.findIndex(ele => ele.soGhe === payload.soGhe)
         state.dsGheDangDat = dsGheUpdate;
         if (idx !== -1) {
            dsGheUpdate.splice(idx, 1)
         }
         state.dsGheDangDat = dsGheUpdate;
         return { ...state }
      default:
         return { ...state };
   }
}