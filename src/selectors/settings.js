export function pinnedProfiles(settings) {
  return Object.keys(settings.pinnedProfiles).map(key => ({
    userId: key,
    userName: settings.pinnedProfiles[key],
  }));
}
