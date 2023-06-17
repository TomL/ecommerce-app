import { ComponentChildren } from "preact";

export default function Nav() {
  return (
    <ul class="flex flex-col space-y-5 text-lg font-bold desktop:flex-row desktop:space-x-8 desktop:space-y-0 desktop:text-base desktop:font-normal desktop:text-darkgrayishblue">
      <NavItem title=" page" href="#">
        Collections
      </NavItem>
      <NavItem title="Men's products page" href="#">
        Men
      </NavItem>
      <NavItem title="Women's products page" href="#">
        Women
      </NavItem>
      <NavItem title="About page" href="#">
        About
      </NavItem>
      <NavItem title="Contact page" href="#">
        Contact
      </NavItem>
    </ul>
  );
}

function NavItem({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ComponentChildren;
}) {
  return (
    <li class="flex">
      <a
        class="border-b-4 border-transparent hover:border-orange desktop:py-11"
        title={title}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
