class Uber {
    constructor(base_fare, cost_per_minute, cost_per_kilometer, booking_fee, surge_pricing, tolls){
        this.base_fare = base_fare;
        this.cost_per_minute = cost_per_minute;
        this.cost_per_kilometer = cost_per_kilometer;
        this.booking_fee = booking_fee;
        this.surge_pricing = surge_pricing;
        this.tolls = tolls;
    }

    calculations(time_in_minutes, distance_in_kilometer){
        var total_fare = this.base_fare 
                        + (this.cost_per_minute * time_in_minutes) 
                        + (this.cost_per_kilometer * distance_in_kilometer) 
                        + this.booking_fee 
                        + this.tolls;
        total_fare = total_fare * this.surge_pricing;
        return `Total fare = Rs.${Math.floor(total_fare)}`;
    }
}

var c = new Uber(50, 2, 12, 15, 1.5, 20);

console.log(c.calculations(30, 10));



// Total fare = Rs.397