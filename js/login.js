class Usuario{
    constructor(user,clave){
        this.user = user;
        this.clave = clave;
    }
    validar(){
        var y;
        if (this.user=="dennys"&& this.clave=="123456") {
            y =1;
        }else{
            y =0
        }
        return y;
    }
}

    var b = 0;
function login() {
    var u = new Usuario(document.getElementById("user").value,
    document.getElementById("pass").value)
    if (u.validar()==1) {
        limpiar()
        alert("El usuario es correcto")
        b=0;
    }else{
        b++;
        alert(b);
        limpiar();
        if (b==3) {
            desabilitar();
        }
    }
}
function limpiar() {
    document.getElementById("user").value="";
    document.getElementById("pass").value="";
    document.getElementById("user").focus();
}
function desabilitar() {
    document.getElementById("user").disabled=true;
    document.getElementById("pass").disabled=true;
    document.getElementById("botoncito").disabled=true;
}