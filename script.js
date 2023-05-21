function volume_sphere() {
    let radius=document.getElementById("radius").value;
	console.log((4/3)*3.14*radius*radius*radius);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
