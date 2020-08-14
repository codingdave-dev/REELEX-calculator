function calculate1() {
  // FORM INPUTS
  const req_calculatorUnits = document.getElementById("CalculatorUnits").value;
  const req_productODIn = document.getElementById("ProductODIn").value;
  const req_coilLength = document.getElementById("CoilLength").value;

  // MANDREL SIZE
  let req_mandrelSize = 0;
  if (document.getElementById("MandrelSize1").checked) {
    req_mandrelSize = document.getElementById("MandrelSize1").value;
  }
  if (document.getElementById("MandrelSize2").checked) {
    req_mandrelSize = document.getElementById("MandrelSize2").value;
  }
  if (document.getElementById("MandrelSize3").checked) {
    req_mandrelSize = document.getElementById("MandrelSize3").value;
  }
  if (document.getElementById("MandrelSize4").checked) {
    req_mandrelSize = document.getElementById("MandrelSize4").value;
  }

  // ENDFORM SIZE
  let req_endformSize = 0;
  if (document.getElementById("EndformSize1").checked) {
    req_endformSize = document.getElementById("EndformSize1").value;
  }
  if (document.getElementById("EndformSize2").checked) {
    req_endformSize = document.getElementById("EndformSize2").value;
  }
  if (document.getElementById("EndformSize3").checked) {
    req_endformSize = document.getElementById("EndformSize3").value;
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
      const minimumCoilSize = res.data.minimumCoilSize.toFixed(2);
      const maximumCoilSize = res.data.maximumCoilSize.toFixed(2);

      document.getElementById("MinGain").value = minimumGain;
      document.getElementById("MaxGain").value = maximumGain;
      document.getElementById("MinDia").value = minimumCoilSize;
      document.getElementById("MaxDia").value = maximumCoilSize;

      if (document.getElementById('CalculatorUnits').value === "imperial") {
        document.getElementById("MinDiaLabel").innerHTML = "Coil Size At Minimum Gain (in inches):"
        document.getElementById("MaxDiaLabel").innerHTML = "Coil Size At Maximum Gain (in inches):"
      }
      if (document.getElementById('CalculatorUnits').value === "metric") {
        document.getElementById("MinDiaLabel").innerHTML = "Coil Size At Minimum Gain (in mm):"
        document.getElementById("MaxDiaLabel").innerHTML = "Coil Size At Maximum Gain (in mm):"
      }

      if (document.getElementById("form2").style.display === "none") {
        document.getElementById("form2").style.display = "block";
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
  if (document.getElementById("MandrelSize1").checked) {
    req_mandrelSize = document.getElementById("MandrelSize1").value;
  }
  if (document.getElementById("MandrelSize2").checked) {
    req_mandrelSize = document.getElementById("MandrelSize2").value;
  }
  if (document.getElementById("MandrelSize3").checked) {
    req_mandrelSize = document.getElementById("MandrelSize3").value;
  }
  if (document.getElementById("MandrelSize4").checked) {
    req_mandrelSize = document.getElementById("MandrelSize4").value;
  }

  // ENDFORM SIZE
  let req_endformSize = 0;
  if (document.getElementById("EndformSize1").checked) {
    req_endformSize = document.getElementById("EndformSize1").value;
  }
  if (document.getElementById("EndformSize2").checked) {
    req_endformSize = document.getElementById("EndformSize2").value;
  }
  if (document.getElementById("EndformSize3").checked) {
    req_endformSize = document.getElementById("EndformSize3").value;
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
      const coilLength = res.data.coilLength;
      const lowerGain = res.data.lowerRatio;
      const upperGain = res.data.upperRatio;
      const holeSize = res.data.holeSize;
      const density = res.data.density;
      const holeTaper = res.data.holeTaper;
      const calculatedCoilDiameter = res.data.calculatedCoilDiameter.toFixed(2);
      const height = res.data.height.toFixed(2);
      const width = res.data.width.toFixed(2);
      const depth = res.data.depth.toFixed(2);
      const tubeLength = res.data.tubeLength.toFixed(0);

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

      if (document.getElementById("packageSize").style.display === "none") {
        document.getElementById("packageSize").style.display = "block";
      }
    })
    .catch((err) => console.log(err));
}

function changeUnits() {
  if (document.getElementById('CalculatorUnits').value === "imperial") {
    document.getElementById("ProductDiameterLabel").innerHTML = "Product Diameter (in inches):"
    document.getElementById("CoilLengthLabel").innerHTML = "Coil Length (in feet):"

    // MANDREL
    document.getElementById("MandrelSize1Label").innerHTML = "4 Inches"
    document.getElementById("MandrelSize2Label").innerHTML = "6 Inches"
    document.getElementById("MandrelSize3Label").innerHTML = "8 Inches"
    document.getElementById("MandrelSize4Label").innerHTML = "10 Inches"
    document.getElementById("MandrelSize1").value = 4
    document.getElementById("MandrelSize2").value = 6
    document.getElementById("MandrelSize3").value = 8
    document.getElementById("MandrelSize4").value = 10

    // ENDFORM
    document.getElementById("EndformSize1Label").innerHTML = "12 Inches"
    document.getElementById("EndformSize2Label").innerHTML = "18 Inches"
    document.getElementById("EndformSize3Label").innerHTML = "21 Inches"
    document.getElementById("EndformSize1").value = 12
    document.getElementById("EndformSize2").value = 18
    document.getElementById("EndformSize3").value = 21

    // TRAVERSE STROKE
    document.getElementById("TraverseStrokeLabel").innerHTML = "Traverse Stroke (in inches):"

    // CALCULATED COIL SIZE
    document.getElementById("PackageCoilSizeLabel").innerHTML = "Calculated Coil Size (in inches):"

    // DIMENSIONS
    document.getElementById("PackageHeightLabel").innerHTML = "A - Height (in inches):"
    document.getElementById("PackageWidthLabel").innerHTML = "B - Width (in inches):"
    document.getElementById("PackageDepthLabel").innerHTML = "C - Depth (in inches):"
  }
  if (document.getElementById('CalculatorUnits').value === "metric") {
    document.getElementById("ProductDiameterLabel").innerHTML = "Product Diameter (in mm):"
    document.getElementById("CoilLengthLabel").innerHTML = "Coil Length (in meters):"

    // MANDREL
    document.getElementById("MandrelSize1Label").innerHTML = "102 mm"
    document.getElementById("MandrelSize2Label").innerHTML = "152 mm"
    document.getElementById("MandrelSize3Label").innerHTML = "203 mm"
    document.getElementById("MandrelSize4Label").innerHTML = "254 mm"
    document.getElementById("MandrelSize1").value = 102
    document.getElementById("MandrelSize2").value = 152
    document.getElementById("MandrelSize3").value = 203
    document.getElementById("MandrelSize4").value = 254

    // ENDFORM
    document.getElementById("EndformSize1Label").innerHTML = "305 mm"
    document.getElementById("EndformSize2Label").innerHTML = "457 mm"
    document.getElementById("EndformSize3Label").innerHTML = "533 mm"
    document.getElementById("EndformSize1").value = 305
    document.getElementById("EndformSize2").value = 457
    document.getElementById("EndformSize3").value = 533

    // TRAVERSE STROKE
    document.getElementById("TraverseStrokeLabel").innerHTML = "Traverse Stroke (in mm):"

    // CALCULATED COIL SIZE
    document.getElementById("PackageCoilSizeLabel").innerHTML = "Calculated Coil Size (in mm):"

    // DIMENSIONS
    document.getElementById("PackageHeightLabel").innerHTML = "A - Height (in mm):"
    document.getElementById("PackageWidthLabel").innerHTML = "B - Width (in mm):"
    document.getElementById("PackageDepthLabel").innerHTML = "C - Depth (in mm):"


  }
}