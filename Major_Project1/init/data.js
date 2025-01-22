const sampleListings = [
    {
      title: "Biryani",
      description:
        "A popular rice dish from Pakistan, particularly Karachi and Hyderabad.",
      image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: "basmati rice, chicken (or alternative), yogurt, onions, tomatoes, ginger-garlic paste, green chilies, turmeric powder, chili powder, garam masala, saffron (or food coloring), cilantro, mint, bay leaves, cloves, cardamom, salt, oil/ghee.",
      recipe:  "To cook biryani, start by marinating the protein of your choice (chicken, mutton, or paneer) in yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, and salt for at least an hour. Cook basmati rice until it's 70% done, adding whole spices like bay leaves, cloves, and cardamom for flavor. In a large pot, sauté onions until golden brown, add tomatoes, and cook until mushy. Layer the marinated protein over the onion-tomato mixture, then layer the partially cooked rice on top. Sprinkle saffron milk or food coloring, fried onions, and fresh herbs like cilantro and mint between layers. Cover the pot tightly, and cook on low heat (dum) for about 30–40 minutes, allowing the flavors to meld together. Serve hot with raita or a boiled egg for added richness.",
    },
    {
      title: "Pizza Margherita",
      description:
        "A classic Italian pizza from Naples, Italy.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGl6emElMjBNYXJnaGVyaXRhfGVufDB8fDB8fHww",
      ingredients: "flour, water, yeast, salt, olive oil, tomato sauce, fresh mozzarella, fresh basil leaves, chili flakes (optional).",
      recipe: "To prepare Pizza Margherita, begin by making a simple dough with flour, water, yeast, salt, and olive oil, letting it rise until it doubles in size. Preheat your oven to its highest temperature, ideally 475–500°F (250°C). Roll out the dough into a thin circle and transfer it to a baking tray or pizza stone. Spread a thin layer of tomato sauce made from fresh or canned tomatoes, seasoned with salt, olive oil, and basil. Arrange fresh mozzarella slices evenly over the sauce and top with a few fresh basil leaves. Drizzle with olive oil for extra flavor. Bake the pizza for 7–10 minutes or until the crust is golden and the cheese is bubbly. Serve hot with a sprinkle of chili flakes or oregano if desired.",
    },
    {
      title: "Tacos al Pastor",
      description:
        "A flavorful taco dish from Mexico.",
      image: "https://plus.unsplash.com/premium_photo-1681406994521-82c20814605d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFjb3MlMjBhbCUyMFBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: "pork shoulder, achiote paste, guajillo chilies, pineapple juice, garlic, vinegar, oregano, cumin, paprika, salt, corn tortillas, onions, cilantro, pineapple, lime, salsa.",
      recipe: "To make Tacos al Pastor, begin by preparing a marinade with achiote paste, guajillo chilies, pineapple juice, garlic, vinegar, oregano, cumin, paprika, and salt. Thinly slice pork shoulder and marinate it for at least 2 hours or overnight for deeper flavor. Cook the marinated pork on a grill, skillet, or vertical spit until charred and tender. Warm small corn tortillas on a skillet or open flame. Thinly slice the cooked pork and assemble the tacos by placing the meat on the tortillas. Top with diced onions, fresh cilantro, pineapple chunks, and a squeeze of lime. Serve with your favorite salsa for an authentic and vibrant dish.",
    },
    {
      title: "Miso Soup",
      description:
        "A traditional soup from Japan.",
      image: "https://images.unsplash.com/photo-1666599207746-0868c6a556d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWlzbyUyMFNvdXB8ZW58MHx8MHx8fDA%3D",
      ingredients: "miso paste, dashi (kombu, bonito flakes), tofu, wakame seaweed, green onions, water.",
      recipe: "To make miso soup, start by preparing a dashi broth, which is the base of the soup, using kombu (dried kelp) and bonito flakes. Heat water with kombu until just before boiling, then remove the kombu and add bonito flakes. Strain the broth to remove the flakes. In the dashi, add cubed tofu and sliced wakame seaweed. Remove a small amount of broth, mix in miso paste until smooth, and then gently stir it back into the pot, ensuring the soup doesn’t boil as boiling miso diminishes its flavor and nutrients. Garnish with chopped green onions before serving. Enjoy this comforting soup warm.",
    },
    {
      title: "Croissant",
      description:
        "A buttery, flaky pastry from France.",
      image: "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JvaXNzYW50fGVufDB8fDB8fHww",
      ingredients: "flour, sugar, salt, milk, yeast, butter, eggs (for egg wash).",
      recipe: "To make croissants, start by preparing a yeast-based dough with flour, sugar, salt, milk, yeast, and a small amount of butter. Let it rise until doubled in size. Roll out the dough into a rectangle, layer it with cold butter, and fold it into thirds like a letter. Chill the dough, then roll and fold it several times to create thin buttery layers, chilling between each step. Finally, roll the dough out and cut it into triangles. Roll each triangle tightly from the base to the tip to form the classic croissant shape. Let the shaped croissants proof until puffy, brush them with an egg wash, and bake at 375°F (190°C) until golden brown and flaky. Serve warm for the perfect buttery treat.",
    },
    {
      title: "Pho",
      description:
        "A noodle soup from Vietnam.",
      image: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhvfGVufDB8fDB8fHww",
      ingredients: "beef or chicken bones, rice noodles, onion, ginger, star anise, cinnamon, cloves, cardamom, cilantro, Thai basil, bean sprouts, lime, chilies, hoisin sauce, sriracha.",
      recipe: "To make pho, start by preparing a flavorful broth. Simmer beef or chicken bones with charred onions, ginger, star anise, cinnamon, cloves, and cardamom for several hours to extract the rich flavors. Skim off any impurities for a clear broth. Soak rice noodles in warm water, then briefly cook them in boiling water until tender. Assemble the pho by placing cooked noodles in a bowl, adding thinly sliced beef or chicken (or tofu for a vegetarian option), and pouring the hot broth over to cook the meat. Garnish with fresh herbs like cilantro and Thai basil, bean sprouts, lime wedges, and sliced chilies. Serve hot with optional hoisin sauce and sriracha for added flavor.",
    },
    {
      title: "Fesenjan",
      description:
        "A Persian stew made with pomegranate and walnuts from Iran.",
      image: "https://plus.unsplash.com/premium_photo-1667545932065-59f39c3c4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmVzZW5qYW4lMjBTdGV3fGVufDB8fDB8fHww",
      ingredients: "chicken or duck, walnuts, pomegranate molasses, onions, sugar, turmeric, cinnamon, salt, water or broth, basmati rice.",
      recipe: "To make Fesenjan, a rich Persian stew, start by browning chicken pieces or duck in a pot with oil, then set them aside. In the same pot, sauté finely chopped onions until golden. Add ground walnuts and toast them lightly to release their flavor. Pour in water or broth, then stir in pomegranate molasses, a touch of sugar, and spices like turmeric, cinnamon, and salt. Simmer the mixture until it thickens, then return the chicken to the pot, cooking on low heat until the meat is tender and the flavors meld together. Adjust the sweetness and tartness with more sugar or pomegranate molasses, as desired. Serve hot over steamed basmati rice for a delicious and aromatic meal.",
    },
    {
      title: "Karahi Gosht",
      description:
        "A spicy and flavorful dish from Pakistan.",
      image: "https://images.unsplash.com/photo-1694579740719-0e601c5d2437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2FyYWhpJTIwR29zaHR8ZW58MHx8MHx8fDA%3D",
      ingredients: "goat or lamb, garlic, ginger, tomatoes, green chilies, cumin, coriander, turmeric, red chili powder, salt, oil or ghee, cilantro, ginger (julienned).",
      recipe: "To make Karahi Gosht, start by heating oil or ghee in a wok or karahi. Add freshly chopped garlic and ginger, and sauté until aromatic. Add goat or lamb pieces and cook until browned on all sides. Stir in chopped tomatoes, green chilies, and a blend of spices like cumin, coriander, turmeric, red chili powder, and salt. Cook the mixture on medium heat, stirring frequently, until the tomatoes break down and form a thick gravy. Add a splash of water if needed to prevent sticking. Simmer until the meat becomes tender and the oil separates from the gravy. Garnish with fresh cilantro and ginger juliennes before serving. Pair with naan or rice for a hearty and flavorful meal.",
    },
    {
      title: "Kimchi",
      description:
        "A traditional fermented dish from Korea.",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2ltY2hpfGVufDB8fDB8fHww",
      ingredients: "napa cabbage, gochugaru (Korean chili flakes), garlic, ginger, fish sauce (or soy sauce), sugar, salted shrimp (optional), carrots, green onions, daikon radish.",
      recipe: "To make kimchi, begin by cutting napa cabbage into large pieces and salting it generously. Let the cabbage sit for several hours or overnight to draw out excess water. Rinse and drain the cabbage, then set it aside. Prepare a spice paste by blending gochugaru (Korean chili flakes), garlic, ginger, fish sauce (or soy sauce for a vegetarian version), sugar, and salted shrimp (optional) in a food processor to create a thick paste. Add julienned carrots, green onions, and daikon radish to the paste. Mix the paste thoroughly with the cabbage, ensuring each piece is well-coated. Pack the mixture into a jar, pressing it down to release air pockets, and let it ferment at room temperature for 1-5 days, depending on the temperature and desired fermentation level. Once fermented, store the kimchi in the refrigerator to slow down fermentation.",
    },
    {
      title: "Pad Thai",
      description:
        "A famous stir-fried noodle dish from Thailand.",
      image: "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFkJTIwVGhhaXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: "rice noodles, garlic, shallots, dried shrimp (optional), eggs, tamarind paste, fish sauce, sugar, lime juice, tofu or shrimp, peanuts, cilantro, lime, chili flakes.",
      recipe: "To make Pad Thai, start by cooking rice noodles according to package instructions, then set them aside. In a wok or large pan, heat oil over medium-high heat and sauté garlic, shallots, and dried shrimp (optional) until fragrant. Add beaten eggs and scramble them in the pan. Once the eggs are cooked, toss in the cooked noodles and stir-fry them together. Add a sauce made from tamarind paste, fish sauce, sugar, and a splash of lime juice, stirring to coat the noodles evenly. Add in chopped tofu or shrimp, and stir-fry until heated through. Garnish with crushed peanuts, fresh cilantro, lime wedges, and chili flakes for extra flavor. Serve hot for a delicious, tangy, and savory meal.",
    },
]

module.exports = { data: sampleListings };