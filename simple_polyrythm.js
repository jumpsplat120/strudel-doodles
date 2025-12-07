const notes  = [];
const amount = 64;

for (let i = 0; i < amount; i++) {
    notes.push(n(i.toString()).cpm(120 * i / amount));
}

stack(...notes).sound("piano").scale("C:major:pentatonic");
