
# Pokemon Fallout

A game where players breed and raise mutant pokemon in a post-apocolyptic future.

[Try](https://pokemon-fallout.netlify.com/) it for yourself!

## Contributors

* [Colin Tatro](https://github.com/cstatro)
* [Ian Grubb](https://github.com/iangrubb)

## Tech

* Javascript
* Rails API backend ([repo](https://github.com/cstatro/poke-fallout-backend))

## Gameplay

Each turn, every pokemon the player owns can be assigned an order. A turn ends once every pokemon has been given an order and the player confirms those orders. Results are then calculated and a new turn begins. The player should choose combinations of orders in order to acquire new and stronger pokemon.

### Player Attributes

There are several attributes associated with the player and their pokemon holding facilities:

* Authority: a rating of the player's authority over their pokemon. Authority accumulates each turn based on the loyalty of the player's pokemon.

* Cleanliness: a value between 0 and 100, representing the cleanliness of the player's facilities. Messy facilities decrease pokemon loyalty. Facilities can be cleaned at the cost of authority.

* Food Supply: the player's total amount of food available for feeding their pokemon.

* Max Capacity: the maximum number of pokemon that the player's facility is capable of housing.

### Pokemon Attributes

#### Genetic Information

Each pokemon in the game combines the face of a normal pokemon and the body of a normal pokemon. A pokemon's types and stats are determined by combining the types and states of the normal face and body species.

Unlike typical Pokemon games, in Pokemon Fallout pokemon don't change levels over the course of the game. Instead, a pokemon's level tracks its degree of genetic fitness. Level determines statistics and evolutionary status as normal.

Each pokemon's family history is recorded and plays a role in determining the face and body types of its children. When pokemon successfully breed, the child is most likely to have a face or body inherited from its parents, but it's also possible for the child's face or body to be inherited from any of its ancestors.

#### Gameplay States

There are three changeable states for each pokemon:

* Current HP: a value from 0 to the pokemon's maximum HP. The pokemon dies when its HP reaches 0.

* Hunger: a value from 0 to 100. Players can control how much a pokemon gets fed. A well-fed pokemon comes with advantages, but its usually not possible to feed all of your pokemon as much as they like. A malnourished pokemon loses HP.

* Loyalty: a value from 0 to 100. Loyalty decreases due to facility messiness and as a cost from various activities. Loyal pokemon perform certain tasks more effectively.

### Orders

Pokemon can be ordered to perform one of four tasks per turn:

* Farming: the pokemon collects an amount of food determined by its speed.

* Idle: the pokemon gains a small amount of HP and loyalty.

* Breeding: the pokemon attempts to breed. Breeding is only successful if at least one pokemon of the opposite sex is also attempting to breed. Only one pair of pokemon can breed per turn. If many pokemon are attempting to breed, a random pairing is chosen.

* Exploring: pokemon can explore the world in an attempt to capture new pokemon. The level of the captured pokemon will be roughly the same as the level of the exploring pokemon. The chance of success depends on the exploring pokemon's attack stat. The exploring pokemon may also take damage while exploring. The amount of damage it takes is inversely proportional to its defense stat.
