// Import Modules
import {
  STAActor
} from './actors/actor.js';
import {
  STACharacterSheet
} from './actors/sheets/character-sheet.js';
import {
  STAStarshipSheet
} from './actors/sheets/starship-sheet.js';
import {
  STASmallCraftSheet
} from './actors/sheets/smallcraft-sheet.js';
import {
  STAExtendedTaskSheet
} from './actors/sheets/extended-task-sheet.js';
import {
  STAItemSheet
} from './items/item-sheet.js';
import {
  STACharacterWeaponSheet
} from './items/character-weapon-sheet.js';
import {
  STAStarshipWeaponSheet
} from './items/starship-weapon-sheet.js';
import {
  STAArmorSheet
} from './items/armor-sheet.js';
import {
  STATalentSheet
} from './items/talent-sheet.js';
import {
  STAGenericSheet
} from './items/generic-sheet.js';
import {
  STASmallCraftContainerSheet
} from './items/smallcraftcontainer-sheet.js';
import { 
  STATracker 
} from './apps/tracker.js';
import * as macros from './macro.js';
import { 
  STAItem
} from './items/item.js';
import {
  register_dsn_ufp_themes
} from './dice/dice-so-nice.js';

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once('init', function() {
  let versionInfo = game.world.coreVersion;
  // Splash Screen
  console.log(`Initializing Star Trek Adventures Tabletop Roleplaying Game System 2nd Edition
                 .
                .:.
               .:::.
              .:::::.
          ***.:::::::.***
     *******.:::::::::.*******       
   ********.:::::::::::.********     
  ********.:::::::::::::.********    
  *******.::::::'***\::::.*******    
  ******.::::'*********\`::.******    
   ****.:::'*************\`:.****
     *.::'*****************\`.*
     .:'  ***************    .
    .`);


  // Create a namespace within the game global
  game.sta2e = {
    applications: {
      STACharacterSheet,
      STAStarshipSheet,
      STASmallCraftSheet,
      STAExtendedTaskSheet,
      STAItemSheet,
      STACharacterWeaponSheet,
      STAStarshipWeaponSheet,
      STAArmorSheet,
      STATalentSheet,
      STAGenericSheet,
      STASmallCraftContainerSheet,
      STAItem,
    },
    entities: {
      STAActor,
    },
    macros: macros,
    attributeTest: macros.attributeTest,
    defaultImage: 'systems/sta2e/assets/icons/voyagercombadgeicon.svg'
  };

  // Define initiative for the system.
  CONFIG.Combat.initiative = {
    formula: '@disciplines.security.value',
    decimals: 0
  };

  // Set up custom challenge dice
  // CONFIG.sta.CHALLENGE_RESULTS = {
  //     1: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Success1.svg'/>`, success: 1, effect: 0 },
  //     2: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Success2.svg'/>`, success: 2, effect: 0 },
  //     3: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Success0.svg'/>`, success: 0, effect: 0 },
  //     4: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Success0.svg'/>`, success: 0, effect: 0 },
  //     5: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Effect.svg'/>`, success: 1, effect: 1 },
  //     6: { label: `<img src='systems/sta2e/assets/icons/ChallengeDie_Effect.svg'/>`, success: 1, effect: 1 },
  //   };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = STAActor;
  CONFIG.Item.entityClass = STAItem;

  // Register sheet application classes
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('sta2e', STACharacterSheet, {
    types: ['character'],
    makeDefault: true
  });
  Actors.registerSheet('sta2e', STAStarshipSheet, {
    types: ['starship']
  });
  Actors.registerSheet('sta2e', STASmallCraftSheet, {
    types: ['smallcraft'],
  });
  Actors.registerSheet('sta2e', STAExtendedTaskSheet, {
    types: ['extendedtask']
  });
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('sta2e', STAItemSheet, {
    types: ['item'],
    makeDefault: true
  });
  Items.registerSheet('sta2e', STACharacterWeaponSheet, {
    types: ['characterweapon'],
  });
  Items.registerSheet('sta2e', STAStarshipWeaponSheet, {
    types: ['starshipweapon'],
  });
  Items.registerSheet('sta2e', STAArmorSheet, {
    types: ['armor'],
  });
  Items.registerSheet('sta2e', STATalentSheet, {
    types: ['talent'],
  });
  Items.registerSheet('sta2e', STAGenericSheet, {
    types: ['value'],
  });
  Items.registerSheet('sta2e', STAGenericSheet, {
    types: ['focus'],
  });
  Items.registerSheet('sta2e', STAGenericSheet, {
    types: ['injury'],
  });
  Items.registerSheet('sta2e', STASmallCraftContainerSheet, {
    types: ['smallcraftcontainer'],
  });


  // Register system settings
  game.settings.register('sta2e', 'multipleComplications', {
    name: 'Multiple Complications:',
    hint: 'The rulebook states "Any die which rolled 20 causes a complication". This is slightly unclear and as of Version 8 of the PDF, this is still not clear - likely due to the incredible rarity. Enabling this will allow roles to display "There were x Complications" if multiple 20s are rolled. Disabling will just state a single complication.',
    scope: 'world',
    type: Boolean,
    default: true,
    config: true
  });

  game.settings.register('sta2e', 'threatPermissionLevel', {
    name: 'Threat Tracker User Role:',
    hint: 'Who should be allowed to amend the threat tracker?',
    scope: 'world',
    type: String,
    default: 'ASSISTANT',
    config: true,
    choices: {
      'PLAYER': 'Players',
      'TRUSTED': 'Trusted Players',
      'ASSISTANT': 'Assistant Gamemaster',
      'GAMEMASTER': 'Gamemasters',
    }
  });

  game.settings.register('sta2e', 'momentumPermissionLevel', {
    name: 'Momentum Tracker User Role:',
    hint: 'Who should be allowed to amend the momentum tracker?',
    scope: 'world',
    type: String,
    default: 'PLAYER',
    config: true,
    choices: {
      'PLAYER': 'Players',
      'TRUSTED': 'Trusted Players',
      'ASSISTANT': 'Assistant Gamemaster',
      'GAMEMASTER': 'Gamemasters',
    }
  });

  game.settings.register('sta2e', 'maxNumberOfReputation', {
    name: 'Maximum amount of Reputation:',
    hint: 'Max number of reputation that can be given to a character. 5 is default.',
    scope: 'world',
    type: Number,
    default: 5,
    config: true
  });

  game.settings.register('sta2e', 'maxNumberOfMomentum', {
    name: 'Maximum amount of Momentum:',
    hint: 'Max amount of momentum the players can have at a time. 6 is default.',
    scope: 'world',
    type: Number,
    default: 6,
    config: true
  });

  game.settings.register('sta2e', 'characterAttributeLimitIgnore', {
    name: 'Ignore normal Max/Min limits to Character/NPC Attributes:',
    hint: 'At system creation characters and NPCs were limited to Attribute values between 7 and 12, this option removes that limit and sets the limit to between 0 and 99.',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  });
    
  game.settings.register('sta2e', 'characterDisciplineLimitIgnore', {
    name: 'Ignore normal Max/Min limits to Character/NPC Disciplines:',
    hint: 'At system creation characters and NPCs were limited to Discipline values between 0 and 5, this option removes that limit and sets the limit to between 0 and 99.',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  });
  
  game.settings.register('sta2e', 'shipDepartmentLimitIgnore', {
    name: 'Ignore normal Max/Min limits to Starship/Small Craft Departments:',
    hint: 'At system creation Starships and Small Craft were limited to Department values between 0 and 5, this option removes that limit and sets the limit to between 0 and 99.',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  });

  game.settings.register('sta2e', 'threat', {
    scope: 'world',
    type: Number,
    default: 0,
    config: false
  });

  game.settings.register('sta2e', 'momentum', {
    scope: 'world',
    type: Number,
    default: 0,
    config: false
  });

  Hooks.on('renderChatLog', (app, html, data) =>
    STAItem.chatListeners(html)
  );

  Hooks.on('ready', function() {
    const t = new STATracker();
    renderTemplate('systems/sta2e/templates/apps/tracker.html').then((html) => {
      t.render(true);
    });
  });

  Hooks.once("diceSoNiceReady", (dice3d) => {
    register_dsn_ufp_themes(dice3d);
  });
});
