<template>
  <div id="ListDetail">
        <v-layout  wrap>
            <v-flex xs12 md6 order-xs2 order-lg1>
                    <v-container >
                        <v-card class="elevation-5">
                            <!-- <v-toolbar :color="list.color" dark card>
                                <v-toolbar-title class>{{list.name}}</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>more_vert</v-icon></v-btn>
                            </v-toolbar> -->
                            <div class="headline  pa-3 green  darken-2 light white--text"> 
                                {{list.name}} 
                                
                                
                            </div>
                            <!-- <v-card-media> <img src="https://i.ytimg.com/vi/cZZlthue_rQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAtUcl9vWOjDkwHqwXSTfFTh37RaA" alt=""> </v-card-media>    -->
                            <div v-for="(item, index) in list.items" :key="index">
                                <v-layout sm12 align-center class="py-3">
                                    <v-flex xs2 class="headline text-xs-center"> {{item.number | twoDigits}}</v-flex>

                                    <v-flex xs5 md3> <img :src="item.Poster" alt="" width="100px"></v-flex>
                                    <v-flex xs5 md7 fill-height>
                                        <div class="headline text-xs-left">
                                            {{item.Title}}
                                        </div>
                                         <v-subheader class="pl-0">{{item.Director}}</v-subheader>
                                       
                                    </v-flex>
                                    
                                </v-layout>
                                <v-divider ></v-divider>
                            </div>
                        </v-card>
                    </v-container>
                
            </v-flex>
            <v-flex xs12 md6 order-xs1 order-lg2>
                <v-container class="pb-0">
                    <div class="video-container ">
                    <iframe class="elevation-5 xs12 md6" width="560" height="315" :src="list.video" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    </div>
                </v-container>
            </v-flex>
        </v-layout>
      
     
  </div>
</template>

