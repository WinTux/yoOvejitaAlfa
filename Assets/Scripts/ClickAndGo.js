#pragma strict

var rotationSpeed = 10.0;
 var lerpSpeed = 1.0;
 
 private var speed = new Vector3();
 private var avgSpeed = new Vector3();
 private var targetSpeedX = new Vector3();

 function Update () 
 {
 
     if (Input.GetMouseButton(0)) {
         speed = new Vector3(-Input.GetAxis ("Mouse X"), Input.GetAxis("Mouse Y"), 0);
         avgSpeed = Vector3.Lerp(avgSpeed,speed, 5);
     } else {
             speed = avgSpeed;
             
         
         var i = Time.deltaTime * lerpSpeed;
         speed = Vector3.Lerp( speed, Vector3.zero, i);   
     }
 
     transform.Rotate( Camera.main.transform.up * speed.x * rotationSpeed, Space.World );
     transform.Rotate( Camera.main.transform.right * speed.y * rotationSpeed, Space.World );
 
 }
