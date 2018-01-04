<template>
        <!-- <h3 class="display-1 text-xs-center mt-4">Esta semana</h3> -->
        <v-layout row class="mt-2">
            
            <v-flex xs4>
                <img v-bind:src="movie.Poster" alt="siderman poster" align="right" class="elevation-5">
                
            </v-flex>    
            <v-flex  class="mt-3" @click="opened = !opened">
                <v-card light  class="elevation-5 pb-2" >
                        <v-layout>
                            <v-flex xs12>
                                <div class="headline text-xs-center pt-2">{{movie.Title}}</div>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs10 offset-xs1>
                                <v-divider
                                    light
                                    class="my-2 px-4"
                                ></v-divider>
                            </v-flex>
                        </v-layout>
                        <v-layout class="mb-2">
                            <v-flex>
                                <div class="text-xs-center subheading"> {{movie.Year}} &nbsp | &nbsp{{movie.Country}}&nbsp | &nbsp{{movie.Runtime}}</div>
                            </v-flex>
                        </v-layout>
                        <!-- <v-layout>
                            <v-flex>
                                <v-tabs centered v-model="active" class="ma-0">
                                    <v-tabs-bar class=" grey" light>
                                        <v-tabs-item
                                        v-for="tab in tabs"
                                        :key="tab"
                                        :href="'#' + tab.name"
                                        ripple
                                        >
                                        {{tab.name}}
                                        </v-tabs-item>
                                        <v-tabs-slider color="primary"></v-tabs-slider>
                                    </v-tabs-bar>
                                    <v-tabs-items class="grey">
                                        <v-tabs-content
                                        v-for="(tab, index) in tabs"
                                        :key="tab"
                                        :id="index"
                                        >
                                        <v-card flat>
                                            <v-card-text>{{ tab.content }}</v-card-text>
                                        </v-card>
                                        </v-tabs-content>
                                    </v-tabs-items>
                                </v-tabs>
                            </v-flex>
                        </v-layout> -->
                        
                        
                        <div class="text-xs-center subheading my-4">Dirección: <span class="body-2">{{movie.Director}}</span></div>
                         <div class="text-xs-center subheading my-4">Cast: <span class="body-2">{{movie.Actors}}</span></div>
                            
                        
                        
                        <div align="center">
                            <v-btn outline color="indigo" @click.stop="dialog2 = true"><v-icon>play_arrow</v-icon>  Ver Trailer</v-btn>
                            <v-btn outline color="indigo" @click.stop="goToDetails(movie.imdbID)">  Ver ficha compelta</v-btn>
                        </div>
                        <v-dialog v-model="dialog2" max-width="560px">
                            <!-- <v-card> -->
                                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U0D3AOldjMU?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <!-- </v-card> -->
                        </v-dialog>
                     
                </v-card>
            </v-flex>
            
        </v-layout>

</template>

<script>
import Countdown from './Countdown.vue'

export default {
  name: 'Home',
  components: {
      Countdown
  },
  props: {
      movie: {
      type: Object,
      default: 
      function () {
        return  {"Title":"Wonder","Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"}
      }
      
    },
  },
  data () {
    return {
        dialog2: false,
        opened:false,
        tabs: [
            {name: 'Info', content: 'hols'},
            {name: 'Reviews', content: 'hols'},
        ],
        //movie: {"Title":"Wonder","Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"},
    }
  },
  methods:{
      goToDetails: function(id){
          this.$router.push('details/' + id)
      }
  }
}
</script>

<style scoped>

/* .collaps {
    -webkit-transition: width 2s ease;
    -moz-transition: width 2s ease;
    -o-transition: width 2s ease;
    transition: width 2s ease;
    
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    background: yellow;
    vertical-align: middle;
    line-height: 30px;
    height: 30px;

    width: 5%;
}
.collaps.in {
    width: 100%;
} */

</style>
