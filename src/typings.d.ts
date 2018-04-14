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
  date: string;
  img: string;
  text: string;
  title: string;
}

interface Event {
  title: string;
  img: string;
  address: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface FriendLocation {
  lider: string;
  anfitrion: string;
  dia: string;
  horario: string;
  animation: string;
  icon: string;
  position: {
    lat: string;
    lng: string;
  };
}
