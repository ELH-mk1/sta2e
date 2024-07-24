# Star Trek Adventures 2nd Edition (UNOFFICIAL)
An ***UNOFFICIAL*** implementation of Star Trek Adventures Roleplaying Game (2nd Edition) for Foundry VTT

## Special Thanks
- [Mike Schoen](https://github.com/mkscho63/sta) for the original implementation of STA for Foundry VTT
- [FabulistVtt](https://github.com/FabulistVtt/sta-lcars-ui) for the fancy LCARS CSS module for STA & Foundry VTT
- Modiphius for creating Star Trek Adventures

![A screenshot showing what the STA2E system looks like](https://github.com/ELH-mk1/sta2e/blob/main/STA2E-Foundry.jpg?raw=true)

## FAQ

**How do I install this?**
- [Use this link](https://raw.githubusercontent.com/ELH-mk1/sta2e/master/src/system.json) when inputting the Manifest URL at the bottom of the *Install System* window in Foundry

**Is this System out yet?**
- The STA 2E Core Rulebook PDF is now available to those that have pre-ordered the physical copy. Actual sale of the PDF is projected to begin early August 2024. You can get your own copy by visiting either the [US Store](https://modiphius.us/collections/star-trek-adventures-tabletop-rpg/products/star-trek-adventures-the-roleplaying-game-second-edition-core-rulebook) or the [UK Store](https://modiphius.net/collections/star-trek-adventures/products/star-trek-adventures-the-roleplaying-game-second-edition-core-rulebook)

**How does this system work?**
- If you're familiar with the 1st Edition implementation of STA, then you already know 90% of how to get things to work. If you're not, I encourage you to play around a bit before giving me a poke on Discord. I (*elhmk1*) can be found in the Official Modiphius Discord as well as the Foundry VTT one.

**What's different from Mike Schoen's existing system implementation?**
- Specifically...
  - This system *ONLY* supports STA 2E and is not designed for use in 1E games
  - A different stylesheet based on FabulistVtt's module
  - The Complication Range input has been changed to an easy-to-understand slider
  - And more!
  
**What's changed from the 1st Edition of STA?**
- Specifically...
  - Challenge Dice have been removed from the system completely. There may be some lingering files from the 1st Edition Implementation but they are not used.
  - Determination now turns the first die in the dice pool to a Critical Success (1) rather than adding a whole new die to the dice pool
  - Character Stress is now based on Fitness unless a Talent specifies otherwise. There is also now a Maximum Stress Modifier field for further tweaking
  - There is also now a Maximum Shield Modifier field for tweaking Starship sheets
  - There is now a Dedicated Focus option when rolling
  - Ships no longer track Power. They now have a singular metacurrency known as "Reserve Power" that you either have or you don't
  - Weapons now display the tags selected in their item container when rolling
  - The Momentum/Threat Tracker will stop disappearing off-screen when minimized
  - And much more!

**I have found an issue! How do I report it?**
- Report it here on Github or give me a poke in Discord. Make sure to include as much detail as possible so I can help narrow down what's gone wrong! That said, I might not be able to fix things depending on how involved the error is due to my inexperience in coding.

**Can you include [X] in future releases?**
- I know *just* enough coding to have made all the changes to Mike Schoen's work for this implementation. Chances are you might know more than I do about implementing whatever it is you're after!

**How much does this cost?**
- This is entirely free! That said, if you'd like to support me, consider [becoming a Patreon Supporter](https://www.patreon.com/ELHmk1)!
