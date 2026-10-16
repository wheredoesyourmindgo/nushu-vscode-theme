/* eslint-disable */
// @ts-nocheck







import { useState } from "react";
import { Avatar, Button, Card } from "./ui";

interface Props {
  name: string;
  role: string;
  avatarUrl?: string;
  onFollow: (name: string) => void;
}

// A teammate's card, with a button to follow them.
export function ProfileCard({ name, role, avatarUrl, onFollow }: Props) {
  const [following, setFollowing] = useState(false);

  function handleClick() {
    setFollowing(true);
    onFollow(name);
  }

  return (
    <Card className="profile">
      <Avatar src={avatarUrl} alt={name} size={48} />
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <Button disabled={following} onClick={handleClick}>
        {following ? "Following" : "Follow"}
      </Button>
    </Card>
  );
}
