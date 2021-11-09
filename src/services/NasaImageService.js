import { Nasa } from "../models/Nasa"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { nasaDB } from "./AxiosService"


const apiKey = 'api_key=x1Lh7RHqGr75X0tNAsXtXRrjV5aYtKWPZbUHSG85'

class NasaImageService{
    async findImageQuery(date){
    const res = await nasaDB.get(`?${apiKey}&date=${date}`)
    logger.log(res.data)
    const nasa = res.data
    AppState.results = nasa
    }
}

export const nasaImageService = new NasaImageService()