export interface User {
  id: ID;
}

interface ID {
  id: string;
  displayName: string;
  username: string;
  email: string;
  profilePicture: string;
  provider: string;
  _json: any;
}

