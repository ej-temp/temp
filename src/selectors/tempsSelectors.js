export const getTemps = state => state.getAllTemps;
export const getHighTemp = state => state.highAndLowTemps.highTemp;
export const getLowTemp = state => state.highAndLowTemps.lowTemp;
export const getAvgTemp = state => state.highAndLowTemps.avgTemp;
