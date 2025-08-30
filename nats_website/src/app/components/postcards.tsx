
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PostcardModalProps {
  postcardName: string;
  onClose: () => void;
  style?: React.CSSProperties;
}

const postcards = [
  { name: "Santorini", 
    src: "/Postcards/SantoriniPostcard.png", 
    des: "I took a solo trip to Santorini and stayed in a hostel built into a network of caves, called Caveland, near Fira, spending my days wandering around the island and eating plenty of lamb gyros. I tackled a four-hour hike across the island by myself which was windy but unforgettable, and browsed stunning jewelry shops along the way. I purchased the prettiest earrings and necklace here that I have yet to remove. I even saw the Olympic flame during my visit, as it was touring the greek islands prior to the 2024 Paris Olympics. A highlight was touring Santo Wines and enjoying a tasting with a breathtaking caldera view.", 
    recs: [
      "Feta Saganaki",
      "2 Brothers Bar",
      "Perissa Beach",
      "Apollo Jewelry",
      "Athina Jewelry",
      "Santo Wines",
      "Caveland Hostel",
    ],
    photos: [
  
        "/Postcards/Santorini/image4.JPG",
        "/Postcards/Santorini/image5.JPG",
        "/Postcards/Santorini/image6.JPG",
        "/Postcards/Santorini/image7.JPG",
        "/Postcards/Santorini/image8.JPG",
        "/Postcards/Santorini/image9.JPG",
        "/Postcards/Santorini/image10.JPG",
        "/Postcards/Santorini/image11.JPG",
        "/Postcards/Santorini/image13.JPG",
        "/Postcards/Santorini/image14.JPG",
        "/Postcards/Santorini/image15.JPG",
        "/Postcards/Santorini/image16.JPG",
        "/Postcards/Santorini/image17.JPG",
        "/Postcards/Santorini/image18.JPG",
        "/Postcards/Santorini/image19.JPG",
        "/Postcards/Santorini/image1.JPG",
        "/Postcards/Santorini/image2.JPG",
        "/Postcards/Santorini/image3.JPG",
      ],
  },

  { name: "Morocco", 
    src: "/Postcards/MoroccoPostcard.png", 
    des: "I traveled to Morocco with two friends, beginning our trip in Marrakesh where we stayed in a riad in the old city. We spent our first day exploring the souks, medina, and bustling markets, and visited Le Jardin Secret. Since it was during Eid, we experienced the lively celebrations in the main square. From there, we went on a camel tour and then took a six-hour bus ride to the Zagora Desert, passing through the Atlas Mountains and Ait Ben Haddou along the way. We rode camels into our desert camp, where we listened to Berber music under the stars and woke early to watch the sunrise over the sand dunes before riding our camels back to the bus. I really enjoyed this trip and culture I got to experience and appreciate. ", 
    recs: [
      "Restaurant Al Baraka Marrakech",
      "Le Jardin Secret",
      "Tea, Saffron, and Indigo Artwork",
      "Scarf for Desert Air",
      "Ait Ben Haddou",
      "Atlas Mountains",
     
    ],
    photos: [
        "/Postcards/Morocco/image1.JPG",
        "/Postcards/Morocco/image2.JPG",
        "/Postcards/Morocco/image3.JPG",
        "/Postcards/Morocco/image4.JPG",
        "/Postcards/Morocco/image5.JPG",
        "/Postcards/Morocco/image6.JPG",
        "/Postcards/Morocco/image7.JPG",
        "/Postcards/Morocco/image8.JPG",
        "/Postcards/Morocco/image9.JPG",
        "/Postcards/Morocco/image10.JPG",
        "/Postcards/Morocco/image11.JPG",
        "/Postcards/Morocco/image13.JPG",
        "/Postcards/Morocco/image14.JPG",
        "/Postcards/Morocco/image15.JPG",
        "/Postcards/Morocco/image16.JPG",
        "/Postcards/Morocco/image17.JPG",
        "/Postcards/Morocco/image18.JPG",
        "/Postcards/Morocco/image19.JPG",
        "/Postcards/Morocco/image20.JPG",
        "/Postcards/Morocco/image21.JPG",
        "/Postcards/Morocco/image22.JPG",
        "/Postcards/Morocco/image23.JPG",
        "/Postcards/Morocco/image24.JPG",
        "/Postcards/Morocco/image25.JPG",
        ]
  },
  { name: "Rome", 
    src: "/Postcards/RomePostcard.png", 
    des: "I visited Rome with three friends, and also met up with another friend from my college in the U.S. who was studying abroad in Rome. We explored iconic landmarks including the Colosseum, Trevi Fountain, Pantheon, Spanish Steps, and Vatican City, and spent time at a modern art gallery. Along the way, we enjoyed aperitivo with charcuterie, Hugo and Aperol spritzes, and even stopped at McDonald’s for a quick bite. A highlight of the trip was a pasta-making class where we also learned to make tiramisu. We rounded out the experience by going out to enjoy Rome’s vibrant nightlife.", 
    recs: [
      "Ristorante La Vittoria",
      "Ristorante Nerone",
      "Cornetto",
      "Subdued" ,
      "Club Derriere", 
      "The Drunken Ship"
],
    photos: [
        "/Postcards/Rome/image1.JPG",
        "/Postcards/Rome/image2.JPG",
        "/Postcards/Rome/image3.JPG",
        "/Postcards/Rome/image4.JPG",
        "/Postcards/Rome/image5.JPG",
        "/Postcards/Rome/image6.JPG",
        "/Postcards/Rome/image7.JPG",
        "/Postcards/Rome/image8.JPG",
        "/Postcards/Rome/image9.JPG",
        "/Postcards/Rome/image10.JPG",
        "/Postcards/Rome/image11.JPG",
        "/Postcards/Rome/image13.JPG",
        "/Postcards/Rome/image14.JPG",
        "/Postcards/Rome/image15.JPG",
        "/Postcards/Rome/image16.JPG",
        "/Postcards/Rome/image17.JPG",
        "/Postcards/Rome/image18.JPG",
        "/Postcards/Rome/image19.JPG",
        "/Postcards/Rome/image20.JPG",
        "/Postcards/Rome/image21.JPG",
        "/Postcards/Rome/image22.JPG",
        "/Postcards/Rome/image23.JPG",
        "/Postcards/Rome/image24.JPG",
        "/Postcards/Rome/image25.JPG",
        "/Postcards/Rome/image26.JPG",
        "/Postcards/Rome/image27.JPG",
        ]
  },
  { name: "Madrid", 
    src: "/Postcards/MadridPostcard.png", 
    des: "In Madrid, I traveled with two friends and also met up with a friend from home who was studying abroad in Rome. On our first night, we went to El Intruso, a lively jazz bar where we enjoyed an evening of live music, and we spent the following day exploring the city. We did some shopping before enjoying a picnic in Parque del Retiro, where we also visited the Jardines de Cecilio Rodríguez and saw peacocks wandering the gardens. We then stopped by the beautiful rose gardens, Rosaleda Parque del Retiro, and later experienced the local study abroad nightlife at Dubliners, a popular bar among international students.", 
    recs: [
      "El Intruso", 
      "Scarlett Cafe" , 
      "Pumpum Cafe" ,
      "Dubliners" ,
      "Rosaleda Parque del Retiro",
      "Tinto De Verano"
  ],
    photos: [
        "/Postcards/Madrid/image1.JPG",
        "/Postcards/Madrid/image2.JPG",
        "/Postcards/Madrid/image3.JPG",
        "/Postcards/Madrid/image4.JPG",
        "/Postcards/Madrid/image5.JPG",
        "/Postcards/Madrid/image6.JPG",
        "/Postcards/Madrid/image7.JPG",
        "/Postcards/Madrid/image8.JPG",
        "/Postcards/Madrid/image9.JPG",
        "/Postcards/Madrid/image10.JPG",
        "/Postcards/Madrid/image11.JPG",
        "/Postcards/Madrid/image13.JPG",
        "/Postcards/Madrid/image14.JPG",]
  },
  { name: "London", 
    src: "/Postcards/LondonPostcard.png", 
    des: " I spent a weekend in London with friends I had just met at my study abroad dorm. On our first night, we went out together to Simmons Bar and then spent the next day sightseeing, visiting Tower Bridge, Big Ben, Westminster, Buckingham Palace, and the Victoria and Albert Museum. We had dinner in Chinatown, enjoying Korean food and dessert, and the next day explored Notting Hill to see the iconic colorful houses, market, and the door from the film. Other highlights included crossing Abbey Road like the Beatles, riding the London Eye, and experiencing the city’s nightlife at Ballie Ballerson, a ball pit bar.", 
    recs: [
        "Hankki" ,
        "White Mulberries",
        "Hichki", 
        "Ballie Ballerson",
        "Jellycat Stores" ],
    photos: [ 
        "/Postcards/London/image2.JPG",
        "/Postcards/London/image4.JPG",
        "/Postcards/London/image5.JPG",
        "/Postcards/London/image6.JPG",
        "/Postcards/London/image7.JPG",
        "/Postcards/London/image8.JPG",
        "/Postcards/London/image9.JPG",
        "/Postcards/London/image10.JPG",
        "/Postcards/London/image11.JPG",
        "/Postcards/London/image13.JPG",
        "/Postcards/London/image14.JPG",
        "/Postcards/London/image15.JPG",
         "/Postcards/London/image1.JPG",
        "/Postcards/London/image16.JPG",
        "/Postcards/London/image17.JPG",
        "/Postcards/London/image18.JPG",
        "/Postcards/London/image19.JPG",
        "/Postcards/London/image20.JPG",
        "/Postcards/London/image21.JPG",
        "/Postcards/London/image22.JPG",
        "/Postcards/London/image23.JPG",
        "/Postcards/London/image24.JPG",
        "/Postcards/London/image25.JPG",
        "/Postcards/London/image26.JPG",
        "/Postcards/London/image27.JPG",
        "/Postcards/London/image28.JPG",
        "/Postcards/London/image29.JPG",
        "/Postcards/London/image30.jpg",]
  },
  { name: "Lisbon", 
    src: "/Postcards/LisbonPostcard.png", 
    des: " I visited Lisbon with three friends, where we explored the city by walking through vibrant street markets and wandering down the famous Pink Street lined with colorful umbrellas. We tried pastel de nata, sampled the local cherry liquor served in a chocolate cup, and enjoyed live music from buskers as we admired the city’s bridge. While there, we stopped at a tile store to pick up traditional Portuguese tiles and admired several of Lisbon’s museums and cathedrals from the outside. Much of our time was spent walking all over the city, taking in its lively atmosphere and charm.", 
    recs: [ 
      "Confeitaria Nacional",
      "Cortiço & Netos" , 
      "Astique",
      "Ginja",
      "Rossio Square"
    ] ,
    photos: [
       "/Postcards/Lisbon/image13.jpg",
        "/Postcards/Lisbon/image4.jpg",
        "/Postcards/Lisbon/image16.JPG",
        "/Postcards/Lisbon/image17.JPG",
        "/Postcards/Lisbon/image18.JPG",
        "/Postcards/Lisbon/image5.JPG",
        "/Postcards/Lisbon/image6.JPG",
        "/Postcards/Lisbon/image7.JPG",
        "/Postcards/Lisbon/image8.jpg",
        "/Postcards/Lisbon/image9.JPG",
        "/Postcards/Lisbon/image10.JPG",
        "/Postcards/Lisbon/image20.JPG",
        "/Postcards/Lisbon/image1.JPG",
        "/Postcards/Lisbon/image2.JPG",
        "/Postcards/Lisbon/image3.JPG",
        "/Postcards/Lisbon/image11.JPG",
        "/Postcards/Lisbon/image14.JPG",
        "/Postcards/Lisbon/image15.jpg",
        "/Postcards/Lisbon/image19.JPG",
        "/Postcards/Lisbon/image21.JPG",
        "/Postcards/Lisbon/image22.jpg",
        "/Postcards/Lisbon/image23.JPG",
    ]
  },
  { name: "Edinburgh", 
    src: "/Postcards/EdinburghPostcard.png",
    des: "I traveled to Edinburgh with my parents, when they came out to visit at the end of my Study Abroad. We explored many of the city’s historic and scenic landmarks. We visited Edinburgh Castle, walked along the Royal Mile, and admired the beauty of St. Giles’ Cathedral and colorful Victoria Street. One of the highlights was hiking to the top of Arthur’s Seat for incredible views of the city. We also strolled through the picturesque Dean Village, taking in its charming atmosphere.", 
    recs: [
      "Edinburgh Castle", 
      "Makars Mash Bar" , 
      "The Red Door Gallery ",
      "Hibiki" ,
      "Pepe Nero"
    ] ,
    photos: [
        "/Postcards/Edinburgh/image1.JPG",
        "/Postcards/Edinburgh/image2.JPG",
        "/Postcards/Edinburgh/image3.JPG",
        "/Postcards/Edinburgh/image4.JPG",
        "/Postcards/Edinburgh/image5.JPG",
        "/Postcards/Edinburgh/image6.JPG",
        "/Postcards/Edinburgh/image7.JPG",
        "/Postcards/Edinburgh/image8.JPG",
        "/Postcards/Edinburgh/image9.JPG",
        "/Postcards/Edinburgh/image10.JPG",
        "/Postcards/Edinburgh/image11.JPG",
        "/Postcards/Edinburgh/image13.JPG",
        "/Postcards/Edinburgh/image14.JPG",
        "/Postcards/Edinburgh/image15.JPG",
        "/Postcards/Edinburgh/image16.JPG",
        "/Postcards/Edinburgh/image17.JPG",
        "/Postcards/Edinburgh/image18.JPG",
        "/Postcards/Edinburgh/image19.JPG",
        "/Postcards/Edinburgh/image20.JPG",
        "/Postcards/Edinburgh/image21.JPG",
        "/Postcards/Edinburgh/image22.JPG",
    ]
  },
  { name: "Liverpool", 
    src: "/Postcards/LiverpoolPostcard.png", 
    des: "A few of my friends while abroad were big Beatles fans, so we made a trip to Liverpool. Even though I didn’t know much about the band beforehand, I learned a lot during our visit. We explored several iconic Beatles landmarks, including Strawberry Fields, the Eleanor Rigby grave, and John Lennon’s childhood home. We also visited Penny Lane, where we saw the original street signage which is now protected, and wrapped up the trip with a visit to a Beatles museum (The Beatles Story), which gave me a deeper look into the band’s history and legacy.", 
    recs: [

        "Rudy Pizza Napoletana" ,
        "The Beatles Story"
    ] ,
    photos: [
        "/Postcards/Liverpool/image1.JPG",
        "/Postcards/Liverpool/image2.JPG",
        "/Postcards/Liverpool/image3.JPG",
        "/Postcards/Liverpool/image4.JPG",
        "/Postcards/Liverpool/image5.JPG",
        "/Postcards/Liverpool/image6.JPG",
        "/Postcards/Liverpool/image7.JPG",
        "/Postcards/Liverpool/image8.JPG",
        "/Postcards/Liverpool/image9.JPG",]
  },
  { name: "Barcelona", 
    src: "/Postcards/BarcelonaPostcard.png", 
    des: "I visited Barcelona with two friends, and together we explored the city’s incredible mix of food, culture, and architecture. We started with brunch before wandering through the streets to see the Arc de Triomf, Parc de la Ciutadella, and the Parliament building. We stopped at I Wear Dolls for jewelry shopping, indulged in churros with chocolate, and later visited Park Güell to take in the famous serpentine wall. Other highlights included enjoying tapas for lunch, viewing La Pedrera–Casa Milà and Casa Batlló, and admiring the breathtaking Basilica de la Sagrada Familia. ", 
    recs: [
      "Brunch & Cake", 
      "Honest Greens!!",
      "Billy Brunch", 
      "Casa Lolea", 
      "Jin Sushi Bar"
      
    ] ,
    photos: [
       "/Postcards/Barcelona/image1.JPG",
        "/Postcards/Barcelona/image2.JPG",
        "/Postcards/Barcelona/image3.JPG",
        "/Postcards/Barcelona/image4.JPG",
        "/Postcards/Barcelona/image5.JPG",
        "/Postcards/Barcelona/image6.JPG",
        "/Postcards/Barcelona/image7.JPG",
        "/Postcards/Barcelona/image8.JPG",
        "/Postcards/Barcelona/image9.JPG",
        "/Postcards/Barcelona/image10.JPG",
        "/Postcards/Barcelona/image11.JPG",
        "/Postcards/Barcelona/image13.JPG",
        "/Postcards/Barcelona/image14.JPG",
        "/Postcards/Barcelona/image15.JPG",
        "/Postcards/Barcelona/image16.JPG",
        "/Postcards/Barcelona/image17.JPG",
        "/Postcards/Barcelona/image18.JPG",
        "/Postcards/Barcelona/image19.JPG",
        "/Postcards/Barcelona/image20.JPG",
        "/Postcards/Barcelona/image21.JPG",
        "/Postcards/Barcelona/image22.JPG",
        "/Postcards/Barcelona/image23.JPG",
        "/Postcards/Barcelona/image24.JPG",
        "/Postcards/Barcelona/image25.JPG",
        "/Postcards/Barcelona/image26.JPG",
        "/Postcards/Barcelona/image27.JPG",
    ]
  },
  { name: "Galway", 
    src: "/Postcards/GalwayPostcard.png", 
    des: "I traveled with two friends by train from Dublin across the country to Galway, where we spent our first day walking around the city, exploring the market, and admiring the colorful houses. The next day, we took a bus to the Cliffs of Moher and walked along the path right near the edge of the cliffs, taking in the dramatic views. On our final day, we visited Inis Mór, one of the Aran Islands, where we had lunch before biking around the island. We explored Dún Aonghasa, a prehistoric stone fort perched high above the sea, and got caught in the rain during the five-mile ride back to the ferry, making the trip both challenging and unforgettable.", 
    recs: [
      "The Rolling Donut",
      "The Burgerstory Galway", 
      "O’Connells Bar" ,
      "Dún Aonghasa" ,
      "Cliffs of Moher"
    ] ,
    photos: [
      "/Postcards/Galway/image1.JPG",
        "/Postcards/Galway/image2.JPG",
        "/Postcards/Galway/image3.JPG",
        "/Postcards/Galway/image4.JPG",
        "/Postcards/Galway/image5.JPG",
        "/Postcards/Galway/image6.JPG",
        "/Postcards/Galway/image7.JPG",
        "/Postcards/Galway/image8.JPG",
        "/Postcards/Galway/image9.JPG",
        "/Postcards/Galway/image10.JPG",
        "/Postcards/Galway/image11.JPG",
        "/Postcards/Galway/image13.JPG",
        "/Postcards/Galway/image14.JPG",
        "/Postcards/Galway/image15.JPG",
        "/Postcards/Galway/image16.JPG",
        "/Postcards/Galway/image17.JPG",
        "/Postcards/Galway/image18.JPG",
        "/Postcards/Galway/image19.JPG",
        "/Postcards/Galway/image20.JPG",
        "/Postcards/Galway/image21.JPG",
        "/Postcards/Galway/image22.JPG",
        "/Postcards/Galway/image23.JPG",
        "/Postcards/Galway/image24.JPG",
        "/Postcards/Galway/image25.JPG",
        "/Postcards/Galway/image26.png",
    ]
  },
  { name: "Florence", 
    src: "/Postcards/FlorencePostcard.png", 
    des: " I visited Florence with one friend, and we spent our time exploring both its famous landmarks and hidden gems. We wandered through the Giardino di Boboli and Villa Bardini, and later visited Piazzale Michelangelo. Along the way, we stopped for gelato at Gelateria della Passera, visited Gino’s Bakery, and did some window shopping on the Ponte Vecchio. We explored the Scuola del Cuoio leather school and visited Pelletteria Artigiana Viviani, where I bought a leather purse. Highlights also included seeing the Duomo di Santa Maria del Fiore, trying wine from one the wine windows, and wandering through Mercato Centrale Firenze. ", 
    recs: [
       "Officina Profumo", 
       "Trattoria Za Za", 
       "Affagatos from Vivoli Gelateria",
       "Gelateria della Passera"
    ] ,
    photos: [
      "/Postcards/Florence/image1.JPG",
        "/Postcards/Florence/image2.JPG",
        "/Postcards/Florence/image3.JPG",
        "/Postcards/Florence/image4.JPG",
        "/Postcards/Florence/image5.JPG",
        "/Postcards/Florence/image6.JPG",
        "/Postcards/Florence/image7.JPG",
        "/Postcards/Florence/image8.JPG",
        "/Postcards/Florence/image9.JPG",
        "/Postcards/Florence/image10.JPG",
        "/Postcards/Florence/image11.JPG",
        "/Postcards/Florence/image13.JPG",
        "/Postcards/Florence/image14.JPG",
        "/Postcards/Florence/image15.JPG",
        "/Postcards/Florence/image16.JPG",
        "/Postcards/Florence/image18.JPG",
        "/Postcards/Florence/image19.JPG",
        "/Postcards/Florence/image20.JPG",
        "/Postcards/Florence/image21.JPG",
        "/Postcards/Florence/image22.JPG",
        "/Postcards/Florence/image23.JPG",
        "/Postcards/Florence/image24.JPG",
        "/Postcards/Florence/image25.JPG",
        "/Postcards/Florence/image26.JPG",
    ]
  },
  { name: "Marseille", 
    src: "/Postcards/MarseillePostcard.png", 
    des: "I visited Marseille with one friend, where we explored the city and spent time walking through the lively square by the port. We hiked up to the Notre-Dame de la Garde for incredible views, visited Castellane and the Palais Longchamp, and took a day trip to Cassis for the Calanques hike, which was absolutely stunning.", 
    recs: [
      "Placette Marseille", 
      "Emki Pop", 
      "Le bistro du Panier"
    ] ,
    photos: [
      "/Postcards/Marseille/image1.JPG",
        "/Postcards/Marseille/image2.JPG",
        "/Postcards/Marseille/image3.JPG",
        "/Postcards/Marseille/image4.JPG",
        "/Postcards/Marseille/image5.JPG",
        "/Postcards/Marseille/image6.JPG",
        "/Postcards/Marseille/image7.JPG",
        "/Postcards/Marseille/image8.JPG",
        "/Postcards/Marseille/image9.JPG",
        "/Postcards/Marseille/image10.JPG",
        "/Postcards/Marseille/image11.JPG",
        "/Postcards/Marseille/image13.JPG",
        "/Postcards/Marseille/image14.JPG",
        "/Postcards/Marseille/image15.JPG",
        "/Postcards/Marseille/image16.JPG",
        "/Postcards/Marseille/image17.JPG",
        "/Postcards/Marseille/image18.JPG",
        "/Postcards/Marseille/image19.JPG",
        "/Postcards/Marseille/image20.JPG",
        "/Postcards/Marseille/image21.JPG",
        "/Postcards/Marseille/image22.JPG",
        "/Postcards/Marseille/image23.JPG",
        "/Postcards/Marseille/image24.JPG",
        "/Postcards/Marseille/image25.JPG",
        "/Postcards/Marseille/image26.JPG",
        "/Postcards/Marseille/image27.JPG",
        "/Postcards/Marseille/image28.JPG",
        "/Postcards/Marseille/image29.JPG",
        "/Postcards/Marseille/image30.JPG",
        "/Postcards/Marseille/image31.JPG",
        "/Postcards/Marseille/image32.JPG",
        "/Postcards/Marseille/image33.JPEG",
    ]
  },
  { name: "Dublin", 
    src: "/Postcards/DublinPostcard.png", 
    des: "I visited Dublin with some friends from my study abroad dorm, where we explored the city’s history and culture. We visited several cathedrals, walked through the Dublin Castle gardens, and toured Trinity College. We also stopped by Love Lane and the National Gallery of Ireland before trying Guinness and Guinness stew. The trip included plenty of nightlife too, from visiting Fitzsimons Temple Bar to going out for cocktails. Highlights also included a tasting at the Jameson Distillery and a tour of the Guinness Storehouse.", 
    recs: [
      "The Rolling Donut",
      "The Bagel Bar Coffee House",
      "Fitzsimons Temple Bar",
      "Bell Pesto Cafe",
      "Bar 1661"
    ] ,
    photos: [
        "/Postcards/Dublin/image1.JPG",
        "/Postcards/Dublin/image2.JPG",
        "/Postcards/Dublin/image3.JPG",
        "/Postcards/Dublin/image4.JPG",
        "/Postcards/Dublin/image5.JPG",
        "/Postcards/Dublin/image6.JPG",
        "/Postcards/Dublin/image7.JPG",
        "/Postcards/Dublin/image8.JPG",
        "/Postcards/Dublin/image9.JPG",
        "/Postcards/Dublin/image10.JPG",
        "/Postcards/Dublin/image11.JPG",
        "/Postcards/Dublin/image13.JPG",
        "/Postcards/Dublin/image14.JPG",
        "/Postcards/Dublin/image15.JPG",
        "/Postcards/Dublin/image16.JPG",
        "/Postcards/Dublin/image17.JPG",
    ]
  },
  { name: "Brussels", 
    src: "/Postcards/BrusselsPostcard.png", 
    des: " I visited Brussels with three friends, starting at the Grand-Place before touring a Belgian beer museum, which included a free tasting. We stopped at Lloyd Coffee Eatery, explored the Cathédrale Saints-Michel-et-Gudule, and had dinner at Wolf Food Court before ending the night at Delirium Café, where I tried a flight of their beers. The next day, we toured the Atomium, which was fascinating inside, and made sure to try Belgian waffles and fries before picking up some Belgian chocolate to bring home.", 
    recs: [
      "LLoyd Coffee Eatery", 
      "Wolf Food Court", 
      "Delirium", 
      "Peck 47",
      "Belgian Beer Museum",
      "Belgian Chocolate"
    ] ,
    photos: [
      "/Postcards/Brussels/image1.JPG",
        "/Postcards/Brussels/image2.JPG",
        "/Postcards/Brussels/image3.JPG",
        "/Postcards/Brussels/image4.JPG",
        "/Postcards/Brussels/image5.JPG",
        "/Postcards/Brussels/image6.JPG",
        "/Postcards/Brussels/image7.JPG",
        "/Postcards/Brussels/image8.JPG",
        "/Postcards/Brussels/image9.JPG",
        "/Postcards/Brussels/image10.JPG",
        "/Postcards/Brussels/image11.JPG",
        "/Postcards/Brussels/image13.JPG",
        "/Postcards/Brussels/image14.JPG",
        "/Postcards/Brussels/image15.JPG",
        "/Postcards/Brussels/image16.JPG",
        "/Postcards/Brussels/image17.JPG",
        "/Postcards/Brussels/image20.JPG",
        "/Postcards/Brussels/image18.JPG",
        "/Postcards/Brussels/image19.JPG",
    ]
  },
  { name: "Amalfi", 
    src: "/Postcards/AmalfiPostcard.png", 
    des: "I stayed in Amalfi, where we enjoyed the coastal charm and used it as a base for day trips. One day we visited Positano, spending time shopping at CB, wandering the streets, and walking along the beach. The following day was a relaxing beach day in Amalfi, where I got sunburned but made up for it with some shopping and lemon gelato served in an actual lemon, followed by a refreshing Hugo spritz. On our last day, we took a trip to Pompeii, which was fascinating to explore and see up close.", 
    recs: [
      "Mediterraneo Positano", 
      "Lemon Soda", 
      "Sunscreen", 
      "Sita Buses"
    ] ,
    photos: [
      "/Postcards/Amalfi/image1.JPG",
        "/Postcards/Amalfi/image2.JPG",
        "/Postcards/Amalfi/image3.JPG",
        "/Postcards/Amalfi/image4.JPG",
        "/Postcards/Amalfi/image5.JPG",
        "/Postcards/Amalfi/image6.JPG",
        "/Postcards/Amalfi/image7.JPG",
        "/Postcards/Amalfi/image8.JPG",
        "/Postcards/Amalfi/image9.JPG",
        "/Postcards/Amalfi/image10.JPG",
        "/Postcards/Amalfi/image11.JPG",
        "/Postcards/Amalfi/image13.JPG",
        "/Postcards/Amalfi/image14.JPG",
        "/Postcards/Amalfi/image15.JPG",
        "/Postcards/Amalfi/image16.JPG",
        "/Postcards/Amalfi/image17.JPG",
        "/Postcards/Amalfi/image18.JPG",
        "/Postcards/Amalfi/image19.JPG",
        "/Postcards/Amalfi/image20.JPG",
        "/Postcards/Amalfi/image21.JPG",
        "/Postcards/Amalfi/image22.JPG",
        "/Postcards/Amalfi/image23.JPG",

    ]
  },
  { name: "Leeds",
     src: "/Postcards/LeedsPostcard.png", 
     des: " Leeds was my home base while studying abroad, and the love I developed for the city and the people I met there is unmatched. I often say I’m homesick for Leeds, even though I only lived there for five months. From my classes at the University and time spent on campus to exploring the surrounding city, pubs, bars, grocery stores, and shops, Leeds offered everything I could have wanted. It was a vibrant city full of culture, and it quickly became a place that felt like home. More Recs: Disco Spoons, Viaduct Showbar, Leeds Corn Exchange, House of Fu, Fruity, Buzz Club Tattoo Studio, Bill’s, Leon & Queen Nails ", 
     recs: [
       "Terrace", 
       "Dukes Donuts & Coffee", 
       "Hyde Park Book Club", 
       "Belgrave Music Hall & Canteen", 
       "Hyde Park", 
       "Ellerslie"
     ] ,
    photos: [
      "/Postcards/Leeds/image1.JPG",
        "/Postcards/Leeds/image2.JPG",
        "/Postcards/Leeds/image3.JPG",
        "/Postcards/Leeds/image4.JPG",
        "/Postcards/Leeds/image5.JPG",
        "/Postcards/Leeds/image6.JPG",
        "/Postcards/Leeds/image7.JPG",
        "/Postcards/Leeds/image8.JPG",
        "/Postcards/Leeds/image9.JPG",
        "/Postcards/Leeds/image10.JPG",
        "/Postcards/Leeds/image11.JPG",
        "/Postcards/Leeds/image13.JPG",
        "/Postcards/Leeds/image14.jpg",
        "/Postcards/Leeds/image15.JPG",
        "/Postcards/Leeds/image16.JPG",
        "/Postcards/Leeds/image18.JPG",
        "/Postcards/Leeds/image19.JPG",
        "/Postcards/Leeds/image20.JPG",
        "/Postcards/Leeds/image21.JPG",
        "/Postcards/Leeds/image22.JPG",
        "/Postcards/Leeds/image23.JPG",
         "/Postcards/Leeds/image24.JPG",
        "/Postcards/Leeds/image25.JPG",
        "/Postcards/Leeds/image26.JPG",  
        "/Postcards/Leeds/image27.JPG",
        "/Postcards/Leeds/image28.JPG",
         "/Postcards/Leeds/image29.JPG",
        "/Postcards/Leeds/image30.JPG",
        "/Postcards/Leeds/image31.JPG",
        "/Postcards/Leeds/image32.JPG",
        "/Postcards/Leeds/image33.JPG",
        "/Postcards/Leeds/image34.JPG",
        "/Postcards/Leeds/image35.JPG",
        "/Postcards/Leeds/image36.JPG",
        "/Postcards/Leeds/image37.jpg",
        "/Postcards/Leeds/image38.JPG",
        "/Postcards/Leeds/image39.JPG",
        "/Postcards/Leeds/image40.JPG",
        "/Postcards/Leeds/image41.JPG",
        "/Postcards/Leeds/image43.jpg",
        "/Postcards/Leeds/image44.JPG",
        "/Postcards/Leeds/image45.JPG",
        "/Postcards/Leeds/image46.JPG",
        "/Postcards/Leeds/image47.JPG",
    ]
  },
  { name: "Nice", 
    src: "/Postcards/NicePostcard.png", 
    des: "I visited Nice with one friend, and when leaving we took a day trip to Monte Carlo where we spent time wandering around and exploring. While in Nice, we went to Place Masséna, saw the beach, walked through Cours Saleya, and hiked up to Colline du Château to see the waterfalls at Les Cascades de Nice. We ended the day with some delicious gelato while enjoying the city’s vibrant atmosphere.", 
    recs: [
      "Restaurant le Galet", 
      "Fenocchio Glacier"
    ] ,
    photos: ["/Postcards/Nice/image1.JPG",
        "/Postcards/Nice/image2.JPG",
        "/Postcards/Nice/image3.JPG",
        "/Postcards/Nice/image4.JPG",
        "/Postcards/Nice/image5.JPG",
        "/Postcards/Nice/image6.JPG",
        "/Postcards/Nice/image7.JPG",
        "/Postcards/Nice/image8.JPG",
        "/Postcards/Nice/image9.JPG",
        "/Postcards/Nice/image10.JPG",
        "/Postcards/Nice/image11.JPG",
        "/Postcards/Nice/image13.JPG",
        "/Postcards/Nice/image14.JPG",
        "/Postcards/Nice/image15.JPG",
        "/Postcards/Nice/image16.JPG",
        "/Postcards/Nice/image18.JPG",]
  },
  { name: "Genoa", 
    src: "/Postcards/GenoaPostcard.png", 
    des: " I visited Genoa with one friend, and our trip started with wine night. Next day for lunch we had one of the best meals I’ve ever had, a pesto pizza. We explored several cathedrals, tried the city’s famous focaccia, and of course sampled pesto in its birthplace. Highlights included visiting Palazzo Ducale Fondazione per la Cultura, wandering through Piazza De Ferrari, and seeing the childhood home of Christopher Columbus. We also took a day trip to Bogliasco, where we spent time exploring and enjoying the small coastal town’s charm.", 
    recs: [
      "Gran Ristoro", 
      "Calice", 
      "IL Ristoro dei Grimaldi", 
      "Focacceria Genovese", 
      "Pestobene", 
      "Trallallero Trattoria Genovese"
      
    ] ,
    photos: [
        "/Postcards/Genoa/image1.JPG",
        "/Postcards/Genoa/image2.JPG",
        "/Postcards/Genoa/image3.JPG",
        "/Postcards/Genoa/image4.JPG",
        "/Postcards/Genoa/image5.JPG",
        "/Postcards/Genoa/image6.JPG",
        "/Postcards/Genoa/image7.JPG",
        "/Postcards/Genoa/image8.JPG",
        "/Postcards/Genoa/image9.JPG",
        "/Postcards/Genoa/image10.JPG",
        "/Postcards/Genoa/image11.JPG",
        "/Postcards/Genoa/image13.JPG",
        "/Postcards/Genoa/image14.JPG",
        "/Postcards/Genoa/image15.JPG",
        "/Postcards/Genoa/image16.JPG",
        "/Postcards/Genoa/image18.JPG",
        "/Postcards/Genoa/image19.JPG",
    ]
  },
  { name: "Cinque", 
    src: "/Postcards/CinquePostcard.png", 
    des: " I visited Cinque Terre with one friend on a day trip while traveling from Genoa to Florence. We started in Monterosso before making our way to Vernazza, then climbed the many stairs up to Corniglia, where we rewarded ourselves with gelato. From there, we continued on to Manarola and ended the day in Riomaggiore, taking in the colorful villages and stunning coastal views along the way.", 
    recs: [
      "Pippo a Vernazza", 
      "Alberto"
    ] ,
    photos: [
      "/Postcards/Cinque/image1.JPG",
        "/Postcards/Cinque/image2.JPG",
        "/Postcards/Cinque/image3.JPG",
        "/Postcards/Cinque/image4.JPG",
        "/Postcards/Cinque/image5.JPG",
        "/Postcards/Cinque/image6.JPG",
        "/Postcards/Cinque/image7.JPG",
        "/Postcards/Cinque/image8.JPG",
        "/Postcards/Cinque/image9.JPG",
        "/Postcards/Cinque/image10.JPG",
        "/Postcards/Cinque/image11.JPG",
        "/Postcards/Cinque/image13.JPG",
        "/Postcards/Cinque/image14.JPG",
        "/Postcards/Cinque/image15.JPG",
        "/Postcards/Cinque/image16.JPG",
        "/Postcards/Cinque/image18.JPG",
        "/Postcards/Cinque/image19.JPG",
        "/Postcards/Cinque/image20.JPG",
    ]
  },
   { name: "LakeDist", 
    src: "/Postcards/LakeDistPostcard.png", 
    des: "I traveled with my parents through northern England, beginning with a visit to Crawford and the remains of Castle Crawford before heading to Carlisle for lunch and a stop inside Carlisle Cathedral. We stayed at an Airbnb in Underbarrow, in the Lake District, where we explored Lake Windermere and hiked up to Orrest Head for a beautiful view. We also toured Sizergh Castle and its gardens, and enjoyed dinner at The Black Labrador, a cozy pub just a short walk from where we were staying. On the way, we also visited Ilkley Moor, rounding out a trip filled with history, nature, and local charm.", 
    recs: [
      "Sage & Vine", 
      "The Black Labrador",
      "Orrest Head",
      "Underbarrow", 
      "Sizergh Castle"
      
    ] ,
    photos: [
        "/Postcards/LakeDist/image9.JPG",
        "/Postcards/LakeDist/image10.JPG",
        "/Postcards/LakeDist/image11.JPG",
        "/Postcards/LakeDist/image13.JPG",
        "/Postcards/LakeDist/image14.JPG",
        "/Postcards/LakeDist/image15.JPG",
        "/Postcards/LakeDist/image1.JPG",
        "/Postcards/LakeDist/image2.JPG",
        "/Postcards/LakeDist/image3.JPG",
        "/Postcards/LakeDist/image4.JPG",
        "/Postcards/LakeDist/image5.JPG",
        "/Postcards/LakeDist/image6.jpg",
        "/Postcards/LakeDist/image7.JPG",
        "/Postcards/LakeDist/image8.JPG",
        "/Postcards/LakeDist/image16.JPG",
        "/Postcards/LakeDist/image17.JPG",
        "/Postcards/LakeDist/image18.JPG",
        "/Postcards/LakeDist/image19.JPG",
        "/Postcards/LakeDist/image20.JPG",
        "/Postcards/LakeDist/image21.JPG",
        "/Postcards/LakeDist/image22.JPG",
        "/Postcards/LakeDist/image23.JPG",
        "/Postcards/LakeDist/image24.JPG",]
  },
  { name: "York", 
    src: "/Postcards/YorkPostcard.png", 
    des: " I took a day trip to York with my parents, where we explored The Shambles and visited York Minster, which was absolutely stunning inside. We walked along the city walls and browsed the markets, where I picked up a little ghost stuffed animal as a souvenir. Afterward, we headed to The Lion Inn in Blakely Ridge, where we enjoyed a classic Sunday roast and stayed overnight in one of the Inn’s cozy rooms.", 
    recs: [
      "Bettys", 
      "York Minster", 
      "The Lion Inn"
    ] ,
    photos: [
       "/Postcards/York/image1.JPG",
        "/Postcards/York/image2.JPG",
        "/Postcards/York/image3.JPG",
        "/Postcards/York/image4.JPG",
        "/Postcards/York/image5.JPG",
        "/Postcards/York/image6.JPG",
        "/Postcards/York/image7.JPG",
        "/Postcards/York/image8.JPG",
        "/Postcards/York/image9.JPG",
        "/Postcards/York/image10.JPG",
        "/Postcards/York/image11.JPG",
        "/Postcards/York/image13.JPG",
        "/Postcards/York/image14.JPG",
        "/Postcards/York/image15.JPG",
        "/Postcards/York/image16.JPG",
        "/Postcards/York/image18.JPG",
    ]
  },
];


