import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { epic$key } from "./__generated__/epic.graphql";

const epicFragment = graphql`
  fragment epic on JiraEpic {
    title
  }

`;

type Props = {
  data: epic$key | null;
};

export function EpicComponent(props: Props) {
  const epicData = useFragment(epicFragment, props.data);

  return <div>{epicData?.title || "Unknow"}</div>;
}
