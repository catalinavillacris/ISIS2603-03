"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderSeriesInTable(seriesData) {
    const seriesTbody = document.getElementById('Series');
    seriesData.forEach(s => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${s.id}</td>
                   <td>${s.name}</td>
                   <td>${s.channel}</td>
                   <td>${s.seasons}</td>`;
        seriesTbody.appendChild(row);
    });
}
function getAverageSeasons(seriesData) {
    let totalSeasons = 0;
    let totalSeries = 0;
    seriesData.forEach(serie => {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries = totalSeries + 1;
    });
    return totalSeasons / totalSeries;
}
