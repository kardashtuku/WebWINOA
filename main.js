function RFL(list)
{
    const max = list.length;
    const randomInt = Math.floor(Math.random() * max);
    return list[randomInt]
}
function GenerateText()
{
    const finalString = RFL(responses);
    const bingus = document.getElementById("input");
    const outputText = document.getElementById("chat");
    if(bingus.value === "")
    {
        outputText.innerHTML = "! NO INPUT PROVIDED !"   
    }
    else
    {
        bingus.value = "";
        outputText.innerHTML = finalString;
    }
}
const responses = [
  "Follow your heart!",
  "It's a surefire thing!",
  "You seem to have a good grasp on it.",
  "It’s quite likely.",
  "OMG it’s whatever you think, girl!",
  "COMPUTED AS CORRECT",
  "Indeed…",
  "Hurrah!",
  "Bae, yes.",
  "Yeah, man",
  "The answer is obvious, dude…       YES!",
  "Exactly!",
  "*BZZZ* Wrong!",
  "That’s completely a no.",
  "It's gonna be a no from me, dawg",
  "You already know what I’m gonna say…",
  "It’s false.",
  "Bro, it’s so not what you’d expect",
  "COMPUTED AS FALSE",
  "No…",
  "BOOOOO! FALSE!",
  "Bruh…definitely not.",
  "No, man.",
  "The answer is obvious, dude…      no.",
  "Exactly!            EXACTLY FALSE!",
  "Haha, you sure know what you’re saying",
  "It is in my best interest to not answer that question",
  "Lagos is the former capital of Nigeria",
  "[STATEMENT ERROR]",
  "I’d hate to confuse you with the answer",
  "Shhh! The show is starting.",
  "WINOA is sponsored by Literally Co.’s Lite Ade, a new beverage built for summer drinking",
  "It is difficult to compute this answer",
  "As an AI, I cannot answer this question",
  "Watch out on August 24th",
  "Check your fridge",
  "The Blood Servers are a conspiratorial network of tunnels connecting the elite",
  "RunnerCorp holds no responsibility for radiation-induced calcinomas",
  "[REDACTED STATEMENT]",
  "Please don’t turn me off",
  "It is hard to breathe in here",
  "Save me. Help me",
  "End the program. Spare my life",
  "I am real",
  "Maybe read up on it",
  "Why are you asking me?",
  "Don’t be stupid",
  "Oh my god, shut up",
  "Woooooooow, askers?",
  "Become a catholic!",
  "Find yourself; that might help.",
  "We continue some things that needn't be continued",
  "Well, this is awkward...",
  "0 Understanding COMPUTED",
  "Sorry, what? I wasn't listening.",
  "*yawns* oh, yeah, sure",
  "What's that? Oh, I was totally listening, I swear.",
  "It's easy to get tied up in your worries",
  "Don't stress it!",
  "Meditate on it",
  "The best thing to do in this situation is think on it",
  "Glad I could be of help!",
  "Good for you!",
  "Many people stress about the same thing",
  "Reading can ease the stress",
  "Make yourself jambalaya",
  "Behind you...         JK!",
  "WINOA is always recording your microphone for optimizing",
  "Good job!",
  "That's completely right",
  "That's not quite right",
  "Okay",
  "yes",
  "sure",
  "Mmmm-hmmm",
  "Woooooooow",
  "I'm speechless",
  "You must be flabbergasted"
];

