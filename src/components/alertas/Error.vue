<template>
    <div>
        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            color="red accent-2"
        >
            {{ mensaje }}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="black"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        props: {
            snackbar: String,
            mensaje: String,
            timeout: Number,
        },
    }
</script>

<style lang="css" scoped>

</style>