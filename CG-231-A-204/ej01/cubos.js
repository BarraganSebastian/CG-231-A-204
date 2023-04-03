
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			lado=1
			color=[{color:0xFF0000},{color:0x00FF00},{color:0x0000FF},{color:0xFF00FF}]; //Arreglo que contiene los colores
			geometria=[[lado,lado,lado],[lado,lado,lado],[lado,lado,lado]];  //Arreglo que contiene la geometria de los objetos

			const geo=[]
			mat=[]
			obj=[]
			for(i=0;i<3;i++){
				geo.push(new THREE.BoxGeometry(geometria[i][0],geometria[i][1],geometria[i][2]));  //Creacion del vector que contiene la geometria de objetos
				mat.push(new THREE.MeshPhongMaterial(color[i]));  //Arreglo que contiene los materiales de los objetos
				obj.push(new THREE.Mesh(geo[i], mat[i]));  //Arreglo que crea los objetos con la geometria y materiales establecidos anteriormente
				
				scene.add(obj[i]);
			}
            
            for(i=0;i<3;i++){
                obj[i].translateX(.5)
                obj[i].translateY(.5)
				obj[i].translateZ(.5)
            }
			obj[1].translateY(.75);  //Traslaciones a los objetos 
			obj[2].translateY(1.125);
            obj[1].scale.set(.5,.5,.5);
            obj[2].scale.set(.25,.25,.25)
			
			var spotLight0 = new THREE.SpotLight(0xFFFFFF);  //Creacion de el foco de luz 
			spotLight0.position.set(2, 7, 7);  //Posicion del foco de luz
			spotLight0.lookAt(obj[1]);  //Punto hacia donde apunta el foco de luz
			scene.add(spotLight0);  //Añadir el foco de luz a la escena
			// Luz creada a partir de las indicaciones en "https://programmerclick.com/article/81771039238/"

            
            const size=100;
            const divisions=100;
            const gridHelper = new THREE.GridHelper(size, divisions);
            scene.add(gridHelper);

			camera.position.z = 2;  //Ajuste de la posicion de la cámara
			camera.position.x = 2;
            camera.position.y = 2;
            
            var controls = new THREE.OrbitControls(camera, renderer.domElement);
            

			function animate() {
				requestAnimationFrame( animate );

				obj[0].rotation.x += 0.00;  //Rotacion del primer objeto en X
				obj[1].rotation.y += 0.00;  //Rotacion del segundo objeto en Y
				obj[2].rotation.z +=0.00;  //Rotacion del tercer objeto en Z

				renderer.render( scene, camera );  //Renderizar la escena
			};

			animate();
