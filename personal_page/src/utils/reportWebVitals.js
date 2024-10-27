const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    try {
      const webVitals = await import('web-vitals');
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;

      // Run all web vitals measurements
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (error) {
      console.error('Error loading web-vitals:', error);
    }
  } else if (onPerfEntry !== undefined) {
    console.warn('reportWebVitals was called with an invalid argument. It should be a function.');
  }
};

export default reportWebVitals;