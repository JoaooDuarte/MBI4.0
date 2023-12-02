const ctx_graficoProducao = document.getElementById('graficoProducao');
const ctx_graficoTemperatura = document.getElementById('graficoTemperatura');
const graficoProducao=new Chart(ctx_graficoProducao, {
type: 'bar',
data: {
labels: ['Peças Boas','Peças Ruins','Total Peças'],
datasets: [{
label: 'Produção',
data: [0, 0, 0],
backgroundColor: [
'rgba(64, 64, 255, 0.2)',
'rgba(255, 64, 64, 0.2)',
'rgba(255, 180, 64, 0.2)'
],
borderColor: [
'rgb(0, 0, 255)',
'rgb(255, 0, 0)',
'rgb(255, 128, 0)'
],
borderWidth: 1
}]
}
});
const graficoTemperatura=new Chart(ctx_graficoTemperatura, {
type: 'doughnut',
data: {
labels: [
'Temperatura',
'Range'
],
datasets: [{
label: 'Temperatura',
data: [0,100],
backgroundColor: [
'rgb(255,64, 64)',
'rgb(128, 128, 128)'
]
}]
}
});
const api=async()=>{
const endpoint="http://127.0.0.1:3000/"
let res=await fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
graficoProducao.data.datasets[0].data[0]=dados.pecasboas
graficoProducao.data.datasets[0].data[1]=dados.pecasruins
graficoProducao.data.datasets[0].data[2]=dados.pecastotais
graficoProducao.update()
const maxtemp=100
graficoTemperatura.data.datasets[0].data[0]=dados.temperatura
graficoTemperatura.data.datasets[0].data[1]=maxtemp-dados.temperatura
graficoTemperatura.update()
})
};
let intervalo=setInterval(api,5000)