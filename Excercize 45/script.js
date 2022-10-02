// Excercize 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Solution:

const carObj = function (manufacturer, modelName, ...otherFeatures) {
  const [color, ...optionalFeatures] = otherFeatures;

  const obj = {
    car_manufacturer: manufacturer,
    car_modal_name: modelName,
    car_color: color,
    optional_features: optionalFeatures,
  };
  return obj;
};

const manufacturer = "rizwan";
const modelName = "Honda";
const color = "black";
const optional = "nitrous";

console.log(carObj(manufacturer, modelName, color, optional));
