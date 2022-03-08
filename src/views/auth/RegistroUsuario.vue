<template>
    <div class="contenedor">
        <v-flex md4>
            <v-card height="600px" class="mb-3 pa-9 h-20">
                <div class="mt-8">
                    <h1>Registrate</h1>
                    <v-form @submit.prevent="ProcesarFormulario()">
                        <v-text-field label="Nombres" v-model="nombres"></v-text-field>
                        <v-text-field label="Usuario" v-model="usuario"></v-text-field>
                        <v-text-field label="Correo" v-model="correo"></v-text-field>
                        <v-text-field label="Telefono" v-model="telefono"></v-text-field>
                        <v-text-field label="Contraseña" v-model="contraseña"></v-text-field>
                        <v-text-field label="Repetir Contraseña" v-model="contraseña2"></v-text-field>
                        <v-btn color="primary" type="submit">Registrarme</v-btn>
                    </v-form>
                </div>
            </v-card>
        </v-flex>
        
        <div>
            <alerta-error
                :snackbar="snackbar"
                :mensaje="mensaje"
                :timeout="2000"
            />
        </div>

    </div>
</template>

<script>
import AlertaError from '../../components/alertas/Error.vue'

    export default {
        components: {
            AlertaError,
        },
        data() {
            return {
                nombres: '',
                usuario: '',
                correo: '',
                telefono: '',
                contraseña: '',
                contraseña2: '',
                snackbar: false,
                mensaje: ''
            }
        },
        methods: {
            ProcesarFormulario() {
                if(!this.camposVacios()){
                    if(this.passwordsIguales()){
                        alert('Ningun campo vacio, y las contraseñas son iguales')
                    }else{
                        this.snackbar = true
                        this.mensaje = 'Las contraseñas no coinciden'
                    }
                }else{
                    this.snackbar = true
                    this.mensaje = 'No se pueden dejar campos vacios'
                }
            },
            camposVacios(){
                if(this.nombres === '' || this.usuario === '' || this.correo === '' || this.telefono === '' || this.contraseña === '' || this.contraseña2 == ''){
                    return true
                }
                return false
            },
            passwordsIguales(){
                if(this.contraseña === this.contraseña2) return true
                else return false
            }
        },
    }
</script>

<style lang="css" scoped>
.contenedor{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: linear-gradient(-225deg, #D41872 50%, #FF0066 0%);
    background-position: center;
}
h1{
    display: flex;
    justify-content: center;
}
</style>