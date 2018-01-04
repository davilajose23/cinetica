<template>
  <div id="Movies">
        <v-container>
            
            <v-layout wrap row v-if="!projectionDate" >
                <v-flex xs4 >
                    <div class="headline mt-1 hidden-xs-only" >
                        Peliculas
                    </div>
                    <div class="headline hidden-sm-and-up"  >Peliculas</div>
                    
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm8 md3 class="" >
                    <v-text-field
                        light
                        solo
                        prepend-icon="search"
                        placeholder="Search"
                        v-model="search"
                        class="mt-0 "
                        
                    ></v-text-field>
                    
                </v-flex>
            </v-layout>
            <v-layout  wrap justify-space-between v-if="!projectionDate" class="mt-2 ">

                <v-flex xs12 class="hidden-sm-and-up" >
                    <v-dialog v-model="sheet" style="width:100%"> 
                        <v-btn block flat slot="activator"> <v-icon>tune</v-icon>&nbsp Filter</v-btn>
                        <v-list>
                            <v-subheader>Filter</v-subheader>
                            <v-list-tile>
                                <v-subheader class="pl-0">Genero</v-subheader>
                                <v-flex xs-8 sm2 class="px-1">
                                    <v-select
                                    v-bind:items="genre"
                                    v-model="genre_selected"
                                    single-line
                                    bottom
                                    :key="item" 
                                    class="pt-1"
                                    ></v-select>
                                </v-flex>
                                
                            </v-list-tile>
                            <v-list-tile> 
                                <v-subheader class="pl-0">Streaming</v-subheader>
                                <v-flex xs9 sm2>
                                    <v-select
                                    v-bind:items="['All','Netflix', 'HBO go']"
                                    v-model="streaming"
                                    single-line
                                    bottom
                                    :key="item"
                                    class="pt-1"
                                    ></v-select>
                                </v-flex>
                            </v-list-tile>
                            <v-list-tile>
                                <v-subheader class="pl-0">Order by</v-subheader>
                                <v-flex xs9 sm2>
                                    <v-select
                                    v-bind:items="['Title', 'Year']"
                                    v-model="orderBy"
                                    
                                    single-line
                                    bottom
                                    :key="item"
                                    class="pt-1"
                                    ></v-select>
                                </v-flex>
                                <v-btn icon @click.native="ascend = !ascend"> 
                                    <v-icon>swap_vert</v-icon> 
                                </v-btn>
                            </v-list-tile>
                        </v-list>
                    </v-dialog>
                </v-flex>

                <!-- <v-div class="hidden-xs-only"> -->
               <v-subheader xs2 class="pl-0">Genero</v-subheader>
                <v-flex xs-8 sm2 class="px-1">
                    
                    <v-select
                    v-bind:items="genre"
                    v-model="genre_selected"
                    single-line
                    bottom
                    :key="item" 
                    class="pt-1"
                    ></v-select>
                </v-flex>
                
                <v-subheader class="pl-0">Streaming</v-subheader>
                <v-flex xs9 sm2>
                    <v-select
                    v-bind:items="['All','Netflix', 'HBO go']"
                    v-model="streaming"
                    single-line
                    bottom
                    :key="item"
                    class="pt-1"
                    ></v-select>
                </v-flex>

                <v-subheader class="pl-0">Order by</v-subheader>
                <v-flex xs9 sm2>
                    <v-select
                    v-bind:items="['Title', 'Year']"
                    v-model="orderBy"
                    
                    single-line
                    bottom
                    :key="item"
                    class="pt-1"
                    ></v-select>
                </v-flex>
                <v-btn icon @click.native="ascend = !ascend"> 
                    <v-icon>swap_vert</v-icon> 
                </v-btn>

                <!-- </v-div> -->

                <!-- <v-flex xs1 class=" offset-xs6 offset-sm0" order-xs2 order-sm4>
                    <v-dialog v-model="filtro" class="mt-0" max-width="500px">

                    
                    <v-card>
                        <v-card-title>
                        <span class="headline">Filtro</span>
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                                <v-flex xs3 class="mt-4"> <v-subheader> Género</v-subheader></v-flex>
                                <v-flex xs9 class="px-2">
                                    <v-select
                                    v-bind:items="genre"
                                    v-model="genre_selected"
                                    
                                    single-line
                                    bottom
                                    :key="item" 
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                            
                            <v-layout row>
                                <v-flex xs3 class="mt-4">
                                    <v-subheader>Calificación</v-subheader>
                                </v-flex>    
                            <v-flex xs9 class="px-2">
                                
                                <v-select
                                label="Select"
                                closeable
                                v-bind:items="calificaciones"
                                v-model="clasificacion"
                                item-text="name"
                                item-value="name"
                                
                                chips
                                max-height="auto"
                                autocomplete
                                >
                                <template slot="selection" slot-scope="data">
                                    <v-chip
                                    close
                                    @input="data.parent.selectItem(data.item)"
                                    :selected="data.selected"
                                    class="chip--select-multi"
                                    :key="JSON.stringify(data.item)"
                                    light
                                    >
                                    <v-avatar>
                                        <img :src="data.item.avatar">
                                    </v-avatar>
                                    </v-chip>
                                </template>
                                <template slot="item" slot-scope="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                    </template>
                                    <template v-else>
                                        <v-list-tile-avatar>
                                            <img v-bind:src="data.item.avatar"/>
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                        </v-list-tile-content>
                                    </template>
                                </template>
                                </v-select>
                            </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs3>
                                    <v-subheader>Ordenar por</v-subheader>
                                </v-flex>
                                <v-flex xs9>
                                   <v-select
                                    v-bind:items="['Nombre (ascendente)', 'Nombre (descendente)', 'Año (ascendente)', 'Año (descendente)']"
                                    v-model="e1"
                                    label="Select"
                                    single-line
                                    bottom
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="filtro = false">Aceptar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-flex>
                <v-flex xs1 class="" order-xs4>
                    <v-menu bottom left>
                        <v-btn icon slot="activator" dark>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list>
                                <addMovie v-on:add="addMovie"></addMovie> 
                            <v-list-tile v-for="(option, index) in options" :key="index" @click="">
                                <v-list-tile-title>{{option}}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-flex>    -->
            </v-layout>
            
            <v-layout v-else>
                <div class="headline">
                    Proyecciones del Periodo
                </div>
            </v-layout>
        </v-container>
        {{clasificacion}}
        <!-- {{moviesWidth}} 
        {{moviesHeight}} -->
        <!-- <v-slider v-model="moviesWidth" thumb-label step="10" min=120 max=300 ticks></v-slider> -->
        <!-- {{this.$vuetify.breakpoint.width}} -->

        <v-container fluid class="pt-1">
                
                <transition-group
                    name="staggered-fade"
                    tag="v-layout"
                    class="wrap reverse"
                    v-bind:css="false"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    id="moviesSection"
                >
                <!-- xs6 sm4 md3 xl -->
                <v-flex :width="moviesWidth" :style="{maxWidth: (moviesWidth*1.2) + 'px'}" class="pointer px-2 mb-2" @click.stop="selectMovie(movie.imdbID)" v-for="movie in filteredMovies" :key="movie.imdbID" :id="movie.imdbID">
                   
                    <div align="center" style="height: 0;" v-if="projectionDate">
                        <v-layout align="text-xs-center">
                            <v-flex xs4 class="date pa-0" color="primary" dark >
                                <div class="title pt-2 white--text">{{movie.Released | day}} </div>
                                <v-divider
                                    light
                                    class="my-1 divider"
                                ></v-divider>
                                <div class="caption white--text">{{movie.Released | month}}</div>
                            </v-flex>
                        </v-layout>
                    </div>
                    
                    <!-- <div align="center" style="height: 0;">
                        <v-layout >
                         <v-flex xs12 class="mt-2">
                            <v-avatar
                            :tile="false"
                            size="40px"
                            class=" calification grey lighten-3 elevation-5"
                            :style="{top: moviesHeight * 0.75 + 'px', left: moviesWidth / 2 * 0.90 + 'px' }"
                            >
                            <img :src="movie.clasificacion | clasificationImg" alt="avatar" style="width: 25px;   height: 25px">
                            
                            </v-avatar>
                        </v-flex>
                        </v-layout>
                    </div> -->
                     
                    <v-card hover class="" :style="{width: moviesWidth + 'px'}" >
                            <v-card-media class="selected" v-bind:class="{opacity: overdate(movie.Released) && projectionDate}"  v-bind:src="movie.Poster" :height="moviesHeight" >
                            </v-card-media>
                            <!-- :height="imageHeight" -->
                    </v-card>

                    <v-layout class="mt-2" justify-space-between>
                        <v-flex xs12 class="pl-2">
                            <div class="body-2">{{movie.Title}}</div>
                            <div class="caption">{{movie.Year}}</div>
                        </v-flex>
                        
                    </v-layout>

                    <div hover  class="mt-2 " :style="{width: moviesWidth + 'px'}">
                        
                    </div>
                </v-flex>
                </transition-group>
            <!-- </v-layout> -->
            
            <v-dialog v-model="dialog2" max-width="800px" max-height="500px" scrollable class="noshadow">    
                <MoviePreview v-bind:movie="selected"></MoviePreview>
            </v-dialog>
            
        </v-container>
  </div>
