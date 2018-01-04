<template>
  <div id="app">
    <v-app light>
        
        <v-navigation-drawer
        fixed
        :clipped="$vuetify.breakpoint.width > 1264"
        v-model="drawer"
        class="grey lighten-3"
        
        app
      >
      <!-- <v-flex xs12>
          <img width="100%" src="/logo_cinetica.png" alt="">
      </v-flex> -->
      
      <v-list
        dense
        class="grey lighten-3"
    >
        <template v-for="(item, i) in menu">
        <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
        >
            <v-flex xs6>
            <v-subheader v-if="item.heading">
                {{ item.heading }}
            </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
            <v-btn small flat>edit</v-btn>
            </v-flex>
        </v-layout>
        <v-divider
            
            v-else-if="item.divider"
            class="my-4"
            :key="i"
        ></v-divider>
       
        <v-list-tile
            :key="i"
            v-else
            @click="go_where(item.route)"
        >
            <v-list-tile-action>
            <v-icon class="lighten-4">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-title class="grey--text">
                {{ item.text }}
            </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </template>
</v-list>
        
    
  </v-navigation-drawer>
  
    <div style="position: relative; overflow: hidden;">
    <v-toolbar color="white" app   clipped scroll-off-screen>
        <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title "><img src="/logo_cinetica.png" height="58px" alt=""></span>
        <v-spacer></v-spacer>
        
    
    </v-toolbar>
    <v-content>
        
        
        <router-view></router-view>
        <!-- <calendar></calendar>   -->
        <!-- <movies></movies> -->
        <!-- <home></home> -->
    </v-content>

    </div>
    <v-footer app fixed>
        
    </v-footer>
    </v-app>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Calendar from './components/Calendar.vue'
import Movies from './components/Movies.vue'
import Home from './components/Home.vue'
import MovieDetails from './components/MovieDetails.vue'
import Lists from './components/Lists.vue'
import listDetail from './components/ListDetails.vue'



// var database = firebase.database();

// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }



export default {
  name: 'app',
  components: {
    Hello, 
    Calendar, 
    Movies,
    Home,
    MovieDetails, 
    Lists,
    listDetail
  },
  data () {
    return {
      drawer: null,
      menu: [
        { icon: 'home', text: 'Inicio', route: '/' },
        { icon: 'local_movies', text: 'Peliculas', route: 'movies'},
        { icon: 'tv', text: 'Series', route: 'movies'},
        { icon: 'list', text: 'List Detail', route: 'listDetail'},
        { icon: 'list', text: "Listas", route: 'lists'},
        { icon: 'favorite', text: 'Favoritos', route: 'movies'},
        { icon: 'date_range', text: 'Proyecciones del periodo', route: 'calendar'},
        // { icon: 'date_range', text: 'Details', route: 'details'},
        { divider: true },
        { icon: 'help', text: 'Help' },

      ],
    }
  },
  methods: {
      go_where: function(r){
          this.$router.push(r)
      }
  },
  
  

}
</script>
