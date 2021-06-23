export { toMorse, toEnglish };

// english keys to their morse values
const toMorse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
};

// swapping the english keys and morse values to creat a morse to english alphabet
const toEnglish = Object.entries(toMorse).reduce((acc, [eng, morse]) => {
    acc[morse] = eng;
    return acc;
}, {});


    