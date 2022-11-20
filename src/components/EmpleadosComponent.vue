<template>
    <div>
       <h1>Empleados</h1> 
       <table class="table">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emple in empleados" :key="emple">
                    <td>{{emple.apellido}}</td>
                    <td>{{emple.oficio}}</td>
                    <td>{{emple.salario}}</td>
                    <td>{{emple.director}}</td>
                </tr>
            </tbody>
       </table>
    </div>
</template>

<script>

import ServiceEmpleados from './../services/ServiceEmpleados';
const service = new ServiceEmpleados();

export default {
    name: 'EmpleadosComponent',

    methods:{

    },
    
    mounted(){
        service.getEmpleadosLogin().then(result=>{
            this.empleados = result;
        })
    },

    data() {
        return {
            empleados:[],
        };
    },
};
</script>

<style scoped>

</style>