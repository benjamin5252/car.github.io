const canvas = document.getElementById("myCanvas");

canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

const animate = ()=>{
    car.update();

    canvas.height = window.innerHeight; 
    // Change of the vanvas height can lead to the clear of the canvas
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}

animate();


