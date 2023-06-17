import { ComponentChildren } from "preact";

export default function Nav() {
  return (
    <ul class="flex flex-col space-y-5 text-lg font-bold desktop:flex-row desktop:space-x-8 desktop:space-y-0 desktop:text-base desktop:font-normal desktop:text-darkgrayishblue">
      <NavItem href="#">Collections</NavItem>
      <NavItem href="#">Men</NavItem>
      <NavItem href="#">Women</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Contact</NavItem>
    </ul>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: ComponentChildren;
}) {
  return (
    <li class="flex">
      <a
        class="border-b-4 border-transparent hover:border-orange desktop:py-11"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
