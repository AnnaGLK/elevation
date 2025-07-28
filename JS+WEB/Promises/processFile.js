const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];

function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const promises = files.map(file => processFile(file.name, file.time));

Promise.allSettled(promises)
  .then(results => {
    console.log("\n📋 Processing Summary:");
    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        console.log(`✅ ${files[i].name}:`, result.value);
      } else {
        console.log(`❌ ${files[i].name}:`, result.reason.message);
      }
    });
  });