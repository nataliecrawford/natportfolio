
import React, { useState, useEffect, useRef } from "react";

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
  
        "/Postcards/Santorini/image4.jpg",
        "/Postcards/Santorini/image5.jpg",
        "/Postcards/Santorini/image6.jpg",
        "/Postcards/Santorini/image7.jpg",
        "/Postcards/Santorini/image8.jpg",
        "/Postcards/Santorini/image9.jpg",
        "/Postcards/Santorini/image10.jpg",
        "/Postcards/Santorini/image11.jpg",
        "/Postcards/Santorini/image13.jpg",
        "/Postcards/Santorini/image14.jpg",
        "/Postcards/Santorini/image15.jpg",
        "/Postcards/Santorini/image16.jpg",
        "/Postcards/Santorini/image17.jpg",
        "/Postcards/Santorini/image18.jpg",
        "/Postcards/Santorini/image19.jpg",
        "/Postcards/Santorini/image1.jpg",
        "/Postcards/Santorini/image2.jpg",
        "/Postcards/Santorini/image3.jpg",
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
        "/Postcards/Morocco/image1.jpg",
        "/Postcards/Morocco/image2.jpg",
        "/Postcards/Morocco/image3.jpg",
        "/Postcards/Morocco/image4.jpg",
        "/Postcards/Morocco/image5.jpg",
        "/Postcards/Morocco/image6.jpg",
        "/Postcards/Morocco/image7.jpg",
        "/Postcards/Morocco/image8.jpg",
        "/Postcards/Morocco/image9.jpg",
        "/Postcards/Morocco/image10.jpg",
        "/Postcards/Morocco/image11.jpg",
        "/Postcards/Morocco/image13.jpg",
        "/Postcards/Morocco/image14.jpg",
        "/Postcards/Morocco/image15.jpg",
        "/Postcards/Morocco/image16.jpg",
        "/Postcards/Morocco/image17.jpg",
        "/Postcards/Morocco/image18.jpg",
        "/Postcards/Morocco/image19.jpg",
        "/Postcards/Morocco/image20.jpg",
        "/Postcards/Morocco/image21.jpg",
        "/Postcards/Morocco/image22.jpg",
        "/Postcards/Morocco/image23.jpg",
        "/Postcards/Morocco/image24.jpg",
        "/Postcards/Morocco/image25.jpg",
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
        "/Postcards/Rome/image1.jpg",
        "/Postcards/Rome/image2.jpg",
        "/Postcards/Rome/image3.jpg",
        "/Postcards/Rome/image4.jpg",
        "/Postcards/Rome/image5.jpg",
        "/Postcards/Rome/image6.jpg",
        "/Postcards/Rome/image7.jpg",
        "/Postcards/Rome/image8.jpg",
        "/Postcards/Rome/image9.jpg",
        "/Postcards/Rome/image10.jpg",
        "/Postcards/Rome/image11.jpg",
        "/Postcards/Rome/image13.jpg",
        "/Postcards/Rome/image14.jpg",
        "/Postcards/Rome/image15.jpg",
        "/Postcards/Rome/image16.jpg",
        "/Postcards/Rome/image17.jpg",
        "/Postcards/Rome/image18.jpg",
        "/Postcards/Rome/image19.jpg",
        "/Postcards/Rome/image20.jpg",
        "/Postcards/Rome/image21.jpg",
        "/Postcards/Rome/image22.jpg",
        "/Postcards/Rome/image23.jpg",
        "/Postcards/Rome/image24.jpg",
        "/Postcards/Rome/image25.jpg",
        "/Postcards/Rome/image26.jpg",
        "/Postcards/Rome/image27.jpg",
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
        "/Postcards/Madrid/image1.jpg",
        "/Postcards/Madrid/image2.jpg",
        "/Postcards/Madrid/image3.jpg",
        "/Postcards/Madrid/image4.jpg",
        "/Postcards/Madrid/image5.jpg",
        "/Postcards/Madrid/image6.jpg",
        "/Postcards/Madrid/image7.jpg",
        "/Postcards/Madrid/image8.jpg",
        "/Postcards/Madrid/image9.jpg",
        "/Postcards/Madrid/image10.jpg",
        "/Postcards/Madrid/image11.jpg",
        "/Postcards/Madrid/image13.jpg",
        "/Postcards/Madrid/image14.jpg",]
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
        "/Postcards/London/image2.jpg",
        "/Postcards/London/image4.jpg",
        "/Postcards/London/image5.jpg",
        "/Postcards/London/image6.jpg",
        "/Postcards/London/image7.jpg",
        "/Postcards/London/image8.jpg",
        "/Postcards/London/image9.jpg",
        "/Postcards/London/image10.jpg",
        "/Postcards/London/image11.jpg",
        "/Postcards/London/image13.jpg",
        "/Postcards/London/image14.jpg",
        "/Postcards/London/image15.jpg",
         "/Postcards/London/image1.jpg",
        "/Postcards/London/image16.jpg",
        "/Postcards/London/image17.jpg",
        "/Postcards/London/image18.jpg",
        "/Postcards/London/image19.jpg",
        "/Postcards/London/image20.jpg",
        "/Postcards/London/image21.jpg",
        "/Postcards/London/image22.jpg",
        "/Postcards/London/image23.jpg",
        "/Postcards/London/image24.jpg",
        "/Postcards/London/image25.jpg",
        "/Postcards/London/image26.jpg",
        "/Postcards/London/image27.jpg",
        "/Postcards/London/image28.jpg",
        "/Postcards/London/image29.jpg",
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
        "/Postcards/Lisbon/image16.jpg",
        "/Postcards/Lisbon/image17.jpg",
        "/Postcards/Lisbon/image18.jpg",
        "/Postcards/Lisbon/image5.jpg",
        "/Postcards/Lisbon/image6.jpg",
        "/Postcards/Lisbon/image7.jpg",
        "/Postcards/Lisbon/image8.jpg",
        "/Postcards/Lisbon/image9.jpg",
        "/Postcards/Lisbon/image10.jpg",
        "/Postcards/Lisbon/image20.jpg",
        "/Postcards/Lisbon/image1.jpg",
        "/Postcards/Lisbon/image2.jpg",
        "/Postcards/Lisbon/image3.jpg",
        "/Postcards/Lisbon/image11.jpg",
        "/Postcards/Lisbon/image14.jpg",
        "/Postcards/Lisbon/image15.jpg",
        "/Postcards/Lisbon/image19.jpg",
        "/Postcards/Lisbon/image21.jpg",
        "/Postcards/Lisbon/image22.jpg",
        "/Postcards/Lisbon/image23.jpg",
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
        "/Postcards/Edinburgh/image1.jpg",
        "/Postcards/Edinburgh/image2.jpg",
        "/Postcards/Edinburgh/image3.jpg",
        "/Postcards/Edinburgh/image4.jpg",
        "/Postcards/Edinburgh/image5.jpg",
        "/Postcards/Edinburgh/image6.jpg",
        "/Postcards/Edinburgh/image7.jpg",
        "/Postcards/Edinburgh/image8.jpg",
        "/Postcards/Edinburgh/image9.jpg",
        "/Postcards/Edinburgh/image10.jpg",
        "/Postcards/Edinburgh/image11.jpg",
        "/Postcards/Edinburgh/image13.jpg",
        "/Postcards/Edinburgh/image14.jpg",
        "/Postcards/Edinburgh/image15.jpg",
        "/Postcards/Edinburgh/image16.jpg",
        "/Postcards/Edinburgh/image17.jpg",
        "/Postcards/Edinburgh/image18.jpg",
        "/Postcards/Edinburgh/image19.jpg",
        "/Postcards/Edinburgh/image20.jpg",
        "/Postcards/Edinburgh/image21.jpg",
        "/Postcards/Edinburgh/image22.jpg",
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
        "/Postcards/Liverpool/image1.jpg",
        "/Postcards/Liverpool/image2.jpg",
        "/Postcards/Liverpool/image3.jpg",
        "/Postcards/Liverpool/image4.jpg",
        "/Postcards/Liverpool/image5.jpg",
        "/Postcards/Liverpool/image6.jpg",
        "/Postcards/Liverpool/image7.jpg",
        "/Postcards/Liverpool/image8.jpg",
        "/Postcards/Liverpool/image9.jpg",]
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
       "/Postcards/Barcelona/image1.jpg",
        "/Postcards/Barcelona/image2.jpg",
        "/Postcards/Barcelona/image3.jpg",
        "/Postcards/Barcelona/image4.jpg",
        "/Postcards/Barcelona/image5.jpg",
        "/Postcards/Barcelona/image6.jpg",
        "/Postcards/Barcelona/image7.jpg",
        "/Postcards/Barcelona/image8.jpg",
        "/Postcards/Barcelona/image9.jpg",
        "/Postcards/Barcelona/image10.jpg",
        "/Postcards/Barcelona/image11.jpg",
        "/Postcards/Barcelona/image13.jpg",
        "/Postcards/Barcelona/image14.jpg",
        "/Postcards/Barcelona/image15.jpg",
        "/Postcards/Barcelona/image16.jpg",
        "/Postcards/Barcelona/image17.jpg",
        "/Postcards/Barcelona/image18.jpg",
        "/Postcards/Barcelona/image19.jpg",
        "/Postcards/Barcelona/image20.jpg",
        "/Postcards/Barcelona/image21.jpg",
        "/Postcards/Barcelona/image22.jpg",
        "/Postcards/Barcelona/image23.jpg",
        "/Postcards/Barcelona/image24.jpg",
        "/Postcards/Barcelona/image25.jpg",
        "/Postcards/Barcelona/image26.jpg",
        "/Postcards/Barcelona/image27.jpg",
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
      "/Postcards/Galway/image1.jpg",
        "/Postcards/Galway/image2.jpg",
        "/Postcards/Galway/image3.jpg",
        "/Postcards/Galway/image4.jpg",
        "/Postcards/Galway/image5.jpg",
        "/Postcards/Galway/image6.jpg",
        "/Postcards/Galway/image7.jpg",
        "/Postcards/Galway/image8.jpg",
        "/Postcards/Galway/image9.jpg",
        "/Postcards/Galway/image10.jpg",
        "/Postcards/Galway/image11.jpg",
        "/Postcards/Galway/image13.jpg",
        "/Postcards/Galway/image14.jpg",
        "/Postcards/Galway/image15.jpg",
        "/Postcards/Galway/image16.jpg",
        "/Postcards/Galway/image17.jpg",
        "/Postcards/Galway/image18.jpg",
        "/Postcards/Galway/image19.jpg",
        "/Postcards/Galway/image20.jpg",
        "/Postcards/Galway/image21.jpg",
        "/Postcards/Galway/image22.jpg",
        "/Postcards/Galway/image23.jpg",
        "/Postcards/Galway/image24.jpg",
        "/Postcards/Galway/image25.jpg",
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
      "/Postcards/Florence/image1.jpg",
        "/Postcards/Florence/image2.jpg",
        "/Postcards/Florence/image3.jpg",
        "/Postcards/Florence/image4.jpg",
        "/Postcards/Florence/image5.jpg",
        "/Postcards/Florence/image6.jpg",
        "/Postcards/Florence/image7.jpg",
        "/Postcards/Florence/image8.jpg",
        "/Postcards/Florence/image9.jpg",
        "/Postcards/Florence/image10.jpg",
        "/Postcards/Florence/image11.jpg",
        "/Postcards/Florence/image13.jpg",
        "/Postcards/Florence/image14.jpg",
        "/Postcards/Florence/image15.jpg",
        "/Postcards/Florence/image16.jpg",
        "/Postcards/Florence/image18.jpg",
        "/Postcards/Florence/image19.jpg",
        "/Postcards/Florence/image20.jpg",
        "/Postcards/Florence/image21.jpg",
        "/Postcards/Florence/image22.jpg",
        "/Postcards/Florence/image23.jpg",
        "/Postcards/Florence/image24.jpg",
        "/Postcards/Florence/image25.jpg",
        "/Postcards/Florence/image26.jpg",
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
      "/Postcards/Marseille/image1.jpg",
        "/Postcards/Marseille/image2.jpg",
        "/Postcards/Marseille/image3.jpg",
        "/Postcards/Marseille/image4.jpg",
        "/Postcards/Marseille/image5.jpg",
        "/Postcards/Marseille/image6.jpg",
        "/Postcards/Marseille/image7.jpg",
        "/Postcards/Marseille/image8.jpg",
        "/Postcards/Marseille/image9.jpg",
        "/Postcards/Marseille/image10.jpg",
        "/Postcards/Marseille/image11.jpg",
        "/Postcards/Marseille/image13.jpg",
        "/Postcards/Marseille/image14.jpg",
        "/Postcards/Marseille/image15.jpg",
        "/Postcards/Marseille/image16.jpg",
        "/Postcards/Marseille/image17.jpg",
        "/Postcards/Marseille/image18.jpg",
        "/Postcards/Marseille/image19.jpg",
        "/Postcards/Marseille/image20.jpg",
        "/Postcards/Marseille/image21.jpg",
        "/Postcards/Marseille/image22.jpg",
        "/Postcards/Marseille/image23.jpg",
        "/Postcards/Marseille/image24.jpg",
        "/Postcards/Marseille/image25.jpg",
        "/Postcards/Marseille/image26.jpg",
        "/Postcards/Marseille/image27.jpg",
        "/Postcards/Marseille/image28.jpg",
        "/Postcards/Marseille/image29.jpg",
        "/Postcards/Marseille/image30.jpg",
        "/Postcards/Marseille/image31.jpg",
        "/Postcards/Marseille/image32.jpg",
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
        "/Postcards/Dublin/image1.jpg",
        "/Postcards/Dublin/image2.jpg",
        "/Postcards/Dublin/image3.jpg",
        "/Postcards/Dublin/image4.jpg",
        "/Postcards/Dublin/image5.jpg",
        "/Postcards/Dublin/image6.jpg",
        "/Postcards/Dublin/image7.jpg",
        "/Postcards/Dublin/image8.jpg",
        "/Postcards/Dublin/image9.jpg",
        "/Postcards/Dublin/image10.jpg",
        "/Postcards/Dublin/image11.jpg",
        "/Postcards/Dublin/image13.jpg",
        "/Postcards/Dublin/image14.jpg",
        "/Postcards/Dublin/image15.jpg",
        "/Postcards/Dublin/image16.jpg",
        "/Postcards/Dublin/image17.jpg",
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
      "/Postcards/Brussels/image1.jpg",
        "/Postcards/Brussels/image2.jpg",
        "/Postcards/Brussels/image3.jpg",
        "/Postcards/Brussels/image4.jpg",
        "/Postcards/Brussels/image5.jpg",
        "/Postcards/Brussels/image6.jpg",
        "/Postcards/Brussels/image7.jpg",
        "/Postcards/Brussels/image8.jpg",
        "/Postcards/Brussels/image9.jpg",
        "/Postcards/Brussels/image10.jpg",
        "/Postcards/Brussels/image11.jpg",
        "/Postcards/Brussels/image13.jpg",
        "/Postcards/Brussels/image14.jpg",
        "/Postcards/Brussels/image15.jpg",
        "/Postcards/Brussels/image16.jpg",
        "/Postcards/Brussels/image17.jpg",
        "/Postcards/Brussels/image20.jpg",
        "/Postcards/Brussels/image18.jpg",
        "/Postcards/Brussels/image19.jpg",
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
      "/Postcards/Amalfi/image1.jpg",
        "/Postcards/Amalfi/image2.jpg",
        "/Postcards/Amalfi/image3.jpg",
        "/Postcards/Amalfi/image4.jpg",
        "/Postcards/Amalfi/image5.jpg",
        "/Postcards/Amalfi/image6.jpg",
        "/Postcards/Amalfi/image7.jpg",
        "/Postcards/Amalfi/image8.jpg",
        "/Postcards/Amalfi/image9.jpg",
        "/Postcards/Amalfi/image10.jpg",
        "/Postcards/Amalfi/image11.jpg",
        "/Postcards/Amalfi/image13.jpg",
        "/Postcards/Amalfi/image14.jpg",
        "/Postcards/Amalfi/image15.jpg",
        "/Postcards/Amalfi/image16.jpg",
        "/Postcards/Amalfi/image17.jpg",
        "/Postcards/Amalfi/image18.jpg",
        "/Postcards/Amalfi/image19.jpg",
        "/Postcards/Amalfi/image20.jpg",
        "/Postcards/Amalfi/image21.jpg",
        "/Postcards/Amalfi/image22.jpg",
        "/Postcards/Amalfi/image23.jpg",

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
      "/Postcards/Leeds/image1.jpg",
        "/Postcards/Leeds/image2.jpg",
        "/Postcards/Leeds/image3.jpg",
        "/Postcards/Leeds/image4.jpg",
        "/Postcards/Leeds/image5.jpg",
        "/Postcards/Leeds/image6.jpg",
        "/Postcards/Leeds/image7.jpg",
        "/Postcards/Leeds/image8.jpg",
        "/Postcards/Leeds/image9.jpg",
        "/Postcards/Leeds/image10.jpg",
        "/Postcards/Leeds/image11.jpg",
        "/Postcards/Leeds/image13.jpg",
        "/Postcards/Leeds/image14.jpg",
        "/Postcards/Leeds/image15.jpg",
        "/Postcards/Leeds/image16.jpg",
        "/Postcards/Leeds/image18.jpg",
        "/Postcards/Leeds/image19.jpg",
        "/Postcards/Leeds/image20.jpg",
        "/Postcards/Leeds/image21.jpg",
        "/Postcards/Leeds/image22.jpg",
        "/Postcards/Leeds/image23.jpg",
         "/Postcards/Leeds/image24.jpg",
        "/Postcards/Leeds/image25.jpg",
        "/Postcards/Leeds/image26.jpg",  
        "/Postcards/Leeds/image27.jpg",
        "/Postcards/Leeds/image28.jpg",
         "/Postcards/Leeds/image29.jpg",
        "/Postcards/Leeds/image30.jpg",
        "/Postcards/Leeds/image31.jpg",
        "/Postcards/Leeds/image32.jpg",
        "/Postcards/Leeds/image33.jpg",
        "/Postcards/Leeds/image34.jpg",
        "/Postcards/Leeds/image35.jpg",
        "/Postcards/Leeds/image36.jpg",
        "/Postcards/Leeds/image37.jpg",
        "/Postcards/Leeds/image38.jpg",
        "/Postcards/Leeds/image39.jpg",
        "/Postcards/Leeds/image40.jpg",
        "/Postcards/Leeds/image41.jpg",
        "/Postcards/Leeds/image43.jpg",
        "/Postcards/Leeds/image44.jpg",
        "/Postcards/Leeds/image45.jpg",
        "/Postcards/Leeds/image46.jpg",
        "/Postcards/Leeds/image47.jpg",
    ]
  },
  { name: "Nice", 
    src: "/Postcards/NicePostcard.png", 
    des: "I visited Nice with one friend, and when leaving we took a day trip to Monte Carlo where we spent time wandering around and exploring. While in Nice, we went to Place Masséna, saw the beach, walked through Cours Saleya, and hiked up to Colline du Château to see the waterfalls at Les Cascades de Nice. We ended the day with some delicious gelato while enjoying the city’s vibrant atmosphere.", 
    recs: [
      "Restaurant le Galet", 
      "Fenocchio Glacier"
    ] ,
    photos: ["/Postcards/Nice/image1.jpg",
        "/Postcards/Nice/image2.jpg",
        "/Postcards/Nice/image3.jpg",
        "/Postcards/Nice/image4.jpg",
        "/Postcards/Nice/image5.jpg",
        "/Postcards/Nice/image6.jpg",
        "/Postcards/Nice/image7.jpg",
        "/Postcards/Nice/image8.jpg",
        "/Postcards/Nice/image9.jpg",
        "/Postcards/Nice/image10.jpg",
        "/Postcards/Nice/image11.jpg",
        "/Postcards/Nice/image13.jpg",
        "/Postcards/Nice/image14.jpg",
        "/Postcards/Nice/image15.jpg",
        "/Postcards/Nice/image16.jpg",
        "/Postcards/Nice/image18.jpg",]
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
        "/Postcards/Genoa/image1.jpg",
        "/Postcards/Genoa/image2.jpg",
        "/Postcards/Genoa/image3.jpg",
        "/Postcards/Genoa/image4.jpg",
        "/Postcards/Genoa/image5.jpg",
        "/Postcards/Genoa/image6.jpg",
        "/Postcards/Genoa/image7.jpg",
        "/Postcards/Genoa/image8.jpg",
        "/Postcards/Genoa/image9.jpg",
        "/Postcards/Genoa/image10.jpg",
        "/Postcards/Genoa/image11.jpg",
        "/Postcards/Genoa/image13.jpg",
        "/Postcards/Genoa/image14.jpg",
        "/Postcards/Genoa/image15.jpg",
        "/Postcards/Genoa/image16.jpg",
        "/Postcards/Genoa/image18.jpg",
        "/Postcards/Genoa/image19.jpg",
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
      "/Postcards/Cinque/image1.jpg",
        "/Postcards/Cinque/image2.jpg",
        "/Postcards/Cinque/image3.jpg",
        "/Postcards/Cinque/image4.jpg",
        "/Postcards/Cinque/image5.jpg",
        "/Postcards/Cinque/image6.jpg",
        "/Postcards/Cinque/image7.jpg",
        "/Postcards/Cinque/image8.jpg",
        "/Postcards/Cinque/image9.jpg",
        "/Postcards/Cinque/image10.jpg",
        "/Postcards/Cinque/image11.jpg",
        "/Postcards/Cinque/image13.jpg",
        "/Postcards/Cinque/image14.jpg",
        "/Postcards/Cinque/image15.jpg",
        "/Postcards/Cinque/image16.jpg",
        "/Postcards/Cinque/image18.jpg",
        "/Postcards/Cinque/image19.jpg",
        "/Postcards/Cinque/image20.jpg",
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
        "/Postcards/LakeDist/image9.jpg",
        "/Postcards/LakeDist/image10.jpg",
        "/Postcards/LakeDist/image11.jpg",
        "/Postcards/LakeDist/image13.jpg",
        "/Postcards/LakeDist/image14.jpg",
        "/Postcards/LakeDist/image15.jpg",
        "/Postcards/LakeDist/image1.jpg",
        "/Postcards/LakeDist/image2.jpg",
        "/Postcards/LakeDist/image3.jpg",
        "/Postcards/LakeDist/image4.jpg",
        "/Postcards/LakeDist/image5.jpg",
        "/Postcards/LakeDist/image6.jpg",
        "/Postcards/LakeDist/image7.jpg",
        "/Postcards/LakeDist/image8.jpg",
        "/Postcards/LakeDist/image16.jpg",
        "/Postcards/LakeDist/image17.jpg",
        "/Postcards/LakeDist/image18.jpg",
        "/Postcards/LakeDist/image19.jpg",
        "/Postcards/LakeDist/image20.jpg",
        "/Postcards/LakeDist/image21.jpg",
        "/Postcards/LakeDist/image22.jpg",
        "/Postcards/LakeDist/image23.jpg",
        "/Postcards/LakeDist/image24.jpg",]
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
       "/Postcards/York/image1.jpg",
        "/Postcards/York/image2.jpg",
        "/Postcards/York/image3.jpg",
        "/Postcards/York/image4.jpg",
        "/Postcards/York/image5.jpg",
        "/Postcards/York/image6.jpg",
        "/Postcards/York/image7.jpg",
        "/Postcards/York/image8.jpg",
        "/Postcards/York/image9.jpg",
        "/Postcards/York/image10.jpg",
        "/Postcards/York/image11.jpg",
        "/Postcards/York/image13.jpg",
        "/Postcards/York/image14.jpg",
        "/Postcards/York/image15.jpg",
        "/Postcards/York/image16.jpg",
        "/Postcards/York/image18.jpg",
    ]
  },
];


const PostcardModal: React.FC<PostcardModalProps> = ({ postcardName, onClose, style }) => {
  const postcard = postcards.find((p) => p.name === postcardName);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalRect, setModalRect] = useState<DOMRect | null>(null);
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
    if (modalRef.current) {
      setModalRect(modalRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    if (!postcard) return;

    const img = new Image();
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
  const aspectRatio = dimensions.width / dimensions.height;

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
          <img
            src={postcard.src}
            alt={postcard.des}
            className="w-full h-full object-contain"
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
              {/* key forces a quick fade on change */}
              <img
                key={photoIndex}
                src={postcard.photos[photoIndex]}
                alt={`${postcard.name} photo ${photoIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover duration-500"
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
