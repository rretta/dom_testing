const d =document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id){
const $id = d.getElementById(id),
isMobile = {
android : () => ua.match(/android/i),
ios: () => ua.match(/iphone|ipad|ipod/i),
windows: () => ua.match(/windows phone/i),
any: function(){
return this.android() || this.ios() || this.windows();
}

},
isDesktop = {
 linux: () => ua.match(/linux/i),
 mac: () => ua.match (/mac os/i),
 windows: () => ua.match(/windows nt/i),
 any: function() {
    return this.linux() || this.mac() || this.windows();
 }  
},
isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/iemobile/i),
    edge: () => ua.match(/edge/i),
    brave: () => ua.matches(/brave/i),
    any: function(){
       return (
        this.ie() ||
        this.edge() ||
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.brave()
        )
    }
};


    // console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isMobile.any());
    // console.log(isBrowser.chrome())

    $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    <br>
    Ventajas del correcto manejo de esta información: redirecciones, contenido exclusivo, etc.
    `;


    /*Contenido exclusivo*/
 if (isBrowser.chrome()){
 $id.innerHTML += `<br> <br> <b>CONTENIDO EXCLUSIVO DE CHROME (y forks), messi chiquito:</b>
 <br>
 <img src="../assets/messichiquito.png">
 `
 }

 //*redirecciones ( lease subdominios, etc)//
// if(isMobile.android()){
//     window.location.href = "http://youtube.com"
// }

}