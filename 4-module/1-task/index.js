function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  friends.forEach(friend => {
    const friendName = `${friend.firstName} ${friend.lastName}`;
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(friendName));
    ul.appendChild(li);
  });
  return ul;
}
