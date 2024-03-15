// let ozSheet = []
// let uzSheet = []
// let ruSheet = []
// fetch('https://opensheet.elk.sh/1Xz89_Vhw-mSz4OLEoQneW5I4i7VkSWT_ivfg7gMO0Yc/1')
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((item, index) => {
//       try {
//         let a = item
//       } catch (e) {
//         console.log(item)
//       }
//       let oz = {}
//       let uz = {}
//       let ru = {}
//       oz[item.key] = item.oz ? item.oz : item.key
//       uz[item.key] = item.uz ? item.uz : item.key
//       ru[item.key] = item.ru ? item.ru : item.key
  
//       ozSheet.push(oz)
//       ruSheet.push(ru)
//       uzSheet.push(uz)
  
  
//       console.log(777777, oz, ozSheet);
//     })
//   })
// // getTranslates()

//   console.log(8888, ozSheet,  uzSheet,  ruSheet);

// // function getTranslates() {
 
// // }
// // function setTranslates(data) {
 
// // }

// export default { ozSheet, uzSheet, ruSheet };
// 222222
async function fetchData() {
  try {
    const response = await fetch('https://opensheet.elk.sh/1Xz89_Vhw-mSz4OLEoQneW5I4i7VkSWT_ivfg7gMO0Yc/2');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    // Do something with the data
    
    // Export the data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error
  }
}

export { fetchData };

// 3

// let responseData;

// async function fetchData() {
//   try {
//     const response = await fetch('https://opensheet.elk.sh/1Xz89_Vhw-mSz4OLEoQneW5I4i7VkSWT_ivfg7gMO0Yc/1');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     responseData = await response.json();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle the error
//   }
// }

// fetchData()
//   .then((data) => {    
//     responseData  = data
//       // console.log(111, data, ozSheet);
//     })

//     function exportData() {
//       export { responseData };
//     }