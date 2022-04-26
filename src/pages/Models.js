import React from 'react'
import ModelScooter from '../components/ModelScooter'

function Models() {
  const tempdata = [
    { imgurl: 'https://www.fastfuriousscooters.nl/images/productimages/big/italiaanse-retro-scooter-mat-zwart-.jpg', title: 'Scooter Model 1', description: 'The Scooter Model 1 is a compact scooter with a simple design and a low-profile design. It is a great choice for those who want to travel on a budget.',id:1 },
    { imgurl: 'http://cdn.shopify.com/s/files/1/0448/4913/5779/products/KB-VXL-Luxe-Mint-Groen_1200x1200.jpg?v=1599938757', title: 'Scooter Model 2', description: 'The Scooter Model 2 is a compact scooter with a simple design and a low-profile design. It is a great choice for those who want to travel on a budget.',id:2 },
    { imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuS-qcyJvmd4-kaANaG-ufKiz--J72xCw7rQ&usqp=CAU', title: 'Scooter Model 4', description: 'The Scooter Model 4 is a compact scooter with a simple design and a low-profile design. It is a great choice for those who want to travel on a budget.',id:3 },
    { imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G4xsL42enWmbMIZXc6kASOLRwBcssmkg7A&usqp=CAU', title: 'Scooter Model 5', description: 'The Scooter Model 5 is a compact scooter with a simple design and a low-profile design. It is a great choice for those who want to travel on a budget.',id:4 },
    { imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60UflFBXaCK1bmyUEr9azoiRos2bBWnqmgw&usqp=CAU', title: 'Scooter Model 3', description: 'The Scooter Model 3 is a compact scooter with a simple design and a low-profile design. It is a great choice for those who want to travel on a budget.',id:5 }
  ]
  return (
    <div className='text-center modelwrapper'>
      <div className='content-block'>
        <h1>LATEST MODELS</h1>
        <h3>Please select a model</h3>
        ............................................
        <div className='ModelScooterWrapper'>
          {tempdata.map((item, index) => { return <ModelScooter key={index} imgurl={item.imgurl} title={item.title} description={item.description} prodId={item.id} /> })}
          {/* <ModelScooter imgurl='https://m.media-amazon.com/images/I/71vMq48BGbL.jpg' title='vespaa' description='this vespaaa is awesomeee' /> */}
        </div>
      </div>
    </div>
  )
}

export default Models;
