import { LeftNavContainer, LeftNavItem } from "./LeftNav.styled";

const mockItems = [
  {
    title: "Secret Fox Capture Plans",
    id: "aaa",
  },
  {
    title: "The Real Fox Capture Plan",
    id: "bbb",
  },
];

export const LeftNav = () => {
  return (
    <LeftNavContainer>
      {mockItems.map((item) => (
        <LeftNavItem href={`/note/${item.id}`}>{item.title}</LeftNavItem>
      ))}
    </LeftNavContainer>
  );
};
