import * as THREE from "three";
import "./tour.css";
import gsap from "gsap";
import { events } from "./eventsListeners.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let camera,
  scene,
  renderer,
  controls,
  raycaster,
  mouse,
  transitionSphere,
  currentSphere;

export function handleTour(location) {
  const spinner = document.querySelector(".loader");
  const loadingManager = new THREE.LoadingManager();

  loadingManager.onStart = function () {
    spinner.classList.remove("hidden");
  };

  loadingManager.onLoad = function () {
    spinner.classList.add("hidden");
  };

  const container = document.querySelector(".image");
  document.body.appendChild(container);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 0.1);

  renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(window.devicePixelRatio / 2);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  let currentRoom = Object.keys(location)[0] + "";

  function loadRoom(roomName) {
    const roomData = location[roomName];

    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    const textureLoader = new THREE.TextureLoader(loadingManager);

    const newTexture = textureLoader.load(
      roomData.image,
      (newTexture) => {
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
          map: newTexture,
          opacity: 0,
          transparent: true,
        });
        transitionSphere = new THREE.Mesh(geometry, material);
        scene.add(transitionSphere);

        if (currentSphere) {
          gsap.to(currentSphere.material, {
            opacity: 0,
            duration: 1,
            onComplete: () => scene.remove(currentSphere),
          });
        }
        gsap.to(transitionSphere.material, {
          opacity: 1,
          duration: 1,
          onComplete: () => (currentSphere = transitionSphere),
        });

        roomData.hotspots.forEach((hotspot) => {
          createHotspot(
            hotspot.position,
            hotspot.label,
            hotspot.image,
            hotspot.targetRoom
          );
        });
      },

      undefined,
      (error) => {
        console.error(`Failed to load texture: ${error}`);
      }
    );

    newTexture.minFilter = THREE.LinearFilter;
    newTexture.magFilter = THREE.LinearFilter;
  }

  function createHotspot(position, label, imagePath, targetRoom) {
    const textureLoader = new THREE.TextureLoader(loadingManager);

    const texture = textureLoader.load(imagePath, () => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    });

    const sphereGeometry = new THREE.SphereGeometry(20, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const hotspotSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    hotspotSphere.position.copy(position);
    hotspotSphere.userData = { label, targetRoom };
    scene.add(hotspotSphere);
  }

  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.padding = "3px 8px";
  tooltip.style.background = "rgba(0, 0, 0, 0.7)";
  tooltip.style.color = "white";
  tooltip.style.borderRadius = "4px";
  tooltip.style.pointerEvents = "none";
  tooltip.style.display = "none";
  tooltip.style.transform = "translate(-50%, -120%)";
  tooltip.style.whiteSpace = "nowrap";
  document.body.appendChild(tooltip);

  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    let hotspotHovered = false;

    intersects.forEach((intersect) => {
      if (intersect.object.userData && intersect.object.userData.label) {
        hotspotHovered = true;

        tooltip.style.display = "block";
        tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY}px`;
        tooltip.innerHTML = `<strong>${intersect.object.userData.label}</strong>`;

        document.body.style.cursor = "pointer";
      }
    });

    if (!hotspotHovered) {
      tooltip.style.display = "none";
      document.body.style.cursor = "default";
    }
  });

  function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const clickedHotspot = intersects[0].object;
      if (clickedHotspot.userData.label) {
        const targetRoom = clickedHotspot.userData.targetRoom;
        if (targetRoom) {
          currentRoom = targetRoom;
          loadRoom(currentRoom);
        }
      }
    }
  }

  window.addEventListener("click", onMouseClick, false);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
  events(controls, mouse, camera, renderer, raycaster);

  loadRoom(currentRoom);
}
