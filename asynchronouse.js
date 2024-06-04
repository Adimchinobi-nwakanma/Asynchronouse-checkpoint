//iterateWithAsync/Awaits function
async function iterateWithAsynchAwit(array) {
  for (const value of array) {
    console.log(value);
    await new Promise((rsolve) => setTimeout(resolve, 1000));
  }
}

//async function awaitsCall

async function awaitsCall() {
  try {
    const response = await fetch("(link unavailable)");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//Handling Erros Async/Awaits
async function awaitsCall() {
  try {
    const response = await fetch("(link unavailable)");
    if (!response.ok) {
      throw new Error("API request failed with status ${response.status}");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: error.message");
  }
}

//Chaining Async/Await

async function func1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("function 1 executed");
      resolve();
    }, 1000)
  );
}

async function func2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("function 2 executed");
      resolve();
    }, 1000)
  );
}

async function func3() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("function 3 executed");
      resolve();
    }, 1000)
  );
}

async function ChainedAsyncFunctions() {
  await func1();
  await func2();
  await func3();
}

ChainedAsyncFunctions();

//Awaiting Concurrent Request using 2 API

async function ConcurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("(link unavailable)"),
      fetch("(link unavailable)"),
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();

    const combinedData = [...data1, ...data2];
    console.log(combinedData);
  } catch (error) {
    console.error("Error making concurrent request:", error);
  }
}
//By using Promise.all(), we  can make concurent request and wait for both response to resolve before loggingg the combined data

//Awaiting Pararell Call

async function Pararellcalls(url) {
  try {
    const request = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(response.map((response) => response.json()));
    console.log(data);
  } catch (error) {
    console.error("Error making parallel calls:", error);
  }
}
Pararellcalls([
  "(link unavailable)",
  "(link unavailable)",
  "(link unavailable)",
]);
