interface Profile {
  name: string;
  age: number;
  email: string;
}

type PartialProfile = Partial<Profile>;

const updateProfile = (profile: Profile, updates: PartialProfile): Profile => {
  return { ...profile, ...updates };
};
