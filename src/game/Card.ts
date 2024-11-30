class Card {
    constructor(
      public name: string,
      public type: 'water' | 'fire' | 'magic' | 'lightning',
      public cost: number,
      public description: string,
      public hp: number = 0,
      public attack: number = 0
    ) {}
  }
  
  export default Card;
  