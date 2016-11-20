#pragma strict
public var objeto: GameObject;

function OnTriggerEnter(other: Collider){
	
		if(other.gameObject.tag == "Player")
		 if(gameObject.FindWithTag("Lago")){
			Application.LoadLevel("Lago");	
           }
}	  
