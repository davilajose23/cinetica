<template>
    
        <!-- <div class="display-2">Cinética</div> -->
    <div>        
        <v-layout>
             <v-flex xs12 >
                
                <v-card light>
                    <v-card-media src="https://scontent.fntr6-1.fna.fbcdn.net/v/t31.0-8/459339_10151169119271722_1711408949_o.jpg?oh=fd4203666ba313c058d858ea38beb164&oe=5ABA339F" height="200px">
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
         <v-layout class="mt-4 " wrap>
            <v-flex xs12 md6 offset-md1>
                <v-card light class="mx-3">

                <!-- <v-toolbar color="primary" dark card>
                    <v-toolbar-title class>About</v-toolbar-title>
                    
                </v-toolbar> -->
                <v-container>

                <h3 class="headline mb-0">Cinetica</h3>
                <blockquote>Cinética Tec de Monterrey es una actividad académica y cultural organizada por el Departamento de Filosofía y Ética y de Difusión Cultural del Tec de Monterrey, Campus Monterrey.
                    
                </blockquote>
                <v-divider
                    light
                    class="my-2 divider"
                ></v-divider>
                <br>
                <p class="body-2 ml-2"><v-icon light>date_range</v-icon> Todos los miércoles </p>
                <p class="body-2 ml-2"><v-icon light>access_time</v-icon> 18:00 horas </p>
                <p class="body-2 ml-2"><v-icon light>place</v-icon> Auditorio de Comunicación y Periodismo (Segundo Piso, Aulas V) </p>
                <p class="caption ml-4">*Entrada Libre </p>
                
                <v-card-actions>
                    <v-btn flat color="primary" tag="a" href="mailto:gerardogarza@itesm.mx"> <v-icon>mail</v-icon> Más informes</v-btn>
                </v-card-actions> 
               </v-container>
                
                </v-card>
            </v-flex>
            <v-flex xs12 md4 offset-md1 justify  class="mt-4">
                <div align="center" style="height: 0;" >
                    <v-layout align="text-xs-center ">
                        <v-flex xs2 class="date pa-0" color="primary" dark >
                            <div class="title pt-2 white--text">{{proyectionDate | day}} </div>
                            <v-divider
                                dark
                                class="my-1 divider"
                            ></v-divider>
                            <div class="caption mb-1 white--text">{{proyectionDate | month}}</div>
                           
                        </v-flex>
                    </v-layout>
                </div>
                <div class="headline text-xs-center">Proxima proyección</div>
                <br>
                <div class="text-xs-center">
                    <img :src="movie.Poster" alt="" width="200px">
                </div>
                
            </v-flex>
        </v-layout>
    </div>

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
        proyectionDate: "20 Enero 2017",
        //movie: {"Title":"Wonder","Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"},
    }
  },
  methods:{
      goToDetails: function(id){
          this.$router.push('details/' + id)
      }
  },
  filters:{
      day: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0) + value.charAt(1)
    },
    month: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(3) + value.charAt(4) + value.charAt(5)
    },
    year: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.slice(6)
    },
  }
}
</script>

<style scoped>
.date{
    background-color: #006064;
    top: 70px;
    left: 80px;
    position: relative;
    z-index: 1;
}
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
