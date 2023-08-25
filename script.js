function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM'; 
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; 
}