module.exports = function createDreamTeam(members) {
  if(
    !members 
    || members.length === 0 
    || !Array.isArray(members)
    ) {
    return 0;
  }
  let filterMembers = members.filter(item => typeof item === 'string');
  return filterMembers.map((item) => item.replace(/\s/g, '')[0].toUpperCase()).sort().join('');
};