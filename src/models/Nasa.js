export class Nasa {
    constructor(data){
      this.id = data.id, 
      this.title = data.title,
      this.date = data.date
      this.imgUrl = data.hdurl
      this.type = data.media_type
      this.description = data.explanation
    }
  }