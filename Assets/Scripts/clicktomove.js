#pragma strict


var smooth:int; 
private var targetPosition:Vector3;

var sw=false;
public var objeto: GameObject;


function Update () {

if(Input.GetMouseButton(0)) {
    if(sw==true){
      if(GameObject.FindWithTag("obj")){
      objeto= GameObject.FindWithTag("obj");
      Debug.Log("Destruye objeto1");
      Destroy(objeto);
      }
      if(GameObject.FindWithTag("obj1")){
        Debug.Log("Destruye objeto2");
         objeto= GameObject.FindWithTag("obj1");
        Destroy(objeto);
      }
        if(GameObject.FindWithTag("obj2")){
         Debug.Log("Destruye objeto3");
          objeto= GameObject.FindWithTag("obj2");
         Destroy(objeto);
      }
        if(GameObject.FindWithTag("obj3")){
         Debug.Log("Destruye objeto4");
          objeto= GameObject.FindWithTag("obj3");
         Destroy(objeto);
      }
    }
  smooth=1;


       var playerPlane = new Plane(Vector3.up, transform.position);


        var ray = Camera.main.ScreenPointToRay (Input.mousePosition);


       var hitdist = 0.0;





       if (playerPlane.Raycast (ray, hitdist)) {

       var targetPoint = ray.GetPoint(hitdist);


       targetPosition = ray.GetPoint(hitdist);


       var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);


         transform.rotation = targetRotation;

       }

   }


  transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * smooth);  


}
function OnCollisionEnter(objeto : Collision){
	sw=true;

}
