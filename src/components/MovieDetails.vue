
  <template>
  <div id="hello">
    <v-card dark flat>
    <!-- <v-layout row>
        
        <v-flex xs8 offset-xs2>
            <iframe width="100%" height="300px" src="https://www.youtube-nocookie.com/embed/Ob7fPOzbmzE?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </v-flex>
    </v-layout> -->
       
    <v-layout row>
      <v-flex xs12 >
        <v-card  light class="card--flex-toolbar">
          <v-toolbar card  prominent>
            <v-btn icon  color="grey darken-3" @click="goBack">
              <v-icon medium >keyboard_arrow_left</v-icon>
            </v-btn>
            <!-- <v-toolbar-title class="display-1 grey--text text-xs-center">{{movie.Title}}</v-toolbar-title> -->
            <v-spacer></v-spacer>
            
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>

            <v-layout row class="ma-4" dark>
              <v-flex xs3>
                  
                <img v-bind:src="movie.Poster" alt="Poster movie" width="100%">
              </v-flex>
              <v-flex xs9 class="mx-4">
                  <div class="display-2" align="center">{{movie.Title}} </div>
                  <div class="subheading" align="center">{{movie.Year}}&nbsp | &nbsp{{movie.Runtime}}&nbsp</div>
                    <v-divider light class="my-2"></v-divider>

                    <v-layout row >
                        <v-flex xs3>    
                            <div class="title mt-2"> Género:</div> 
                        </v-flex>
                        <v-flex xs10><v-chip light v-for="(genre, index) in getGenres" :key="index"  >{{genre}}</v-chip></v-flex>
                    </v-layout>

                    <v-layout row class="my-2">
                        <v-flex xs3>    
                            <div class="title"> Clasificación:</div> 
                        </v-flex>
                        <v-flex xs10>
                             <div class="subheading ml-2">{{movie.Rated}}</div>
                        </v-flex>
                    </v-layout>

                    <v-layout row class="my-2">
                        <v-flex xs3>    
                            <div class="title"> Pais(es):</div> 
                        </v-flex>
                        <v-flex xs10>
                             <div class="subheading ml-2">{{movie.Country}}</div>
                        </v-flex>
                    </v-layout>    

                    <v-layout row class="my-2">
                        <v-flex xs3>    
                            <div class="title mt-2"> Dirección:</div> 
                        </v-flex>
                        <v-flex xs10>
                             <v-chip light v-for="(director, index) in  getDirectors" :key="index" >{{director}}</v-chip>
                        </v-flex>
                    </v-layout>    
                    
                    <v-layout row class="my-2">
                        <v-flex xs3>    
                            <div class="title mt-2"> Participación:</div> 
                        </v-flex>
                        <v-flex xs10>
                             <v-chip light v-for="(actor, index) in  getActors" :key="index" >{{actor}}</v-chip>
                        </v-flex>
                    </v-layout>  

                    <v-layout row class="my-2">
                        <v-flex xs3>    
                            <div class="title mt-2"> Palabras Clave:</div> 
                        </v-flex>
                        <v-flex xs10>
                             <v-chip light>Familia</v-chip>
                        </v-flex>
                    </v-layout>  
                    
                    <v-layout v-if="movie.Awards" row class="my-2">
                        <v-flex xs3>    
                            <div class="title"> Premios:</div> 
                        </v-flex>
                        <v-flex xs10>  
                            <div class="subheading ml-2">{{movie.Awards}}</div>
                        </v-flex>
                    </v-layout>  

                    <div align="center">
                            <v-btn outline  @click.stop="dialog2 = true"><v-icon>play_arrow</v-icon>  Ver Trailer</v-btn>
                            <v-btn outline >  Ver ficha compelta</v-btn>
                        </div>

                    <!-- <div class="display-1">{{movie.imdbRating}} / 10</div>
                    <div class="subheading">raitings by IMDB</div> -->
                    
              </v-flex>
            </v-layout>
            <v-divider light class="my-2"></v-divider>
            <v-layout row class="ma-4">
              <v-flex xs12>
                    
                    <div class="title my-3"> El Dilema:</div>
                    <p class="body-2">{{movie.Plot}}</p>
                      
                    
                    <div class="title my-3"> La Reflexión:</div>
                    <p class="body-2">{{movie.Plot}} {{movie.Plot}} {{movie.Plot}} {{movie.Plot}} {{movie.Plot}}</p>
                    
              </v-flex>
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'moviedetails',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movie: {"Title":"Wonder","Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"},

    }
  },
  computed: {
      getGenres: function(){
          return this.movie.Genre.split(',')
      }, 
      getDirectors: function(){
          return this.movie.Director.split(',')
      },  
      getActors: function(){
          return this.movie.Actors.split(',')
      }
  },
  filters: {
      splitter: function(data){
          return data.split(',')
      },
  },
  methods: {
      goBack () {
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  watch: {

  },
  mounted: function () {
        // this.$nextTick(function () {
            var ide = this.$route.params.movieid
            console.log(ide)
            var self=this;
            axios.get('http://www.omdbapi.com/', {
                params: {
                i: ide,
                apikey: '138c1c4f'
                }
            })
            .then(function (response) {
                console.log(response.data);
                self.movie = response.data
                
            })
            .catch(function (error) {
                console.log(error);
                self.texto = "Ocurrió un Error"
                self.color = 'red'
            });
    
        // Code that will run only after the
        // entire view has been rendered
    // })
    }
}
</script>

<style scoped>

</style>
