export const getTemps = state => state.getAllTemps;
export const getDetailTemps = state => state.details.temps;
export const getDetailName = state => state.details.name;
export const getHighTemp = state => state.highAndLowTemps.highTemp;
export const getLowTemp = state => state.highAndLowTemps.lowTemp;
export const getAvgTemp = state => state.highAndLowTemps.avgTemp;
