import * as THREE from "three";

export const obudu = {
  roundAbout: {
    image: "../Obudu1/obudu1.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          4.0431262252499005,
          -135.66952647750782,
          480.6295084734247
        ),
        label: "Obudu Residence main Road",
        image: "../Obudu1/obudu6.jpeg",
        targetRoom: "residenceMainRoad",
      },
    ],
  },
  residenceMainRoad: {
    image: "../Obudu1/obudu6.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          27.924234519377613,
          -70.73948830171445,
          -493.26578077884176
        ),
        label: "Residence",
        image: "../Obudu1/Obudu4.jpeg",
        targetRoom: "residence",
      },
      {
        position: new THREE.Vector3(
          87.66921663399367,
          -48.99134780055282,
          488.9267703507605
        ),
        label: "Obudu Round About",
        image: "../Obudu1/obudu1.jpeg",
        targetRoom: "roundAbout",
      },
    ],
  },
  residence: {
    image: "../Obudu1/Obudu4.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          4.6173953084544195,
          -48.37330076507458,
          -497.1344568472463
        ),
        label: "Obudu Center Main Road",
        image: "../Obudu1/obudu7.jpeg",
        targetRoom: "obuduSheldRoad",
      },
      {
        position: new THREE.Vector3(
          -498.1999579281448,
          12.7497292749258,
          24.78840030449665
        ),
        label: "Residence Main Road",
        image: "../Obudu1/obudu6.jpeg",
        targetRoom: "residenceMainRoad",
      },
    ],
  },
  obuduSheldRoad: {
    image: "../Obudu1/obudu7.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -130.84000259658495,
          -31.190432308453474,
          -480.6032563292831
        ),
        label: "Obudu Sheld",
        image: "../Obudu1/Obudu2.jpeg",
        targetRoom: "obuduSheld",
      },
      {
        position: new THREE.Vector3(
          15.161577440091946,
          -74.2872986801027,
          493.5147316778321
        ),
        label: "Residence",
        image: "../Obudu1/Obudu4.jpeg",
        targetRoom: "residence",
      },
    ],
  },
  obuduSheld: {
    image: "../Obudu1/Obudu2.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -439.6157683081888,
          -235.9297102322647,
          -16.86687019121469
        ),
        label: "Tower",
        image: "../Obudu1/Obudu3.jpeg",
        targetRoom: "tower",
      },
      {
        position: new THREE.Vector3(
          373.07328103679953,
          35.068086971639076,
          330.5254768376493
        ),
        label: "Center Main Road",
        image: "../Obudu1/obudu7.jpeg",
        targetRoom: "obuduSheldRoad",
      },
    ],
  },
  tower: {
    image: "../Obudu1/Obudu3.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          459.51430841307734,
          -112.70489673043286,
          -159.95623382227518
        ),
        label: "Center Shield",
        image: "../Obudu1/Obudu2.jpeg",
        targetRoom: "obuduSheld",
      },
    ],
  },
  // room: {
  //   image: "Obudu1/Obudu4.jpeg",
  //   hotspots: [
  //     {
  //       position: new THREE.Vector3(-150, 30, 200),
  //       label: "Hall",
  //       image: "Obudu1/obudu1.jpeg",
  //       targetRoom: "entrance",
  //     },
  //     {
  //       position: new THREE.Vector3(200, -50, 100),
  //       label: "Room",
  //       image: "Abuja Central Mosgue.jpeg",
  //       targetRoom: "mainHall",
  //     },
  //   ],
  // },
  // Add more rooms here as needed
};
