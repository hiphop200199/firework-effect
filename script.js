window.addEventListener("load",function(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const firework1=new Audio("firework1.mp3"); 
    const firework2 =new Audio("firework2.mp3");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray=[];
    let pos;
    let vx;
    let size;
    let color;
    let dvy;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    window.addEventListener("keydown",function(e){
      if(e.key===" "){
          firework2.play();
          size=Math.floor(Math.random()*15);
          for(let i=0;i<20;i++){
              vx=Math.random()*7-3.5;
              color=`hsl(${Math.floor(Math.random()*255)},100%,65%)`;
              dvy=(Math.random()+6)/100;
              particleArray.push(new FireWorks());
          }
      }else if(e.key==="f"){
          firework1.play();
          size=Math.floor(Math.random()*5);
          for(let i=0;i<5;i++){
              vx=Math.random()*5-2.5;
              color=`hsl(${Math.floor(Math.random()*255)},100%,65%)`;
              dvy=(Math.random()+6)/85;
              particleArray.push(new FireWorks());
          }
      }
    });
class FireWorks{
  constructor(){  
      this.x=pos;
      this.y=canvas.height;
      this.size=size;
      this.color=color;
      this.vy=-10;
      this.vx=vx;
      this.dvy=dvy;
  }
  update(){
      this.y+=this.vy;
      this.vy+=this.dvy;
     if(this.vy>=-2){
      this.x+=this.vx;
      }
     
     } 
 
  draw(){
      context.fillStyle=this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI *2);
      context.fill();
  }
}
   
    
    
    function animate() {
      context.fillStyle='rgba(0,0,0,0.1)';
      context.fillRect(0,0,canvas.width,canvas.height);  
      particleArray.forEach(particle => particle.update());
      particleArray.forEach(particle => particle.draw());
      for(let i=0;i<particleArray.length;i++){
          if(particleArray[i].y>=canvas.height){
              particleArray.splice(i,1);
              i--;
          }
      }  
       pos=Math.random()*(canvas.width-40)+20;
       vx=Math.random()*2-1;
      requestAnimationFrame(animate);
    }
    animate();
});