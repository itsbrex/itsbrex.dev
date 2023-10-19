import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "GitHub", href: "https://github.com/itsbrex" }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent align-middle duration-1000 cursor-default bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        @itsbrex
      </h1>

      <div className="hidden w-screen h-px align-middle animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-500 ">
          Hi, I'm Brian 👋, CTO and Product Engineer at {" "}
          <Link
            target="_blank"
            href="https://starchildmusic.ai"
            className="underline duration-500 hover:text-zinc-300"
          >
            Starchild Music
          </Link> leading AI/ML architecture and development.
          <br />
          Actively looking for {" "}
          <Link
            target="_blank"
            href="https://linkedin.com/in/itsbrex"
            className="underline duration-500 hover:text-zinc-300"
          >
            full-time opportunity
          </Link>{" "}while we bootstrap.
        </h2>
      </div>
    </div>
  );
}
