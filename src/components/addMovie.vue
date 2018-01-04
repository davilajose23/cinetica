<template>
  <div id="addMovie">

    <v-list-tile  @click.stop="addForm = true">
        <v-list-tile-title>agregar pelicula</v-list-tile-title>
    </v-list-tile>
    <v-dialog v-model="addForm" max-width="800px" max-height="500px" scrollable class="white">
        <!-- <v-layout row>
                <iframe width="800" height="315" src="https://www.youtube-nocookie.com/embed/U0D3AOldjMU?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </v-layout> -->
        <v-layout  >
            <v-flex>
                <v-card dark >
                    <v-toolbar color="accent" dark>
                    <v-btn flat @click="addForm = null"><v-icon color="white">arrow_back</v-icon></v-btn> 
                    <v-toolbar-title>Agregar Pelicula</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="getInfo()" >
                        <v-icon color="white" >send</v-icon>
                    </v-btn>
                    
                </v-toolbar>
                <v-container>
                    <v-form v-model="valid" class="mt-3">
                       <v-layout row class="mx-3">
                            
                            <v-flex xs3>
                                <v-text-field
                                name="imdb-id"
                                label="IMDB ID"
                                placeholder="tt2543472"
                                v-model="imdbid"
                                id="imdb-id"
                                :rules="[() => imdbid.length > 0 || 'This field is required']"
                                required
                                ></v-text-field>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs4>
                                <v-menu
                                    lazy
                                    :close-on-content-click="false"
                                    v-model="menu"
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    :nudge-right="40"
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <v-text-field
                                    slot="activator"
                                    label="Día de Proyección"
                                    v-model="date"
                                    prepend-icon="event"
                                    readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="date" no-title scrollable actions>
                                    <template slot-scope="{ save, cancel }">
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="save">OK</v-btn>
                                        </v-card-actions>
                                    </template>
                                    </v-date-picker>
                                </v-menu>
                                </v-flex>
                        </v-layout>
                        <v-layout class="mx-3">
                            <v-flex>
                                <v-divider></v-divider>
                                <v-select
                                v-model="keywords_selected"
                                label="Keywords"
                                placeholder="educación, familia"
                                chips
                                tags
                                clearable
                                :items="keywords"
                                :rules="[() => keywords_selected.length > 0 || 'This field is required']"
                                required
                                ></v-select>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-divider></v-divider>
                                <v-text-field
                                label="El Dilema"
                                v-model="dilemma"
                                counter
                                max="120"
                                full-width
                                multi-line
                                single-line
                                :rules="[() => dilemma.length > 0 || 'This field is required']"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-divider></v-divider>
                                <v-text-field
                                label="La Reflexión"
                                v-model="reflection"
                                counter
                                max="120"
                                full-width
                                multi-line
                                single-line
                                :rules="[() => reflection.length > 0 || 'This field is required']"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <small class="ml-3">*indicates required field</small>
                    </v-form>
                </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-dialog>
    <v-snackbar
      :timeout="timeout"
      bottom
      multi-line
      :color = "color"
    >
      {{texto}}
      <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </div>
</template>

<script>
export default {
  name: 'addMovie',
  data () {
    return {
      addForm : null,
      imdbid: '',
      snackbar: true,
      texto: 'Se agregó la pelicula',
      color: 'green',
      timeout: 4000,
      keywords: ['educación', 'familia', 'juzgado', 'amor', 'prodigio', 'revelación'],
      keywords_selected: [],
      reflection: '',
      dilemma: '',
      


    }
  },
  methods: {
    getInfo: function (el) {
        
      

        var ide = this.imdbid;
        var self=this;
        axios.get('http://www.omdbapi.com/', {
            params: {
            i: ide,
            apikey: '138c1c4f'
            }
        })
        .then(function (response) {
            console.log("first data response")
            console.log(response.data);

            //TODO verificar que datos son correctos
            self.texto = "Se agregó la pelicula"
            self.color = 'green'
            self.$emit('add', response.data)
            self.snackbar = true
            
        })
        .catch(function (error) {
            console.log(error);
            self.texto = "Ocurrió un Error"
            self.color = 'red'
            self.snackbar = true
        });

        this.addForm = null
        
    },
  }
}
</script>

<style scoped>

</style>
