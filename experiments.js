var array = Array(
  "birds_in_forest.png",
  "birds_in_grassland.png",
  "birds_in_wetland.png",
  "birds_with_bowl_nest.png",
  "birds_with_cavity_nest.png",
  "birds_with_ground_nest.png",
  "birds_with_platform_nest.png",
  "eggs_in_bowl_nest.png",
  "eggs_in_cavity_nest.png",
  "eggs_in_ground_nest.png",
  "eggs_in_platform_nest.png",
  "eggs_in_forest.png",
  "eggs_in_grassland.png",
  "eggs_in_wetland.png",
  "sets_of_eggs.png",
  "total_birds.png"
)
var shuffled = array.sort(function(){ return 0.5 - Math.random() });
var selected = shuffled.slice(0,4);
console.log(selected)