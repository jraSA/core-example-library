import getAllFriends from '../getAllFriends';

describe('Test getAllFriend simple test', () => {
  test('WHEN I call getAllFriend THEN it should return an array of friends', () => {
    const result = getAllFriends();
    expect(result.length).toEqual(8);
  });
});
