import Card from './Card';

const deck: Card[] = [
  // Fire Cards
  new Card('Fire Dragon', 'fire', 4, 'Breathes fire to incinerate enemies.', 100, 15),
  new Card('Inferno Golem', 'fire', 3, 'Unleashes a fiery smash.', 90, 12),
  new Card('Blazing Phoenix', 'fire', 5, 'Rises from the ashes with fierce flames.', 110, 20),
  new Card('Molten Elemental', 'fire', 2, 'Burns opponents with searing heat.', 70, 10),
  new Card('Flare Mage', 'fire', 3, 'Casts explosive fire spells.', 80, 15),
  new Card('Pyro Sprite', 'fire', 1, 'Dances with flames to attack quickly.', 50, 8),
  new Card('Scorching Salamander', 'fire', 2, 'Spits fiery venom at enemies.', 60, 10),
  new Card('Lava Titan', 'fire', 4, 'Erupts lava to engulf foes.', 120, 18),
  new Card('Burning Brute', 'fire', 3, 'Crushes with fiery fists.', 100, 12),
  new Card('Hellfire Beast', 'fire', 4, 'Unleashes hellfire upon opponents.', 110, 15),

  // Lightning Cards
  new Card('Lightning Bolt', 'lightning', 2, 'Strikes with electric fury.', 50, 8),
  new Card('Storm Elemental', 'lightning', 3, 'Summons thunderous storms.', 80, 15),
  new Card('Thunder Dragon', 'lightning', 4, 'Roars with crackling lightning.', 110, 20),
  new Card('Spark Sprite', 'lightning', 1, 'Zaps enemies with quick attacks.', 40, 8),
  new Card('Electric Mage', 'lightning', 3, 'Casts shocking spells.', 70, 12),
  new Card('Volt Sentinel', 'lightning', 4, 'Defends with a charge of electricity.', 100, 18),
  new Card('Shock Beast', 'lightning', 2, 'Electrocutes with swift strikes.', 60, 10),
  new Card('Thunderstorm Bringer', 'lightning', 4, 'Calls upon devastating storms.', 120, 20),
  new Card('Flash Hawk', 'lightning', 3, 'Dives with an electric beak.', 80, 15),
  new Card('Charge Drake', 'lightning', 2, 'Strikes rapidly with electric claws.', 70, 12),

  // Magic Cards
  new Card('Magic Wizard', 'magic', 3, 'Casts powerful spells to dominate.', 70, 12),
  new Card('Arcane Golem', 'magic', 4, 'Channels mystical energy.', 100, 18),
  new Card('Lunar Sorcerer', 'magic', 2, 'Harnesses the power of the moon.', 60, 10),
  new Card('Mystic Sprite', 'magic', 1, 'Glows with enchanting energy.', 50, 8),
  new Card('Celestial Sage', 'magic', 5, 'Wields ancient celestial power.', 120, 20),
  new Card('Ethereal Warden', 'magic', 3, 'Shields allies with magic.', 80, 12),
  new Card('Arcane Titan', 'magic', 4, 'Crushes foes with arcane might.', 110, 18),
  new Card('Enchanted Familiar', 'magic', 2, 'Assists with quick magical strikes.', 60, 10),
  new Card('Chrono Mage', 'magic', 3, 'Manipulates time with spells.', 70, 15),
  new Card('Mystical Elemental', 'magic', 2, 'Channels raw magic.', 50, 10),

  // Water Cards
  new Card('Water Elemental', 'water', 3, 'Cleanses foes with a tidal wave.', 80, 10),
  new Card('Ice Spirit', 'water', 2, 'Freezes enemies in their tracks.', 60, 5),
  new Card('Tidal Mage', 'water', 4, 'Controls the sea to attack.', 100, 15),
  new Card('Frost Giant', 'water', 5, 'Smashes with icy power.', 120, 20),
  new Card('Aqua Sprite', 'water', 1, 'Splashes water at enemies.', 50, 8),
  new Card('Glacial Dragon', 'water', 4, 'Unleashes freezing breath.', 110, 18),
  new Card('Sea Leviathan', 'water', 3, 'Emerges with crushing waves.', 90, 15),
  new Card('Oceanic Brute', 'water', 2, 'Overpowers with aquatic might.', 70, 10),
  new Card('Polar Bear', 'water', 2, 'Charges with icy claws.', 70, 12),
  new Card('Rain Caller', 'water', 3, 'Summons healing rains.', 80, 10),
];

export default deck;
