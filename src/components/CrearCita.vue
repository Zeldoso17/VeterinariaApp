<template>
    <div class="conte">
        <v-flex md12>
            <div class="titulo">
                <div class="contenedor-info">
                    <h1>Seguimiento paciente</h1>
                </div>
            </div>
            <h3 style="display: flex; justify-content: center; color: white;">Crea tus citas y administralas</h3>
            <br>
            <v-card class="mb-3 pa-10">
                <v-form @submit.prevent="">
                    <v-text-field outlined prepend-inner-icon="mdi-dog" v-model="nombreMascota" label="Nombre de la mascota"></v-text-field>
                    <v-text-field outlined prepend-inner-icon="fa-light fa-user" v-model="nombrePropietario" label="Nombre del dueño"></v-text-field>
                    <v-text-field outlined prepend-inner-icon="mdi-email" v-model="correo" label="Correo Electronico"></v-text-field>
                    <date @listenDate="showDate"/>
                    <v-textarea prepend-inner-icon="fa-thin fa-file" label="Sintomas" outlined v-model="Sintomas"></v-textarea>
                    <v-btn color="primary" block large>Crear Cita</v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import Date from '../components/Fecha.vue'
    export default {
        components: {
            Date,
        },
        data() {
            return {
                nombreMascota: '',
                nombrePropietario: '',
                correo: '',
                Fecha: '',
                Sintomas: ''
            }
        },
        methods: {
            showDate(data) {
                this.Fecha = data
            }
        },
    }
</script>

<style lang="css" scoped>
.conte{
    width: 50%;
}
.titulo{
    display: flex;
    justify-content: center;
}
.contenedor-info h3 > b{
    color: black;
}
</style>