import * as THREE from "three";

export const calabar = {
  roundAbout: {
    image: "../Calabar/b1.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          300.9505819315187,
          10.5049960842797,
          -0.79216207915076
        ),
        label: "Event",
        image: "../Calabar/b2.jpeg",
        targetRoom: "event",
      },
    ],
  },
  event: {
    image: "../Calabar/b2.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          304.8223735958101,
          -17.04214459843973,
          200.6693284584064
        ),
        label: "Event Hall",
        image: "../Calabar/b3.jpeg",
        targetRoom: "eventHall",
      },
      {
        position: new THREE.Vector3(
          3.0971866934612904,
          9.70458266180638,
          404.68940068980095
        ),
        label: "Round About",
        image: "../Calabar/b1.jpeg",
        targetRoom: "roundAbout",
      },
    ],
  },
  eventHall: {
    image: "../Calabar/b3.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -14.741117023665126,
          0.48388544052461,
          -226.5360834509621
        ),
        label: "Photo time😊",
        image: "../Calabar/b4.jpeg",
        targetRoom: "photo",
      },
    ],
  },
  photo: {
    image: "../Calabar/b4.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -44.741117023665126,
          28.48388544052461,
          -296.5360834509621
        ),
        label: "Market",
        image: "../Calabar/b5.jpeg",
        targetRoom: "market",
      },
    ],
  },
  market: {
    image: "../Calabar/b5.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          98.40295322475568,
          12.62027129385822,
          -278.82142398676353
        ),
        label: "More market ",
        image: "../Calabar/b6.jpeg",
        targetRoom: "insideMarket",
      },
    ],
  },
  insideMarket: {
    image: "../Calabar/b6.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          301.716105932852,
          13.50522206682736,
          -188.9113332812642
        ),
        label: "Inner Market",
        image: "../Calabar/b7.jpeg",
        targetRoom: "innerMarket",
      },
    ],
  },
  innerMarket: {
    image: "../Calabar/b7.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          466.09467020026557,
          -71.72096967894461,
          164.07254715759962
        ),
        label: "Exit Market",
        image: "../Calabar/b8.jpeg",
        targetRoom: "exitMarket",
      },
    ],
  },
  exitMarket: {
    image: "../Calabar/b8.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          499.4568658671647,
          -11.286990160371225,
          1.9018204831484802
        ),
        label: "Ph",
        image: "../Calabar/b8.jpeg",
        targetRoom: "roadToRounad",
      },
    ],
  },
  roadToRounad: {
    image: "../Calabar/b9.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          152.72314351054197,
          10.20943633684308,
          464.52396795115425
        ),
        label: "Market",
        image: "../Calabar/b8.jpeg",
        targetRoom: "market",
      },
      {
        position: new THREE.Vector3(
          -433.7760669399304,
          10.67661240320798,
          224.25902074383845
        ),
        label: "Round About",
        image: "../Calabar/b1.jpeg",
        targetRoom: "roundAbout",
      },
    ],
  },
};
