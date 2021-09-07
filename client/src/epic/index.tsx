import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { epic$key } from "./__generated__/epic.graphql";
import { Section } from "../styling/section";

const epicFragment = graphql`
  fragment epic on Issue {
      jiraEpic {
        title
      }
  }

`;

type Props = {
  data: epic$key | null;
};

export function EpicComponent(props: Props) {
  const epicData = useFragment(epicFragment, props.data);

  return <Section size="small" title="Epic" hint="hydrated field">title: {epicData?.jiraEpic?.title || "Unknow"}</Section>;
}
