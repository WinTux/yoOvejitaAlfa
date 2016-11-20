using UnityEngine;
using System.Collections;

public class PlayerCobtroller : MonoBehaviour {

	public Animator animator;
	
	// Update is called once per frame
	void Update()
	{
		
		if (Input.GetMouseButton(0)) {
			animator.SetBool ("caminar", true);

		} else {
			animator.SetBool ("caminar", false);
		}
	}

}
