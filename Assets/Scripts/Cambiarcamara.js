#pragma strict

var cam1 : Camera;
 var cam2 : Camera;
var sw=false;
public var objeto: GameObject;
 function Start() {

     cam1.enabled = true;
     cam2.enabled = false;
 }

 function Update() {
    
     cam1.enabled= true;
 	 cam2.enabled= false;
     if (sw==true) {       
         Destroy(objeto);
         cam1.enabled = !cam1.enabled;
         cam2.enabled = !cam2.enabled;
     }

 }
function OnCollisionEnter(objeto : Collision){
	sw=true;

}