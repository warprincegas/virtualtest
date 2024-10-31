import * as THREE from "three";

export const osogboGroove = {
  gate: {
    image: "../Osogbo-Groove/osogbogroove1.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -337.4131740110578,
          -30.94559635385966,
          160.27769632089576
        ),
        label: "Entrance",
        image: "../Osogbo-Groove/groove2.jpeg",
        targetRoom: "inside",
      },
    ],
  },
  inside: {
    image: "../Osogbo-Groove/groove2.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -177.5155325193547,
          -60.70415067875748,
          -19.96792807384026
        ),
        label: "Side Entrance",
        image: "../Osogbo-Groove/groove3.jpeg",
        targetRoom: "inner1",
      },
      {
        position: new THREE.Vector3(
          440.28787795795546,
          -20.20445591460146,
          233.97547923407092
        ),
        label: "Gate",
        image: "../Osogbo-Groove/osogbogroove1.jpeg",
        targetRoom: "gate",
      },
    ],
  },
  inner1: {
    image: "../Osogbo-Groove/groove3.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -406.0879366523038,
          -60.59691501316724,
          -283.99730223011017
        ),
        label: "Inside",
        image: "../Osogbo-Groove/groove4.jpeg",
        targetRoom: "inner2",
      },
      {
        position: new THREE.Vector3(
          443.72153271874805,
          1.5638722556851967,
          228.84757487780993
        ),
        label: "inside",
        image: "../Osogbo-Groove/groove2.jpeg",
        targetRoom: "inside",
      },
    ],
  },
  inner2: {
    image: "../Osogbo-Groove/groove4.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          470.4953864062248,
          -18.901824373564672,
          165.5501064720128
        ),
        label: "Inside",
        image: "../Osogbo-Groove/groove5.jpeg",
        targetRoom: "inner1",
      },
      {
        position: new THREE.Vector3(
          -377.5950604138944,
          -86.8391186858007,
          3.99734713232579
        ),
        label: "inside",
        image: "../Osogbo-Groove/groove5.jpeg",
        targetRoom: "inner3",
      },
    ],
  },
  inner3: {
    image: "../Osogbo-Groove/groove5.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -251.0098466075813,
          -57.6811735786249,
          -37.00340748639604
        ),
        label: "Exit",
        image: "../Osogbo-Groove/groove4.jpeg",
        targetRoom: "gate",
      },
    ],
  },
};
