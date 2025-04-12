const users = {
  1: {
    username: "Rome",
    id: 1,
    teamIds: [1,2,3]
  },
  2: {
    username: "Tim",
    id: 2,
    teamIds: [],
  },
  3: {
    username: "Bob",
    id: 3,
    teamIds: [30],
  },
  4: {
    username: "John",
    id: 4,
    teamIds: [2],
  },
}

const MENTION_TYPES = {
  TEAM: 'team',
  USER: 'user'
}

function generateTeamToUserIdsMap(users) {
  //Map<teamId, usersSet>
  const teamToUsersMap = new Map();

  for (const user of Object.values(users)) {
    const { id, teamIds } = user;

    for (const teamId of teamIds) {
      if (!teamToUsersMap.has(teamId)) {
        teamToUsersMap.set(teamId, new Set());
      }

      teamToUsersMap.get(teamId).add(id);
    }
  }

  return teamToUsersMap;
}


function getUniqueUserIdsFromMentions(mentions) {
  const uniqueUsers = new Set();

  const teamToUsersMap = generateTeamToUserIdsMap(users);

  for (const mention of mentions) {
    if (mention.type === MENTION_TYPES.USER) {
      uniqueUsers.add(mention.id);
    } else if (mention.type === MENTION_TYPES.TEAM) {
      const teamMembers = teamToUsersMap.get(mention.id);

      for (const userId of teamMembers) {
        uniqueUsers.add(userId);
      }
    }
  }

  return Array.from(uniqueUsers);
}

// mention all users with console.log in a format <username: msg>
function notify(userIds, msg) {
  for (const userId of userIds) {
    console.log(`${users[userId].username}: ${msg}`);
  }
}


function getMentions(update) {
  return [
    {type: MENTION_TYPES.USER, id: 1},
    {type: MENTION_TYPES.TEAM, id: 30},
    {type: MENTION_TYPES.TEAM, id: 1},
    {type: MENTION_TYPES.TEAM, id: 2},
    {type: MENTION_TYPES.USER, id: 4}
  ]
}

function notifyUsersFromUpdate(update) {
  const mentions = getMentions(update);

  const userIds = getUniqueUserIdsFromMentions(mentions);

  const msg = "You were mentioned";

  notify(userIds, msg);
}

console.log(notifyUsersFromUpdate('update'));
