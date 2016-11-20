using UnityEngine;
using System.Collections;

public class generar : MonoBehaviour {

	public GameObject objeto;
	public GameObject[] vectordeObj;

	public void Start(){
		vectordeObj = GameObject.FindGameObjectsWithTag ("obj");
			for (int i=0; i<7; i++) {
			Vector3 randomSpawn = new Vector3(Random.Range(225, 255), Random.Range(73, 93),Random.Range(-113,-113));
				Instantiate(objeto, randomSpawn,transform.rotation);

	       }
		   
}
}