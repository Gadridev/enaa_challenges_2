// Original data (kept exactly as provided)
let Taxis = [
  { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 },
];

let Requests = [
  { reqId: 1, position: 10, duration: 3, time: 0 },
  { reqId: 2, position: 10, duration: 4, time: 2 },
  { reqId: 3, position: 18, duration: 2, time: 4 },
  { reqId: 4, position: 9, duration: 10, time: 14 },
  { reqId: 5, position: 2, duration: 12, time: 10 },
  { reqId: 6, position: 4, duration: 15, time: 11 },
];

let waitingQueue = [];
let currentTime = 0;
let completedRides = 0;

function distance(pos1, pos2) {
  return Math.abs(pos1 - pos2);
}
function findNearestAvailableTaxi(request) {
  let nearTaxi = null;
  let minDistance = Infinity;
  for (let taxi of Taxis) {
    if (taxi.available) {
      let dis = distance(taxi.position, request.position);
      if (dis < minDistance) {
        minDistance = dis;
        nearTaxi = taxi;
      }
    }
  }
  return { taxi: nearTaxi, distance: minDistance };
}
function assignTaxi(request, minute) {
  const { taxi, distance: d } = findNearestAvailableTaxi(request);
  if (!taxi) {
    console.log(
      `Minute ${minute}: → Request ${request.reqId} at position ${request.position} → all taxis busy → added to queue`
    );
    waitingQueue.push(request);
    return false;
  }
}
function assignToSpecificTaxi(request, minute, taxi) {
  taxi.available = false;
  taxi.timeRemaining = request.duration;
  taxi.destination = request.position;
  taxi.totalRides = (taxi.totalRides ?? 0) + 1;
  console.log(
    `Minute ${minute}: → Request ${request.reqId} at position ${
      request.position
    } → Taxi ${taxi.id} assigned (distance: ${distance(
      taxi.position,
      request.position
    )})`
  );
  return true;
}
function simulate() {
  const lastRequestTime = Requests.length
    ? Math.max(...Requests.map((r) => r.time))
    : 0;
  const hardTime = 1000;

  while (currentTime < hardTime) {
    console.log(`\n⏱️ Minute ${currentTime}`);
    let incomingRequests = Requests.filter((r) => r.time === currentTime);
    console.log("incomingRequests", incomingRequests);
    for (let req of incomingRequests) {
      assignTaxi(req, currentTime);
    }
    for (let taxi of Taxis) {
      if (!taxi.available) {
        taxi.timeRemaining--;
        if (taxi.timeRemaining === 0) {
          taxi.available = true;
          taxi.position = taxi.destination;
          taxi.currentRequest = null;
          console.log(
            `✅ Taxi ${taxi.id} finished a trip and is now free at position ${taxi.position}`
          );
          if (waitingQueue.length > 0) {
            let nextRequest = waitingQueue.shift();
            assignToSpecificTaxi(nextRequest, currentTime, taxi);
          }
        }
      }
    }
    currentTime++;
    if (currentTime > lastRequestTime && waitingQueue.length === 0) {
      console.log("\nAll requests processed. Simulation ended.");
      break;
    }
  }
}
simulate();
console.table(Taxis);