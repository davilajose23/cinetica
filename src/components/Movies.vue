<template>
  <div id="Movies">
        <v-container >
           
            <v-layout wrap row v-if="!projectionDate" >
                <v-flex xs5 >
                    <div class="headline mt-1 hidden-xs-only" >
                        Peliculas
                    </div>
                    <div class="headline hidden-sm-and-up">Peliculas</div>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs9 md3 class="" >
                    <v-text-field
                        light
                        solo
                        prepend-icon="search"
                        placeholder="Search"
                        v-model="search"
                        class="mt-0 "
                    ></v-text-field>
                </v-flex>
                <v-flex xs1 class="" >
                    <v-menu v-model="filter" max-width="300px" :close-on-content-click="false"> 
                        <v-btn  dark  slot="activator" color="indigo" style="min-width: 60px;"><v-icon>tune</v-icon></v-btn>
                        <v-card>
                            <!-- <v-toolbar color="white" class="elevation-1" card>
                                <v-toolbar-title class>Filter</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar> -->
                            
                            <v-container class="">
                            <v-layout>
                                <v-flex>
                                    <h3 class="headline text-xs-center"> Filter</h3>
                                </v-flex>
                            </v-layout>
                            <!-- </v-container>
                            <v-divider class="grey my-1" dark></v-divider>

                            <v-container class="pt-0"> -->
                            <v-layout wrap>
                                <v-flex xs4  >
                                     <v-subheader class="pl-0">Genero</v-subheader>
                                </v-flex>   
                                <v-flex xs8 class="px-1">
                                    <v-select
                                    v-bind:items="genre"
                                    v-model="genre_selected"
                                    single-line
                                    bottom
                                    :key="item" 
                                    class="pt-1"
                                    ></v-select>
                                </v-flex>
                            <!-- </v-layout>
                            <v-layout> -->
                                <v-flex xs12>
                                    <v-layout>
                                        <v-flex> <v-subheader class="pl-0">Streaming</v-subheader></v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex> <div class="mx-2 my-3 caption text-xs-right pointer" @click="streaming = ''">clear</div></v-flex>
                                    </v-layout>
                                    
                                </v-flex>    
                                <v-flex xs12 class="text-xs-center" >

                                    <v-chip @click="streaming = item.value" v-for="(item, index) in platforms
                                    " :key="index" class="white--text" :class="{'streaming-chip': streaming != item.value}" :color="item.color">
                                        {{item.name}}
                                    </v-chip>
                                   
                                </v-flex>
                            <!-- </v-layout>
                            <v-layout> -->
                                <v-flex xs12>
                                    <v-layout>
                                        <v-flex> <v-subheader class="pl-0">Order by</v-subheader></v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex> <div class="mx-2 my-3 caption text-xs-right pointer" @click="orderBy = 'Title', ascend = true">clear</div></v-flex>
                                    </v-layout>
                                </v-flex>
                                
                               
                                <v-flex xs12 class="text-xs-center">
                                    
                                    <v-btn-toggle v-model="orderBy" class="ml-4">
                                        <v-btn flat value="Title">
                                            Title
                                        </v-btn>
                                        <v-btn flat value="Year">
                                            Year
                                        </v-btn>
                                    </v-btn-toggle>
                                    <v-btn flat  @click.native="ascend = !ascend" class="mt-1 mx-0" style="min-width:64px;"> 
                                        <v-icon :class="{'grey--text': ascend}">swap_vert</v-icon>
                                    </v-btn>
                                </v-flex>
                                
                                
                            <!-- </v-layout>
                            <v-layout> -->
                                <v-flex xs12>
                                    <v-layout>
                                        <v-flex> <v-subheader class="pl-0">Ranked by</v-subheader></v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex> <div class="mx-2 my-3 caption text-xs-right pointer" @click="clasificacion = ''">clear</div></v-flex>
                                    </v-layout>
                                </v-flex>
                                
                                <v-layout justify-center row>
                                    <v-flex  v-for="(item, index) in calificaciones" :key="index" >
                                        <!-- <v-chip v-if="item.text" v-bind:class="{'green white--text': clasificacion == item.value}" class="pointer card--hover" @click="clasificacion = item.value"> {{item.text}}</v-chip> -->
                                        <v-icon class="pointer" v-bind:class="{clasificationicon: clasificacion == item.value}" v-if="item.unicode || item.icon" v-html="item.unicode" @click="clasificacion = item.value">{{item.icon}}</v-icon>
                                    </v-flex>
                                </v-layout>
                            </v-layout>
                            
                            </v-container>
                            <v-card-actions>
                                <v-btn color="red darken-1" small flat @click.native="clasificacion = '', orderBy = 'Title', ascend = true, streaming = '', genre_selected = 'All'" >clear all</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="primary darken-1" flat="flat" @click.native="filter = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-flex>
            </v-layout>
            <v-layout  wrap justify-space-between v-if="!projectionDate" class="mt-2 ">
                <v-flex xs12 class="caption" v-if="genre_selected != 'All' || streaming != '' || clasificacion != ''" > 
                    Filters: 
                    <v-chip v-if="genre_selected != 'All'">{{genre_selected}}</v-chip>
                    <v-chip @click="streaming = item.value" v-for="(item, index) in platforms" :key="index" class="white--text" v-if="streaming == item.value" :color="item.color">
                        {{item.name}}
                    </v-chip>
                    <!-- diamond -->
                    <v-icon medium v-if="clasificacion == 'diamond'">&#x1F48E;</v-icon> 
                    <!-- like -->
                    <v-icon medium v-if="clasificacion == 'like'">fa-thumbs-o-up</v-icon>
                    <!-- meeh -->
                    <v-icon medium v-if="clasificacion == 'meeh'">&#x1F612;</v-icon>
                    <!-- dislike -->
                    <v-icon medium v-if="clasificacion == 'dislike'">fa-thumbs-o-down</v-icon>
                    <!-- poop -->
                    <v-icon medium v-if="clasificacion == 'poop'">&#x1F4A9;</v-icon>
                    
                    <v-chip v-if="genre_selected != 'All' || streaming != '' || clasificacion != ''" class="pointer caption" style="background: transparent"
                    @click.native="clasificacion = '', streaming = '', genre_selected = 'All'"> 
                        clear
                    </v-chip>
                </v-flex>
            </v-layout>
            <v-layout v-else>
                <div class="headline">
                    Proyecciones del Periodo
                </div>
            </v-layout>
        </v-container>
        <v-container fluid class="pt-1" ref="ali">
            <transition-group
                name="staggered-fade"
                tag="v-layout"
                class="wrap reverse"
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                id="moviesSection"
                :style="{paddingLeft: temporalPadding + 'px'}"
                ref="movs"
            >
                <v-flex :width="moviesWidth" :style="{width: (moviesWidth + 16 ) + 'px', maxWidth: (moviesWidth + 16 ) + 'px'}" class="pointer px-2 mb-2" @click.stop="selectMovie(movie.imdbID)" v-for="movie in filteredMovies" :key="movie.imdbID" :id="movie.imdbID">
                   
                    <div align="center" style="height: 0;" v-if="projectionDate">
                        <v-layout align="text-xs-center">
                            <v-flex xs4 class="date pa-0" color="primary" dark >
                                <div class="title pt-2 white--text">{{movie.Released | day}} </div>
                                <v-divider light class="my-1 mydivider"></v-divider>
                                <div class="caption white--text">{{movie.Released | month}}</div>
                            </v-flex>
                        </v-layout>
                    </div>

                    <v-card hover class="" :style="{width: moviesWidth + 'px'}" >
                            <v-card-media class="selected" v-bind:class="{opacity: overdate(movie.Released) && projectionDate}"  v-bind:src="movie.Poster" :height="moviesHeight" >
                            </v-card-media>
                    </v-card>

                    <v-layout class="mt-2" justify-space-between>
                        <v-flex xs12 class="pl-2">
                            <div class="body-2">{{movie.Title}}</div>
                            <div class="caption">{{movie.Year}}</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                
            </transition-group>
            
            <v-dialog v-model="dialog2" max-width="800px" max-height="500px" scrollable class="noshadow">    
                <MoviePreview v-bind:movie="selected"></MoviePreview>
                <!-- <v-card>hola</v-card> -->
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
        platforms: [
            {name: 'Netflix', value: 'Netflix', color: 'red'},
            {name: 'HBO go', value: 'HBO go', color: 'blue-grey'},
            {name: 'Claro Video', value: 'Claro', color: 'red'},
            {name: 'Amazon Prime', value: 'Amazon', color: 'green darken-3'}
        ],
        genre_selected: "All",
        show: true,
        filter: false,
        options: ['agregar pelicula'],
        clasificacion: '',
        orderBy: 'Title',
        streaming: '',
        ascend: true,
        calificaciones: [
            { value: 'All', text:'All'}, 
            {value: 'diamond',unicode:'&#x1F48E;'}, 
            {value: 'like',  icon: 'fa-thumbs-o-up'} , 
            {value: 'meeh', unicode:'&#x1F612;'},
            {value: 'dislike', icon: 'fa-thumbs-o-down'},
            {value: 'poop', unicode: '&#x1F4A9;'}
        ],
        temporalPadding: 0,
        selected: {},     
        // moviesWidth: 120, 
        movies: [
            {"Ranked": "like", "Title":"Wonder","clasificacion":'joya',"Year":"2017","Rated":"PG","Released":"17 Nov 2017","Runtime":"113 min","Genre":"Drama, Family","Director":"Stephen Chbosky","Writer":"Stephen Chbosky (screenplay by), Steve Conrad (screenplay by), Jack Thorne (screenplay by), R.J. Palacio (based on the novel by)","Actors":"Jacob Tremblay, Owen Wilson, Izabela Vidovic, Julia Roberts","Plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","Language":"English","Country":"USA, Hong Kong","Awards":"2 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.1","imdbVotes":"13,512","imdbID":"tt2543472","Type":"movie","DVD":"N/A","BoxOffice":"$27,547,866","Production":"Lionsgate","Website":"http://www.wonder.movie","Response":"True"},
            {"Ranked": "", "Title":"I, Daniel Blake", "clasificacion":'like',"Year":"2016","Rated":"R","Released":"09 Jun 2017","Runtime":"100 min","Genre":"Drama","Director":"Ken Loach","Writer":"Paul Laverty (screenplay)","Actors":"Dave Johns, Hayley Squires, Briana Shann, Dylan McKiernan","Plot":"After having suffered a heart-attack, a 59-year-old carpenter must fight the bureaucratic forces of the system in order to receive Employment and Support Allowance.","Language":"English","Country":"UK, France, Belgium","Awards":"Won 1 BAFTA Film Award. Another 24 wins & 30 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NTMzMTk4NV5BMl5BanBnXkFtZTgwNTU5MjE4MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.9","imdbVotes":"33,529","imdbID":"tt5168192","Type":"movie","DVD":"16 Jan 2018","BoxOffice":"$252,282","Production":"Sundance Selects","Website":"http://www.idanielblake.co.uk/","Response":"True"},
            {"Ranked": "", "Title":"Magallanes", "clasificacion":'meeh',"Year":"2015","Rated":"N/A","Released":"20 Aug 2015","Runtime":"109 min","Genre":"Drama","Director":"Salvador del Solar","Writer":"Salvador del Solar (screenplay)","Actors":"Damián Alcázar, Tatiana Astengo, Jairo Camargo, Tatiana Espinoza","Plot":"Magallanes, a former army soldier (Damian Alcazar) drives a taxi and eventually a driver of a retired colonel (Federico Luppi), who was in command of his troops in times of struggle against...","Language":"Quechua, Spanish","Country":"Peru, Argentina, Spain","Awards":"15 wins & 13 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NDU4OTM2Ml5BMl5BanBnXkFtZTgwMjgxMTc2OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"7.4","imdbVotes":"589","imdbID":"tt4072352","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "Title":"La vallée des larmes", "clasificacion":'like', "Year":"2012","Rated":"N/A","Released":"10 Jun 2013","Runtime":"95 min","Genre":"Drama","Director":"Maryanne Zéhil","Writer":"Maryanne Zéhil (dialogue), Maryanne Zéhil (original story), Maryanne Zéhil (screenplay), Maryanne Zéhil (story and screenplay), Maryanne Zéhil","Actors":"Nathalie Coupal, Joseph Antaki, Wafa Tarabey, Leyla Hakim","Plot":"Marie, a Canadian editor specialized in testimonies of Genocide survivors, starts to receive anonymous large envelopes with the narrative of Ali, a young Palestinian who grew up in a ...","Language":"French","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTc3NzEwNjY3Nl5BMl5BanBnXkFtZTcwMzUzMjQ4Nw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"585","imdbID":"tt1838588","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "Title":"Tomorrow", "clasificacion":'dislike', "Year":"2015","Rated":"G","Released":"14 Apr 2017","Runtime":"118 min","Genre":"Documentary","Director":"Cyril Dion, Mélanie Laurent","Writer":"Cyril Dion","Actors":"Anthony Barnosky, Olivier De Schutter, Cyril Dion, Emmanuel Druon","Plot":"Climate is changing. Instead of showing all the worst that can happen, this documentary focuses on the people suggesting solutions and their actions.","Language":"English, French, Finnish","Country":"France","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjhmYjY3MjYtMWY1Ny00MjUzLTgyODktMzQwNmJlZDQ5YzA4XkEyXkFqcGdeQXVyMzMwODMxMTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.1","imdbVotes":"2,277","imdbID":"tt4449576","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "Title":"Get Out", "clasificacion":'poop', "Year":"2017","Rated":"R","Released":"24 Feb 2017","Runtime":"104 min","Genre":"Horror, Mystery, Thriller","Director":"Jordan Peele","Writer":"Jordan Peele","Actors":"Daniel Kaluuya, Allison Williams, Catherine Keener, Bradley Whitford","Plot":"It's time for a young African American to meet with his white girlfriend's parents for a weekend in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.","Language":"English","Country":"Japan, USA","Awards":"Nominated for 2 Golden Globes. Another 48 wins & 98 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.7","imdbVotes":"210,485","imdbID":"tt5052448","Type":"movie","DVD":"23 May 2017","BoxOffice":"$175,428,355","Production":"Universal Pictures","Website":"http://www.getoutfilm.com/","Response":"True"},
            {"Ranked": "", "Title":"Patriots Day","Year":"2016","Rated":"R","Released":"13 Jan 2017","Runtime":"133 min","Genre":"Crime, Drama, History","Director":"Peter Berg","Writer":"Peter Berg (screenplay), Matt Cook (screenplay), Joshua Zetumer (screenplay), Peter Berg (story), Matt Cook (story), Paul Tamasy (story), Eric Johnson (story)","Actors":"Mark Wahlberg, Dicky Eklund Jr., Michael Marchand, Rhet Kidd","Plot":"The story of the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists responsible.","Language":"English, Chinese, Arabic","Country":"Hong Kong, USA","Awards":"2 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODYxMDc0NTg2Nl5BMl5BanBnXkFtZTgwNjY0NDYzOTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.4","imdbVotes":"55,903","imdbID":"tt4572514","Type":"movie","DVD":"28 Mar 2017","BoxOffice":"$31,856,991","Production":"CBS Films","Website":"http://www.patriotsdayfilm.com/","Response":"True"},

            {"Ranked": "like", "Streaming": "", "number":2, "Title":"Split","Year":"2016","Rated":"PG-13","Released":"20 Jan 2017","Runtime":"117 min","Genre":"Horror, Thriller","Director":"M. Night Shyamalan","Writer":"M. Night Shyamalan","Actors":"James McAvoy, Anya Taylor-Joy, Betty Buckley, Haley Lu Richardson","Plot":"Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.","Language":"English","Country":"Japan, USA","Awards":"3 wins & 12 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"74%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.3","imdbVotes":"234,639","imdbID":"tt4972582","Type":"movie","DVD":"18 Apr 2017","BoxOffice":"$138,120,085","Production":"Universal Pictures","Website":"http://www.splitmovie.com/","Response":"True"},
            {"Ranked": "", "number":3, "Title":"Dunkirk","Year":"2017","Rated":"PG-13","Released":"21 Jul 2017","Runtime":"106 min","Genre":"Action, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong","Plot":"Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.","Language":"English, French, German","Country":"UK, Netherlands, France, USA","Awards":"Nominated for 3 Golden Globes. Another 18 wins & 97 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.2","imdbVotes":"291,100","imdbID":"tt5013056","Type":"movie","DVD":"19 Dec 2017","BoxOffice":"$188,042,171","Production":"Warner Bros. Pictures","Website":"http://www.dunkirkmovie.com","Response":"True"},
            {"Ranked": "", "number":4, "Title":"Loving Vincent","Year":"2017","Rated":"PG-13","Released":"22 Sep 2017","Runtime":"94 min","Genre":"Animation, Biography, Crime","Director":"Dorota Kobiela, Hugh Welchman","Writer":"Dorota Kobiela, Hugh Welchman, Jacek Dehnel","Actors":"Douglas Booth, Josh Burdett, Holly Earl, Robin Hodges","Plot":"In a story depicted in oil painted animation, a young man comes to the last hometown of painter Vincent van Gogh to deliver the troubled artist's final letter and ends up investigating his final days there.","Language":"English","Country":"UK, Poland","Awards":"Nominated for 1 Golden Globe. Another 8 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NjE2NjgwN15BMl5BanBnXkFtZTgwNDYzMzEwMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.9","imdbVotes":"8,850","imdbID":"tt3262342","Type":"movie","DVD":"16 Jan 2018","BoxOffice":"$4,641,218","Production":"Good Deed Entertainment","Website":"http://lovingvincent.com/","Response":"True"},
            {"Ranked": "", "number":5, "Title":"War for the Planet of the Apes","Year":"2017","Rated":"PG-13","Released":"14 Jul 2017","Runtime":"140 min","Genre":"Action, Adventure, Drama","Director":"Matt Reeves","Writer":"Mark Bomback, Matt Reeves, Rick Jaffa (based on characters created by), Amanda Silver (based on characters created by)","Actors":"Andy Serkis, Woody Harrelson, Steve Zahn, Karin Konoval","Plot":"After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.","Language":"English, American Sign Language","Country":"Canada, New Zealand, USA","Awards":"9 wins & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.5","imdbVotes":"141,735","imdbID":"tt3450958","Type":"movie","DVD":"24 Oct 2017","BoxOffice":"$146,872,826","Production":"20th Century Fox","Website":"http://www.warfortheplanet.com/","Response":"True"},
            {"Ranked": "", "number":6, "Title":"While the Wolf's Away","Year":"2017","Rated":"N/A","Released":"24 Feb 2017","Runtime":"123 min","Genre":"Drama, Mystery, Thriller","Director":"Joseph Hemsani","Writer":"Abe Rosenberg, Joseph Hemsani","Actors":"Ricardo Mestre, Carla Adell, Luis de La Rosa, Mar Carrera","Plot":"A young teen and his misfit group of friends try to escape from a strict boarding school that holds dangerous secrets.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MjEwMjM3N15BMl5BanBnXkFtZTgwMjgzMTEzMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"230","imdbID":"tt3296156","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "number":6, "Title":"Sopladora de Hojas","Year":"2015","Rated":"N/A","Released":"01 Oct 2015","Runtime":"90 min","Genre":"Comedy, Drama","Director":"Alejandro Iglesias Mendizabal","Writer":"Alejandro Iglesias Mendizabal, Luis Montalvo","Actors":"Carlos Aragón, Gibrán Arias, Andrés Delgado, Daniel Giménez Cacho","Plot":"Three friends have a special mission: find some keys lost in a pile of dead leaves.","Language":"Spanish","Country":"Mexico","Awards":"2 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDAxYTA5NGEtMWQwNi00NjQwLWE2ZTQtOWU4MmRjYTQzNzFmL2ltYWdlXkEyXkFqcGdeQXVyMzg5NzM2Mjc@._V1_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.9/10"},{"Source":"Rotten Tomatoes","Value":"100%"}],"Metascore":"N/A","imdbRating":"6.9","imdbVotes":"16","imdbID":"tt4896920","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "number":6, "Title":"Tigers Are Not Afraid","Year":"2017","Rated":"N/A","Released":"02 Nov 2017","Runtime":"N/A","Genre":"Fantasy, Horror","Director":"Issa López","Writer":"Issa López","Actors":"Paola Lara, Hanssel Casillas, Rodrigo Cortes, Ianis Guerrero","Plot":"A dark fairy tale about a gang of five children trying to survive the horrific violence of the cartels and the ghosts created every day by the drug war.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyN2Q5ODYtMWI3OC00NjBjLWIyYTItNGE5NGJiYzI4NjNjXkEyXkFqcGdeQXVyNDc3MzM3MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"170","imdbID":"tt4823434","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "", "number":8, "Title":"The Villainess","Year":"2017","Rated":"NOT RATED","Released":"08 Jun 2017","Runtime":"129 min","Genre":"Action, Crime, Drama","Director":"Byung-gil Jung","Writer":"Byeong-sik Jung, Byung-gil Jung","Actors":"Ok-bin Kim, Ha-kyun Shin, Jun Sung, Seo-hyeong Kim","Plot":"A female assassin leaves a trail of bodies behind her as she seeks revenge.","Language":"Korean","Country":"South Korea","Awards":"2 wins & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzRiZjFkMjgtYjAxMy00NjNhLThlZmEtMDk1N2Q3MjFjMTBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"6.7","imdbVotes":"2,843","imdbID":"tt6777338","Type":"movie","DVD":"21 Nov 2017","BoxOffice":"$27,442","Production":"Next Entertainment World","Website":"N/A","Response":"True"},
            {"Ranked": "like", "number":9, "Title":"Professor Marston and the Wonder Women","Year":"2017","Rated":"R","Released":"13 Oct 2017","Runtime":"108 min","Genre":"Biography, Drama","Director":"Angela Robinson","Writer":"Angela Robinson","Actors":"Luke Evans, Rebecca Hall, Bella Heathcote, Connie Britton","Plot":"The story of psychologist William Moulton Marston, and his polyamorous relationship with his wife and his mistress who would inspire his creation of the superheroine, Wonder Woman.","Language":"English","Country":"USA","Awards":"3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMTQzMDIwNl5BMl5BanBnXkFtZTgwMTY1NjgzMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.2","imdbVotes":"2,021","imdbID":"tt6133130","Type":"movie","DVD":"N/A","BoxOffice":"$1,583,641","Production":"Annapurna Pictures","Website":"http://www.marston.movie/","Response":"True"},
            {"Ranked": "", "number":10, "Title":"Neruda","Year":"2016","Rated":"R","Released":"11 Aug 2016","Runtime":"107 min","Genre":"Biography, Crime, Drama","Director":"Pablo Larraín","Writer":"Guillermo Calderón","Actors":"Gael García Bernal, Luis Gnecco, Mercedes Morán, Emilio Gutiérrez Caba","Plot":"An inspector hunts down Nobel Prize-winning Chilean poet, Pablo Neruda, who becomes a fugitive in his home country in the late 1940s for joining the Communist Party.","Language":"Spanish, French","Country":"Chile, Argentina, France, Spain, USA","Awards":"Nominated for 1 Golden Globe. Another 10 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzM0NDI4Mjc5NV5BMl5BanBnXkFtZTgwMTM0NzQ0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.0","imdbVotes":"6,354","imdbID":"tt4698584","Type":"movie","DVD":"N/A","BoxOffice":"$938,875","Production":"The Orchard","Website":"http://azfilms.com.ar/en/neruda-5/","Response":"True"},
            {"Ranked": "meeh", "Title":"The Foreigner","Year":"2017","Rated":"R","Released":"13 Oct 2017","Runtime":"113 min","Genre":"Action, Crime, Drama","Director":"Martin Campbell","Writer":"David Marconi (screenplay by), Stephen Leather (based on the novel \"The Chinaman\" by)","Actors":"Katie Leung, Jackie Chan, Rufus Jones, Mark Tandy","Plot":"A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.","Language":"English, Mandarin","Country":"UK, China, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2RlMjcyMGQtZTU3OC00NGRlLWExMGEtYjU3ZjUyMDc0NWZmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"62%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.2","imdbVotes":"15,057","imdbID":"tt1615160","Type":"movie","DVD":"09 Jan 2018","BoxOffice":"$33,964,179","Production":"STX Films","Website":"http://TheForeignerMovie.com","Response":"True"},
            {"Ranked": "like", "Title":"Insidious: The Last Key","Year":"2018","Rated":"PG-13","Released":"05 Jan 2018","Runtime":"103 min","Genre":"Horror, Mystery, Thriller","Director":"Adam Robitel","Writer":"Leigh Whannell (based on characters created by), Leigh Whannell","Actors":"Lin Shaye, Leigh Whannell, Angus Sampson, Kirk Acevedo","Plot":"Parapsychologist Dr. Elise Rainier faces her most fearsome and personal haunting yet - in her own family home.","Language":"English","Country":"Canada, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxODU0NjQ2Nl5BMl5BanBnXkFtZTgwMTc4NDQ0MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"}],"Metascore":"N/A","imdbRating":"8.5","imdbVotes":"37","imdbID":"tt5726086","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Blumhouse Productions","Website":"N/A","Response":"True"},
            {"Ranked": "like", "Title":"The Greatest Showman","Year":"2017","Rated":"PG","Released":"20 Dec 2017","Runtime":"105 min","Genre":"Biography, Drama, Musical","Director":"Michael Gracey","Writer":"Jenny Bicks (screenplay by), Bill Condon (screenplay by), Jenny Bicks (story by)","Actors":"Hugh Jackman, Michelle Williams, Zac Efron, Zendaya","Plot":"Celebrates the birth of show business, and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.","Language":"English","Country":"USA","Awards":"Nominated for 3 Golden Globes. Another 1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Metacritic","Value":"48/100"}],"Metascore":"48","imdbRating":"8.0","imdbVotes":"21,602","imdbID":"tt1485796","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.foxmovies.com/movies/the-greatest-showman","Response":"True"},
            {"Ranked": "like", "Title":"Jumanji: Welcome to the Jungle","Year":"2017","Rated":"PG-13","Released":"20 Dec 2017","Runtime":"119 min","Genre":"Action, Adventure, Comedy","Director":"Jake Kasdan","Writer":"Chris McKenna (screenplay by), Erik Sommers (screenplay by), Scott Rosenberg (screenplay by), Jeff Pinkner (screenplay by), Chris McKenna (story by), Chris Van Allsburg (based on the book \"Jumanji\" by)","Actors":"Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan","Plot":"Four teenagers discover an old video game console and are literally drawn into the game's jungle setting, becoming the adult avatars they choose.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"58/100"}],"Metascore":"58","imdbRating":"7.2","imdbVotes":"18,237","imdbID":"tt2283362","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Columbia Pictures","Website":"http://www.jumanjimovie.com/","Response":"True"},
            {"Ranked": "dislike", "Title":"Don't Hang Up","Year":"2016","Rated":"R","Released":"10 Feb 2017","Runtime":"83 min","Genre":"Horror, Thriller","Director":"Damien Macé, Alexis Wajsbrot","Writer":"Joe Johnson","Actors":"Gregg Sulkin, Garrett Clayton, Bella Dayne, Sienna Guillory","Plot":"An evening of drunken prank calls becomes a nightmare for a pair of teenagers when a mysterious stranger turns their own game against them...with deadly consequences.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BN2Y3ZmZmNzctODU2MC00OTcxLThlMWYtZDcxNjRkZjg4YmEwL2ltYWdlXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"}],"Metascore":"N/A","imdbRating":"5.7","imdbVotes":"8,180","imdbID":"tt3610746","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "poop", "Title":"Camino a Marte","Year":"2017","Rated":"N/A","Released":"01 Dec 2017","Runtime":"93 min","Genre":"Adventure, Comedy, Drama","Director":"Humberto Hinojosa Ozcariz","Writer":"Anton Goenechea, Anton Goenechea, Humberto Hinojosa Ozcariz, Humberto Hinojosa Ozcariz","Actors":"Luis Gerardo Méndez, Camila Sodi, Tessa Ia, Andrés Almeida","Plot":"Two friends begin the road trip of a life time, where a new acquaintance puts their friendship and beliefs to the ultimate test.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTk0ZDRjMmItOTllOS00OTdmLWI5YzYtYTAxMTNmZDdmZTAwXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"}],"Metascore":"N/A","imdbRating":"8.4","imdbVotes":"10","imdbID":"tt5164446","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "poop", "Title":"Acts Of Vengeance","Year":"2017","Rated":"R","Released":"27 Oct 2017","Runtime":"87 min","Genre":"Action, Drama","Director":"Isaac Florentine","Writer":"Matt Venne","Actors":"Antonio Banderas, Cristina Serafini, Atanas Srebrev, Eric Ali","Plot":"A fast-talking lawyer transforms his body and takes a vow of silence, not to be broken until he finds out who killed his wife and daughter and has his revenge.","Language":"English","Country":"Bulgaria, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NTg5NDA1NF5BMl5BanBnXkFtZTgwNjEyMDk2MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.6/10"},{"Source":"Rotten Tomatoes","Value":"57%"}],"Metascore":"N/A","imdbRating":"5.6","imdbVotes":"1,812","imdbID":"tt6288694","Type":"movie","DVD":"28 Nov 2017","BoxOffice":"N/A","Production":"Saban Films","Website":"N/A","Response":"True"},
            {"Ranked": "poop", "Title":"Suburbicon","Year":"2017","Rated":"R","Released":"27 Oct 2017","Runtime":"105 min","Genre":"Crime, Drama, Mystery","Director":"George Clooney","Writer":"Joel Coen, Ethan Coen, George Clooney, Grant Heslov","Actors":"Steve Monroe, Gavin Wilde, Landon Gordon, Hope Banks","Plot":"A home invasion rattles a quiet family town.","Language":"English","Country":"UK, USA","Awards":"2 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MjA1NDkxMTReQTJeQWpwZ15BbWU4MDU2Njg3NDMy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.4/10"},{"Source":"Metacritic","Value":"42/100"}],"Metascore":"42","imdbRating":"5.4","imdbVotes":"6,150","imdbID":"tt0491175","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "poop", "Title":"Overdrive","Year":"2017","Rated":"PG-13","Released":"06 Oct 2017","Runtime":"93 min","Genre":"Action, Thriller","Director":"Antonio Negret","Writer":"Michael Brandt (screenplay), Derek Haas (screenplay)","Actors":"Scott Eastwood, Freddie Thorp, Ana de Armas, Gaia Weiss","Plot":"Two car thief brothers, who journey to the south of France for new opportunities, wind up in the cross hairs of the local crime boss.","Language":"English, French, German","Country":"France, Belgium, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDExMTAzYmEtZjMwOC00MjIxLTkyNjMtOTZjOWIwMTI0YTc0XkEyXkFqcGdeQXVyMjU3NTI0Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.4/10"},{"Source":"Rotten Tomatoes","Value":"17%"}],"Metascore":"N/A","imdbRating":"5.4","imdbVotes":"5,748","imdbID":"tt1935194","Type":"movie","DVD":"07 Nov 2017","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"N/A","Response":"True"},
            {"Ranked": "like", "Title":"Justice League","Year":"2017","Rated":"PG-13","Released":"17 Nov 2017","Runtime":"120 min","Genre":"Action, Adventure, Fantasy","Director":"Zack Snyder","Writer":"Chris Terrio (screenplay by), Joss Whedon (screenplay by), Chris Terrio (story by), Zack Snyder (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger (Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)","Actors":"Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot","Plot":"Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.","Language":"English, Irish, Russian, Icelandic","Country":"USA, UK, Canada","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"40%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"7.2","imdbVotes":"130,721","imdbID":"tt0974015","Type":"movie","DVD":"N/A","BoxOffice":"$93,842,239","Production":"Warner Bros. Pictures","Website":"http://www.justiceleaguethemovie.com/","Response":"True"},
            {"Ranked": "like", "Title":"Murder on the Orient Express","Year":"2017","Rated":"PG-13","Released":"10 Nov 2017","Runtime":"114 min","Genre":"Crime, Drama, Mystery","Director":"Kenneth Branagh","Writer":"Michael Green (screenplay by), Agatha Christie (based upon the novel by)","Actors":"Paapa Essiedu, Yassine Zeroual, Asan N'Jie, Michael Rouse","Plot":"When a murder occurs on the train he's travelling on, celebrated detective Hercule Poirot is recruited to solve the case.","Language":"English, French, German","Country":"USA, UK, Malta, Canada","Awards":"4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNGFmM2NmYjYtMjAwNy00ZDkzLWI3ZWMtOGZhOTRhYzQwMTA0XkEyXkFqcGdeQXVyNzU2MzMyNTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"58%"},{"Source":"Metacritic","Value":"52/100"}],"Metascore":"52","imdbRating":"6.8","imdbVotes":"51,797","imdbID":"tt3402236","Type":"movie","DVD":"N/A","BoxOffice":"$51,735,924","Production":"20th Century Fox","Website":"http://CluesAreEverywhere.com","Response":"True"},
            {"Ranked": "like", "Title":"Thor: Ragnarok","Year":"2017","Rated":"PG-13","Released":"03 Nov 2017","Runtime":"130 min","Genre":"Action, Adventure, Comedy","Director":"Taika Waititi","Writer":"Eric Pearson, Craig Kyle, Christopher Yost, Stan Lee (based on the comics by), Larry Lieber (based on the comics by), Jack Kirby (based on the comics by)","Actors":"Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba","Plot":"Imprisoned, the almighty Thor finds himself in a lethal gladiatorial contest against the Hulk, his former ally. Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home and the Asgardian civilization.","Language":"English","Country":"USA","Awards":"7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"8.2","imdbVotes":"161,371","imdbID":"tt3501632","Type":"movie","DVD":"N/A","BoxOffice":"$247,265,770","Production":"Walt Disney Pictures","Website":"http://movies.disney.com/thor-ragnarok","Response":"True"},
            {"Ranked": "like","Streaming": "Netflix", "Title":"Gerald's Game","Year":"2017","Rated":"TV-MA","Released":"29 Sep 2017","Runtime":"103 min","Genre":"Drama, Horror, Thriller","Director":"Mike Flanagan","Writer":"Mike Flanagan (screenplay by), Jeff Howard (screenplay by), Stephen King (based on the novel by)","Actors":"Carla Gugino, Bruce Greenwood, Chiara Aurelia, Carel Struycken","Plot":"While trying to spice up their marriage in their remote lake house, Jessie must fight to survive when her husband dies unexpectedly, leaving her handcuffed to their bed frame.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"6.7","imdbVotes":"30,877","imdbID":"tt3748172","Type":"movie","DVD":"29 Sep 2017","BoxOffice":"N/A","Production":"Netflix","Website":"N/A","Response":"True"},
            {"Ranked": "meeh", "Streaming": "", "Title":"Geostorm","Year":"2017","Rated":"PG-13","Released":"20 Oct 2017","Runtime":"109 min","Genre":"Action, Sci-Fi, Thriller","Director":"Dean Devlin","Writer":"Dean Devlin, Paul Guyot","Actors":"Gerard Butler, Jim Sturgess, Abbie Cornish, Alexandra Maria Lara","Plot":"When the network of satellites designed to control the global climate starts to attack Earth, it's a race against the clock for its creator to uncover the real threat before a worldwide Geostorm wipes out everything and everyone.","Language":"English, Spanish","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0OTQwMTIxNzheQTJeQWpwZ15BbWU4MDQ1MzI3OTMy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.5/10"},{"Source":"Rotten Tomatoes","Value":"13%"},{"Source":"Metacritic","Value":"21/100"}],"Metascore":"21","imdbRating":"5.5","imdbVotes":"25,530","imdbID":"tt1981128","Type":"movie","DVD":"N/A","BoxOffice":"$32,669,328","Production":"Warner Bros. Pictures","Website":"http://www.geostorm.movie/","Response":"True"},
            {"Ranked": "diamond", "Streaming": "Netflix", "Title":"Memento","Year":"2000","Rated":"R","Released":"25 May 2001","Runtime":"113 min","Genre":"Mystery, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan (screenplay), Jonathan Nolan (short story \"Memento Mori\")","Actors":"Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior","Plot":"A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 55 wins & 55 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"80/100"}],"Metascore":"80","imdbRating":"8.5","imdbVotes":"938,791","imdbID":"tt0209144","Type":"movie","DVD":"04 Sep 2001","BoxOffice":"$23,844,220","Production":"Newmarket Films","Website":"http://www.otnemem.com","Response":"True"},
            {"Ranked": "meeh", "Streaming": "", "Title":"A Bad Moms Christmas","Year":"2017","Rated":"R","Released":"01 Nov 2017","Runtime":"104 min","Genre":"Adventure, Comedy","Director":"Jon Lucas, Scott Moore","Writer":"Jon Lucas, Scott Moore","Actors":"Mila Kunis, Kristen Bell, Kathryn Hahn, Christine Baranski","Plot":"As their own mothers drop in unexpectedly, our three under-appreciated and over-burdened moms rebel against the challenges and expectations of the Super Bowl for mothers: Christmas.","Language":"English","Country":"USA, China","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTA4MDMxNl5BMl5BanBnXkFtZTgwMjE4NjQ0MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"29%"},{"Source":"Metacritic","Value":"42/100"}],"Metascore":"42","imdbRating":"5.8","imdbVotes":"6,369","imdbID":"tt6359956","Type":"movie","DVD":"N/A","BoxOffice":"$51,022,533","Production":"STXfilms","Website":"http://badmomsxmas.com","Response":"True"},
            {"Ranked": "poop", "Streaming": "","Title":"Wish Upon","Year":"2017","Rated":"PG-13","Released":"14 Jul 2017","Runtime":"90 min","Genre":"Fantasy, Horror, Thriller","Director":"John R. Leonetti","Writer":"Barbara Marshall","Actors":"Joey King, Ryan Phillippe, Ki Hong Lee, Mitchell Slaggert","Plot":"A teenage girl discovers a box that carries magic powers and a deadly price for using them.","Language":"English","Country":"USA, Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOGQxN2NlMWItNzMyOC00ODYxLThkNDktMWQ0ZjA2MjQyYjIwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.1/10"},{"Source":"Rotten Tomatoes","Value":"17%"},{"Source":"Metacritic","Value":"32/100"}],"Metascore":"32","imdbRating":"5.1","imdbVotes":"7,485","imdbID":"tt5322012","Type":"movie","DVD":"10 Oct 2017","BoxOffice":"$14,301,001","Production":"Broad Green Pictures","Website":"http://www.wishuponmovie.com/","Response":"True"},
            {"Ranked": "like", "Streaming": "", "Title":"Gifted","Year":"2017","Rated":"PG-13","Released":"12 Apr 2017","Runtime":"101 min","Genre":"Drama","Director":"Marc Webb","Writer":"Tom Flynn","Actors":"Chris Evans, Mckenna Grace, Lindsay Duncan, Octavia Spencer","Plot":"Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.","Language":"English","Country":"USA","Awards":"2 wins & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ2NDU3NDE0M15BMl5BanBnXkFtZTgwMjA3OTg0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"60/100"}],"Metascore":"60","imdbRating":"7.6","imdbVotes":"52,888","imdbID":"tt4481414","Type":"movie","DVD":"25 Jul 2017","BoxOffice":"$24,799,765","Production":"N/A","Website":"N/A","Response":"True"},
            {"Ranked": "meeh", "Streaming": "", "Title":"2:22","Year":"2017","Rated":"PG-13","Released":"30 Jun 2017","Runtime":"98 min","Genre":"Action, Thriller","Director":"Paul Currie","Writer":"Todd Stein (screenplay by), Nathan Parker (screenplay by), Todd Stein (story by)","Actors":"Teresa Palmer, Michiel Huisman, Sam Reid, Maeve Dermody","Plot":"A man's life is derailed when an ominous pattern of events repeats itself in exactly the same manner every day, ending at precisely 2:22 p.m.","Language":"English","Country":"Australia, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDQyMTUyMDExNl5BMl5BanBnXkFtZTgwODkxODEyMjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"},{"Source":"Rotten Tomatoes","Value":"22%"}],"Metascore":"N/A","imdbRating":"5.7","imdbVotes":"10,268","imdbID":"tt1131724","Type":"movie","DVD":"30 Jun 2017","BoxOffice":"N/A","Production":"Magnolia Pictures","Website":"https://www.lightstreamentertainment.com/2-22","Response":"True"},
            {"Ranked": "like", "Streaming": "","Title":"Manchester by the Sea","Year":"2016","Rated":"R","Released":"16 Dec 2016","Runtime":"137 min","Genre":"Drama","Director":"Kenneth Lonergan","Writer":"Kenneth Lonergan","Actors":"Casey Affleck, Ben O'Brien, Kyle Chandler, Richard Donelly","Plot":"A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.","Language":"English","Country":"USA","Awards":"Won 2 Oscars. Another 115 wins & 238 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"96/100"}],"Metascore":"96","imdbRating":"7.9","imdbVotes":"169,095","imdbID":"tt4034228","Type":"movie","DVD":"21 Feb 2017","BoxOffice":"$47,695,120","Production":"Amazon Studios","Website":"http://manchesterbytheseathemovie.com/","Response":"True"},
            {"Ranked": "like", "Streaming": "Netflix", "Title":"Lion","Year":"2016","Rated":"PG-13","Released":"06 Jan 2017","Runtime":"118 min","Genre":"Biography, Drama","Director":"Garth Davis","Writer":"Saroo Brierley (adapted from the book \"A Long Way Home\" by), Luke Davies (screenplay by)","Actors":"Sunny Pawar, Abhishek Bharate, Priyanka Bose, Khushi Solanki","Plot":"A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia. 25 years later, he sets out to find his lost family.","Language":"English, Hindi, Bengali","Country":"UK, Australia, USA","Awards":"Nominated for 6 Oscars. Another 36 wins & 85 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"142,639","imdbID":"tt3741834","Type":"movie","DVD":"11 Apr 2017","BoxOffice":"$51,694,854","Production":"See-Saw Films","Website":"http://lionmovie.com/","Response":"True"},
            {"Ranked": "poop", "Streaming": "", "Title":"Elle","Year":"2016","Rated":"R","Released":"11 Nov 2016","Runtime":"130 min","Genre":"Crime, Drama, Thriller","Director":"Paul Verhoeven","Writer":"Philippe Djian (novel), David Birke (screenplay), Harold Manning (french adaptation)","Actors":"Isabelle Huppert, Laurent Lafitte, Anne Consigny, Charles Berling","Plot":"A successful businesswoman gets caught up in a game of cat and mouse as she tracks down the unknown man who raped her.","Language":"French","Country":"France, Germany, Belgium","Awards":"Nominated for 1 Oscar. Another 62 wins & 73 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NDI5MzA1OF5BMl5BanBnXkFtZTgwMTQzNTQwMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"7.2","imdbVotes":"44,032","imdbID":"tt3716530","Type":"movie","DVD":"14 Mar 2017","BoxOffice":"$2,339,735","Production":"SBS Productions","Website":"http://sonyclassics.com/elle/","Response":"True"},
            // {"Ranked": "like", "Streaming": "", 
            // {"Ranked": "like", "Streaming": "", 



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
                
                return cust.Title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 || 
                    cust.Year.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
                    cust.Actors.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ; 
               
            }).filter(function(cust){
                 if (self.genre_selected == 'All')
                    return true;

                return cust.Genre.toLowerCase().indexOf(self.genre_selected.toLowerCase()) >= 0;

            }).filter(function(cust){
                if (self.streaming == '')
                    return true;

                if (!cust.hasOwnProperty('Streaming'))
                    return false;
                
                console.log('Streaming')

                return cust.Streaming.toLowerCase().indexOf(self.streaming.toLowerCase()) >= 0;

            }).filter(function(cust){

                if (self.clasificacion == '')
                    return true;
                
                if (!cust.hasOwnProperty('Ranked'))
                    return false;

                return cust.Ranked.toLowerCase() == self.clasificacion.toLowerCase();

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
            return (width * 0.72 / 3)
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
       
     }
     
     
  },
  methods: {
    selectMovie: function (id) {
        this.$router.push('/details/' + id)

        // console.log(id)
        // var ide = id
        // var self=this;
        // axios.get('http://www.omdbapi.com/', {
        //     params: {
        //     i: ide,
        //     apikey: '138c1c4f'
        //     }
        // })
        // .then(function (response) {
        //     console.log(response.data);
        //     self.dialog2 = true
        //     self.selected = response.data
            
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     self.texto = "Ocurrió un Error"
        //     self.color = 'red'
        // });
        
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
        // if (vm.projectionDate){
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
        this.temporalPadding = (this.$refs.ali.firstChild.offsetWidth % (this.moviesWidth + 16)) / 2 
        
    })
        console.log(this.$refs.movs)
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

.streaming-chip{
    opacity: 0.5;
}

.streaming-chip:hover{
    opacity: 1;
}
.pointer{
  /* cursor: pointer; */
}

.pointer:hover{
    color: rgba(0,0,0,1);
    cursor: pointer !important;
}
i.pointer{
   font-size: 2rem ;
}
/* 
i.pointer:hover {
    
    font-size: 2.5rem !important;
} */
.clasificationicon{
    color: rgba(0,0,0,1);
}

.selected {
    
}
.noshadow{
    box-shadow: none !important;
}
.mydivider{
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
