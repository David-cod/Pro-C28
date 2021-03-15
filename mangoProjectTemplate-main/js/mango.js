class mango{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		//this.r=r
		this.width=width;
		this.height=height;
		this.image=loadImage("images/mango.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, 0,0,this.width,this.height)
		pop()
 }
}