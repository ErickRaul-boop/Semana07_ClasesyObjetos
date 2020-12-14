class ObjetoGUI{
    constructor(contenedor,canv){
        var division=document.getElementById(contenedor);
        console.log(division);
        this.canvas=document.createElement('canvas');
        this.canvas.width=500;
        this.canvas.height=400;
        this.canvas.id=canv;
        division.appendChild(this.canvas);
        division.innerHTML+="<br><br>";
        
        //Botón del cuadrado
        this.button1=document.createElement('button');
        this.button1.type='button';
        this.button1.innerHTML='Cuadrado';
        //button1.className='btn-styled';
        this.button1.onclick=function(){
            
            dibujante.cuadrado(25,25,200,"mi canvas");
        }
        division.appendChild(this.button1);

        //Botón del Circulo
        this.button2=document.createElement('button');
        this.button2.type='button';
        this.button2.innerHTML='Circulo';
        //button1.className='btn-styled';
        this.button2.onclick=function(){
            
            dibujante.circulo(100,100,75,"mi canvas");
        }
        division.appendChild(this.button2);

        //Botón para limpiar el canvas
        this.button3=document.createElement('button');
        this.button3.type='button';
        this.button3.innerHTML='Limpiar Pantalla';
        //button1.className='btn-styled';
        this.button3.onclick=function(){
            var canvas=document.getElementById(canv);
            var ctx=canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        division.appendChild(this.button3);
    }
}

class ObjetoGeometrico{
    cuadrado(x,y,lado,contenedor){
        var canvas=document.getElementById(contenedor);
        var ctx=canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle="#BAEE09";
        ctx.fillRect(x,y,lado,lado);
    }

    circulo(x,y,radio,contenedor){
        var canvas=document.getElementById(contenedor);
        var ctx=canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#006400";
	    ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.arc(x,y,radio,60,Math.PI*2,true); // Círculo externo
        ctx.fill();
		ctx.stroke();
    }
}

let gui1=new ObjetoGUI("dibujo","mi canvas");
let dibujante=new ObjetoGeometrico();
