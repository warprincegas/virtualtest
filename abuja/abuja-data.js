import * as THREE from "three";

export const abuja = {
  mainCompound: {
    image: "../NationalMosque/main-compound.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -495.13188746491153,
          -4.535957545832988,
          -64.56894108278831
        ),
        label: "Entrance",
        image: "../NationalMosque/main-entrance-entry.jpeg",
        targetRoom: "inside",
      },
      {
        position: new THREE.Vector3(
          -238.8515124335615,
          110.15002443946624,
          -424.674706501247
        ),
        label: "Second Entrance",
        image: "../NationalMosque/side-entrance.jpeg",
        targetRoom: "secondEntrance",
      },
    ],
  },
  inside: {
    image: "../NationalMosque/main-entrance-entry.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          492.4342505810791,
          -24.631471239533685,
          76.56088977607529
        ),
        label: "Side Entrance",
        image: "../NationalMosque/side-entrance.jpeg",
        targetRoom: "secondEntrance",
      },
      {
        position: new THREE.Vector3(
          -184.57977768711297,
          90.56676615126901,
          454.7725957652036
        ),
        label: "Main Compoud",
        image: "../NationalMosque/main-compound.jpeg",
        targetRoom: "mainCompound",
      },
    ],
  },
  secondEntrance: {
    image: "../NationalMosque/side-entrance.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -481.55821692837014,
          -27.827030622839413,
          127.78591947359098
        ),
        label: "Inside",
        image: "../NationalMosque/main-entrance-entry.jpeg",
        targetRoom: "inside",
      },
      {
        position: new THREE.Vector3(
          139.7111261097293,
          -197.8904834004286,
          437.0231010960016
        ),
        label: "Main Compound",
        image: "../NationalMosque/main-compound.jpeg",
        targetRoom: "mainCompound",
      },
    ],
  },
};
