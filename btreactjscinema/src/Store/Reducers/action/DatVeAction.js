import { DAT_GHE, HUY_GHE } from "../type/datVeType"

export const datVeAction = (ghe) => {
   return {
      type: DAT_GHE,
      payload: ghe
   }
}

export const huyVeAction = (ghe) => {
   return {
      type: HUY_GHE,
      payload: ghe
   }
}