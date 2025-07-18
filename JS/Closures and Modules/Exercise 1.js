const StringFormatter = function () {


  const capitalizeFirst = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

  const toSkewerCase = (str) => str.replace(/\s+/g, "-");

    return {
    capitalizeFirst,
    toSkewerCase,
  };
};


const formatter = StringFormatter();

formatter.capitalizeFirst("dorothy"); //should return Dorothy
formatter.toSkewerCase("blue box"); //should return blue-box
// console.log(formatter.capitalizeFirst("dorothy"))
// console.log(formatter.toSkewerCase("blue box"))
