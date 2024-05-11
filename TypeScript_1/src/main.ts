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
        row.addEventListener('click', () => seriesDetail(s));           
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

function seriesDetail (serie: Serie){
    const detail:HTMLElement = document.getElementById('serie-detail')!;
    detail.innerHTML=
    `
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID: ${serie.id}</h6>
                    <p class="card-text">Canal: ${serie.channel}</p>
                    <p class="card-text">Temporadas: ${serie.seasons}</p>
                </div>
            `
            ;

    
}

renderSeriesInTable(seriesData);
getAverageSeasons(seriesData);