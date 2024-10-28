import * as THREE from "three";

export const olderstChurch = {
  mainCompound: {
    image: "../Oldest-church/oldest.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -298.35884095040524,
          -5.7708172834787135,
          26.988914374822
        ),
        label: "Entrance",
        image: "../Oldest-church/oldest2.jpeg",
        targetRoom: "inside",
      },
    ],
  },
  inside: {
    image: "../Oldest-church/oldest2.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          359.1349664669567,
          -101.06111959260508,
          79.83119181054026
        ),
        label: "Exit",
        image: "../Oldest-church/oldest.jpeg",
        targetRoom: "mainCompound",
      },
    ],
  },
};
