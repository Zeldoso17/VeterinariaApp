<template>
    <div class="contenedor">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <crear-cita />
                <listar-cita />
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import CrearCita from '../components/CrearCita.vue'
import ListarCita from '../components/ListarCitas.vue'
export default {
    components: {
        ListarCita,
        CrearCita
    },
    props: {
        Fecha: ''
    },
}
</script>

<style lang="css" scoped>
.contenedor{
    height: 100%;
    background: linear-gradient(-225deg, #D41872 50%, #FF0066 0%);
}

</style>