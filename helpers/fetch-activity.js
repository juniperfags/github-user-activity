export const fetchRequest = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`,
    {
      method: "get",
    }
  );
  const items = await response.json();

  if (items.length === 0) {
    return [];
  }

  return items;
};
