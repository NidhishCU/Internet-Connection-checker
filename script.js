window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const status=document.getElementById('currentStatus');
    const IP=document.getElementById('currentIp');
    const Strength=document.getElementById('currentStrength');

    status.textContent= 'Checking....';

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            IP.textContent= data.ip;
            status.textContent= 'Connected';

            const connection= navigator.connection;

            const network= connection?connection.downlink +'Mbps':'Unknown';
            Strength.textContent=network;

        })
        .catch(()=>{
            status.textContent= 'Disconnected';
            IP.textContent= '~';
            Strength.textContent= '-';

        })

    }
    else{
        status.textContent= 'Disconnected';
        IP.textContent= '~';
        Strength.textContent= '-';
    }



}