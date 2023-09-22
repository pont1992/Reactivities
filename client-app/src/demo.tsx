export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: 'Donald',
  numLegs: 2,
  makeSound: (sound:any) => console.log(sound)  
}

const duck2: Duck = {
  name: 'Dewey',
  numLegs: 2,
  makeSound: (sound:any) => console.log(sound)  
}

duck1.makeSound('Quack');

export const ducks = [duck1, duck2];