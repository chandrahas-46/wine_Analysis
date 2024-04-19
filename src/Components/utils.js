
function calculateMean(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return (sum / data.length).toFixed(3);;
  }
  
  function calculateMedian(data) {
    const sortedData = data.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid].toFixed(3);;
    }
  }
  
  function calculateMode(data) {
    const counts = {};
    data.forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });
    const mode = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    return parseFloat(mode).toFixed(3);;
  }

export const calculateStatistics = (data, property) => {
    const class1Data = data.filter(item => item.Alcohol === 1).map(item => parseFloat(item[property]));
    const class2Data = data.filter(item => item.Alcohol === 2).map(item => parseFloat(item[property]));
    const class3Data = data.filter(item => item.Alcohol === 3).map(item => parseFloat(item[property]));
  
    return {
      class1Mean: calculateMean(class1Data),
      class2Mean: calculateMean(class2Data),
      class3Mean: calculateMean(class3Data),
      class1Median: calculateMedian(class1Data),
      class2Median: calculateMedian(class2Data),
      class3Median: calculateMedian(class3Data),
      class1Mode: calculateMode(class1Data),
      class2Mode: calculateMode(class2Data),
      class3Mode: calculateMode(class3Data),
    };
  }
  