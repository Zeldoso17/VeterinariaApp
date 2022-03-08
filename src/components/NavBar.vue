<template>
    <div>
        <v-toolbar color="primary" class="menu" app>
            <v-toolbar-title class="texto">Veterinaria</v-toolbar-title>

            <v-spacer></v-spacer>
            
            <v-btn v-if="!usuarioAutenticado" to="/Login" color="secondary">Login</v-btn>
            <v-btn v-if="!usuarioAutenticado" to="/registroUsuario" class="h" color="warning">Registro</v-btn>
            <v-btn v-if="usuarioAutenticado" to="/crearCita" class="h" color="primary">Crear Cita</v-btn>
            <v-btn v-if="usuarioAutenticado" @click="CerrarSesion" to="/Login" color="error" class="h">Cerrar Sesión</v-btn>
            
        </v-toolbar>

        

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('Usuarios', ['usuarioAutenticado'])
    },
    methods: {
        ...mapActions('Usuarios', ['CerrarSesion'])
    },
}
</script>

<style lang="css" scoped>
.texto{
    color: white;
}
.h{
  margin-left: 20px;
}
</style>