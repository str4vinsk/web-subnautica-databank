import React from "react";
import reaper from '../../images/reaper.jpg';
import cute from '../../images/cute.jpg';
import lifepod2 from '../../images/lifepod2.jpg';
import lifepod3 from '../../images/lifepod3.jpg';
import lifepod6 from '../../images/lifepod6.jpg';
import ghost from '../../images/ghost.jpg';
import peeper from '../../images/peeper.jpg';
import warper from '../../images/warper.jpg';

import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

export const Data = [
  {
    id: 1,
    title: "Fauna Informations",
    icon: "",
    openIcon: <MdArrowDropUp />,
    closeIcon: <MdArrowDropDown />,
    subNav: [
      {
        name: "Reaper Leviathan",
        image: reaper,
        description: `
        Leviathan class species are vast organisms at the top of their respective food chains. This species is a streamlined hunter, with highly developed senses.

        1. Powerful Mandibles:
        This leviathan is capable of locking prey in place with four powerful mandibles and drawing it within reach of its jaws. Simulated pressure exceeds Seamoth crush resistance.
        
        2. Echolocation:
        The deep roar emitted by the reaper at regular intervals is effectively sonar - if you can hear it, the reaper can see you.
        
        3. Profile:
        The scanned specimen measured 55m long. Observed circling its prey and attacking from behind. This creature is almost all muscle. Very little brain. No sense of morality. Just muscle, synapses, and teeth.
        
        Motivational note: Congratulations on getting close enough to scan it and living to see the results!
        
        Assessment: Extreme threat - Avoid in all circumstances`,
      },
      {
        name: "Peeper",
        image: peeper,
        description: `
        A fast prey fish encountered in shallow waters and rich in protein.

        1. Developed, Side-facing Eyes:
        Capable of discerning colors not just in shallows waters but in a variety of lighting conditions. It is also able to close its eyelids, thus preventing light from reflecting off the lenses and rendering the peeper almost invisible to night time predators.

        2. Powerful Fins:
        This species has evolved powerful fins which enable rapid acceleration in still water, and the ability to leap meters into the air to avoid pursuers.

        3. Beak:
        Likely used to break down corals and tough vegetation. An unusually large nasal cavity serves no obvious purpose, and appears to be specially evolved to detect a single, specific enzyme. Nothing encountered on the planet so far produces a matching odor.

        4. Expulsion Tubes:
        The tubes attached to the peeper's torso are connected directly to its stomach and gills, and appear to be designed to expel its contents on demand. Purpose unclear.

        While the peeper is well adapted to survive in shallow waters, a number of its features serve no discernible purpose. It would appear to be just as well suited to survive in deeper waters, and is somewhat more intelligent than the usual small herbivore.

        Assessment: Edible (high calorie count), further research required
        `,
      },
      {
        name: "Cuddle Fish",
        image: cute,
        description: `
        A small, gray-colored herbivore, the cuddlefish displays high levels of intelligence, curiosity and attachment. Strangely this species has not been encountered in the wild, and the scanned specimen had to be artificially hatched within an alien containment unit.

        1. Lifecycle:
        In the absence of wild specimens little can be known for certain about the cuddlefish's lifecycle. It is possible that environmental conditions have changed, forcing the species to the edge of extinction, and leaving its eggs in permanent stasis. It is also possible the cuddlefish has been genetically altered, or even imported to 4546B from another world.
        
        2. Behavior:
        We do know that the cuddlefish is a herbivore which displays highly social behavior in its interspecies interactions. As was observed in earth dolphins before their extinction, this creature seems to understand the concept of other minds, the prime indicator of true sentience, and attempts to communicate with a series of chirps and chirrups.
        
        3. Interaction:
        Evidence suggests the cuddlefish is capable of understanding and following simple commands, in addition to assessing the emotional state of individuals around it and responding in kind.
        
        Assessment: Emotional connection between living creatures is an essential component of psychological health`,
      },
      {
        name: "Warper",
        image: warper,
        description: `
        An aggressive creature with the ability to teleport itself and others in space. No genetic crossover identified with indigenous lifeforms. Demonstrates no recognized defensive behavior.

        1. Head:
        Mechanisms located in the head region provide its warping capability, which it uses to stalk its targets.

        2. Torso:
        Appears to hunt other lifeforms, but no digestive organs have been identified. Internal structure considerably more complex than other known organisms. Unable to distinguish whether organic or artificial in nature.

        Assessment: Further research required
        `,
      },
      {
        name: "Ghost Leviathan",
        image: ghost,
        description: `
        This creature is approaching the size limit for sustainable organic lifeforms, and has been designated leviathan class. Adults of the species have been encountered exclusively around the edges of the volcanic crater which supports life on this part of the planet, and react with extreme aggression on approach.

        1. Hammerhead:
        Cartilaginous extensions of the creature's skull form a hammerhead which protects the ghost leviathan as it performs devastating ramming attacks.

        2. Jaws:
        While fully capable of tearing through the flesh of any creature in range, all evidence indicates that mature ghost leviathans feed on microscopic lifeforms in the waters around the edges of the inhabited zone. Their vicious attacks on interlopers to their domain are not predatory in nature, but territorial. A creature so vast requires a huge expanse of water to satisfy its daily calorie requirements.

        3. Torso:
        Its muscled interior body is surrounded by a translucent outer membrane, suggesting adaptation for deep, low-light environments. When threatened it can tense its entire body before lashing out with incredible speed.

        4. Lifecycle:
        Probable migratory behavior. This specimen was likely born far from the area where it was encountered.

        Assessment: Extreme threat - Avoid the crater edge
        `,
      },
    ],
  },
  {
    id: 2,
    title: "Aurora Lifepods",
    icon: "",
    openIcon: <MdArrowDropUp />,
    closeIcon: <MdArrowDropDown />,
    subNav: [
      {
        name: "Lifepod 2",
        image: lifepod2,
        description: `
        CTO YU: Flotation devices failed!

        *Sound of flooding*

        BERKELEY: We're flooding, evacuate!

        CTO YU: Wait, I can reconfigure the O₂ system to act as a bilge pump!

        BERKELEY: It's working!

        *Crash*

        CTO YU: OK, good news: we're alive, and we've stopped sinking.

        BERKELEY: Bad?

        CTO YU: The O₂'s going to run out in 30 minutes and we're 500 meters down.

        BERKELEY: What do we do?

        CTO YU: We'll have to use the remaining juice to send a distress call and build whatever gear we can, then we find a way to the surface.
                
        `,
      },
      {
        name: "Lifepod 3",
        image: lifepod3,
        description: `
        UNIDENTIFIED CREW 1: You really think it'll carry two of us?

        UNIDENTIFIED CREW 2: Your regular seaglide tows a mass of 80kg at over 30km/h. The power cell I rigged to this one should double that.

        UNIDENTIFIED CREW 1: You think there's something out there faster?

        UNIDENTIFIED CREW 2: Oh, sure. And that's assuming it doesn't overload three meters from the lifepod.

        UNIDENTIFIED CREW 1: You're calm about this.

        UNIDENTIFIED CREW 2: I'm seeing the engineering problem. If I stop seeing the maths I'll be terrified
        `,
      },
      {
        name: "Lifepod 6",
        image: lifepod6,
        description: `
        CREW: Ma'am, I need you to stay calm. We're not in immediate danger.

        PASSENGER: Where are the rescue teams?!

        CREW: The Aurora didn't make it.

        PASSENGER: So where are the rescue teams?!

        CREW: They're dead, ma'am. We have rendezvous coordinates, but the route's irradiated.

        PASSENGER: So what are you going to do?!

        CREW: I'm head of human resources, ma'am. This is not my expertise. But the PDA says if we can find some lead we can make radiation suits.

        PASSENGER: Out there? I am not setting foot outside this lifepod without the proper protection.

        CREW: Don't worry. I'll go.

        Lifepod 6 #2

        CREW: What are you doing?!

        PASSENGER: You were gone so long, I thought you'd drowned.

        CREW: Put the flare down!

        PASSENGER: I was going to try and attract someone's attention.

        CREW: That's not a distress flare! Stop waving it around like that, you'll catch the fuel line!

        *Explosion*

        `,
      },
    ],
  },
];