const PostcardModal: React.FC<PostcardModalProps> = ({ postcardName, onClose, style }) => {
  const postcard = postcards.find((p) => p.name === postcardName);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  useEffect(() => {
    if (!postcard?.photos || postcard.photos.length === 0) return;
    if (isPhotoHovered) return;

    const id = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % postcard.photos!.length);
    }, 2500); // change speed here

    return () => clearInterval(id);
  }, [postcard, isPhotoHovered]);




  useEffect(() => {
    if (!postcard) return;

    const img = new window.Image();
    img.src = postcard.src;
    
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setIsLoaded(true);
    };
  }, [postcard]);

  if (!postcard) return null;

  // Calculate maximum size that fits within viewport while maintaining aspect ratio
  const maxViewportWidth = window.innerWidth * 0.9;
  const maxViewportHeight = window.innerHeight * 0.9;

  let displayWidth = dimensions.width;
  let displayHeight = dimensions.height;

  if (dimensions.width > maxViewportWidth || dimensions.height > maxViewportHeight) {
    const widthRatio = maxViewportWidth / dimensions.width;
    const heightRatio = maxViewportHeight / dimensions.height;
    const scale = Math.min(widthRatio, heightRatio);

    displayWidth = dimensions.width * scale;
    displayHeight = dimensions.height * scale;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={style}
    >
      {isLoaded ? (
        <div
          ref={modalRef}  
          className="relative rounded-lg overflow-hidden shadow-lg"
          style={{
            width: `${displayWidth}px`,
            height: `${displayHeight}px`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main postcard image — use width/height to avoid CLS */}
          <Image
            src={postcard.src}
            alt={postcard.des}
            width={displayWidth}
            height={displayHeight}
            className="w-full h-full object-contain"
            priority
          />

          <div className="absolute top-10 left-2 w-1/2 p-10 flex items-end">
            <h2 className="text-2xl font-bold leading-loose"
              style={{ color: "#063274" ,
                fontFamily: "'Kalam', cursive",
              }}>
                
              {postcard.des}
            </h2>
          </div>

          {/* Recs: top-right */}
         <div className="absolute right-4 top-25 left-1/2 translate-x-[10%] max-w-[18%]">
          <ul className="space-y-2 text-left">
            {postcard.recs.map((rec: string, idx: number) => (
              <li
                key={idx}
                className="text-xl font-semibold flex items-center tracking-wide "
                style={{
                  color: "#063274",
                  fontFamily: "'Kalam', cursive",
                  
                }}
              >
                <span className="mr-2 text-xl">💕</span>
                <span>{rec.replace(/^💕\s*/, "")}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom-right photo rotator */}
        {postcard.photos && postcard.photos.length > 0 && (
          <div className="absolute bottom-10 right-33">
            <div
              className="relative w-85 h-95 sm:w-85 sm:h-95 rounded-md overflow-hidden shadow-lg bg-black/10"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              <Image
                  key={photoIndex} // forces a quick fade if you also add a CSS transition
                  src={postcard.photos[photoIndex]}
                  alt={`${postcard.name} photo ${photoIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 340px"
                />
            </div>

          </div>
        )}



          <button
            className="absolute top-6 right-8 text-white text-2xl hover:text-gray-300"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default PostcardModal;
