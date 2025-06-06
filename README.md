

# 🎲 VrijMiBo Chaos Dice 🎲

Welcome to the **VrijMiBo Chaos Dice**—the only React app on the internet that lets you roll a 13-sided die and rewards you with a *random* absolute banger from the famous “Vrijmibo Chaoslijst.”  
Perfect for your Friday afternoon office party, your lonely code deployment, or literally any time you crave instant escalation.

## How does it work?

1. You hit the big “Roll” button.  
2. Our state-of-the-art, quantum-random (okay, just `Math.random()`) algorithm chooses a number between 1 and the *mysterious length of the playlist*.  
3. A matching SoundCloud track is summoned and blasted through the embedded player.
4. If the mood isn’t chaotic enough, smash the **Extra Party Party** button for an ear-splitting airhorn that will confuse your houseplants, coworkers, or pets.

## Features

- 🎲 13 (or more?) possible fates, one for each track in the chaoslijst.
- 📢 Airhorn button. Because you deserve it.
- 🎶 SoundCloud integration, so you don’t need to leave your browser or open 13 tabs.
- 🖥️ Can be run locally, deployed to GitHub Pages, or yelled through your office speakerphone.

## Usage

```sh
git clone https://github.com/zout/vrijmibo-dice-player.git
cd vrijmibo-dice-player
npm install
npm run dev
```

Then visit [http://localhost:5173](http://localhost:5173) and embrace the chaos.

## Deploying to GitHub Pages

Just run:

```sh
npm run deploy
```

…then visit:  
https://zout.github.io/vrijmibo-dice-player/

## Credits

- **Soundtrack:** [Vrijmibo Chaoslijst](https://soundcloud.com/icypalm/sets/vrijmibo-chaoslijst) on SoundCloud.  
- **Airhorn:** Annoying, on purpose.
- **Developed by:** Someone who really needed Friday to come sooner.

## FAQ

### Q: Why is there an airhorn?
A: Why *isn’t* there an airhorn?

### Q: Why does the dice have 13 sides?
A: Because 6 is for cowards, and 20 is for D&D nerds.

### Q: Can I add more tracks?
A: Absolutely! Edit the `TRACKS` array in `src/App.jsx` and add more chaos to your life.

---

Enjoy your Friday. Or Tuesday. Or whenever you need a bit of VrijMiBo energy.

Party responsibly. Or irresponsibly, we’re not your parents.