<template>
    <div class="conte">
        <v-flex md12>
            <div class="titulo">
                <h1>Listado Pacientes</h1>
            </div>
            <h3 style="display: flex; justify-content: center; color: white;">Administra tus citas</h3>
            <br>
            <v-card class="mb-3">
                <v-card-text>
                    <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                    >
                        <v-icon style="font-size: 18px;" left>
                            fa-light fa-dog
                        </v-icon>
                        Bobby
                    </v-chip>
                    <v-container class="contenedor-info">
                        <h3><b>PROPIETARIO:</b> Emilio Elizalde Meza</h3>
                        <h3><b>E-MAIL:</b> Emilio@gmail.com</h3>
                        <h3><b>FECHA ALTA:</b> 2022-03-25</h3>
                        <h3><b>SINTOMAS:</b> Gripa</h3>
                    </v-container>
                    <v-btn color="warning">Editar</v-btn>
                    <v-btn class="ml-3" color="error">Eliminar</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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