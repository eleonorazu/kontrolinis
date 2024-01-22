
let trains = [
    {
        cityStart: "Vilnius",
        cityEnd: "Kaunas",
        departure: "2024-01-23, 12:00",
        duration: "1:20",
    },
    {
        cityStart: "Vilnius",
        cityEnd: "Palanga",
        departure: "2024-01-23, 16:00",
        duration: "4:30",
    },
    {
        cityStart: "Vilnius",
        cityEnd: "Praga",
        departure: "2024-01-24, 09:00",
        duration: "24:35",
    },
    {
        cityStart: "Vilnius",
        cityEnd: "Ukmerge",
        departure: "2024-01-25, 10:00",
        duration: "0:55",
    },
    {
        cityStart: "Vilnius",
        cityEnd: "Jurmala",
        departure: "2024-01-26, 18:00",
        duration: "25:33",
    }];
// find the shortest trip duration and print info about it

// parsing a string argument to be a string and convering durtation to a minutes
function convertToMinutes(duration) {
    const [hours, minutes] = duration.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
}

// min duration values algorithm:
let min = Infinity;
function findShortestTrip(trains) {
    for (let i = 0; i < trains.length; i++) {
        const durationInMinutes = convertToMinutes(trains[i].duration);
        if (durationInMinutes < min) {
            min = durationInMinutes;
            shortestTrip = trains[i];
        }
    }
    console.log(shortestTrip);
}
findShortestTrip(trains);


// max duration values algorithm:
let max = 0;
function findLongestTrip(trains) {
    for (let i = 0; i < trains.length; i++) {
        const durationInMinutes = convertToMinutes(trains[i].duration);

        if (durationInMinutes > max) {
            max = durationInMinutes;
            longestTrip = trains[i];
        }
    }
    console.log(longestTrip);
}
findLongestTrip(trains);


// print trips longer than 24h
function findMoreThan24hTrip(trains) {
    for (let i = 0; i < trains.length; i++) {
        const durationInMinutes = convertToMinutes(trains[i].duration);
        if (durationInMinutes > 1440) { console.log(trains[i]); }
    }
}
findMoreThan24hTrip(trains);



