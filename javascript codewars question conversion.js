// Complete Fibonacci Series
function fibonacci(n) {
    if (n<1) return [];
    if (n<2) return [0];
    let arr=[0,1];
    for (let i=2;i<n;i++){arr.push(arr[i-2]+arr[i-1])}
    return arr
}


// Human readable duration format
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }