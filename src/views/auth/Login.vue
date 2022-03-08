<template>
    <div class="contenedor">
        <v-flex md4>
            <v-card height="450px" class="mb-3 pa-9 h-20">
                <div class="mt-8">
                    <h1>Inicio de sesión</h1>
                    <v-form @submit.prevent="Login(credenciales)">
                        <v-text-field label="Usuario" type="text" v-model="username"></v-text-field>
                        <v-text-field label="Contraseña" type="password" v-model="password"></v-text-field>
                        <v-btn :disabled="bloquear" color="primary" type="submit">Iniciar Sesión</v-btn>
                        <br>
                        <br>
                        <router-link class="crear" to="/registroUsuario">Crear Cuenta</router-link>
                    </v-form>
                </div>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            username: '',
            password: '',
            credenciales: {
                
            }
        }
    },
    methods: {
        ...mapActions('Usuarios',['Login'])
    },
    computed: {
        bloquear() {
            if(this.username.length > 5 && this.password.length > 8) return false
            return true
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
.crear{
    text-decoration: none;
    color: black;
    font-size: 17px;
}
</style>