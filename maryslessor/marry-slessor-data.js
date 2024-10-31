import * as THREE from "three";

// 10 x=-195.33248301814584, y=6.2323340338521, z=459.59547367084355

//11 back x=-179.7268845286767, y=-147.56542539431678, z=-441.7655559930273

//11 front x=295.7320858600448, y=206.17271162948947, z=345.3259305688753

//12 back x=-459.9131370063641, y=79.67597918828388, z=-177.22485295035932

//12 front x=406.81690280930906, y=-0.1599589365768846, z=290.3264620385428

//13 back x=408.87494012277386, y=-10.646399263227716, z=286.4019162906158

//13 front -455.4,70,-192

//15 fronnt x=-312.0787245562131, y=147.19273441852823, z=-360.98686924136933

//15 back  x=460.92531108756185, y=-89.5369370484225, z=169.12220950041308

//16 back x=-305.7293206185956, y=-157.25489792556485, z=362.17527550411927

//16 front x=-486.27973398047743, y=-54.87557911913446, z=-99.93602216446162

//17 back x=318.5693605322544, y=-168.76118805386764, z=345.58163171098835

export const marySlessor = {
  roundAbout: {
    image: "../Maryslessor/b10.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -195.33248301814584,
          6.2323340338521,
          459.59547367084355
        ),
        label: "On Water",
        image: "../Maryslessor/b10.jpeg",
        targetRoom: "onWater1",
      },
    ],
  },

  onWater1: {
    image: "../Maryslessor/b11.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -179.7268845286767,
          -47.56542539431678,
          -441.7655559930273
        ),
        label: "On Water",
        image: "../Maryslessor/b10.jpeg",
        targetRoom: "roundAbout",
      },
      {
        position: new THREE.Vector3(
          295.7320858600448,
          26.17271162948947,
          345.3259305688753
        ),
        label: "On Water",
        image: "../Maryslessor/b12.jpeg",
        targetRoom: "onWater2",
      },
    ],
  },
  onWater2: {
    image: "../Maryslessor/b12.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -459.9131370063641,
          79.67597918828388,
          -177.22485295035932
        ),
        label: "On Water",
        image: "../Maryslessor/b11.jpeg",
        targetRoom: "onWater1",
      },
      {
        position: new THREE.Vector3(
          406.81690280930906,
          -0.1599589365768846,
          290.3264620385428
        ),
        label: "On Water",
        image: "../Maryslessor/b13.jpeg",
        targetRoom: "onWater3",
      },
    ],
  },
  onWater3: {
    image: "../Maryslessor/b13.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          408.87494012277386,
          -10.646399263227716,
          286.4019162906158
        ),
        label: "on water",
        image: "../Maryslessor/b12.jpeg",
        targetRoom: "onWater2",
      },
      {
        position: new THREE.Vector3(-355.4, 10, -70),
        label: "Residence",
        image: "../Maryslessor/b14.jpeg",
        targetRoom: "residence",
      },
    ],
  },
  residence: {
    image: "../Maryslessor/b14.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -400.03517258935875,
          270.4264031596838,
          -128.3057346136164
        ),
        label: "next",
        image: "../Maryslessor/b15.jpeg",
        targetRoom: "onRoad",
      },
      {
        position: new THREE.Vector3(
          493.85288986300117,
          -31.485594952212242,
          -65.88476658716249
        ),
        label: "back",
        image: "../Maryslessor/b13.jpeg",
        targetRoom: "residence",
      },
    ],
  },
  onRoad: {
    image: "../Maryslessor/b15.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -312.0787245562131,
          147.19273441852823,
          -360.98686924136933
        ),
        label: "Center Shield",
        image: "../Maryslessor/b16.jpeg",
        targetRoom: "inside",
      },
      {
        position: new THREE.Vector3(
          460.92531108756185,
          -89.5369370484225,
          169.12220950041308
        ),
        label: "Back on the road",
        image: "../Maryslessor/b14.jpeg",
        targetRoom: "residence",
      },
    ],
  },
  inside: {
    image: "../Maryslessor/b16.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          -486.27973398047743,
          -54.87557911913446,
          -99.93602216446162
        ),
        label: "Main Room",
        image: "../Maryslessor/b17.jpeg",
        targetRoom: "mainRoom",
      },
      {
        position: new THREE.Vector3(
          -305.7293206185956,
          -157.25489792556485,
          362.17527550411927
        ),
        label: "Center Shield",
        image: "../Maryslessor/b15.jpeg",
        targetRoom: "onRoad",
      },
    ],
  },
  mainRoom: {
    image: "../Maryslessor/b17.jpeg",
    hotspots: [
      {
        position: new THREE.Vector3(
          318.5693605322544,
          -168.76118805386764,
          345.58163171098835
        ),
        label: "Entrance",
        image: "../Maryslessor/b16.jpeg",
        targetRoom: "inside",
      },
    ],
  },
};
