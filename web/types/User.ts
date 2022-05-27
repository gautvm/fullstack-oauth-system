export interface User {
  id: ID;
}

interface ID {
  id: string;
  displayName: string;
  username: string;
  profilePicture: string;
  photos: Photo[];
  provider: string;
  _json: any;
}

interface Photo {
  value: string;
}
