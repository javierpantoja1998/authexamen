import axios from "axios";
import Global from "@/Global";

export default class ServiceEmpleados {

    getEmpleadosLogin(){
        return new Promise(function(resolve){
            var request = "api/empleados";
            var url = Global.urlToken + request;
            axios.get(url,{headers:{"Authorization":"Bearer "+Global.token}}).then(response=>{
                resolve(response.data);
            })
        })
    }

    getEmpleados(){
        return new Promise(function(resolve){
            var request = 'api/empleados';
            var url = Global.urlEmpleados +request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    postLogin(){
        return new Promise(function(resolve){
            var objeto = {
                userName:Global.username,
                password:Global.password
            };
            var request = 'Auth/Login';
            var url = Global.urlToken + request;
            axios.post(url,objeto).then(response=>{
                resolve(response.data.response);
            })
        })
    }
}