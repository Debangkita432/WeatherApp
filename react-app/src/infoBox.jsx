import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/137199031/photo/sun-in-the-blue-sky-with-lensflare.webp?b=1&s=170667a&w=0&k=20&c=UryPTb69YNKSTYl4RTHUxif1rc6IzEEUT_JIbrFCXpo=";
    const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?b=1&s=170667a&w=0&k=20&c=aLCX4pjFdCryX8YghFAFv6mT8JBbR-5G00Ins83Tn34=";
    return(
        <div className='infobox'>
           <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city} 

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;c</p>
        <p>Humidity={info.humidity}</p>
        <p>Max Temperature={info.tempMax}&deg;c</p>
        <p>Min Temperature={info.tempMin}&deg;c</p>
        <p>The weather can be described as {info.weather} and feels like{info.feelslike}&deg;c</p> 
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}