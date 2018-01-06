
  <template>
  <div id="hello">
      
    <v-card color="grey lighten-5 elevation-5">
    
    <v-layout row>
      <v-flex xs12  md6 class="pa-3">
        <v-card class="card--flex-toolbar " >
          <!-- <v-toolbar card color="white" prominent>
            <v-btn icon  @click="goBack">
              <v-icon medium >keyboard_arrow_left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline ">Wonder</v-toolbar-title>
            <v-spacer class=""></v-spacer>
          
            <v-chip label color="indigo white--text" class="hidden-xs-only">{{movie.Rated}}</v-chip>
         
          </v-toolbar> -->
          <!-- <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ngiK1gQKgK8?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div> -->
          <v-divider></v-divider>
          <v-card-text >
            <v-layout row class="" dark>
              <v-flex xs6 sm4  offset-md1>
                <img class="elevation-5" v-bind:src="movie.Poster" alt="Poster movie" width="100%">
              </v-flex>
              <v-flex xs6 sm8 class="mx-2 text-xs-center">
                  <div class="headline" align="center">{{movie.Title}} </div>
                    <v-divider light class="my-2 "></v-divider>
                  <div class="body-1" align="center">{{movie.Year}}
                    <v-chip small label outline color="indigo white--text " class="">{{movie.Rated}}</v-chip>
                    <v-icon medium >&#x1F48E;</v-icon> 
                  </div>
                    
                    <div class="caption my-2" align=""> 
                        <v-icon medium>fa-clock-o</v-icon> {{movie.Runtime}}
                    </div>
                    <div class="caption my-2" align=""> 
                        <v-icon medium>fa-ticket</v-icon> {{movie.Genre}}
                    </div>  
                    
                    <v-btn outline><v-icon>play_arrow</v-icon> trailer</v-btn>
                    
                    <!-- <v-btn
                        absolute
                        dark
                        fab
                        color="pink"
                        >
                        <v-icon>play_arrow</v-icon>
                    </v-btn> -->
                    


                    <!-- <div class="display-1">{{movie.imdbRating}} / 10</div>
                    <div class="subheading">raitings by IMDB</div> -->
                    
              </v-flex>
            </v-layout>
            
                <v-tabs v-model="active" >
                <v-tabs-bar class="white" light>
                    <v-tabs-item  ripple href="#about">Info</v-tabs-item>
                    <!-- <v-tabs-item  ripple href="#synopsis">Synopsis</v-tabs-item> -->
                    <v-tabs-item  ripple href="https://youtube.com">Review</v-tabs-item>
                    <v-tabs-slider color="blue"></v-tabs-slider>
                </v-tabs-bar>
                <v-tabs-items>
                    <v-tabs-content id="about">
                        <v-card flat>
                            <v-card-text class="pt-0">
                                
                                <v-subheader class="pl-0">Director</v-subheader>
                                <div class="body-1">
                                    {{movie.Director}}
                                </div>
                                <v-subheader class="pl-0">Cast</v-subheader>
                                <div class="body-1">
                                    {{movie.Actors}}
                                </div>
                                <v-subheader class="pl-0">Country</v-subheader>
                                <div class="body-1">
                                    <v-chip label small outline v-for="item in getCountries" :key="movie.imdbID"> {{item}}</v-chip>
                                   
                                </div>
                               
                            </v-card-text>
                        </v-card>
                    </v-tabs-content >
                   <v-tabs-content id="review">
                        <v-card flat>
                            <v-card-text>ssaas</v-card-text>
                        </v-card>
                    </v-tabs-content>
                </v-tabs-items>
                </v-tabs>

                
            
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6 class="pa-3 hidden-sm-and-down">
          <v-card>
              <div class="video-container">
          <!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ngiK1gQKgK8?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe> -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ozlui190nZM?showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div>
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
      active: null,
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
      },
      getCountries: function(){
          return this.movie.Country.split(',')
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
            axios.get('https://www.omdbapi.com/', {
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
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.video-container iframe, .video-container object, .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
