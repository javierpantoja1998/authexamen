import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import EmpleadosComponent from "./components/EmpleadosComponent.vue"

const misRutas = [

    {
        path:"/", component: HomeComponent
    },
    {
        path:"/empleados", component: EmpleadosComponent
    },

]

//CREAMOS UNA CONSTANTE QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas 
});

//POR ULTIMO, EXPORTAR LA CONSTANTE ROUTER
export default router;