
const decodedCharMutedClass = 'decoded-char-muted';
const decodedCharClass = 'decoded-char';
const encodedCharClass = 'encoded-char';


export function addEffectToLandingPage() {
    const lpContent = document.querySelector('.lp-content');
    if (!lpContent) {
        return;
    }

    setInterval(() => {
        textEffectBoth(lpContent as HTMLElement);
    }, 5000);
}

export function preEncodeInverted() {
    const elements = document.querySelectorAll('.text-effect-inverted');
    elements.forEach((element) => textEffectForElement(element as HTMLElement, false, false, false, false));
}

export function textEffect(parentElement: HTMLElement) {
    // console.log(parentElement);
    
    const elements = parentElement.querySelectorAll('.text-effect');
    elements.forEach((element) => textEffectForElement(element as HTMLElement, true, false, true, false));
}

export function textEffectInverted(parentElement: HTMLElement) {
    // console.log(parentElement);
    
    const elements = parentElement.querySelectorAll('.text-effect-inverted');
    elements.forEach((element) => textEffectForElement(element as HTMLElement, false, true, false, false));
}

export function textEffectBoth(parentElement: HTMLElement) {
    // console.log(parentElement);
    
    const elements = parentElement.querySelectorAll('.text-effect');
    elements.forEach((element) => textEffectForElement(element as HTMLElement, true, true, true, true));
}



export async function textEffectForElement(element: HTMLElement, decode: boolean, encodeDelay: boolean, decodeDelay: boolean, inbetweenDelay: boolean) {
    if (!element.dataset.text) {
        element.dataset.text = element.innerText;
    }

    const origText = element.innerText;
    element.innerText = '';

    const muted = element.classList.contains('text-effect-muted');
    
    let children: HTMLElement[] = [];
    deleteAllChildren(element);

    let i = 0;
    for (const char of element.dataset.text ?? []) {
        const el = document.createElement('span');

        el.dataset.text = char;
        replaceCharWith(el, origText[i] ?? char, 0, muted);
        element.appendChild(el);
        children.push(el);
        i += 1;
    }

    shuffle(children);

    const animationTime = 500;
    const animTimeForEl = animationTime / children.length;
    const timeOut = 200;
    let accTime = 0;

    for (const child of children) {
        let content = child.dataset.text ?? ' ';
        if (content !== ' ' && isDecoded(child)) {
            replaceCharWithRandom(child, encodeDelay ? accTime : 0);
        }

        accTime += animTimeForEl;
    }

    if (inbetweenDelay) {
        await sleep(timeOut + animationTime);
    }

    if (decode) {
        accTime = 0;

        for (const child of children) {
            let content = child.dataset.text ?? ' ';
            if (content !== ' ' && isEncoded(child)) {
                replaceCharWithOrig(child, decodeDelay ? accTime : 0, muted);
            }

            accTime += animTimeForEl;
        }
    }
   
}

async function replaceCharWithRandom(el: HTMLElement, timeOut: number = 0) {
    if (timeOut !== 0) {
        await sleep(timeOut);
    }
    el.innerText = getRandomChar();
    el.className = getEncodedCharClass();
}

async function replaceCharWithOrig(el: HTMLElement, timeOut: number = 0, muted: boolean = false) {
    if (timeOut !== 0) {
        await sleep(timeOut);
    }
    el.innerText = el.dataset.text ?? ' ';
    el.className = getDecodedCharClass(muted);
}

async function replaceCharWith(el: HTMLElement, char: string, timeOut: number = 0, muted: boolean = false) {
    if (timeOut !== 0) {
        await sleep(timeOut);
    }
    el.innerText = char;
    el.className = char === el.dataset.text ? getDecodedCharClass(muted) : getEncodedCharClass();
}

function getDecodedCharClass(muted: boolean = false): string {
    return muted ? decodedCharMutedClass : decodedCharClass; 
}

function getEncodedCharClass(): string {
    return encodedCharClass; 
}

function isDecoded(el: HTMLElement) {
    return el.classList.contains(decodedCharClass) || el.classList.contains(decodedCharMutedClass);
}

function isEncoded(el: HTMLElement) {
    return el.classList.contains(encodedCharClass);
}

function getRandomChar() {
    //const chars = '{}[]#$&@-+=\\/?:;<>'
    const chars = '01'
    return chars[Math.floor(Math.random() * chars.length)];
}

function setCharAt(str: string,index: number,chr: string) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function deleteAllChildren(element: HTMLElement) {
    //e.firstElementChild can be used.
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length
    let randomIndex = 0;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}