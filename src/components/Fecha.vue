<template>
    <v-row>
        <v-col
        cols="12"
        sm="6"
        md="4"
        >
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="this.date"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    outlined
                    label="Selecciona una Fecha"
                    prepend-inner-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                    <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(sendDate())"
                    >
                        OK
                    </v-btn>
                </v-date-picker>
            </v-menu>
        </v-col>
    </v-row>
</template>

<script>

export default {
    data() {
        return {
            modal: false,
            menu: false,
        }
    },
    methods: {
        sendDate() {
            this.$emit("listenDate", this.date)
        }
    }, 

}
</script>
