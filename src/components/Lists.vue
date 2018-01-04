<template>
  <div id="Lists">
    <v-container > 
      <v-layout>
          <div class="headline mb-4">
              Listas
          </div>
      </v-layout>
      
      <v-layout row wrap>
        <v-flex xs12 md3 v-for="(list, index) in listas" :key="index" class="px-2">
          <v-layout row class="xs-only hidden-sm-and-up">
            <v-flex xs5 class="pt-0 mt-0">
              <v-card-media
                :src="list.img"
                height="90px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7 class="pt-3" pl-2>
              <div>
                <div>{{list.name}}</div>
              </div>
            </v-flex>
            
          </v-layout>
          <v-divider
                dark
                class="my-1"
          ></v-divider>
          
          <v-card hover class="pointer hidden-sm-and-down" >
            <v-card-media><img :src="list.img" alt=""></v-card-media></v-card-media>
            <v-card-title>{{list.name}}</v-card-title>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      listas:[
        {name: 'Top: Mejores peliculas 2017', id: '1', img:'https://i.ytimg.com/vi/cZZlthue_rQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAtUcl9vWOjDkwHqwXSTfFTh37RaA'},
        {name: 'Top: Peores peliculas 2017', id: '1', img:'https://i.ytimg.com/vi/z7WISEtdZJ4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC5r8ZU8UmnhYd46N3kwoVrT7y3ng'},
        {name: 'Top: Peores peliculas de terror 2017', id: '1', img:'https://i.ytimg.com/vi/6VoOR8lTfvU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKRw10izUG4PJUhp4x3sVASKEPMw'},
        {name: 'Top: Peores peliculas Mexicanas 2017', id: '1', img:'https://i.ytimg.com/vi/huGV3ZhMBEA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3y7Q-7_-MUu2rnPlOTD87wth1NQ'},
        {name: 'Top: Peliculas Perturbadoras', id: '1', img:'https://i.ytimg.com/vi/vaCsUkLr080/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCIMpSbgXAcgC74oghPd646l5jU9Q'},
        {name: 'Top: Peores peliculas 2017', id: '1', img:'https://commdiginews-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/movies.jpg'},
        {name: 'Top: Mejores peliculas 2017', id: '1', img:'https://commdiginews-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/movies.jpg'},
        {name: 'Top: Peores peliculas 2017', id: '1', img:'https://commdiginews-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/movies.jpg'}
      ]
    }
  }
}
</script>

<style scoped>

.pointer{
  cursor: pointer;
}

</style>
