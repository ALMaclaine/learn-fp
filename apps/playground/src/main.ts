function random(seed: number) {
  const nextSeed = (1839567234 * seed + 972348567) % 8239451023;
  return nextSeed;
}

// function leetCode001() {
//   const random: IO<number> = () => Math.random();
//   console.log(random());
// }

// main();
console.log(random(5));
console.log(random(5));
