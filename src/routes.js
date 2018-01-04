
import Hello from './components/Hello.vue'
import Calendar from './components/Calendar.vue'
import Movies from './components/Movies.vue'
import Home from './components/Home.vue'
import MovieDetails from './components/MovieDetails.vue'

module.exports = [
    {
        path: '/',
        component: require('./components/Home.vue'),
            meta: {
                    title: 'Home'
        }
    },
    {
        path: '/movies',
        name: 'movies',
        component: require('./components/Movies.vue'),
            meta: {
                    title: 'Movies'
        }
    },
    // {
    //     path: '/movies/:search',
    //     component: require('./components/Movies.vue'),
    //         meta: {
    //                 title: 'Movies'
    //     }
    // },
    {
        path: '/lists',
        name: 'lists',
        component: require('./components/Lists.vue'),
            meta: {
                    title: 'Listas'
        }
    },
    {
        path: '/listdetail',
        name: 'listDetail',
        component: require('./components/ListDetails.vue'),
            meta: {
                    title: 'Listas'
        }
    },
    {
        path: '/calendar',
        component: Movies,
        props:{projectionDate: true},
        meta: { title: 'Calendario'}
    },

    {
        path: '/details/:movieid',
        component: MovieDetails,
        meta: { title: 'Cinética'}
    },
    
]
