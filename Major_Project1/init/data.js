const sampleListings = [
    {
      title: "Biryani",
      description:
        "A popular rice dish from Pakistan, particularly Karachi and Hyderabad.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
      },
      ingredients: [
        "500g basmati rice",
        "1kg chicken or mutton",
        "2 cups yogurt",
        "4 onions (sliced)",
        "3 tomatoes (chopped)",
        "Spices (bay leaves, cardamom, cinnamon, cloves, cumin, coriander powder)",
        "2 tsp ginger-garlic paste",
        "1/2 cup oil",
        "Fresh coriander and mint leaves",
        "Saffron or yellow food coloring (optional)"
      ],
      recipe: [
        "Heat oil in a pan over medium heat.",
        "Add onions and sauté until golden brown.",
        "Add chicken and cook until slightly browned.",
        "Mix in spices, tomatoes, and cook for 10 minutes.",
        "Simmer on low heat until chicken is tender.",
      ],
    },
    {
      title: "Pizza Margherita",
      description:
        "A classic Italian pizza from Naples, Italy.",
      image: {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGl6emElMjBNYXJnaGVyaXRhfGVufDB8fDB8fHww",
      },
      ingredients: [
        "1 pizza dough",
        "1 cup tomato sauce",
        "200g fresh mozzarella",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "Salt to taste"
      ],
      recipe: [
        "Preheat oven to 250°C (480°F).",
        "Roll out the pizza dough and place on a baking tray.",
        "Spread tomato sauce evenly over the dough.",
        "Add mozzarella slices and basil leaves.",
        "Drizzle olive oil on top and bake for 10-12 minutes."
      ]
    },
    {
      title: "Tacos al Pastor",
      description:
        "A flavorful taco dish from Mexico.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1681406994521-82c20814605d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFjb3MlMjBhbCUyMFBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      },
      ingredients: [
        "500g pork shoulder",
        "4 guajillo chilies",
        "3 garlic cloves",
        "1 pineapple (sliced)",
        "Corn tortillas",
        "1 onion (chopped)",
        "Cilantro leaves",
        "Lime wedges"
      ],
      recipe: [
        "Blend chilies, garlic, and pineapple juice to make a marinade.",
        "Marinate pork overnight and cook until tender.",
        "Slice pork thinly and serve on tortillas.",
        "Top with chopped onions, cilantro, and pineapple slices."
      ]
    },
    {
      title: "Miso Soup",
      description:
        "A traditional soup from Japan.",
      image: {
        url: "https://images.unsplash.com/photo-1666599207746-0868c6a556d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWlzbyUyMFNvdXB8ZW58MHx8MHx8fDA%3D",
      },
      ingredients: [
        "4 cups dashi stock",
        "2 tbsp miso paste",
        "100g tofu (cubed)",
        "2 green onions (sliced)",
        "1 sheet seaweed (cut into strips)"
      ],
      recipe: [
        "Heat dashi stock in a pot.",
        "Dissolve miso paste in the hot stock.",
        "Add tofu and seaweed, and simmer for 5 minutes.",
        "Garnish with green onions before serving."
      ]
    },
    {
      title: "Croissant",
      description:
        "A buttery, flaky pastry from France.",
      image: {
        url: "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JvaXNzYW50fGVufDB8fDB8fHww",
      },
      ingredients: [
        "250g flour",
        "150g butter",
        "7g yeast",
        "1/2 cup milk",
        "2 tbsp sugar",
        "1 egg"
      ],
      recipe: [
        "Mix yeast, milk, and sugar. Let it sit for 10 minutes.",
        "Combine with flour to form a dough and chill for 1 hour.",
        "Roll out dough, layer with butter, and fold multiple times.",
        "Shape into crescents and proof for 2 hours.",
        "Bake at 200°C (400°F) for 20 minutes."
      ]
    },
    {
      title: "Pho",
      description:
        "A noodle soup from Vietnam.",
      image: {
        url: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhvfGVufDB8fDB8fHww",
      },
      ingredients: [
        "200g rice noodles",
        "500ml beef broth",
        "100g beef slices",
        "Bean sprouts",
        "Lime wedges",
        "Fresh basil and cilantro",
        "Hoisin sauce and sriracha"
      ],
      recipe: [
        "Cook rice noodles as per package instructions.",
        "Heat beef broth and cook beef slices in it.",
        "Assemble noodles, beef, and toppings in a bowl.",
        "Pour hot broth over and serve with lime wedges."
      ]
    },
    {
      title: "Fesenjan",
      description:
        "A Persian stew made with pomegranate and walnuts from Iran.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1667545932065-59f39c3c4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmVzZW5qYW4lMjBTdGV3fGVufDB8fDB8fHww",
      },
      ingredients: [
        "500g chicken",
        "2 cups ground walnuts",
        "1 cup pomegranate molasses",
        "1 onion (chopped)",
        "2 tbsp sugar",
        "Salt and pepper"
      ],
      recipe: [
        "Cook ground walnuts with water until thickened.",
        "Add onions, pomegranate molasses, and sugar.",
        "Cook chicken and combine with walnut mixture.",
        "Simmer for 1 hour and serve with rice."
      ]
    },
    {
      title: "Karahi Gosht",
      description:
        "A spicy and flavorful dish from Pakistan.",
      image: {
        url: "https://images.unsplash.com/photo-1694579740719-0e601c5d2437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2FyYWhpJTIwR29zaHR8ZW58MHx8MHx8fDA%3D",
      },
      ingredients: [
        "500g mutton or chicken",
        "4 tomatoes (chopped)",
        "2 onions (sliced)",
        "1 tbsp ginger-garlic paste",
        "Spices (coriander powder, cumin, red chili powder, garam masala)",
        "1/2 cup oil"
      ],
      recipe: [
        "Heat oil in a wok and fry onions until golden.",
        "Add ginger-garlic paste and cook meat until tender.",
        "Add tomatoes and spices, and cook until oil separates.",
        "Garnish with fresh coriander before serving."
      ]
    },
    {
      title: "Kimchi",
      description:
        "A traditional fermented dish from Korea.",
      image: {
        url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2ltY2hpfGVufDB8fDB8fHww",
      },
      ingredients: [
        "1 Napa cabbage",
        "1/4 cup salt",
        "1 tbsp ginger (minced)",
        "4 garlic cloves (minced)",
        "2 tbsp Korean chili flakes",
        "1 tsp sugar",
        "2 green onions (sliced)"
      ],
      recipe: [
        "Cut cabbage and soak in salted water for 2 hours.",
        "Mix ginger, garlic, chili flakes, and sugar to form a paste.",
        "Rinse cabbage and coat with the paste.",
        "Pack tightly in a jar and ferment for 1-2 days."
      ]
    },
    {
      title: "Pad Thai",
      description:
        "A famous stir-fried noodle dish from Thailand.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFkJTIwVGhhaXxlbnwwfHwwfHx8MA%3D%3D",
      },
      ingredients: [
        "200g rice noodles",
        "200g shrimp or chicken",
        "2 eggs",
        "1 cup bean sprouts",
        "3 tbsp tamarind paste",
        "2 tbsp fish sauce",
        "1 tbsp sugar",
        "2 garlic cloves (minced)",
        "3 tbsp vegetable oil",
        "Crushed peanuts",
        "Lime wedges",
        "Chopped green onions"
      ],
      recipe: [
        "Soak rice noodles in warm water until softened and set aside.",
        "Heat oil in a pan, sauté garlic, and add shrimp or chicken.",
        "Push to the side, scramble the eggs, then mix with the protein.",
        "Add tamarind paste, fish sauce, and sugar to create the sauce.",
        "Toss in the noodles and stir until fully coated.",
        "Add bean sprouts and green onions, cook for 1-2 minutes.",
        "Garnish with crushed peanuts and serve with lime wedges."
      ]
    },
]

module.exports = { data: sampleListings };