type CardType = 'water' | 'fire' | 'magic' | 'lightning';

class Card {
  constructor(
    public name: string,
    public type: CardType,
    public cost: number,
    public description: string,
    public hp: number = 0,
    public attack: number = 0
  ) {}

  // Static method to validate card type
  static isValidType(type: string): type is CardType {
    return ['water', 'fire', 'magic', 'lightning'].includes(type);
  }

  // Factory method with validation
  static createCard(
    name: string,
    type: string,
    cost: number,
    description: string,
    hp: number = 0,
    attack: number = 0
  ): Card {
    if (!Card.isValidType(type)) {
      throw new Error(`Invalid card type: ${type}`);
    }
    return new Card(name, type, cost, description, hp, attack);
  }
}

export default Card;
