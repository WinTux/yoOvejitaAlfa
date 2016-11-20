using UnityEngine;
using System.Collections;

public class generarbolsa3 : MonoBehaviour {

	public GameObject[] vectordeObj;
	public GameObject objeto;
	void Start () {
		vectordeObj = GameObject.FindGameObjectsWithTag ("obj3");
		for (int i=0; i<7; i++) {
			Vector3 randomSpawn = new Vector3(Random.Range(250, 275), Random.Range(73, 93),Random.Range(-113,-113));
			Instantiate(objeto, randomSpawn,transform.rotation);
			
		}
	}

}
