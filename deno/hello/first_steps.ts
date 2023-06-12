// ==================================================
// deno run first_steps.ts

console.log("Welcome to Deno!");


// ==================================================
// deno run --allow-net=deno.com first_steps.ts

const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);


// ==================================================
// deno run --allow-read first_steps.ts /etc/hosts
// deno run --allow-read first_steps.ts "C:\Windows\System32\Drivers\etc\hosts"

// # macOS / Linux
// deno run --allow-read https://deno.land/std@0.191.0/examples/cat.ts /etc/hosts

// # Windows
// deno run --allow-read https://deno.land/std@0.191.0/examples/cat.ts "C:\Windows\System32\Drivers\etc\hosts"


const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}
