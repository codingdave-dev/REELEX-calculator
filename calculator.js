function calculate1() {
  // FORM INPUTS
  const req_calculatorUnits = document.getElementById("CalculatorUnits").value;
  const req_productODIn = document.getElementById("ProductODIn").value;
  const req_coilLength = document.getElementById("CoilLength").value;

  // MANDREL SIZE
  let req_mandrelSize = 0;
  if (document.getElementById("MandrelSize4").checked) {
    req_mandrelSize = document.getElementById("MandrelSize4").value;
  }
  if (document.getElementById("MandrelSize6").checked) {
    req_mandrelSize = document.getElementById("MandrelSize6").value;
  }
  if (document.getElementById("MandrelSize8").checked) {
    req_mandrelSize = document.getElementById("MandrelSize8").value;
  }
  if (document.getElementById("MandrelSize10").checked) {
    req_mandrelSize = document.getElementById("MandrelSize10").value;
  }

  // ENDFORM SIZE
  let req_endformSize = 0;
  if (document.getElementById("EndformSize12").checked) {
    req_endformSize = document.getElementById("EndformSize12").value;
  }
  if (document.getElementById("EndformSize18").checked) {
    req_endformSize = document.getElementById("EndformSize18").value;
  }
  if (document.getElementById("EndformSize21").checked) {
    req_endformSize = document.getElementById("EndformSize21").value;
  }

  const req_holeSize = document.getElementById("HoleSize").value;
  const req_traverseStroke = document.getElementById("TraverseStroke").value;

  // AXIOS REQUEST
  axios
      .get(
          // "http://localhost:5001/cablecalculator-44098/us-central1/REELEX_calculator_userInput",
          "https://us-central1-cablecalculator-44098.cloudfunctions.net/REELEX_calculator_userInput",
          {
            params: {
              req_calculatorUnits,
              req_productODIn,
              req_coilLength,
              req_mandrelSize,
              req_endformSize,
              req_holeSize,
              req_traverseStroke,
            },
          }
      )
      .then((res) => {
        const minimumGain = res.data.minimumGain.toFixed(0);
        const maximumGain = res.data.maximumGain.toFixed(0);
        const minimumCoilSize = res.data.minimumCoilSize.toFixed(2)
        const maximumCoilSize = res.data.maximumCoilSize.toFixed(2)

        document.getElementById("MinGain").value = minimumGain;
        document.getElementById("MaxGain").value = maximumGain;
        document.getElementById("MinDia").value = minimumCoilSize;
        document.getElementById("MaxDia").value = maximumCoilSize;

        if (document.getElementById("form2").style.display === 'none' ) {
          document.getElementById("form2").style.display = 'block'
        }

      })
      .catch((err) => console.log(err));
}


function calculate2() {
  // FORM INPUTS
  const req_calculatorUnits = document.getElementById("CalculatorUnits").value;

  const req_productODIn = document.getElementById("ProductODIn").value;
  const req_coilLength = document.getElementById("CoilLength").value;

  const req_lowerRatio = document.getElementById("AverageGain").value;
  const req_upperRatio = document.getElementById("AverageGain").value;





  const req_density = document.getElementById("Density").value;

  const req_holeSize = document.getElementById("HoleSize").value;
  const req_holeTaper = document.getElementById("HoleTaper").value;

  // MANDREL SIZE
  let req_mandrelSize = 0;
  if (document.getElementById("MandrelSize4").checked) {
    req_mandrelSize = document.getElementById("MandrelSize4").value;
  }
  if (document.getElementById("MandrelSize6").checked) {
    req_mandrelSize = document.getElementById("MandrelSize6").value;
  }
  if (document.getElementById("MandrelSize8").checked) {
    req_mandrelSize = document.getElementById("MandrelSize8").value;
  }
  if (document.getElementById("MandrelSize10").checked) {
    req_mandrelSize = document.getElementById("MandrelSize10").value;
  }

  // ENDFORM SIZE
  let req_endformSize = 0;
  if (document.getElementById("EndformSize12").checked) {
    req_endformSize = document.getElementById("EndformSize12").value;
  }
  if (document.getElementById("EndformSize18").checked) {
    req_endformSize = document.getElementById("EndformSize18").value;
  }
  if (document.getElementById("EndformSize21").checked) {
    req_endformSize = document.getElementById("EndformSize21").value;
  }

  const req_traverseStroke = document.getElementById("TraverseStroke").value;

  // AXIOS REQUEST
  axios
    .get(
      // "http://localhost:5001/cablecalculator-44098/us-central1/REELEX_calculator_packageSize",
      "https://us-central1-cablecalculator-44098.cloudfunctions.net/REELEX_calculator_packageSize",
      {
        params: {
          req_calculatorUnits,
          req_productODIn,
          req_coilLength,
          req_lowerRatio,
          req_upperRatio,
          req_density,
          req_holeSize,
          req_holeTaper,
          req_mandrelSize,
          req_endformSize,
          req_traverseStroke,
        },
      }
    )
    .then((res) => {
      const coilLength = res.data.coilLength
      const lowerGain = res.data.lowerRatio
      const upperGain = res.data.upperRatio
      const holeSize = res.data.holeSize
      const density = res.data.density
      const holeTaper = res.data.holeTaper
      const calculatedCoilDiameter = res.data.calculatedCoilDiameter.toFixed(2);
      const height = res.data.height;
      const width = res.data.width;
      const depth = res.data.depth;
      const tubeLength = res.data.tubeLength.toFixed(2);

      document.getElementById("PackageCoilLength").value = coilLength;
      document.getElementById("PackageUpperGain").value = upperGain;
      document.getElementById("PackageLowerGain").value = lowerGain;
      document.getElementById("PackageHoleSize").value = holeSize;
      document.getElementById("PackageDensity").value = density;
      document.getElementById("PackageHoleTaper").value = holeTaper;
      document.getElementById("PackageCoilSize").value = calculatedCoilDiameter;
      document.getElementById("PackageHeight").value = height;
      document.getElementById("PackageWidth").value = width;
      document.getElementById("PackageDepth").value = depth;
      document.getElementById("PackageTubeLength").value = tubeLength;

      if (document.getElementById("packageSize").style.display === 'none' ) {
        document.getElementById("packageSize").style.display = 'block'
      }


    })
    .catch((err) => console.log(err));
}
