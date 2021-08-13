import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { issue$key } from "./__generated__/issue.graphql";
import { EpicComponent } from "../epic";

const issueFragment = graphql`
  fragment issue on Query {
    issue: issueByAri(issueId: "ari:cloud:jira:myCloud1:issue/2018") {
      id
      user {
        email
      }

      linkedJiraEpic {
        ...epic
      }
    }
  }
`;

type Props = {
  data: issue$key | null;
};

export function IssueComponent(props: Props) {
  const issueData = useFragment(issueFragment, props.data);

  return (
    <div>
      {issueData?.issue?.id || "Unknow"}
      {issueData?.issue?.linkedJiraEpic && (
        <EpicComponent data={issueData?.issue?.linkedJiraEpic} />
      )}
    </div>
  );
}
