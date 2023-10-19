"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/itsbrex",
    label: "Twitter",
    handle: "@itsbrex",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:%68%69%40%69%74%73%62%72%65%78%2e%64%65%76?subject=Job%20Opportunity%20-%20let's%20connect!&body=Hi%20Brian-%0D%0A%0D%0AI%20came%20across%20your%20profile%20on%20and%20wanted%20to%20reach%20out%20about%20an%20opportunity%20you%20might%20be%20interested%20in!%0D%0A%0D%0AHere%20are%20more%20details%20about%20the%20role.%20Please%20let%20me%20know%20if%20you're%20interested%20and%20would%20like%20to%20discuss%20further.%0D%0A%0D%0AThanks!%0D%0A%0D%0A%5Byour%20awesome%20name%20-%20%F0%9F%99%82%5D",
    label: "Email",
    handle: "email me",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/in/itsbrex",
    label: "LinkedIn",
    handle: "itsbrex",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/itsbrex",
    label: "Github",
    handle: "itsbrex",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-4 gap-8 mx-auto mt-32 sm:mt-0">
          {socials.map((s) => (
            <Card key={s.handle}>
              <Link
                href={s.href}
                target="_blank"
                className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}