export interface Friend {
  name: string;
}

const friends: Array<Friend> = [
  { name: 'Jorge' },
  { name: 'Pablo' },
  { name: 'Juliet' },
  { name: 'John' },
  { name: 'Mary' },
  { name: 'Eduard' },
  { name: 'Lucy' },
  { name: 'Mike' },
];

const getAllFriends = () => friends;

export default getAllFriends;
