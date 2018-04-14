/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

interface Blog {
  date: number;
  img: string;
  text: string;
  title: string;
}

interface Event {
  title: string;
  img: string;
  address: string;
  description: string;
  startDate: number;
  endDate: number;
}

interface FriendLocation {
  lider: string;
  anfitrion: string;
  dia: string;
  horario: string;
  animation: string;
  icon: string;
  position: {
    lat: number;
    lng: number;
  };
}
