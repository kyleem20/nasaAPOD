<template>
<img :src="pic" alt="">
<button class="btn btn-primary" @click="getPic">
    its a butotn
</button>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { Nasa } from '../models/Nasa'
import { logger } from '../utils/Logger'
import {nasaImageService} from '../services/NasaImageService'


export default {
  // child component defines the props it takes
  props: {
    nasa: {
      type: Nasa,
      required: true
    }
  },
  // if you ever need props within the setup they must be passed as the first argument
  setup() {
    return {
        pic: computed(()=> AppState.results.hdurl),
        async getPic(){
            try {
                const date = '2021-11-09'
                await nasaImageService.findImageQuery(date)
            } catch (error) {
                logger.error(error)
            }
        }

    //   onMyList: computed(() => AppState.watchlist.find(m => m.id === props.movie.id)),
    //   addToList() {
    //     logger.log('Adding', props.movie.title)
    //     watchlistService.addMovie(props.movie)
    //   },
    //   removeFromList() {
    //     watchlistService.remove(props.movie)
    //   }
    }
  }
}
</script>

<style>

</style>