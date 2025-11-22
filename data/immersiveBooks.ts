import { ImmersiveBook } from '../lib/bookTypes';

/**
 * "Shadows of Desire" - Fully immersive dark romance novel
 * Complete with scene tagging, audio triggers, and effects
 */
export const shadowsOfDesire: ImmersiveBook = {
  id: 1,
  title: "Shadows of Desire",
  author: "Elena Noir",
  description: "A dark romance where danger and desire collide. Elena Thorne's carefully constructed world shatters when she meets Dante Moretti—a man who deals in secrets and shadows.",
  tags: ["Dark Romance", "Mafia", "Billionaire", "Suspense", "Spicy"],
  chapters: [
    {
      number: 1,
      title: "The Meeting",
      segments: [
        {
          text: "The rain fell in sheets against the tall windows of the penthouse, each droplet racing down the glass like tears I refused to shed.",
          mood: 'mysterious',
          ambience: 'rain',
          music: 'mysterious_ambient',
          visualEffect: 'darken',
          sfx: [
            { type: 'thunder', timing: 50, volume: 0.4 }
          ]
        },
        {
          text: "I stood there, champagne glass in hand, surrounded by the city's elite—people who knew my name but nothing of my truth.",
          mood: 'mysterious',
          ambience: 'rain',
          music: 'mysterious_ambient',
          visualEffect: 'none'
        },
        {
          text: '"Ms. Thorne," a deep voice cut through my thoughts, sending an involuntary shiver down my spine.',
          mood: 'suspenseful',
          ambience: 'rain',
          music: 'tension_strings',
          visualEffect: 'none',
          haptic: 'gentle',
          voiceLines: [
            { text: 'Ms. Thorne', voice: 'male_deep', timing: 0 }
          ]
        },
        {
          text: "I turned, and there he was. Dante Moretti. The man who shouldn't exist in my carefully constructed world. Dark eyes that seemed to see through every wall I'd built, a suit that cost more than most people's cars, and a reputation that preceded him like a storm warning.",
          mood: 'suspenseful',
          ambience: 'rain',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"Mr. Moretti," I acknowledged, keeping my voice steady even as my pulse quickened. "I didn\'t expect to see you here."',
          mood: 'tense',
          ambience: 'rain',
          music: 'tension_strings',
          visualEffect: 'none',
          sfx: [
            { type: 'heartbeat', timing: 70, volume: 0.3 }
          ]
        },
        {
          text: '"I go where I please." His lips curved into something that wasn\'t quite a smile. "And tonight, it pleased me to find you."',
          mood: 'tense',
          ambience: 'rain',
          music: 'dark_orchestral',
          visualEffect: 'none',
          voiceLines: [
            { text: 'I go where I please. And tonight, it pleased me to find you.', voice: 'male_deep', timing: 0 }
          ]
        },
        {
          text: "The way he said it—like I was prey he'd been hunting—should have sent me running. Instead, I found myself rooted to the spot, drawn in by the danger he represented.",
          mood: 'tense',
          ambience: 'rain',
          music: 'dark_orchestral',
          visualEffect: 'red_tint',
          haptic: 'heartbeat'
        },
        {
          text: '"Careful," I warned, lifting my chin. "I\'m not what you think I am."',
          mood: 'tense',
          ambience: 'rain',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: '"No?" He stepped closer, close enough that I could smell his cologne—sandalwood and sin. "Then tell me, Elena. What are you?"',
          mood: 'romantic',
          ambience: 'rain',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          voiceLines: [
            { text: 'Then tell me, Elena. What are you?', voice: 'male_deep', timing: 40 }
          ]
        },
        {
          text: "My name on his lips was a caress and a threat all at once. This was a man who dealt in secrets and shadows, who ruled an empire built on fear and loyalty. And somehow, he'd set his sights on me.",
          mood: 'romantic',
          ambience: 'rain',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'embers',
          haptic: 'gentle'
        },
        {
          text: '"I\'m the woman who\'s going to walk away," I said, even as every fiber of my being screamed at me to stay.',
          mood: 'tense',
          ambience: 'rain',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: 'His hand caught my wrist—not painful, but possessive. "No, you\'re not."',
          mood: 'romantic',
          ambience: 'rain',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          haptic: 'pulse',
          voiceLines: [
            { text: "No, you're not.", voice: 'male_deep', timing: 60 }
          ]
        },
        {
          text: "And in that moment, as lightning illuminated his face and thunder echoed the pounding of my heart, I realized he was right.",
          mood: 'romantic',
          ambience: 'thunder',
          music: 'romantic_piano',
          visualEffect: 'glow',
          sfx: [
            { type: 'thunder', timing: 30, volume: 0.7 },
            { type: 'heartbeat', timing: 70, volume: 0.4 }
          ],
          haptic: 'strong'
        },
        {
          text: "Whatever this was, whatever darkness he brought with him, I was already caught in it. The question was: did I want to escape?",
          mood: 'suspenseful',
          ambience: 'rain',
          music: 'mysterious_ambient',
          visualEffect: 'darken',
          particles: 'embers'
        }
      ]
    },
    {
      number: 2,
      title: "Dangerous Games",
      segments: [
        {
          text: "Three days. That's how long I'd managed to avoid Dante Moretti after that night at the penthouse.",
          mood: 'tense',
          ambience: 'city',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: "Three days of jumping at shadows, of checking over my shoulder, of lying awake wondering when—not if—he would appear again.",
          mood: 'tense',
          ambience: 'city',
          music: 'tension_strings',
          visualEffect: 'darken',
          haptic: 'heartbeat'
        },
        {
          text: "I should have known better than to think I could hide.",
          mood: 'suspenseful',
          ambience: 'city',
          music: 'dark_orchestral',
          visualEffect: 'darken'
        },
        {
          text: '"Your usual, Elena?" Marcus, my favorite barista, asked as I walked into the coffee shop that had become my sanctuary.',
          mood: 'neutral',
          ambience: 'cafe',
          music: 'none',
          visualEffect: 'none'
        },
        {
          text: '"Please," I managed, even as the hairs on the back of my neck stood up. Someone was watching me. I could feel it.',
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'darken',
          sfx: [
            { type: 'heartbeat', timing: 60, volume: 0.3 }
          ],
          haptic: 'gentle'
        },
        {
          text: "I collected my latte and turned to find my regular table in the corner—only to discover it was already occupied. By him.",
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'red_tint',
          haptic: 'pulse'
        },
        {
          text: "Dante sat there like he owned the place, probably because he did. The man seemed to own half the city, and what he didn't own, he controlled through less... legitimate means.",
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: '"You\'re in my seat," I said, proud that my voice didn\'t shake.',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: '"Then sit with me." It wasn\'t a request.',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none',
          voiceLines: [
            { text: 'Then sit with me.', voice: 'male_deep', timing: 0 }
          ]
        },
        {
          text: 'Against every instinct for self-preservation, I did. "What do you want?"',
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"Straight to the point. I like that." He leaned back, studying me with those dark eyes that missed nothing. "I want you to work for me."',
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'none',
          voiceLines: [
            { text: 'I want you to work for me.', voice: 'male_deep', timing: 70 }
          ]
        },
        {
          text: 'I nearly choked on my coffee. "Excuse me?"',
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"You\'re an art appraiser. One of the best. I\'m acquiring a collection that needs... authentication."',
          mood: 'mysterious',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'none'
        },
        {
          text: '"There are dozens of appraisers in this city—"',
          mood: 'neutral',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'none'
        },
        {
          text: '"I don\'t want dozens. I want you."',
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          haptic: 'gentle',
          voiceLines: [
            { text: 'I want you.', voice: 'male_deep', timing: 50 }
          ]
        },
        {
          text: "The intensity in his voice made my breath catch. This wasn't just about art, and we both knew it.",
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'hearts',
          haptic: 'heartbeat'
        },
        {
          text: '"And if I say no?"',
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"You won\'t." He pulled out a folder, sliding it across the table. "Because you\'re curious. Because you need the money—yes, I know about your mother\'s medical bills. And because..."',
          mood: 'mysterious',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'darken'
        },
        {
          text: 'He leaned forward, and suddenly the busy coffee shop felt very small.',
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          haptic: 'pulse'
        },
        {
          text: '"Because you felt it too, that night. This thing between us. And you want to know where it leads as much as I do."',
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'embers',
          voiceLines: [
            { text: 'Because you felt it too, that night. This thing between us.', voice: 'male_deep', timing: 0 }
          ]
        },
        {
          text: "I should have thrown the coffee in his face. Should have walked out. Should have done anything except open that folder and look at the figure he was offering.",
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: "The amount would cover my mother's treatment and then some. It was too good to be true, which meant there was a catch.",
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'darken'
        },
        {
          text: '"What\'s the real job?" I asked.',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: 'His smile was all predator. "Smart girl. The art is real, but so is the danger. There are people who don\'t want this collection found. People who would kill to keep it hidden."',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'red_tint',
          voiceLines: [
            { text: 'People who would kill to keep it hidden.', voice: 'menacing', timing: 80 }
          ],
          haptic: 'strong'
        },
        {
          text: '"Then why pursue it?"',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: '"Because it was my father\'s dying wish. Because it holds secrets that could change everything. And because..." He reached across the table, his fingers brushing mine with deliberate intent. "I protect what\'s mine."',
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'sparkles',
          haptic: 'gentle',
          voiceLines: [
            { text: 'I protect what\'s mine.', voice: 'male_deep', timing: 85 }
          ]
        },
        {
          text: '"I\'m not yours."',
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"Not yet."',
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          haptic: 'pulse',
          voiceLines: [
            { text: 'Not yet.', voice: 'male_deep', timing: 0 }
          ]
        },
        {
          text: "The promise in those two words should have terrified me. Instead, I felt heat pool in my stomach, desire warring with common sense.",
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'hearts',
          haptic: 'heartbeat'
        },
        {
          text: '"One job," I heard myself say. "Then we\'re done."',
          mood: 'tense',
          ambience: 'cafe',
          music: 'tension_strings',
          visualEffect: 'none'
        },
        {
          text: '"Of course." His smile said he knew better. "We start tomorrow. I\'ll pick you up at seven."',
          mood: 'mysterious',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'none'
        },
        {
          text: '"I didn\'t give you my address."',
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'darken'
        },
        {
          text: '"Elena." He stood, buttoning his jacket. "I know everything about you. Your address, your favorite wine, the fact that you read in the bathtub when you\'re stressed. I\'ve known since the moment I decided you were going to be mine."',
          mood: 'tense',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'red_tint',
          haptic: 'strong',
          voiceLines: [
            { text: "I've known since the moment I decided you were going to be mine.", voice: 'male_deep', timing: 80 }
          ]
        },
        {
          text: "He should have sounded creepy. Stalker-ish. Instead, his words sent a thrill through me that I'd never felt before.",
          mood: 'romantic',
          ambience: 'cafe',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'embers'
        },
        {
          text: '"Seven o\'clock," he repeated. "Wear something you don\'t mind getting dirty. This won\'t be like your usual gallery work."',
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'none'
        },
        {
          text: "And then he was gone, leaving me with a folder full of priceless art, an offer I couldn't refuse, and the sinking feeling that I'd just agreed to something far more dangerous than I could imagine.",
          mood: 'suspenseful',
          ambience: 'cafe',
          music: 'dark_orchestral',
          visualEffect: 'darken',
          haptic: 'heartbeat'
        },
        {
          text: "But as I opened the folder and saw the first painting—a masterpiece thought lost to history—I couldn't deny the excitement coursing through my veins.",
          mood: 'mysterious',
          ambience: 'cafe',
          music: 'mysterious_ambient',
          visualEffect: 'glow'
        },
        {
          text: "Dante Moretti was dangerous. This job was reckless. And I'd never wanted anything more.",
          mood: 'romantic',
          ambience: 'none',
          music: 'romantic_piano',
          visualEffect: 'warm_glow',
          particles: 'embers',
          haptic: 'pulse'
        }
      ]
    }
  ]
};

export const immersiveBooks: ImmersiveBook[] = [shadowsOfDesire];
