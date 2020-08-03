function calculate() {
  // FORM INPUTS
  const req_calculatorUnits = document.getElementById("CalculatorUnits").value;

  const req_productODIn = document.getElementById("ProductODIn").value;
  const req_coilLength = document.getElementById("CoilLength").value;

  const req_lowerRatio = document.getElementById("LowerRatio").value;
  const req_upperRatio = document.getElementById("UpperRatio").value;
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
      "http://localhost:5001/cablecalculator-44098/us-central1/REELEX_calculator",
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
      const minimumGain = res.data.minimumGain;
      const maximumGain = res.data.maximumGain;
      const lowerDiameter = res.data.lowerDiameter.toFixed(2);
      const upperDiameter = res.data.upperDiameter.toFixed(2);
      const lowerCoilLength = res.data.lowerCoilLength.toFixed(1);
      const upperCoilLength = res.data.upperCoilLength.toFixed(1);
      const calculatedCoilDiameter = res.data.calculatedCoilDiameter.toFixed(2);
      const height = res.data.height;
      const length = res.data.length;
      const width = res.data.width;
      const willItFit = res.data.willItFit;

      document.getElementById("MinimumAverageGainSetting").value = minimumGain;
      document.getElementById("MaximumAverageGainSetting").value = maximumGain;
      document.getElementById("CoilSizeAtMinimumGain").value = lowerDiameter;
      document.getElementById("CoilSizeAtMaximumGain").value = upperDiameter;
      document.getElementById("CoilLengthAtMinimum").value = lowerCoilLength;
      document.getElementById("CoilLengthAtMaximum").value = upperCoilLength;
      document.getElementById(
        "CalculatedCoilDiameter"
      ).value = calculatedCoilDiameter;
      document.getElementById("EstimatedPackageHeight").value = height;
      document.getElementById("EstimatedPackageDepth").value = length;
      document.getElementById("EstimatedPackageWidth").value = width;
      document.getElementById("WillItFit").value = willItFit;

      if (willItFit === "YES") {
        document.getElementById("WillItFit").style.backgroundColor = "#93FF51";
      } else if (willItFit === "NO") {
        document.getElementById("WillItFit").style.backgroundColor = "#FF0000";
      }
    })
    .catch((err) => console.log(err));
}
