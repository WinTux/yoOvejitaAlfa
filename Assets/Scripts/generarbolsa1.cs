using UnityEngine;
using System.Collections;

public class generarbolsa1 : MonoBehaviour {

	public GameObject objeto;
	public GameObject[] vectordeObj;
	void Start () {
		vectordeObj = GameObject.FindGameObjectsWithTag ("obj1");
		for (int i=0; i<7; i++) {
			Vector3 randomSpawn = new Vector3(Random.Range(250, 283), Random.Range(73, 93),Random.Range(-113,-113));
			Instantiate(objeto, randomSpawn,transform.rotation);
			
		}
	}
	
}
