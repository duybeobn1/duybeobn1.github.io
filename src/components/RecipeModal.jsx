import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const RecipeModal = ({ isOpen, onClose, recipe }) => {
  const { t } = useTranslation();

  if (!recipe) return null;

  const recipes = {
    pho: {
      title: "Traditional Vietnamese Pho",
      image: "/images/cooking/dish1.jpg",
      prepTime: "30 min",
      cookTime: "12 hours",
      servings: "4-6",
      difficulty: "Advanced",
      ingredients: [
        "2kg beef bones (marrow and knuckle bones)",
        "500g beef brisket",
        "1 onion, charred",
        "100g fresh ginger, charred",
        "6 star anise",
        "4 cloves",
        "1 cinnamon stick",
        "1 tsp fennel seeds",
        "400g fresh rice noodles (bánh phở)",
        "200g rare beef, thinly sliced",
        "Fresh herbs: cilantro, Thai basil, mint",
        "Bean sprouts",
        "Lime wedges",
        "Chili peppers"
      ],
      instructions: [
        "Char the onion and ginger over an open flame until fragrant and slightly blackened.",
        "Toast the spices (star anise, cloves, cinnamon, fennel) in a dry pan for 2-3 minutes.",
        "Place bones in a large pot, cover with cold water, and bring to a boil. Drain and rinse bones.",
        "Return bones to pot with fresh water. Add charred onion and ginger, toasted spices.",
        "Simmer for 10-12 hours, skimming regularly to keep broth clear.",
        "In the last hour, add brisket and cook until tender.",
        "Strain the broth and season with fish sauce, salt, and rock sugar to taste.",
        "Cook noodles according to package instructions and divide among bowls.",
        "Top with sliced rare beef, pour hot broth over to cook the meat.",
        "Serve with fresh herbs, bean sprouts, lime, and chili on the side."
      ],
      philosophy: "Pho is not just a soup, it's a meditation. The 12-hour broth represents patience and dedication - qualities that parallel my approach to coding. Each ingredient has its purpose, just like every line of code."
    },
    croissant: {
      title: "French Croissant",
      image: "/images/cooking/dish2.jpg",
      prepTime: "45 min",
      cookTime: "20 min",
      servings: "12 croissants",
      difficulty: "Expert",
      ingredients: [
        "500g strong bread flour",
        "10g salt",
        "50g caster sugar",
        "10g fresh yeast",
        "300ml lukewarm milk",
        "250g butter (for lamination)",
        "1 egg (for egg wash)"
      ],
      instructions: [
        "Mix flour, salt, sugar, and yeast. Add milk and knead into a smooth dough.",
        "Rest the dough for 1 hour at room temperature, then chill overnight.",
        "Pound butter into a flat rectangle between parchment paper.",
        "Roll out dough and place butter in center. Fold dough over butter (enclose).",
        "Roll out gently and perform first fold (letter fold). Chill 30 minutes.",
        "Repeat rolling and folding process 2 more times with chilling between each.",
        "Roll out to 5mm thickness and cut into triangles.",
        "Roll each triangle from base to tip to form croissant shape.",
        "Proof for 2-3 hours until doubled in size.",
        "Brush with egg wash and bake at 200°C for 15-20 minutes until golden."
      ],
      philosophy: "The lamination technique in croissant-making mirrors the iterative process of software development - layer by layer, fold by fold, building complexity through repetition and patience."
    },
    fusion: {
      title: "East-West Fusion",
      image: "/images/cooking/dish3.jpg",
      prepTime: "20 min",
      cookTime: "25 min",
      servings: "4",
      difficulty: "Intermediate",
      ingredients: [
        "400g duck breast",
        "2 tbsp five-spice powder",
        "200g shiitake mushrooms",
        "100ml rice wine",
        "50ml soy sauce",
        "30ml honey",
        "200g baby bok choy",
        "100g daikon radish",
        "50ml cream",
        "20g butter",
        "Microgreens for garnish"
      ],
      instructions: [
        "Score duck skin and season with five-spice powder. Let rest 15 minutes.",
        "Sear duck breast skin-side down until crispy. Flip and cook to medium-rare.",
        "Rest duck and slice thinly on the bias.",
        "Sauté mushrooms until golden. Deglaze with rice wine.",
        "Add soy sauce and honey, reduce to glaze consistency.",
        "Blanch bok choy until tender-crisp.",
        "Julienne daikon and dress lightly with rice vinegar.",
        "Plate with duck slices, mushroom glaze, and vegetables.",
        "Finish with microgreens and a touch of cream foam."
      ],
      philosophy: "This dish represents my journey between cultures - Vietnamese techniques, French presentation, creating harmony between different worlds, much like integrating different technologies in development."
    }
  };

  const currentRecipe = recipes[recipe] || recipes.pho;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="relative">
                <img
                  src={currentRecipe.image}
                  alt={currentRecipe.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x300/f59e0b/white?text=${encodeURIComponent(currentRecipe.title)}`;
                  }}
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-minimal bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 click-press"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                  <h2 className="text-2xl font-bold">{currentRecipe.title}</h2>
                </div>
              </div>

              <div className="p-6">
                {/* Recipe Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">{t("recipe.prepTime")}</div>
                    <div className="font-semibold">{currentRecipe.prepTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">{t("recipe.cookTime")}</div>
                    <div className="font-semibold">{currentRecipe.cookTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">{t("recipe.servings")}</div>
                    <div className="font-semibold">{currentRecipe.servings}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">{t("recipe.difficulty")}</div>
                    <div className="font-semibold">{currentRecipe.difficulty}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Ingredients */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">🛒</span>
                      {t("recipe.ingredients")}
                    </h3>
                    <ul className="space-y-2">
                      {currentRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span className="text-gray-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">📝</span>
                      {t("recipe.instructions")}
                    </h3>
                    <ol className="space-y-3">
                      {currentRecipe.instructions.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">💭</span>
                    {t("recipe.philosophy")}
                  </h3>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{currentRecipe.philosophy}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecipeModal;