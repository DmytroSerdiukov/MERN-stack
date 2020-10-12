import { createSelector } from "reselect";

export const selectAparts = state => state.aparts.aparts

export const ApartsSelector = createSelector([selectAparts], (aparts) => aparts)