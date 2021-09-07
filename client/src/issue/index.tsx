import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { issue$key } from "./__generated__/issue.graphql";
import { EpicComponent } from "../epic";
import { Section } from '../styling/section'
import { Loading } from '../styling/loading'

const issueFragment = graphql`
  fragment issue on Query {
    issue: issueByAri(issueId: "ari:cloud:jira:myCloud1:issue/2018") {
      id
      user {
        email
      }

      ...epic @defer(label: "epicDefer")
    }
  }
`;

type Props = {
  data: issue$key | null;
};

export function IssueComponent(props: Props) {
  const issueData = useFragment(issueFragment, props.data);

  return (
    <Section title="Issue" size="big">
      id: {issueData?.issue?.id || "Unknow"}
      {issueData?.issue && (
        <Suspense fallback={<Loading size="small" hint="hydrated field"/>} ><EpicComponent data={issueData?.issue} /></Suspense>
      )}
    </Section>
  );
}
