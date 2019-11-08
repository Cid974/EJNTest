let pikachuCalc = (pokemon, candy) => {

  let exp = 0;

  if (pokemon<=0) {
    exp = 0;
  } else {
    if (pokemon>1) {
      while (pokemon>1 && candy<12) {
        candy = candy + 1;
        pokemon = pokemon - 1;
      }
    }
    pokemon =  pokemon - 1;
    candy = candy - 12;
    if (candy >= 0){
      exp = 500 + pikachuCalc(pokemon , candy + 1);
    } else {
      exp = 0;
    }
  }

  return exp;
}
