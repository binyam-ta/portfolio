// import { Component, ReactElement } from "react";

//  export const Techicon = ({
//     component,
// }: {component: React.ElementType}) => {
// const Component = component;
//     return
//     <Component className="size-2" />;
// };
import { ReactElement } from "react";

export const Techicon = ({
  component,
}: { component: React.ElementType }): ReactElement | null => {
  const Component = component;
  return <Component className="size-10" />;  // JSX should follow `return` on the same line
};