<script>
export default {
  name: 'ListDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: 560,
      list: {
            name: 'Mejores peliculas del 2017', 
            description: 'Esta lista muestra las mejores peliculas que ha mi parecer lo han hecho este 2017 y por lo tanto cumplen con lo dicho',
            items: [
                // {"Title":'Wonder', "Year":'2017', "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},
                {"number":1, "Title":"Patriots Day","Year":"2016","Rated":"R","Released":"13 Jan 2017","Runtime":"133 min","Genre":"Crime, Drama, History","Director":"Peter Berg","Writer":"Peter Berg (screenplay), Matt Cook (screenplay), Joshua Zetumer (screenplay), Peter Berg (story), Matt Cook (story), Paul Tamasy (story), Eric Johnson (story)","Actors":"Mark Wahlberg, Dicky Eklund Jr., Michael Marchand, Rhet Kidd","Plot":"The story of the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists responsible.","Language":"English, Chinese, Arabic","Country":"Hong Kong, USA","Awards":"2 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODYxMDc0NTg2Nl5BMl5BanBnXkFtZTgwNjY0NDYzOTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.4","imdbVotes":"55,903","imdbID":"tt4572514","Type":"movie","DVD":"28 Mar 2017","BoxOffice":"$31,856,991","Production":"CBS Films","Website":"http://www.patriotsdayfilm.com/","Response":"True"},
                {"number":2, "Title":"Split","Year":"2016","Rated":"PG-13","Released":"20 Jan 2017","Runtime":"117 min","Genre":"Horror, Thriller","Director":"M. Night Shyamalan","Writer":"M. Night Shyamalan","Actors":"James McAvoy, Anya Taylor-Joy, Betty Buckley, Haley Lu Richardson","Plot":"Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.","Language":"English","Country":"Japan, USA","Awards":"3 wins & 12 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"74%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.3","imdbVotes":"234,639","imdbID":"tt4972582","Type":"movie","DVD":"18 Apr 2017","BoxOffice":"$138,120,085","Production":"Universal Pictures","Website":"http://www.splitmovie.com/","Response":"True"},
                {"number":3, "Title":"Dunkirk","Year":"2017","Rated":"PG-13","Released":"21 Jul 2017","Runtime":"106 min","Genre":"Action, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong","Plot":"Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.","Language":"English, French, German","Country":"UK, Netherlands, France, USA","Awards":"Nominated for 3 Golden Globes. Another 18 wins & 97 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.2","imdbVotes":"291,100","imdbID":"tt5013056","Type":"movie","DVD":"19 Dec 2017","BoxOffice":"$188,042,171","Production":"Warner Bros. Pictures","Website":"http://www.dunkirkmovie.com","Response":"True"},
                {"number":4, "Title":"Loving Vincent","Year":"2017","Rated":"PG-13","Released":"22 Sep 2017","Runtime":"94 min","Genre":"Animation, Biography, Crime","Director":"Dorota Kobiela, Hugh Welchman","Writer":"Dorota Kobiela, Hugh Welchman, Jacek Dehnel","Actors":"Douglas Booth, Josh Burdett, Holly Earl, Robin Hodges","Plot":"In a story depicted in oil painted animation, a young man comes to the last hometown of painter Vincent van Gogh to deliver the troubled artist's final letter and ends up investigating his final days there.","Language":"English","Country":"UK, Poland","Awards":"Nominated for 1 Golden Globe. Another 8 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NjE2NjgwN15BMl5BanBnXkFtZTgwNDYzMzEwMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.9","imdbVotes":"8,850","imdbID":"tt3262342","Type":"movie","DVD":"16 Jan 2018","BoxOffice":"$4,641,218","Production":"Good Deed Entertainment","Website":"http://lovingvincent.com/","Response":"True"},
                {"number":5, "Title":"War for the Planet of the Apes","Year":"2017","Rated":"PG-13","Released":"14 Jul 2017","Runtime":"140 min","Genre":"Action, Adventure, Drama","Director":"Matt Reeves","Writer":"Mark Bomback, Matt Reeves, Rick Jaffa (based on characters created by), Amanda Silver (based on characters created by)","Actors":"Andy Serkis, Woody Harrelson, Steve Zahn, Karin Konoval","Plot":"After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.","Language":"English, American Sign Language","Country":"Canada, New Zealand, USA","Awards":"9 wins & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.5","imdbVotes":"141,735","imdbID":"tt3450958","Type":"movie","DVD":"24 Oct 2017","BoxOffice":"$146,872,826","Production":"20th Century Fox","Website":"http://www.warfortheplanet.com/","Response":"True"},
                {"number":6, "Title":"While the Wolf's Away","Year":"2017","Rated":"N/A","Released":"24 Feb 2017","Runtime":"123 min","Genre":"Drama, Mystery, Thriller","Director":"Joseph Hemsani","Writer":"Abe Rosenberg, Joseph Hemsani","Actors":"Ricardo Mestre, Carla Adell, Luis de La Rosa, Mar Carrera","Plot":"A young teen and his misfit group of friends try to escape from a strict boarding school that holds dangerous secrets.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MjEwMjM3N15BMl5BanBnXkFtZTgwMjgzMTEzMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"230","imdbID":"tt3296156","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
                {"number":6, "Title":"Sopladora de Hojas","Year":"2015","Rated":"N/A","Released":"01 Oct 2015","Runtime":"90 min","Genre":"Comedy, Drama","Director":"Alejandro Iglesias Mendizabal","Writer":"Alejandro Iglesias Mendizabal, Luis Montalvo","Actors":"Carlos Aragón, Gibrán Arias, Andrés Delgado, Daniel Giménez Cacho","Plot":"Three friends have a special mission: find some keys lost in a pile of dead leaves.","Language":"Spanish","Country":"Mexico","Awards":"2 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDAxYTA5NGEtMWQwNi00NjQwLWE2ZTQtOWU4MmRjYTQzNzFmL2ltYWdlXkEyXkFqcGdeQXVyMzg5NzM2Mjc@._V1_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.9/10"},{"Source":"Rotten Tomatoes","Value":"100%"}],"Metascore":"N/A","imdbRating":"6.9","imdbVotes":"16","imdbID":"tt4896920","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
                {"number":6, "Title":"Tigers Are Not Afraid","Year":"2017","Rated":"N/A","Released":"02 Nov 2017","Runtime":"N/A","Genre":"Fantasy, Horror","Director":"Issa López","Writer":"Issa López","Actors":"Paola Lara, Hanssel Casillas, Rodrigo Cortes, Ianis Guerrero","Plot":"A dark fairy tale about a gang of five children trying to survive the horrific violence of the cartels and the ghosts created every day by the drug war.","Language":"Spanish","Country":"Mexico","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyN2Q5ODYtMWI3OC00NjBjLWIyYTItNGE5NGJiYzI4NjNjXkEyXkFqcGdeQXVyNDc3MzM3MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"170","imdbID":"tt4823434","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
                {"number":7, "Title":"Get Out", "clasificacion":'poop', "Year":"2017","Rated":"R","Released":"24 Feb 2017","Runtime":"104 min","Genre":"Horror, Mystery, Thriller","Director":"Jordan Peele","Writer":"Jordan Peele","Actors":"Daniel Kaluuya, Allison Williams, Catherine Keener, Bradley Whitford","Plot":"It's time for a young African American to meet with his white girlfriend's parents for a weekend in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.","Language":"English","Country":"Japan, USA","Awards":"Nominated for 2 Golden Globes. Another 48 wins & 98 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.7","imdbVotes":"210,485","imdbID":"tt5052448","Type":"movie","DVD":"23 May 2017","BoxOffice":"$175,428,355","Production":"Universal Pictures","Website":"http://www.getoutfilm.com/","Response":"True"},
                {"number":8, "Title":"The Villainess","Year":"2017","Rated":"NOT RATED","Released":"08 Jun 2017","Runtime":"129 min","Genre":"Action, Crime, Drama","Director":"Byung-gil Jung","Writer":"Byeong-sik Jung, Byung-gil Jung","Actors":"Ok-bin Kim, Ha-kyun Shin, Jun Sung, Seo-hyeong Kim","Plot":"A female assassin leaves a trail of bodies behind her as she seeks revenge.","Language":"Korean","Country":"South Korea","Awards":"2 wins & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzRiZjFkMjgtYjAxMy00NjNhLThlZmEtMDk1N2Q3MjFjMTBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"6.7","imdbVotes":"2,843","imdbID":"tt6777338","Type":"movie","DVD":"21 Nov 2017","BoxOffice":"$27,442","Production":"Next Entertainment World","Website":"N/A","Response":"True"},
                {"number":9, "Title":"Professor Marston and the Wonder Women","Year":"2017","Rated":"R","Released":"13 Oct 2017","Runtime":"108 min","Genre":"Biography, Drama","Director":"Angela Robinson","Writer":"Angela Robinson","Actors":"Luke Evans, Rebecca Hall, Bella Heathcote, Connie Britton","Plot":"The story of psychologist William Moulton Marston, and his polyamorous relationship with his wife and his mistress who would inspire his creation of the superheroine, Wonder Woman.","Language":"English","Country":"USA","Awards":"3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMTQzMDIwNl5BMl5BanBnXkFtZTgwMTY1NjgzMzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.2","imdbVotes":"2,021","imdbID":"tt6133130","Type":"movie","DVD":"N/A","BoxOffice":"$1,583,641","Production":"Annapurna Pictures","Website":"http://www.marston.movie/","Response":"True"},
                {"number":10, "Title":"Neruda","Year":"2016","Rated":"R","Released":"11 Aug 2016","Runtime":"107 min","Genre":"Biography, Crime, Drama","Director":"Pablo Larraín","Writer":"Guillermo Calderón","Actors":"Gael García Bernal, Luis Gnecco, Mercedes Morán, Emilio Gutiérrez Caba","Plot":"An inspector hunts down Nobel Prize-winning Chilean poet, Pablo Neruda, who becomes a fugitive in his home country in the late 1940s for joining the Communist Party.","Language":"Spanish, French","Country":"Chile, Argentina, France, Spain, USA","Awards":"Nominated for 1 Golden Globe. Another 10 wins & 29 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzM0NDI4Mjc5NV5BMl5BanBnXkFtZTgwMTM0NzQ0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.0","imdbVotes":"6,354","imdbID":"tt4698584","Type":"movie","DVD":"N/A","BoxOffice":"$938,875","Production":"The Orchard","Website":"http://azfilms.com.ar/en/neruda-5/","Response":"True"},
            ],
            color: "green darken-3",
            video: "https://www.youtube.com/embed/cZZlthue_rQ?rel=0"
            }
    }
  },
  computed:{
      videoHeight (){
        
        return this.width/(560/315)
      }
  },
  filters: {
      twoDigits: function(value){
          if (value <= 9){
              return '0' + value
          }
          return value
      }
  },mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        this.width = $('#movie').width()
    })

     
      
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
