export const sanitizeText = (text) => {
  const replacements = [
    { pattern: /\bsex\b/gi, replacement: 's*x' },
    { pattern: /\bbetichod\b/gi, replacement: 'beti***d' },
    { pattern: /\bbhosdiwale\b/gi, replacement: 'bhos****e' },
    { pattern: /\bchutiya\b/gi, replacement: 'chu***a' },
    { pattern: /\bmadarchod\b/gi, replacement: 'mada***d' },
    { pattern: /\bbhenchod\b/gi, replacement: 'bhen***d' },
    { pattern: /\bgandu\b/gi, replacement: 'gan*u' },
    { pattern: /\blund\b/gi, replacement: 'l**d' },
    { pattern: /\blavde\b/gi, replacement: 'lav*e' },
    { pattern: /\brandi\b/gi, replacement: 'r*ndi' },
    { pattern: /\bsaala\b/gi, replacement: 's**la' },
    { pattern: /\bkutte\b/gi, replacement: 'ku**e' },
    { pattern: /\bharami\b/gi, replacement: 'hara*i' },
    { pattern: /\bkaminey\b/gi, replacement: 'kamin*y' },
    { pattern: /\bchutiye\b/gi, replacement: 'chut*ye' },
    { pattern: /\btatti\b/gi, replacement: 'ta**i' },
    { pattern: /\bchut\b/gi, replacement: 'ch*t' },
    { pattern: /\bbhosda\b/gi, replacement: 'bhos*a' },
    { pattern: /\bbhadwa\b/gi, replacement: 'bhad*a' },
    { pattern: /\bchinal\b/gi, replacement: 'chi*al' },
    { pattern: /\btere maa ki\b/gi, replacement: 'tere maa k*' },
    { pattern: /\bteri maa ka\b/gi, replacement: 'teri maa k*' },
    { pattern: /\bMotherfucker\b/gi, replacement: 'M***********r' },
    { pattern: /\bAsshole\b/gi, replacement: 'A*******e' },
    { pattern: /\bBitch\b/gi, replacement: 'B***h' },
    { pattern: /\bWhore\b/gi, replacement: 'W****e' },
    { pattern: /\bFuck\b/gi, replacement: 'F**k' },
    { pattern: /\bShit\b/gi, replacement: 'S**t' },
    { pattern: /\bDick\b/gi, replacement: 'D**k' },
    { pattern: /\bCunt\b/gi, replacement: 'C**t' },
    { pattern: /\bBastard\b/gi, replacement: 'B*****d' },
    { pattern: /\bCock\b/gi, replacement: 'C**k' },
    { pattern: /\bPussy\b/gi, replacement: 'P***y' },
    { pattern: /\bTwat\b/gi, replacement: 'T**t' },
    { pattern: /\bDouchebag\b/gi, replacement: 'D*******g' },
    { pattern: /\bCocksucker\b/gi, replacement: 'C********r' },
    { pattern: /\bSon of a bitch\b/gi, replacement: 'S*n of a b***h' },
    { pattern: /\bAsswipe\b/gi, replacement: 'A****pe' },
    { pattern: /\bWanker\b/gi, replacement: 'W****r' },
    { pattern: /\bJerkoff\b/gi, replacement: 'J****ff' },
    { pattern: /\bDipshit\b/gi, replacement: 'D***shit' },
    { pattern: /\bPrick\b/gi, replacement: 'P***k' }
  ];

  let sanitizedText = text;
  replacements.forEach(({ pattern, replacement }) => {
    sanitizedText = sanitizedText.replace(pattern, replacement);
  });

  sanitizedText = sanitizedText.replace(/\d/g, ''); // Remove all digits

  return sanitizedText;
};
