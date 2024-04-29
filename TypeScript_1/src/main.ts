import Serie from "./series";
import seriesData from "./data";



function renderSeriesInTable(seriesData: Serie[]): void {
    const seriesTbody: HTMLElement= document.getElementById('Series')!;

    seriesData.forEach(s => {
        const row = document.createElement('tr');
            row.innerHTML = `<td>${s.id}</td>
                   <td>${s.name}</td>
                   <td>${s.channel}</td>
                   <td>${s.seasons}</td>`;
        seriesTbody.appendChild(row);
});
}

function getAverageSeasons (seriesData: Serie[]):number{
    let totalSeasons:number=0;
    let totalSeries:number=0;
    seriesData.forEach(serie => { totalSeasons = totalSeasons + serie.seasons;
        totalSeries= totalSeries + 1;
    });
    return totalSeasons/totalSeries
}