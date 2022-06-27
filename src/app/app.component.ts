import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  weatherdata: any;
  img_src: any;
  search_query: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // API Call
    // let headers = new HttpHeaders({
    //   'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    //   'x-rapidapi-key': 'bebd352736msh50d47037973b303p160fc1jsnd6267bacb251'
    // })


    // this.http
    //   .get('https://community-open-weather-map.p.rapidapi.com/weather?q=lahore&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml', 
    //  {headers, responseType: 'text' as 'json'}
    //       )
    //   .subscribe((data: any) => {
    //  this.weatherdata = data;
    //     console.log("rcvd data: ",this.weatherdata);
    //     // console.log("printing: ",this.weatherdata.);
    //   }, error=>{console.log("error msg:",error )});


    let headers = new HttpHeaders({
      'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
      'x-rapidapi-key': 'bebd352736msh50d47037973b303p160fc1jsnd6267bacb251'
    })

    let params = new HttpParams().append("location", "lahore").append("format", "json").append("u", "c");


    this.http
      .get('https://yahoo-weather5.p.rapidapi.com/weather',
        { headers, params }
      )
      .subscribe((data: any) => {
        this.weatherdata = data;
        console.log("rcvd data: ", this.weatherdata);
        //  console.log("printing: ",this.weatherdata.location.city);

        if(this.weatherdata.current_observation.condition.text==='Clear'){
          this.img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg/1200px-%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg"
          // console.log(this.img_src);
         }
          else if(this.weatherdata.current_observation.condition.text.includes('Sunny')){
          this.img_src="https://s.hdnux.com/photos/01/24/44/40/22169658/3/rawImage.jpg";
          // console.log(this.img_src);
        }

        else if(this.weatherdata.current_observation.condition.text.includes('Cloudy')){
          this.img_src="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80";
          // console.log(this.img_src);
        }
        else if(this.weatherdata.current_observation.condition.text.includes('Thunderstorms')){
          this.img_src="https://grist.org/wp-content/uploads/2016/06/thunder-lightning-storm.jpg";
          // console.log(this.img_src);
        }
        else if(this.weatherdata.current_observation.condition.text.includes('Showers')){
          this.img_src="https://www.thedailyvox.co.za/wp-content/uploads/2022/04/MaxPixel.net-Autumn-Again-Rain-Weather-Bad-Weather-Rain-Drops-5960262-e1649671031192.jpg";
          // console.log(this.img_src);
        }



      });

    



  }


  getval(query: any) {

    this.search_query = query;
    console.log("search query", this.search_query)
//hit api and show new data
let headers = new HttpHeaders({
  'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
  'x-rapidapi-key': 'bebd352736msh50d47037973b303p160fc1jsnd6267bacb251'
})
let params = new HttpParams().append("location", this.search_query).append("format", "json").append("u", "c");


    this.http
      .get('https://yahoo-weather5.p.rapidapi.com/weather',
        { headers,params }
      )
      .subscribe((data: any) => {
        this.weatherdata = data;
        console.log("new data: ", this.weatherdata);
        //  console.log("printing: ",this.weatherdata.location.city);


        if(this.weatherdata.current_observation.condition.text==='Clear'){
          this.img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg/1200px-%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg"
          // console.log(this.img_src);
         }
          else if(this.weatherdata.current_observation.condition.text.includes('Sunny')){
          this.img_src="https://s.hdnux.com/photos/01/24/44/40/22169658/3/rawImage.jpg";
          // console.log(this.img_src);
        }

        else if(this.weatherdata.current_observation.condition.text.includes('Cloudy')){
          this.img_src="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80";
          // console.log(this.img_src);
        }
        else if(this.weatherdata.current_observation.condition.text.includes('Thunderstorms')){
          this.img_src="https://grist.org/wp-content/uploads/2016/06/thunder-lightning-storm.jpg";
          // console.log(this.img_src);
        }
        else if(this.weatherdata.current_observation.condition.text.includes('Showers')){
          this.img_src="https://www.thedailyvox.co.za/wp-content/uploads/2022/04/MaxPixel.net-Autumn-Again-Rain-Weather-Bad-Weather-Rain-Drops-5960262-e1649671031192.jpg";
          // console.log(this.img_src);
        }

      });

  }



}