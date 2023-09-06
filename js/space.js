let btn = document.getElementById("btnBuscar");
let url = "https://images-api.nasa.gov/search?q="
let container = document.getElementById("contenedor");

btn.addEventListener("click",() => {
    let text = document.getElementById("inputBuscar").value;

    fetch(url+text)
        .then(response => response.json())
        .then(data => {
            let arreglo = data.collection.items;
            arreglo.forEach(element => {
                container.innerHTML += `    <div class="col">
                                                <div class="card shadow-sm">
                                                    <img src="${element.links[0].href}" class="card-img-top" width="100%" height="225">
                                                        <div class="card-body" style="height:350px">
                                                            <h6 style="height:50px">${element.data[0].title}</h6>
                                                            <p class="card-text" style="overflow-y: scroll;height:200px">${element.data[0].description}</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group">
                                                        </div>
                                                        <small class="text-body-secondary">${element.data[0].date_created}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        `
                
            });
        })  
})
