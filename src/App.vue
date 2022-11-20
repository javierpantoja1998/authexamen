<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MenuComponent></MenuComponent>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
import Global from './Global';
import ServiceEmpleados from './services/ServiceEmpleados';
const service = new ServiceEmpleados;

export default {
  
  name: 'App',
  components: {
    MenuComponent
  },
  created(){
    service.getEmpleados().then(result=>{
        Global.username= result[0].apellido;
        Global.password = result[0].idEmpleado.toString();
        service.postLogin().then(result=>{
            Global.token = result;
            console.log(Global);
            
        })
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