</template>

<script>

import addMovie from './addMovie.vue'
import MoviePreview from './MoviePreview.vue'

var config = {
    apiKey: "AIzaSyDD8VJ9Q808e68EMRCp0KebZJtp-xePf3k",
    authDomain: "cinetica-be7df.firebaseapp.com",
    databaseURL: "https://cinetica-be7df.firebaseio.com",
    projectId: "cinetica-be7df",
    storageBucket: "cinetica-be7df.appspot.com",
    messagingSenderId: "838452908084"
  };


// var firebaseApp = firebase.initializeApp(config)
// var db = firebaseApp.database()

export default {
  name: 'Movies',
  components: {
      addMovie,
      MoviePreview,
  },
//   firebase: {
//     // simple syntax, bind as an array by default
    
//     movies: {
//       source: db.ref('movies'),
//       // optionally bind as an object
//       asObject: false,
//       // optionally provide the cancelCallback
//       cancelCallback: function () {},
//       // this is called once the data has been retrieved from firebase
//       readyCallback: function () {
          
//       }
//     }
//   },
  props: {
      projectionDate: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
        dialog2: false,
        drawer: null,
        search: '',
        genre: ["All","Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", "Sport", "Superhero", "Thriller", "War", "Western"],
        platforms: ['Netflix', 'HBO go'],
        genre_selected: "All",
        show: true,
        filtro: false,
        options: ['agregar pelicula'],
        clasificacion: '',
        orderBy: 'Title',
        streaming: 'All',
        ascend: true,
        calificaciones: [
        // { header: 'Kristoff'},
          { name: 'Joya', group: 'Kristoff', avatar: 'https://images.emojiterra.com/mozilla/512px/1f48e.png'},
          { name: 'Like', group: 'Kristoff', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/200px-Bot%C3%B3n_Me_gusta.svg.png'},
          { name: 'Meeh', group: 'Kristoff', avatar: 'https://i2.wp.com/www.periodismo.com/wp-content/subid/17_emoji.png?resize=160%2C160' },
          { name: 'Dislike', group: 'Kristoff', avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Not_facebook_dislike_thumbs_down.png' },
          { name: 'Poop', group: 'Kristoff', avatar: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059' },
          { name: 'Top', group:'Kristoff', avatar: 'http://pluspng.com/img-png/award-png-award-png-photos-1587.png'},
          { name: 'Sin clasificación', group: 'Kristoff', avatar: '' },
        //   { divider: true },
        //   { header: 'Group 2'},
        //   { name: 'Britta Holt', group: 'Group 2', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460' },
        //   { name: 'Jane Smith ', group: 'Group 2', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460' },
        //   { name: 'John Smith', group: 'Group 2', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460' },
        //   { name: 'Sandra Williams', group: 'Group 2', avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460' }
        ],
        
        selected: {},     
        // moviesWidth: 120, 
        movies: [
            {"Title":"Wonder","clasificacion":'joya',"Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"},
            {"Title":"I, Daniel Blake", "clasificacion":'like',"Year":"2016","Rated":"R","Released":"09 Jun 2017","Runtime":"100 min","Genre":"Drama","Director":"Ken Loach","Writer":"Paul Laverty (screenplay)","Actors":"Dave Johns, Hayley Squires, Briana Shann, Dylan McKiernan","Plot":"After having suffered a heart-attack, a 59-year-old carpenter must fight the bureaucratic forces of the system in order to receive Employment and Support Allowance.","Language":"English","Country":"UK, France, Belgium","Awards":"Won 1 BAFTA Film Award. Another 24 wins & 30 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NTMzMTk4NV5BMl5BanBnXkFtZTgwNTU5MjE4MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.9","imdbVotes":"33,529","imdbID":"tt5168192","Type":"movie","DVD":"16 Jan 2018","BoxOffice":"$252,282","Production":"Sundance Selects","Website":"http://www.idanielblake.co.uk/","Response":"True"},
            {"Title":"Magallanes", "clasificacion":'meeh',"Year":"2015","Rated":"N/A","Released":"20 Aug 2015","Runtime":"109 min","Genre":"Drama","Director":"Salvador del Solar","Writer":"Salvador del Solar (screenplay)","Actors":"Damián Alcázar, Tatiana Astengo, Jairo Camargo, Tatiana Espinoza","Plot":"Magallanes, a former army soldier (Damian Alcazar) drives a taxi and eventually a driver of a retired colonel (Federico Luppi), who was in command of his troops in times of struggle against...","Language":"Quechua, Spanish","Country":"Peru, Argentina, Spain","Awards":"15 wins & 13 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NDU4OTM2Ml5BMl5BanBnXkFtZTgwMjgxMTc2OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"7.4","imdbVotes":"589","imdbID":"tt4072352","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Title":"La vallée des larmes", "clasificacion":'like', "Year":"2012","Rated":"N/A","Released":"10 Jun 2013","Runtime":"95 min","Genre":"Drama","Director":"Maryanne Zéhil","Writer":"Maryanne Zéhil (dialogue), Maryanne Zéhil (original story), Maryanne Zéhil (screenplay), Maryanne Zéhil (story and screenplay), Maryanne Zéhil","Actors":"Nathalie Coupal, Joseph Antaki, Wafa Tarabey, Leyla Hakim","Plot":"Marie, a Canadian editor specialized in testimonies of Genocide survivors, starts to receive anonymous large envelopes with the narrative of Ali, a young Palestinian who grew up in a ...","Language":"French","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTc3NzEwNjY3Nl5BMl5BanBnXkFtZTcwMzUzMjQ4Nw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"585","imdbID":"tt1838588","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Title":"Tomorrow", "clasificacion":'dislike', "Year":"2015","Rated":"G","Released":"14 Apr 2017","Runtime":"118 min","Genre":"Documentary","Director":"Cyril Dion, Mélanie Laurent","Writer":"Cyril Dion","Actors":"Anthony Barnosky, Olivier De Schutter, Cyril Dion, Emmanuel Druon","Plot":"Climate is changing. Instead of showing all the worst that can happen, this documentary focuses on the people suggesting solutions and their actions.","Language":"English, French, Finnish","Country":"France","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjhmYjY3MjYtMWY1Ny00MjUzLTgyODktMzQwNmJlZDQ5YzA4XkEyXkFqcGdeQXVyMzMwODMxMTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.1","imdbVotes":"2,277","imdbID":"tt4449576","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Title":"Get Out", "clasificacion":'poop', "Year":"2017","Rated":"R","Released":"24 Feb 2017","Runtime":"104 min","Genre":"Horror, Mystery, Thriller","Director":"Jordan Peele","Writer":"Jordan Peele","Actors":"Daniel Kaluuya, Allison Williams, Catherine Keener, Bradley Whitford","Plot":"It's time for a young African American to meet with his white girlfriend's parents for a weekend in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.","Language":"English","Country":"Japan, USA","Awards":"Nominated for 2 Golden Globes. Another 48 wins & 98 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.7","imdbVotes":"210,485","imdbID":"tt5052448","Type":"movie","DVD":"23 May 2017","BoxOffice":"$175,428,355","Production":"Universal Pictures","Website":"http://www.getoutfilm.com/","Response":"True"},
            {"Title":"Patriots Day","Year":"2016","Rated":"R","Released":"13 Jan 2017","Runtime":"133 min","Genre":"Crime, Drama, History","Director":"Peter Berg","Writer":"Peter Berg (screenplay), Matt Cook (screenplay), Joshua Zetumer (screenplay), Peter Berg (story), Matt Cook (story), Paul Tamasy (story), Eric Johnson (story)","Actors":"Mark Wahlberg, Dicky Eklund Jr., Michael Marchand, Rhet Kidd","Plot":"The story of the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists responsible.","Language":"English, Chinese, Arabic","Country":"Hong Kong, USA","Awards":"2 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODYxMDc0NTg2Nl5BMl5BanBnXkFtZTgwNjY0NDYzOTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.4","imdbVotes":"55,903","imdbID":"tt4572514","Type":"movie","DVD":"28 Mar 2017","BoxOffice":"$31,856,991","Production":"CBS Films","Website":"http://www.patriotsdayfilm.com/","Response":"True"},

            {"number":2, "Title":"Split","Year":"2016","Rated":"PG-13","Released":"20 Jan 2017","Runtime":"117 min","Genre":"Horror, Thriller","Director":"M. Night Shyamalan","Writer":"M. Night Shyamalan","Actors":"James McAvoy, Anya Taylor-Joy, Betty Buckley, Haley Lu Richardson","Plot":"Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.","Language":"English","Country":"Japan, USA","Awards":"3 wins & 12 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"74%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.3","imdbVotes":"234,639","imdbID":"tt4972582","Type":"movie","DVD":"18 Apr 2017","BoxOffice":"$138,120,085","Production":"Universal Pictures","Website":"http://www.splitmovie.com/","Response":"True"},
            {"number":3, "Title":"Dunkirk","Year":"2017","Rated":"PG-13","Released":"21 Jul 2017","Runtime":"106 min","Genre":"Action, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong","Plot":"Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.","Language":"English, French, German","Country":"UK, Netherlands, France, USA","Awards":"Nominated for 3 Golden Globes. Another 18 wins & 97 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.2","imdbVotes":"291,100","imdbID":"tt5013056","Type":"movie","DVD":"19 Dec 2017","BoxOffice":"$188,042,171","Production":"Warner Bros. Pictures","Website":"http://www.dunkirkmovie.com","Response":"True"},
            {"number":4, "Title":"Loving Vincent","Year":"2017","Rated":"PG-13","Released":"22 Sep 2017","Runtime":"94 min","Genre":"Animation, Biography, Crime","Director":"Dorota Kobiela, Hugh Welchman","Writer":"Dorota Kobiela, Hugh Welchman, Jacek Dehnel","Actors":"Douglas Booth, Josh Burdett, Holly Earl, Robin Hodges","Plot":"In a story depicted in oil painted animation, a young man comes to the last hometown of painter Vincent van Gogh to deliver the troubled artist's final letter and ends up investigating his final days there.","Language":"English","Country":"UK, Poland","Awards":"Nominated for 1 Golden Globe. Another 8 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NjE2NjgwN15BMl5BanBnXkFtZTgwNDYzMzEwMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.9","imdbVotes":"8,850","imdbID":"tt3262342","Type":"movie","DVD":"16 Jan 2018","BoxOffice":"$4,641,218","Production":"Good Deed Entertainment","Website":"http://lovingvincent.com/","Response":"True"},
            {"number":5, "Title":"War for the Planet of the Apes","Year":"2017","Rated":"PG-13","Released":"14 Jul 2017","Runtime":"140 min","Genre":"Action, Adventure, Drama","Director":"Matt Reeves","Writer":"Mark Bomback, Matt Reeves, Rick Jaffa (based on characters created by), Amanda Silver (based on characters created by)","Actors":"Andy Serkis, Woody Harrelson, Steve Zahn, Karin Konoval","Plot":"After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.","Language":"English, American Sign Language","Country":"Canada, New Zealand, USA","Awards":"9 wins & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.5","imdbVotes":"141,735","imdbID":"tt3450958","Type":"movie","DVD":"24 Oct 2017","BoxOffice":"$146,872,826","Production":"20th Century Fox","Website":"http://www.warfortheplanet.com/","Response":"True"},
            {"number":6, "Title":"While the Wolf's Away","Year":"2017","Rated":"N/A","Released":"24 Feb 2017","Runtime":"123 min","Genre":"Drama, Mystery, Thriller","Director":"Joseph Hemsani","Writer":"Abe Rosenberg, Joseph Hemsani","Actors":"Ricardo Mestre, Carla Adell, Luis de La Rosa, Mar Carrera","Plot":"A young teen and his misfit group of friends try to escape from a strict boarding school that holds dangerous secrets.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MjEwMjM3N15BMl5BanBnXkFtZTgwMjgzMTEzMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"230","imdbID":"tt3296156","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"number":6, "Title":"Sopladora de Hojas","Year":"2015","Rated":"N/A","Released":"01 Oct 2015","Runtime":"90 min","Genre":"Comedy, Drama","Director":"Alejandro Iglesias Mendizabal","Writer":"Alejandro Iglesias Mendizabal, Luis Montalvo","Actors":"Carlos Aragón, Gibrán Arias, Andrés Delgado, Daniel Giménez Cacho","Plot":"Three friends have a special mission: find some keys lost in a pile of dead leaves.","Language":"Spanish","Country":"Mexico","Awards":"2 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDAxYTA5NGEtMWQwNi00NjQwLWE2ZTQtOWU4MmRjYTQzNzFmL2ltYWdlXkEyXkFqcGdeQXVyMzg5NzM2Mjc@._V1_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.9/10"},{"Source":"Rotten Tomatoes","Value":"100%"}],"Metascore":"N/A","imdbRating":"6.9","imdbVotes":"16","imdbID":"tt4896920","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"number":6, "Title":"Tigers Are Not Afraid","Year":"2017","Rated":"N/A","Released":"02 Nov 2017","Runtime":"N/A","Genre":"Fantasy, Horror","Director":"Issa López","Writer":"Issa López","Actors":"Paola Lara, Hanssel Casillas, Rodrigo Cortes, Ianis Guerrero","Plot":"A dark fairy tale about a gang of five children trying to survive the horrific violence of the cartels and the ghosts created every day by the drug war.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyN2Q5ODYtMWI3OC00NjBjLWIyYTItNGE5NGJiYzI4NjNjXkEyXkFqcGdeQXVyNDc3MzM3MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"170","imdbID":"tt4823434","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"number":8, "Title":"The Villainess","Year":"2017","Rated":"NOT RATED","Released":"08 Jun 2017","Runtime":"129 min","Genre":"Action, Crime, Drama","Director":"Byung-gil Jung","Writer":"Byeong-sik Jung, Byung-gil Jung","Actors":"Ok-bin Kim, Ha-kyun Shin, Jun Sung, Seo-hyeong Kim","Plot":"A female assassin leaves a trail of bodies behind her as she seeks revenge.","Language":"Korean","Country":"South Korea","Awards":"2 wins & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzRiZjFkMjgtYjAxMy00NjNhLThlZmEtMDk1N2Q3MjFjMTBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"6.7","imdbVotes":"2,843","imdbID":"tt6777338","Type":"movie","DVD":"21 Nov 2017","BoxOffice":"$27,442","Production":"Next Entertainment World","Website":"N/A","Response":"True"},
            {"number":9, "Title":"Professor Marston and the Wonder Women","Year":"2017","Rated":"R","Released":"13 Oct 2017","Runtime":"108 min","Genre":"Biography, Drama","Director":"Angela Robinson","Writer":"Angela Robinson","Actors":"Luke Evans, Rebecca Hall, Bella Heathcote, Connie Britton","Plot":"The story of psychologist William Moulton Marston, and his polyamorous relationship with his wife and his mistress who would inspire his creation of the superheroine, Wonder Woman.","Language":"English","Country":"USA","Awards":"3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMTQzMDIwNl5BMl5BanBnXkFtZTgwMTY1NjgzMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.2","imdbVotes":"2,021","imdbID":"tt6133130","Type":"movie","DVD":"N/A","BoxOffice":"$1,583,641","Production":"Annapurna Pictures","Website":"http://www.marston.movie/","Response":"True"},
            {"number":10, "Title":"Neruda","Year":"2016","Rated":"R","Released":"11 Aug 2016","Runtime":"107 min","Genre":"Biography, Crime, Drama","Director":"Pablo Larraín","Writer":"Guillermo Calderón","Actors":"Gael García Bernal, Luis Gnecco, Mercedes Morán, Emilio Gutiérrez Caba","Plot":"An inspector hunts down Nobel Prize-winning Chilean poet, Pablo Neruda, who becomes a fugitive in his home country in the late 1940s for joining the Communist Party.","Language":"Spanish, French","Country":"Chile, Argentina, France, Spain, USA","Awards":"Nominated for 1 Golden Globe. Another 10 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzM0NDI4Mjc5NV5BMl5BanBnXkFtZTgwMTM0NzQ0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.0","imdbVotes":"6,354","imdbID":"tt4698584","Type":"movie","DVD":"N/A","BoxOffice":"$938,875","Production":"The Orchard","Website":"http://azfilms.com.ar/en/neruda-5/","Response":"True"},
        ],
    }
  },
  filters: {
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
    clasificationImg(value) {
         
        switch (value){
            case 'joya': return 'https://images.emojiterra.com/mozilla/512px/1f48e.png'
            case 'like': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/200px-Bot%C3%B3n_Me_gusta.svg.png'
            case 'meeh': return 'https://i2.wp.com/www.periodismo.com/wp-content/subid/17_emoji.png?resize=160%2C160'
            case 'dislike': return 'https://upload.wikimedia.org/wikipedia/commons/2/21/Not_facebook_dislike_thumbs_down.png'
            case 'poop': return 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'

        }
     }
  },
  computed: {
      filteredMovies (){
            var self=this;
            var moviesWithCategories = this.movies

            // moviesWithCategories.filter(function(cust){
            //     return cust.clasificacion.toLowerCase().indexOf(self.clasificacion)
            // })
            return this.movies.filter(function(cust){

                 if (self.genre_selected != 'All'){
                    var result = cust.Genre.toLowerCase().indexOf(self.genre_selected.toLowerCase()) >= 0  && (cust.Title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
                    cust.Year.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 );

                 }else{
                    var result = cust.Title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
                    cust.Year.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ; 
                }
                
                return result
            }).sort(function(a, b){
                    var keyA = a[self.orderBy],
                        keyB = b[self.orderBy];
                    // Compare the 2 dates
                    if(keyA < keyB && self.ascend) return -1;
                    if(keyA < keyB && !self.ascend) return 1;

                    if(keyA > keyB  && self.ascend) return 1;
                    if(keyA > keyB  && !self.ascend) return -1;

                    return 0;
            });      
      },
      moviesHeight(){
         
        return this.moviesWidth/0.655738
      },
      moviesWidth () {

        var width = this.$vuetify.breakpoint.width;
        if (width < 400){
            return (width *0.7 / 2)

        }
        else if (width >= 400 && width < 600){
            return (width * 0.75 / 3)
        }
        else if (width >= 600 && width < 900){
            return (width * 0.8 / 4)
        }
        else if (width >= 900 && width < 1100){
            return (width * 0.8 / 5)
        }
        else if (width >= 1100 && width < 1500){
            return (width * 0.8 / 6)
        }
        else 
            return 175
         
        //  case 'xs': return ((this.$vuetify.breakpoint.width -48 ) / 2 - 16)
        //  case 'sm': return ((this.$vuetify.breakpoint.width -32 ) / 3 - 16)
        //  case 'md': return ((this.$vuetify.breakpoint.width -32 ) / 4 - 16)
        //  case 'lg': return ((this.$vuetify.breakpoint.width -32 ) / 5 - 16)
        //  case 'xl': return ((this.$vuetify.breakpoint.width -32 ) / 6 - 16)
       
     },
     
     
  },
  methods: {
    selectMovie: function (id) {
        console.log(id)
        var ide = id
        var self=this;
        axios.get('http://www.omdbapi.com/', {
            params: {
            i: ide,
            apikey: '138c1c4f'
            }
        })
        .then(function (response) {
            console.log(response.data);
            self.dialog2 = true
            self.selected = response.data
            
        })
        .catch(function (error) {
            console.log(error);
            self.texto = "Ocurrió un Error"
            self.color = 'red'
        });
        
    },
    overdate: function(date) {
       
        var today = new Date(2017, 1, 25);
        var projection = new Date(date);
        return projection < today
    },
    addMovie: function(data) {
        console.log(data)

        this.$firebaseRefs.movies.push(data)
        // var newMovie = {
        //     name: 'nueva',
        //     year: 2017,
        //     image: 'https://scontent.fntr6-1.fna.fbcdn.net/v/t1.0-9/20663657_10154714484286722_8183291880140745077_n.jpg?oh=00d14197581e01b2f2431903f22d7145&oe=5AC06772'

        // }
        this.movies.splice(0, 0, data);
    },
    beforeEnter: function (el) {
        el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      var self = this
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, width: self.moviesWidth + 'px' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  },
  watch: {
      search: function(newSearch){
          
        //   if (newSearch == null){
        //     this.$router.replace({ name: 'movies'})
        //   }
        //   else {
        //       this.$router.replace({ name: 'movies', query: { q: newSearch } })
        //   }
        //   console.log(this.$route.query.q)
      },
      '$route.router.query' (to, from) {
      // react to route changes...
        // this.search = to.q
        // console.log(to)
    }
     
  },
  beforeRouteEnter  (to, from, next) {
 
    next(vm => {
    // access to component instance via `vm`
        vm.genre_selected = "All"
        vm.search = ""
        // console.log(vm.genre_selected)
    })
   
  },
  mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        // this.moviesWidth = ($('#moviesSection').children().first().width()) * 0.85
    })

      console.log(this.$vuetify.breakpoint.smOnly)
      
  }
}
  
</script>

<style scoped>

.moviePoster {
    height: 300px !important;
}

@media screen and (min-width: 599px) {
    moviePoster {
        height: 250px !important;
    }
}


.selected {
    
}
.noshadow{
    box-shadow: none !important;
}
.divider{
    background-color: white !important;
    width: 50%;
}
.opacity{
    opacity: 0.3;
}
.date{
    background-color: #006064;
    top: 10px;
    right: 16px;
    position: relative;
    z-index: 1;
}
.calification{
    /* top: -80px; */
    right: -50px;
    position: relative;
    z-index: 1;
    /* background-color: yellow; */
}
.bookmark{
    z-index: 1;
    position: relative;
    top: 33px;
    right: 16px;
}
</style>
