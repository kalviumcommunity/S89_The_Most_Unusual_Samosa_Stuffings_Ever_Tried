import React from "react";

const samosas = [
  "Chocolate & Chili Samosa",
  "Mango & Mint Samosa",
  "Cheese & Jalapeño Samosa",
  "Apple Pie Samosa",
  "Peanut Butter & Banana Samosa",
  "Spinach & Feta Samosa",
  "Avocado & Black Beans Samosa",
  "Coconut Curry Samosa",
  "Sweet Potato & Marshmallow Samosa",
  "Pineapple & Cashew Samosa",
  "Pumpkin Spice Samosa",
  "Rose & Pistachio Samosa",
  "Beetroot & Goat Cheese Samosa",
  "Caramelized Onion & Fig Samosa",
  "Corn & Paneer Samosa",
  "Quinoa & Kale Samosa",
  "Zucchini & Mushroom Samosa",
  "Cranberry & Brie Samosa",
  "Green Tea & Lemon Samosa",
  "Chickpea & Pomegranate Samosa"
];

function HomePage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-indigo-700">
        🥟 The Great Experiment: Unusual Samosa Stuffings
      </h1>
      <ul className="list-disc list-inside text-gray-800">
        {samosas.map((samosa, index) => (
          <li key={index}>{samosa}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;