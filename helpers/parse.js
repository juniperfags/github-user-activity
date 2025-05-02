export const parse = (items) => {
  let finalString = "";

  items.forEach(({ type, ...rest }) => {
    switch (type) {
      case "CommitCommentEvent":
        finalString += `- ${rest.payload.action.toUpperCase()} at ${
          rest.repo.name
        }\n`;

        break;
      case "CreateEvent":
        finalString += `- Create event reported at ${rest.repo.name} at ${rest.created_at}\n`;

        break;
      case "DeleteEvent":
        finalString += `- Delete event at ${rest.repo.name} at ${rest.created_at}\n`;

        break;
      case "PushEvent":
        finalString += `- Pushed ${rest.payload.commits.length} commits to ${rest.repo.name}\n`;

        break;
      case "WatchEvent":
        finalString += `- Watched repo ${rest.repo.name} at date ${rest.created_at}\n`;
        break;
      case "ForkEvent":
      case "GollumEvent":
      case "IssueCommentEvent":
      case "IssuesEvent":
      case "MemberEvent":
      case "PublicEvent":
      case "PullRequestEvent":
      case "PullRequestReviewEvent":
      case "PullRequestReviewCommentEvent":
      case "PullRequestReviewThreadEvent":
      case "ReleaseEvent":
      case "SponsorshipEvent":
        finalString += `- ${type} detected on repo ${rest.repo.name} at ${rest.created_at}\n`;

        break;
      default:
        console.error(`Cannot match a ${type} event from activity`);
        process.exit(0);
        break;
    }
  });

  return finalString;
};
