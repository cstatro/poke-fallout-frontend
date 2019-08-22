export const fromSetUserData = dataset => {
  const { facility_cleanliness, facility_tier, authority } = dataset;
  return {
    facility_cleanliness: parseInt(facility_cleanliness),
    facility_tier: parseInt(facility_tier),
    authority: parseInt(authority)
  };
};
